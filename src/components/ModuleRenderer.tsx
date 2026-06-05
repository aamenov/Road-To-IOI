import Link from "next/link";
import type { ModuleInfo } from "@/content/types";
import { getGlossaryTerm } from "@/content/glossary";
import { getModuleById, modules } from "@/content/modules";
import { ProgressControl } from "./ProgressControl";

export function ModuleRenderer({ module }: { module: ModuleInfo }) {
  const orderedModules = [...modules].sort((a, b) => a.path.order - b.path.order);
  const sections = module.sections
    .map((section) => ("title" in section ? section.title : undefined))
    .filter(Boolean) as string[];

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
          <Link href="/ru/curriculum">‹ Prev</Link>
          <div>
            <Link href="/ru">Home</Link>
            <span>›</span>
            <Link href="/ru/curriculum">Bronze</Link>
            <span>›</span>
            <span>{module.title}</span>
          </div>
          <Link href="/ru/curriculum">Next ›</Link>
        </div>

        <section className="signin-card">
          <h2>Вы не вошли в систему</h2>
          <p>Прогресс сохраняется только в этом браузере. Аккаунты и синхронизация не входят в V1.</p>
          <Link href="/ru/start">Выбрать путь</Link>
        </section>

        <div className="module-heading">
          <div>
            <p className="frequency-dots" aria-hidden="true">••••</p>
            <h1>{module.title}</h1>
            <p className="authors">Source: {module.source.title}</p>
            <p className="lede">{module.description}</p>
          </div>
          <ProgressControl moduleId={module.id} />
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
            if (section.type === "paragraph") {
              return <p key={index}>{section.body}</p>;
            }

            if (section.type === "list") {
              return (
                <section key={index}>
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
                <aside className={`callout ${section.tone}`} key={index}>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </aside>
              );
            }

            return (
              <figure className="code-block" key={index}>
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
      </article>
      <aside className="toc-panel" aria-label="Содержание">
        <h2>Table of Contents</h2>
        <a href="#source-note-title">Источник</a>
        {module.prerequisites.length > 0 ? <a href="#prerequisites">Перед модулем</a> : null}
        {sections.map((section) => (
          <a href="#" key={section}>
            {section}
          </a>
        ))}
        <a href="#module-terms">Термины</a>
        <a href="#module-problems">Задачи</a>
      </aside>
    </div>
  );
}

function SourceNote({ module }: { module: ModuleInfo }) {
  return (
    <section className="source-note" aria-labelledby="source-note-title">
      <h2 id="source-note-title">Источник и статус перевода</h2>
      <p>
        Черновой русскоязычный модуль с привязкой к источнику:{" "}
        <a href={module.source.url} rel="noreferrer" target="_blank">
          {module.source.title}
        </a>
        . Лицензия: {module.license}. Статус: {module.translation.status}.
      </p>
    </section>
  );
}
