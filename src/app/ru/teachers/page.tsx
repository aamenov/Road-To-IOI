import Link from "next/link";

const weeks = [
  {
    title: "Неделя 1: формат соревнований",
    body: "Разберите ввод, вывод, тесты, вердикты и привычку проверять решение на собственных примерах.",
    href: "/ru/modules/contest-workflow",
  },
  {
    title: "Неделя 2: сложность",
    body: "Ученики учатся связывать ограничения с числом операций и заранее отбрасывать слишком медленные идеи.",
    href: "/ru/modules/time-complexity",
  },
  {
    title: "Неделя 3: ввод/вывод и шаблон",
    body: "Отработайте чистый формат решения без лишних сообщений и с быстрым вводом для C++.",
    href: "/ru/modules/input-output",
  },
  {
    title: "Неделя 4: симуляция",
    body: "Покажите, как хранить состояние процесса и обновлять его в правильном порядке.",
    href: "/ru/modules/simulation-basics",
  },
  {
    title: "Неделя 5: циклы и массивы",
    body: "Повторите индексы, границы и типичные ошибки на единицу.",
    href: "/ru/modules/arrays-and-loops",
  },
  {
    title: "Неделя 6-8: Bronze перебор",
    body: "Перейдите к полному перебору, задачам на реализацию и обсуждению ограничений.",
    href: "/ru/modules/bronze-complete-search",
  },
];

export default function TeachersPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Для учителей и тренеров</p>
        <h1>План для школьного клуба</h1>
        <p className="lede">
          Страница дает простой 6-8 недельный старт без аккаунтов и кабинетов. Сильные ученики могут идти вперед по
          модулям, начинающие получают общий язык и базовую дисциплину решения.
        </p>
        <div className="timeline">
          {weeks.map((week) => (
            <article key={week.title}>
              <h2>{week.title}</h2>
              <p>{week.body}</p>
              <Link href={week.href}>Открыть модуль</Link>
            </article>
          ))}
        </div>
        <section className="section alt">
          <div className="container narrow">
            <h2>Работа со смешанной группой</h2>
            <p>
              Давайте всем один общий модуль на занятии, но задачи разделяйте по сложности. Начинающие должны уметь
              объяснить формат и пройти маленькие тесты, сильные ученики получают дополнительные ограничения и должны
              защитить оценку сложности.
            </p>
            <Link href="/ru/olympiad-map">Связать занятия с этапами олимпиад</Link>
          </div>
        </section>
      </div>
    </section>
  );
}
