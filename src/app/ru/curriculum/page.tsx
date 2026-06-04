import { ModuleCard } from "@/components/ModuleCard";
import { modules } from "@/content/modules";

const tracks = [
  { id: "beginner", title: "Начальный путь", description: "Контестный workflow, сложность, ввод/вывод, симуляция." },
  { id: "bronze", title: "Bronze", description: "Первые алгоритмические темы и задачи с источниками." },
  { id: "advanced", title: "Продвинутые темы", description: "Заготовка для Silver/Gold и республиканской подготовки." },
  { id: "ioi", title: "IOI-style", description: "Длинная траектория к доказательствам, структурам данных и задачам высокой сложности." },
] as const;

export default function CurriculumPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Учебный план</p>
        <h1>Модули</h1>
        <p className="lede">
          V1 содержит один полный начальный путь и первый Bronze-модуль. Непереведенные направления видны как будущая
          структура, но не мешают начать.
        </p>
        <div className="grid">
          {tracks.map((track) => {
            const trackModules = modules
              .filter((module) => module.path.track === track.id)
              .sort((a, b) => a.path.order - b.path.order);

            return (
              <section className="inline-section" key={track.id}>
                <h2>{track.title}</h2>
                <p>{track.description}</p>
                {trackModules.length === 0 ? (
                  <div className="empty-state">
                    <h3>Перевод еще не начат</h3>
                    <p>Раздел оставлен в навигации, чтобы сильные ученики видели будущую глубину маршрута.</p>
                  </div>
                ) : (
                  <div className="grid two">
                    {trackModules.map((module) => (
                      <ModuleCard module={module} key={module.id} />
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
