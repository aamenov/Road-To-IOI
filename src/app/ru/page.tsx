import Link from "next/link";
import { modules } from "@/content/modules";
import { ModuleCard } from "@/components/ModuleCard";

const featuredModules = modules.slice(0, 3);
const heatmapCells = Array.from({ length: 182 }, (_, index) => index);

export default function RussianHomePage() {
  return (
    <>
      <section className="dashboard-page">
        <p className="signin-banner">
          Прогресс хранится локально. <Link href="/ru/start">Выберите стартовый путь</Link>
        </p>

        <div className="welcome-card">
          <div>
            <h1>Добро пожаловать!</h1>
            <p>Продолжите с того места, где остановились. Первый рекомендуемый модуль — «Оценка сложности».</p>
          </div>
          <Link className="button" href="/ru/modules/time-complexity">
            Продолжить: Оценка сложности
          </Link>
        </div>

        <section className="dashboard-section" aria-labelledby="activity-title">
          <h2 id="activity-title">Activity</h2>
          <div className="activity-card">
            <div className="heatmap-months" aria-hidden="true">
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
            </div>
            <div className="activity-grid" aria-label="Карта учебной активности">
              {heatmapCells.map((cell) => (
                <span key={cell} />
              ))}
            </div>
            <p>Карта активности будет заполняться по мере прохождения модулей.</p>
          </div>
        </section>

        <section className="dashboard-section" aria-labelledby="stats-title">
          <h2 id="stats-title">Statistics</h2>
          <div className="stats-grid">
            <ProgressStats title="Modules Progress - Bronze" total="6" />
            <ProgressStats title="Problems Progress - Bronze" total="7" />
          </div>
        </section>

        <section className="dashboard-section" aria-labelledby="paths-title">
          <h2 id="paths-title">Sections</h2>
          <div className="grid three">
            <article className="path-card">
              <h3>General</h3>
              <p>Старт, ввод/вывод, формат контестов и терминология.</p>
              <Link href="/ru/start">Начать</Link>
            </article>
            <article className="path-card bronze-card">
              <h3>Bronze</h3>
              <p>Сложность, симуляция, перебор и первые системные алгоритмические темы.</p>
              <Link href="/ru/curriculum">Открыть Bronze</Link>
            </article>
            <article className="path-card">
              <h3>Advanced</h3>
              <p>Будущая траектория для республиканского и IOI-style уровня.</p>
              <Link href="/ru/olympiad-map">Посмотреть карту</Link>
            </article>
          </div>
        </section>

        <section className="dashboard-section" aria-labelledby="modules-title">
          <h2 id="modules-title">Последние модули</h2>
          <div className="grid three">
            {featuredModules.map((module) => (
              <ModuleCard module={module} key={module.id} />
            ))}
          </div>
        </section>

        <section className="dashboard-section source-strip">
          <h2>Атрибуция</h2>
          <p>
            Материалы строятся как отдельный русскоязычный проект с явной атрибуцией USACO Guide и лицензией CC
            BY-NC-SA 4.0. У каждого модуля есть ссылка на источник и статус перевода.
          </p>
          <Link href="/ru/attribution">Атрибуция и лицензия</Link>
        </section>
      </section>
    </>
  );
}

function ProgressStats({ title, total }: { title: string; total: string }) {
  const items = [
    { label: "Completed", value: "0", tone: "green" },
    { label: "In Progress", value: "0", tone: "amber" },
    { label: "Skipped", value: "0", tone: "blue" },
    { label: "Not Started", value: total, tone: "white" },
  ];

  return (
    <article className="stats-card">
      <h3>{title}</h3>
      <div className="stat-circles">
        {items.map((item) => (
          <div className="stat-item" key={item.label}>
            <span className={`stat-circle ${item.tone}`}>{item.value}</span>
            <strong>{item.label}</strong>
          </div>
        ))}
      </div>
      <div className="progress-bar" aria-hidden="true" />
      <p>{total} total</p>
    </article>
  );
}
