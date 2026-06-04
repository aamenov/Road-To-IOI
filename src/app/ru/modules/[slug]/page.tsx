import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ModuleRenderer } from "@/components/ModuleRenderer";
import { getModuleBySlug, modules } from "@/content/modules";

export function generateStaticParams() {
  return modules.map((module) => ({ slug: module.slug }));
}

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const module = getModuleBySlug(slug);

  if (!module) {
    return { title: "Модуль не найден" };
  }

  return {
    title: `${module.title} · Road To IOI`,
    description: module.description,
  };
}

export default async function ModulePage({ params }: RouteProps) {
  const { slug } = await params;
  const module = getModuleBySlug(slug);

  if (!module) {
    notFound();
  }

  return <ModuleRenderer module={module} />;
}
