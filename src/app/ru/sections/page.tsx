import Link from "next/link";
import { guideSections } from "@/content/sections";

export const metadata = {
  title: "Разделы · Road To IOI",
  description: "Русский обзор разделов USACO Guide: General, Bronze, Silver, Gold, Platinum и Advanced.",
};

export default function SectionsIndexPage() {
  return (
    <>
      <section className="section sections-index">
        <div className="container">
          <p className="eyebrow">Разделы</p>
          <h1>Разделы</h1>
          <p className="lede">
            Это русская версия структуры разделов USACO Guide. Сейчас страницы разделов являются полным переводом
            обзорных страниц: группы тем, краткие описания и прогрессные числа сохранены как источник для дальнейшей
            локализации модулей.
          </p>
          <div className="section-card-grid">
            {guideSections.map((section) => (
              <Link className={`section-card ${section.accent}`} href={`/ru/sections/${section.slug}`} key={section.slug}>
                <span>{section.label}</span>
                <strong>{section.title}</strong>
                <em>
                  {section.moduleCount} модулей · {section.problemCount} задач
                </em>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
