"use client";

import { useEffect, useMemo, useState } from "react";
import type { ProgressState } from "@/content/types";
import { createProgressStore, progressStateLabels } from "@/progress/store";

const states: ProgressState[] = ["not-started", "in-progress", "completed", "skipped"];

export function ProgressControl({ moduleId }: { moduleId: string }) {
  const store = useMemo(
    () => createProgressStore(getBrowserStorage()),
    [],
  );
  const [state, setState] = useState<ProgressState>("not-started");
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    setState(store.get(moduleId));
    setWarning(store.unavailable);
  }, [moduleId, store]);

  function select(nextState: ProgressState) {
    store.set(moduleId, nextState);
    setState(nextState);
    setWarning(store.unavailable);
  }

  return (
    <section className="progress-panel" aria-labelledby="progress-title">
      <h2 id="progress-title">Прогресс</h2>
      <div className="segmented" role="group" aria-label="Статус модуля">
        {states.map((item) => (
          <button
            key={item}
            type="button"
            className={state === item ? "active" : ""}
            aria-pressed={state === item}
            onClick={() => select(item)}
          >
            {progressStateLabels[item]}
          </button>
        ))}
      </div>
      <p className="sr-status" aria-live="polite">
        Текущий статус: {progressStateLabels[state]}.
      </p>
      {warning ? (
        <p className="warning">Браузер не дал сохранить прогресс. Статус останется только до закрытия страницы.</p>
      ) : null}
    </section>
  );
}

function getBrowserStorage() {
  if (typeof window === "undefined") return undefined;

  try {
    return window.localStorage;
  } catch {
    return undefined;
  }
}
