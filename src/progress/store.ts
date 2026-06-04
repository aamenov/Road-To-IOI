import type { ProgressState } from "@/content/types";

const STORAGE_KEY = "road-to-ioi:progress:v1";
const VALID_STATES: ProgressState[] = ["not-started", "in-progress", "completed", "skipped"];

type StoredProgress = {
  schemaVersion: 1;
  updatedAt: string;
  modules: Record<string, ProgressState>;
};

export type ProgressStore = {
  get(moduleId: string): ProgressState;
  set(moduleId: string, state: ProgressState): void;
  list(): Record<string, ProgressState>;
  reset(): void;
  unavailable: boolean;
};

function defaultData(): StoredProgress {
  return {
    schemaVersion: 1,
    updatedAt: new Date().toISOString(),
    modules: {},
  };
}

function isProgressState(value: unknown): value is ProgressState {
  return typeof value === "string" && VALID_STATES.includes(value as ProgressState);
}

export function createProgressStore(storage: Storage | undefined): ProgressStore {
  const memory = defaultData();
  let unavailable = !storage;

  function read(): StoredProgress {
    if (!storage || unavailable) return memory;

    try {
      const raw = storage.getItem(STORAGE_KEY);
      if (!raw) return defaultData();

      const parsed = JSON.parse(raw) as Partial<StoredProgress>;
      if (parsed.schemaVersion !== 1 || typeof parsed.modules !== "object" || parsed.modules === null) {
        return defaultData();
      }

      return {
        schemaVersion: 1,
        updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date().toISOString(),
        modules: Object.fromEntries(
          Object.entries(parsed.modules).filter(([, state]) => isProgressState(state)),
        ),
      };
    } catch {
      return defaultData();
    }
  }

  function write(data: StoredProgress) {
    memory.updatedAt = data.updatedAt;
    memory.modules = data.modules;

    if (!storage || unavailable) return;

    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      unavailable = true;
    }
  }

  return {
    get(moduleId) {
      return read().modules[moduleId] ?? "not-started";
    },
    set(moduleId, state) {
      const data = read();
      write({
        schemaVersion: 1,
        updatedAt: new Date().toISOString(),
        modules: {
          ...data.modules,
          [moduleId]: state,
        },
      });
    },
    list() {
      return read().modules;
    },
    reset() {
      write(defaultData());
    },
    get unavailable() {
      return unavailable;
    },
  };
}

export const progressStateLabels: Record<ProgressState, string> = {
  "not-started": "Не начато",
  "in-progress": "В процессе",
  completed: "Готово",
  skipped: "Пропущено",
};
