import Link from "next/link";
import type { ModuleInfo } from "@/content/types";

export function ModuleCard({ module }: { module: ModuleInfo }) {
  return (
    <article className="module-card">
      <div className="eyebrow">{module.path.label}</div>
      <h3>
        <Link href={`/ru/modules/${module.slug}`}>{module.title}</Link>
      </h3>
      <p>{module.description}</p>
      <div className="module-meta">
        <span>{module.translation.status === "ready" ? "готово" : "черновик"}</span>
        <span>{module.problems.length} задач</span>
      </div>
    </article>
  );
}
