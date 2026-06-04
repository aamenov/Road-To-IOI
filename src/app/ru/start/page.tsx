import Link from "next/link";

const paths = [
  {
    title: "Я знаю синтаксис, но не решаю олимпиады",
    forWhom: "Для школьников, которые писали программы на уроках, но теряются в условиях задач.",
    firstModule: "Как устроена олимпиадная задача",
    href: "/ru/modules/contest-workflow",
    prerequisites: "Переменные, условия, циклы на любом языке.",
    outcome: "Вы будете понимать формат задачи, ввод, вывод, тесты и первые вердикты.",
  },
  {
    title: "Я решаю простые задачи, но без системы",
    forWhom: "Для участников школьных и городских этапов, которым нужна структура Bronze.",
    firstModule: "Оценка сложности",
    href: "/ru/modules/time-complexity",
    prerequisites: "Уверенные циклы, массивы и чтение ввода.",
    outcome: "Вы начнете выбирать решение по ограничениям, а не только по интуиции.",
  },
  {
    title: "Я уже выступаю на региональном или республиканском уровне",
    forWhom: "Для сильных учеников, которым важно быстро увидеть глубину маршрута.",
    firstModule: "Bronze: полный перебор",
    href: "/ru/modules/bronze-complete-search",
    prerequisites: "Базовая реализация, сортировка, простая оценка сложности.",
    outcome: "Вы сможете сверить пробелы и двигаться к Silver/Gold темам по мере перевода.",
  },
  {
    title: "Я хочу готовиться в IOI-стиле",
    forWhom: "Для долгой подготовки: графы, динамика, структуры данных, доказательства корректности.",
    firstModule: "Карта олимпиад Казахстана",
    href: "/ru/olympiad-map",
    prerequisites: "Готовность заниматься регулярно и разбирать решения глубоко.",
    outcome: "Вы увидите, как текущий учебный план должен расширяться к IOI-уровню.",
  },
];

export default function StartPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Старт без теста</p>
        <h1>Где мне начать?</h1>
        <p className="lede">
          Выберите описание, которое ближе всего к вашей ситуации. Это не экзамен и не рейтинг: цель - открыть первый
          полезный модуль без лишней тревоги.
        </p>
        <div className="grid two">
          {paths.map((path) => (
            <article className="path-card" key={path.title}>
              <h2>{path.title}</h2>
              <p>{path.forWhom}</p>
              <dl>
                <dt>Первый модуль</dt>
                <dd>{path.firstModule}</dd>
                <dt>Что уже стоит знать</dt>
                <dd>{path.prerequisites}</dd>
                <dt>После пути</dt>
                <dd>{path.outcome}</dd>
              </dl>
              <Link className="button" href={path.href}>
                Открыть
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
