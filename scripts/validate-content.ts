import { glossaryTerms } from "../src/content/glossary";
import { modules } from "../src/content/modules";

const errors: string[] = [];
const glossaryIds = new Set(glossaryTerms.map((term) => term.id));
const moduleIds = new Set(modules.map((module) => module.id));

function fail(message: string) {
  errors.push(message);
}

for (const term of glossaryTerms) {
  if (!term.id || !term.ru || !term.en || !term.definition) {
    fail(`Glossary term ${term.id || "(missing id)"} is missing required fields.`);
  }

  for (const related of term.related) {
    if (!glossaryIds.has(related)) {
      fail(`Glossary term ${term.id} references missing related term ${related}.`);
    }
  }
}

for (const module of modules) {
  if (!/^[a-z0-9-]+$/.test(module.id)) {
    fail(`Module ${module.id} has a non URL-safe id.`);
  }

  if (!module.slug || !/^[a-z0-9-]+$/.test(module.slug)) {
    fail(`Module ${module.id} has a non URL-safe slug.`);
  }

  const required = [
    module.title,
    module.description,
    module.language,
    module.source.url,
    module.source.repoPath,
    module.source.sourceCommit,
    module.license,
    module.translation.status,
  ];

  if (required.some((value) => !value)) {
    fail(`Module ${module.id} is missing required metadata.`);
  }

  if (module.language !== "ru") {
    fail(`Module ${module.id} has unsupported language ${module.language}.`);
  }

  try {
    new URL(module.source.url);
  } catch {
    fail(`Module ${module.id} has invalid source URL ${module.source.url}.`);
  }

  if (module.translation.status === "ready") {
    if (module.source.sourceCommit === "unknown") {
      fail(`Ready module ${module.id} cannot use sourceCommit: unknown.`);
    }

    if (
      !module.translation.russianCleanup ||
      !module.translation.cpReviewed ||
      !module.translation.glossaryChecked
    ) {
      fail(`Ready module ${module.id} is missing review gates.`);
    }
  }

  for (const prerequisite of module.prerequisites) {
    if (!moduleIds.has(prerequisite.id) && !prerequisite.comingLater) {
      fail(`Module ${module.id} references missing prerequisite ${prerequisite.id}.`);
    }
  }

  for (const termId of module.glossaryTerms) {
    if (!glossaryIds.has(termId)) {
      fail(`Module ${module.id} references missing glossary term ${termId}.`);
    }
  }
}

if (errors.length > 0) {
  console.error("Content validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Content validation passed: ${modules.length} modules, ${glossaryTerms.length} glossary terms.`);
