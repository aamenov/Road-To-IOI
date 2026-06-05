import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuideSection, guideSections } from "@/content/sections";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guideSections.map((section) => ({ slug: section.slug }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const section = getGuideSection(slug);

  if (!section) {
    return { title: "Раздел не найден" };
  }

  return {
    title: `${section.title} · Разделы · Road To IOI`,
    description: `Русский перевод обзорной страницы ${section.title} из USACO Guide.`,
  };
}

export default async function SectionPage({ params }: RouteProps) {
  const { slug } = await params;
  const section = getGuideSection(slug);

  if (!section) {
    notFound();
  }

  return (
    <>
      <section className={`section-hero section-hero-${section.accent}`}>
        <div className="container">
          <div className="section-breadcrumbs">
            <Link href="/ru">Home</Link>
            <span>›</span>
            <Link href="/ru/sections">Разделы</Link>
            <span>›</span>
            <span>{section.title}</span>
          </div>
          <h1>{section.title}</h1>
          {section.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a className="source-link" href={section.sourceUrl} rel="noreferrer" target="_blank">
            Источник: USACO Guide {section.label}
          </a>
          <div className="stats-grid">
            <ProgressStats title="Modules Progress" total={section.moduleCount} />
            <ProgressStats title="Problems Progress" total={section.problemCount} />
          </div>
        </div>
      </section>

      <section className="section section-overview">
        <div className="container">
          <div className="section-switcher" aria-label="Разделы">
            {guideSections.map((item) => (
              <Link className={item.slug === section.slug ? "active" : ""} href={`/ru/sections/${item.slug}`} key={item.slug}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="section-timeline">
            {section.groups.map((group) => (
              <section className="section-group" key={group.title}>
                <div className="section-group-label">
                  <h2>{group.title}</h2>
                  <span>{group.progress}</span>
                  {group.note ? <p>{group.note}</p> : null}
                </div>
                <div className="section-module-list">
                  {group.modules.map((module) => (
                    <article className="section-module" key={`${group.title}-${module.title}`}>
                      <span className="section-node" aria-hidden="true" />
                      <h3>{module.title}</h3>
                      {module.frequency ? <strong>{module.frequency}</strong> : null}
                      <p>{module.description}</p>
                      <em>Перевод обзорной строки · источник USACO Guide</em>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProgressStats({ title, total }: { title: string; total: number }) {
  return (
    <article className="stats-card compact-stat">
      <h3>{title}</h3>
      <div className="stat-circles">
        <div className="stat-item">
          <span className="stat-circle green">0</span>
          <strong>Completed</strong>
        </div>
        <div className="stat-item">
          <span className="stat-circle amber">0</span>
          <strong>In Progress</strong>
        </div>
        <div className="stat-item">
          <span className="stat-circle blue">0</span>
          <strong>Skipped</strong>
        </div>
        <div className="stat-item">
          <span className="stat-circle white">{total}</span>
          <strong>Not Started</strong>
        </div>
      </div>
      <div className="progress-bar" aria-hidden="true" />
      <p>{total} total</p>
    </article>
  );
}
