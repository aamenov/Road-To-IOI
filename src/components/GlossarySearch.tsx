"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { GlossaryTerm } from "@/content/types";

export function GlossarySearch({ terms }: { terms: GlossaryTerm[] }) {
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!normalized) return terms;

    return terms.filter((term) =>
      [term.ru, term.en, term.kk, term.definition]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(normalized)),
    );
  }, [normalized, terms]);

  return (
    <section className="glossary-browser" aria-labelledby="glossary-search-title">
      <div className="field">
        <label id="glossary-search-title" htmlFor="glossary-query">
          Найти термин
        </label>
        <input
          id="glossary-query"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Например: сложность, graph, массив"
        />
      </div>
      {filtered.length === 0 ? (
        <div className="empty-state">
          <h2>Термин не найден</h2>
          <p>Попробуйте английское название или откройте полный список терминов ниже.</p>
        </div>
      ) : (
        <div className="glossary-grid">
          {filtered.map((term) => (
            <article className="term-card" key={term.id}>
              <h2>
                <Link href={`/ru/glossary/${term.id}`}>{term.ru}</Link>
              </h2>
              <p className="term-en">{term.en}</p>
              <p>{term.definition}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
