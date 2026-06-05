import { modules } from "@/content/modules";

const tracks = [
  { id: "beginner", title: "Начальный путь", description: "Контестный workflow, сложность, ввод/вывод, симуляция." },
  { id: "bronze", title: "Bronze", description: "Первые алгоритмические темы и задачи с источниками." },
  { id: "advanced", title: "Продвинутые темы", description: "Заготовка для Silver/Gold и республиканской подготовки." },
  { id: "ioi", title: "IOI-style", description: "Длинная траектория к доказательствам, структурам данных и задачам высокой сложности." },
] as const;

export default function CurriculumPage() {
  const bronzeModules = modules
    .filter((module) => module.path.track === "bronze" || module.path.track === "beginner")
    .sort((a, b) => a.path.order - b.path.order);

  return (
    <>
      <section className="division-hero bronze-hero">
        <div className="container">
          <h1>Bronze</h1>
          <p>
            Разделы ниже не исчерпывают все темы дивизиона. Задачи на контестах могут содержать темы, которые еще не
            переведены, или темы из соседних разделов.
          </p>
          <div className="stats-grid">
            <ProgressStats title="Modules Progress" total="6" />
            <ProgressStats title="Problems Progress" total="7" />
          </div>
        </div>
      </section>

      <section className="curriculum-timeline" aria-labelledby="bronze-outline">
        <h2 id="bronze-outline">Учебная траектория</h2>
        <div className="timeline-line" aria-hidden="true" />
        <div className="timeline-groups">
          {tracks.slice(0, 2).map((track) => {
            const trackModules = bronzeModules.filter((module) => module.path.track === track.id);

            return (
              <section className="timeline-group" key={track.id}>
                <div className="timeline-label">
                  <h3>{track.title}</h3>
                  <span className="mini-progress">0/{trackModules.length || 1}</span>
                </div>
                <div className="timeline-modules">
                  {trackModules.map((module) => (
                    <article className="timeline-module" key={module.id}>
                      <span className="timeline-dot" />
                      <h3>{module.title}</h3>
                      <p>{module.description}</p>
                      <em>Updated: today</em>
                      <a href={`/ru/modules/${module.slug}`}>Открыть модуль</a>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="section compact">
        <div className="container">
          <h2>Другие разделы</h2>
          <div className="grid two">
            {tracks.slice(2).map((track) => (
              <article className="empty-state" key={track.id}>
                <h3>{track.title}</h3>
                <p>{track.description}</p>
                <span>coming later</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProgressStats({ title, total }: { title: string; total: string }) {
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
