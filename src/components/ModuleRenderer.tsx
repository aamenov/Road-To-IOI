import Link from "next/link";
import type { ModuleInfo } from "@/content/types";
import { getGlossaryTerm } from "@/content/glossary";
import { getModuleById, modules } from "@/content/modules";
import { ProgressControl } from "./ProgressControl";

export function ModuleRenderer({ module }: { module: ModuleInfo }) {
  const orderedModules = [...modules].sort((a, b) => a.path.order - b.path.order);

  return (
    <div className="module-layout">
      <aside className="module-sidebar" aria-label="Последовательность модулей">
        <p className="eyebrow">Учебный план</p>
        <ol>
          {orderedModules.map((item) => (
            <li key={item.id}>
              <Link className={item.id === module.id ? "current" : ""} href={`/ru/modules/${item.slug}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ol>
      </aside>
      <article className="module-article">
        <div className="module-heading">
          <div>
            <p className="eyebrow">{module.path.label}</p>
            <h1>{module.title}</h1>
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
