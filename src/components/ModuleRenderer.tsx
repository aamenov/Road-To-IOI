import Link from "next/link";
import type { ModuleInfo } from "@/content/types";
import { getGlossaryTerm } from "@/content/glossary";
import { getModuleById, modules } from "@/content/modules";
import { ProgressControl } from "./ProgressControl";

export function ModuleRenderer({ module }: { module: ModuleInfo }) {
  const orderedModules = [...modules].sort((a, b) => a.path.order - b.path.order);
  const sections = module.sections.flatMap((section, index) =>
    "title" in section && section.title
      ? [{ href: `#${sectionAnchor(section.title, index)}`, title: section.title }]
      : [],
  );

  return (
    <div className="module-layout">
      <aside className="module-sidebar" aria-label="Последовательность модулей">
        <Link className="module-brand" href="/ru">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <strong>Road To IOI</strong>
        </Link>
        <p className="division-select">Bronze⌄</p>
        <nav>
          <h2>Getting Started</h2>
          <ol>
            {orderedModules.slice(0, 3).map((item) => (
              <li key={item.id}>
                <Link className={item.id === module.id ? "current" : ""} href={`/ru/modules/${item.slug}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ol>
          <h2>Complete Search</h2>
          <ol>
            {orderedModules.slice(3).map((item) => (
              <li key={item.id}>
                <Link className={item.id === module.id ? "current" : ""} href={`/ru/modules/${item.slug}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </aside>
      <article className="module-article">
        <div className="module-topline">
          <Link href="/ru/sections/bronze">‹ Prev</Link>
          <div>
            <Link href="/ru">Home</Link>
            <span>›</span>
            <Link href="/ru/sections/bronze">Bronze</Link>
            <span>›</span>
            <span>{module.title}</span>
          </div>
          <Link href="/ru/sections/bronze">Next ›</Link>
        </div>

        <section className="signin-card module-session">
          <div>
            <h2>Локальный прогресс</h2>
            <p>Статус сохраняется в этом браузере. Аккаунты и синхронизация появятся позже.</p>
          </div>
          <Link href="/ru/start">Выбрать путь</Link>
        </section>

        <div className="module-heading">
          <div>
            <p className="frequency-dots" aria-label="Very frequent">•••• <span>Very Frequent</span></p>
            <h1>{module.title}</h1>
            <p className="authors">Source: {module.source.title}</p>
            <p className="lede">{module.description}</p>
          </div>
        </div>

        <SourceNote module={module} />

        {module.prerequisites.length > 0 ? (
          <section className="inline-section" aria-labelledby="prerequisites">
            <h2 id="prerequisites">Перед этим модулем</h2>
            <ul>
              {module.prerequisites.map((item) => {
                const prerequisite = getModuleById(item.id);
                return (
                  <li key={item.id}>
                    {prerequisite ? (
                      <Link href={`/ru/modules/${prerequisite.slug}`}>{prerequisite.title}</Link>
                    ) : (
                      <span>Скоро: {item.id}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}

        <div className="content-flow">
          {module.sections.map((section, index) => {
            const sectionId = "title" in section && section.title ? sectionAnchor(section.title, index) : undefined;

            if (section.type === "paragraph") {
              return <p key={index}>{section.body}</p>;
            }

            if (section.type === "list") {
              return (
                <section id={sectionId} key={index}>
                  {section.title ? <h2>{section.title}</h2> : null}
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              );
            }

            if (section.type === "callout") {
              return (
                <aside className={`callout ${section.tone}`} id={sectionId} key={index}>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </aside>
              );
            }

            return (
              <figure className="code-block" id={sectionId} key={index}>
                {section.title ? <figcaption>{section.title}</figcaption> : null}
                <pre>
                  <code>{section.code}</code>
                </pre>
              </figure>
            );
          })}
        </div>

        <section className="inline-section" aria-labelledby="module-terms">
          <h2 id="module-terms">Термины из модуля</h2>
          <div className="tag-list">
            {module.glossaryTerms.map((termId) => {
              const term = getGlossaryTerm(termId);
              return term ? (
                <Link key={termId} href={`/ru/glossary/${term.id}`}>
                  {term.ru}
                </Link>
              ) : null;
            })}
          </div>
        </section>

        <section className="inline-section" aria-labelledby="module-problems">
          <h2 id="module-problems">Задачи</h2>
          <div className="problem-list">
            {module.problems.map((problem) => (
              <a href={problem.url} key={problem.title} rel="noreferrer" target="_blank">
                <strong>{problem.title}</strong>
                <span>{problem.judge} · {problem.difficulty}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="inline-section quiz-panel" aria-labelledby="module-quiz">
          <h2 id="module-quiz">Проверка понимания</h2>
          <p>Что измеряет временная сложность алгоритма?</p>
          <ol>
            <li>Сколько памяти занимает программа.</li>
            <li>Как число операций растет от размера входа.</li>
            <li>Сколько времени ученик потратил на решение.</li>
          </ol>
          <div className="module-progress-footer">
            <strong>Module Progress:</strong>
            <ProgressControl moduleId={module.id} />
          </div>
        </section>
      </article>
      <aside className="toc-panel" aria-label="Содержание">
        <h2>Table of Contents</h2>
        <a href="#source-note-title">Источник</a>
        {module.prerequisites.length > 0 ? <a href="#prerequisites">Перед модулем</a> : null}
        {sections.map((section) => (
          <a href={section.href} key={section.href}>
            {section.title}
          </a>
        ))}
        <a href="#module-terms">Термины</a>
        <a href="#module-problems">Задачи</a>
      </aside>
    </div>
  );
}

function sectionAnchor(title: string, index: number) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9а-яё]+/gi, "-")
    .replace(/^-+|-+$/g, "");

  return `section-${index}-${slug || "content"}`;
}

function SourceNote({ module }: { module: ModuleInfo }) {
  return (
    <section className="source-note" aria-labelledby="source-note-title">
      <h2 id="source-note-title">Источник и статус перевода</h2>
      <div className="resource-table">
        <a href={module.source.url} rel="noreferrer" target="_blank">
          <span>Source</span>
          <strong>{module.source.title}</strong>
          <em>original module</em>
        </a>
        <span>
          <span>License</span>
          <strong>{module.license}</strong>
          <em>share alike</em>
        </span>
        <span>
          <span>Status</span>
          <strong>{module.translation.status}</strong>
          <em>translation pipeline</em>
        </span>
      </div>
    </section>
  );
}
