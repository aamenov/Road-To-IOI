import Link from "next/link";
import { modules } from "@/content/modules";
import { ModuleCard } from "@/components/ModuleCard";

const featuredModules = modules.slice(0, 3);

export default function RussianHomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <p className="eyebrow">Казахстан · олимпиадное программирование</p>
          <h1>Road To IOI</h1>
          <p className="lede">
            Русскоязычный маршрут по competitive programming для школьников: от первых задач до серьезной подготовки к
            республиканским олимпиадам и IOI-стилю.
          </p>
          <div className="actions">
            <Link className="button" href="/ru/start">
              Начать здесь
            </Link>
            <Link className="secondary-button" href="/ru/curriculum">
              Смотреть учебный план
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Три входа в один глубокий маршрут</p>
          <div className="grid three">
            <article className="path-card">
              <h2>Начинающим</h2>
              <p>Если синтаксис уже знаком, но олимпиадные условия пока выглядят чужими.</p>
              <Link href="/ru/start">Выбрать старт</Link>
            </article>
            <article className="path-card">
              <h2>Региональный уровень</h2>
              <p>Если простые задачи решаются, но алгоритмы еще не выстроены в систему.</p>
              <Link href="/ru/curriculum">Перейти к Bronze</Link>
            </article>
            <article className="path-card">
              <h2>IOI-направление</h2>
              <p>Если нужна длинная траектория к продвинутым темам без упрощения материала.</p>
              <Link href="/ru/olympiad-map">Открыть карту</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">Первые модули</p>
          <h2>Начальный путь уже имеет рабочий скелет</h2>
          <div className="grid three">
            {featuredModules.map((module) => (
              <ModuleCard module={module} key={module.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">Прозрачное происхождение</p>
          <h2>Сайт не выдает себя за официальный USACO Guide</h2>
          <p>
            Материалы строятся как отдельный русскоязычный проект с явной атрибуцией USACO Guide и лицензией CC
            BY-NC-SA 4.0. У каждого модуля есть ссылка на источник и статус перевода.
          </p>
          <Link href="/ru/attribution">Атрибуция и лицензия</Link>
        </div>
      </section>
    </>
  );
}
