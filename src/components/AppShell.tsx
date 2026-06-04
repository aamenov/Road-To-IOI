import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/ru", label: "Гид" },
  { href: "/ru/start", label: "Старт" },
  { href: "/ru/curriculum", label: "Учебный план" },
  { href: "/ru/glossary", label: "Глоссарий" },
  { href: "/ru/teachers", label: "Учителям" },
  { href: "/ru/olympiad-map", label: "Карта олимпиад" },
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/ru" aria-label="Road To IOI">
          <span className="brand-mark">RTI</span>
          <span>Road To IOI</span>
        </Link>
        <nav className="top-nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
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
