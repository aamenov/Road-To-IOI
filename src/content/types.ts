export type Locale = "ru";

export type Track = "beginner" | "bronze" | "advanced" | "ioi";

export type TranslationStatus = "draft" | "reviewed" | "ready";

export type ProgressState = "not-started" | "in-progress" | "completed" | "skipped";

export type SourceInfo = {
  title: string;
  url: string;
  repoPath: string;
  sourceCommit: string;
};

export type TranslationInfo = {
  status: TranslationStatus;
  translatedBy: string[];
  reviewedBy: string[];
  russianCleanup: boolean;
  glossaryChecked: boolean;
  cpReviewed: boolean;
  studentTested: boolean;
};

export type ProblemInfo = {
  title: string;
  judge: string;
  url: string;
  difficulty: "intro" | "easy" | "medium" | "hard";
};

export type ModuleSection =
  | {
      type: "paragraph";
      body: string;
    }
  | {
      type: "list";
      title?: string;
      items: string[];
    }
  | {
      type: "callout";
      tone: "explanation" | "term" | "beginner";
      title: string;
      body: string;
    }
  | {
      type: "code";
      title?: string;
      code: string;
    };

export type ModuleInfo = {
  id: string;
  slug: string;
  title: string;
  description: string;
  language: Locale;
  path: {
    track: Track;
    order: number;
    label: string;
  };
  source: SourceInfo;
  license: "CC BY-NC-SA 4.0";
  translation: TranslationInfo;
  prerequisites: Array<{ id: string; comingLater?: boolean }>;
  glossaryTerms: string[];
  problems: ProblemInfo[];
  sections: ModuleSection[];
};

export type GlossaryTerm = {
  id: string;
  ru: string;
  en: string;
  kk?: string;
  definition: string;
  example: string;
  related: string[];
};
