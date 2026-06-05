import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow empty-state">
        <p className="eyebrow">404</p>
        <h1>Страница не найдена</h1>
        <p>Откройте учебный план или стартовую страницу, чтобы продолжить.</p>
        <div className="actions">
          <Link className="button" href="/ru/start">
            Старт
          </Link>
          <Link className="secondary-button" href="/ru/sections">
            Учебный план
          </Link>
        </div>
      </div>
    </section>
  );
}
