import { GlossarySearch } from "@/components/GlossarySearch";
import { glossaryTerms } from "@/content/glossary";

export default function GlossaryPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Терминология</p>
        <h1>Глоссарий</h1>
        <p className="lede">
          Русские термины стоят первыми, английские сохранены рядом. Казахский термин добавляется там, где он уже
          очевиден и не мешает русскому запуску.
        </p>
        <GlossarySearch terms={glossaryTerms} />
      </div>
    </section>
  );
}
