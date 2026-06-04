import Link from "next/link";

const stages = [
  {
    title: "Школьный и клубный старт",
    body: "Формат задач, ввод/вывод, аккуратная реализация, первые контесты на время.",
    href: "/ru/modules/contest-workflow",
  },
  {
    title: "Городской и областной уровень",
    body: "Системная Bronze/Silver база: перебор, сортировка, префиксы, графы, простая динамика.",
    href: "/ru/curriculum",
  },
  {
    title: "Республиканская подготовка",
    body: "Глубокие темы, доказательства корректности, устойчивость к сложным тестам и разборы после контеста.",
    href: "/ru/curriculum",
  },
  {
    title: "IOI-style траектория",
    body: "Долгий маршрут к продвинутым структурам данных, графам, динамике, интерактивным и конструктивным задачам.",
    href: "/ru/glossary",
  },
];

export default function OlympiadMapPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Казахстанский контекст</p>
        <h1>Карта олимпиадной подготовки</h1>
        <p className="lede">
          Карта не заменяет учебный план и не переписывает USACO Guide под местные этапы. Она помогает школьнику или
          тренеру понять, какие навыки обычно нужны на следующем уровне.
        </p>
        <div className="grid two">
          {stages.map((stage) => (
            <article className="info-card" key={stage.title}>
              <h2>{stage.title}</h2>
              <p>{stage.body}</p>
              <Link href={stage.href}>Смотреть связанный раздел</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
