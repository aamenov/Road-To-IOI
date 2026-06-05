import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/ru/curriculum", label: "Разделы" },
  { href: "/ru/modules/bronze-complete-search", label: "Задачи" },
  { href: "/ru/glossary", label: "Ресурсы" },
  { href: "/ru/teachers", label: "Учителям" },
  { href: "/ru/olympiad-map", label: "Карта" },
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/ru" aria-label="Road To IOI">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>Road To IOI</span>
        </Link>
        <nav className="top-nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions" aria-label="Действия">
          <Link href="/ru/glossary">⌕ Поиск</Link>
          <Link href="/ru/start">Войти</Link>
          <Link aria-label="Настройки" href="/ru/attribution">
            ⚙
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div>
          <strong>Road To IOI</strong>
          <p>Русскоязычный учебный маршрут по спортивному программированию для школьников Казахстана.</p>
        </div>
        <div className="footer-links">
          <Link href="/ru/attribution">Атрибуция и лицензия</Link>
          <a href="https://usaco.guide/" rel="noreferrer" target="_blank">
            USACO Guide
          </a>
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" rel="noreferrer" target="_blank">
            CC BY-NC-SA 4.0
          </a>
        </div>
      </footer>
    </>
  );
}
