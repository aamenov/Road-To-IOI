import Link from "next/link";
import { modules } from "@/content/modules";

export default function AttributionPage() {
  return (
    <section className="section">
      <div className="container narrow">
        <p className="eyebrow">Атрибуция</p>
        <h1>Лицензия и источники</h1>
        <p>
          Road To IOI является отдельным русскоязычным проектом. Он не является официальным USACO Guide и не заявляет
          об одобрении со стороны USACO Guide или Competitive Programming Initiative.
        </p>
        <p>
          Учебные материалы строятся на основе структуры и источников USACO Guide, опубликованных под лицензией{" "}
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" rel="noreferrer" target="_blank">
            Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
          </a>
          . Производные материалы должны сохранять ту же лицензию и не использоваться коммерчески без отдельного
          разрешения.
        </p>
        <div className="actions">
          <a className="button" href="https://usaco.guide/" rel="noreferrer" target="_blank">
            Открыть USACO Guide
          </a>
          <a className="secondary-button" href="https://github.com/cpinitiative/usaco-guide" rel="noreferrer" target="_blank">
            Репозиторий источника
          </a>
        </div>

        <section className="inline-section">
          <h2>Источники модулей</h2>
          <ul>
            {modules.map((module) => (
              <li key={module.id}>
                <Link href={`/ru/modules/${module.slug}`}>{module.title}</Link>:{" "}
                <a href={module.source.url} rel="noreferrer" target="_blank">
                  {module.source.title}
                </a>{" "}
                ({module.source.repoPath}, commit: {module.source.sourceCommit})
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
