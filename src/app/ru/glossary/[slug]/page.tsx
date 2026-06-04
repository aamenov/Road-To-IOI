import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { glossaryTerms, getGlossaryTerm } from "@/content/glossary";
import { modules } from "@/content/modules";

export function generateStaticParams() {
  return glossaryTerms.map((term) => ({ slug: term.id }));
}

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);

  if (!term) return { title: "Термин не найден" };

  return {
    title: `${term.ru} · Глоссарий Road To IOI`,
    description: term.definition,
  };
}

export default async function GlossaryTermPage({ params }: RouteProps) {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);

  if (!term) {
    notFound();
  }

  const relatedModules = modules.filter((module) => module.glossaryTerms.includes(term.id));

  return (
    <section className="section">
      <div className="container narrow">
        <p className="eyebrow">Глоссарий</p>
        <h1>{term.ru}</h1>
        <p className="lede">{term.en}</p>
        {term.kk ? <p>Казахский термин: {term.kk}</p> : <p>Казахский термин будет добавлен позже.</p>}
        <section className="inline-section">
          <h2>Определение</h2>
          <p>{term.definition}</p>
          <p>{term.example}</p>
        </section>
        <section className="inline-section">
          <h2>Где встречается</h2>
          {relatedModules.length === 0 ? (
            <p>Пока термин не привязан к модулю.</p>
          ) : (
            <ul>
              {relatedModules.map((module) => (
                <li key={module.id}>
                  <Link href={`/ru/modules/${module.slug}`}>{module.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </section>
        <Link href="/ru/glossary">Назад к глоссарию</Link>
      </div>
    </section>
  );
}
