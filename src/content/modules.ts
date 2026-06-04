import type { ModuleInfo } from "./types";

const ccLicense = "CC BY-NC-SA 4.0" as const;

const baseTranslation = {
  status: "draft" as const,
  translatedBy: [],
  reviewedBy: [],
  russianCleanup: false,
  glossaryChecked: false,
  cpReviewed: false,
  studentTested: false,
};

export const modules: ModuleInfo[] = [
  {
    id: "contest-workflow",
    slug: "contest-workflow",
    title: "Как устроена олимпиадная задача",
    description: "Первый модуль: формат условия, ввод, вывод, тесты, отправка и вердикты.",
    language: "ru",
    path: { track: "beginner", order: 10, label: "Начальный путь" },
    source: {
      title: "USACO Guide: Getting Started",
      url: "https://usaco.guide/general/intro-cp",
      repoPath: "content/1_General",
      sourceCommit: "unknown",
    },
    license: ccLicense,
    translation: baseTranslation,
    prerequisites: [],
    glossaryTerms: ["input", "output", "test-case", "accepted", "wrong-answer", "debugging"],
    problems: [
      {
        title: "A+B style input/output",
        judge: "Practice",
        url: "https://codeforces.com/problemset/problem/4/A",
        difficulty: "intro",
      },
    ],
    sections: [
      {
        type: "paragraph",
        body: "На соревновании программа получает входные данные, вычисляет ответ и печатает его. Проверяющая система запускает вашу программу на наборе тестов и сравнивает вывод с правильным ответом.",
      },
      {
        type: "callout",
        tone: "beginner",
        title: "Для начинающих",
        body: "Сначала тренируйтесь читать условие как спецификацию: что дано, что нужно вывести, какие ограничения и какие примеры.",
      },
      {
        type: "list",
        title: "Минимальный рабочий порядок",
        items: [
          "Прочитать условие и выписать входные данные.",
          "Понять, какой ответ должен быть напечатан.",
          "Проверить решение на примерах из условия.",
          "Придумать 2-3 своих маленьких теста.",
          "Только потом отправлять решение.",
        ],
      },
    ],
  },
  {
    id: "time-complexity",
    slug: "time-complexity",
    title: "Оценка сложности",
    description: "Как по ограничениям понять, пройдет ли решение по времени.",
    language: "ru",
    path: { track: "beginner", order: 20, label: "Начальный путь" },
    source: {
      title: "USACO Guide: Time Complexity",
      url: "https://usaco.guide/bronze/time-comp",
      repoPath: "content/2_Bronze/Intro_Complete_Search",
      sourceCommit: "unknown",
    },
    license: ccLicense,
    translation: baseTranslation,
    prerequisites: [{ id: "contest-workflow" }],
    glossaryTerms: ["complexity", "big-o", "time-limit", "memory-limit", "loop"],
    problems: [
      {
        title: "Estimating loops",
        judge: "Local exercise",
        url: "https://usaco.guide/bronze/time-comp",
        difficulty: "intro",
      },
    ],
    sections: [
      {
        type: "paragraph",
        body: "Оценка сложности нужна до написания кода. Если ограничение n равно 200000, программа с двойным циклом по всем парам обычно не успеет.",
      },
      {
        type: "callout",
        tone: "term",
        title: "Термин",
        body: "O(n) означает, что число операций растет примерно линейно от размера входа. Константы важны, но на олимпиадах сначала смотрят именно порядок роста.",
      },
      {
        type: "code",
        title: "Один проход по массиву",
        code: "for (int i = 0; i < n; i++) {\n  answer += a[i];\n}",
      },
    ],
  },
  {
    id: "input-output",
    slug: "input-output",
    title: "Ввод и вывод",
    description: "Как аккуратно читать данные и печатать ответ в формате проверяющей системы.",
    language: "ru",
    path: { track: "beginner", order: 30, label: "Начальный путь" },
    source: {
      title: "USACO Guide: Input and Output",
      url: "https://usaco.guide/general/input-output",
      repoPath: "content/1_General",
      sourceCommit: "unknown",
    },
    license: ccLicense,
    translation: baseTranslation,
    prerequisites: [{ id: "contest-workflow" }],
    glossaryTerms: ["input", "output", "stdin", "stdout", "test-case"],
    problems: [
      {
        title: "Simple input/output drills",
        judge: "Local exercise",
        url: "https://usaco.guide/general/input-output",
        difficulty: "intro",
      },
    ],
    sections: [
      {
        type: "paragraph",
        body: "Большинство задач используют стандартный ввод и стандартный вывод. Это значит, что программа не должна спрашивать пользователя и не должна печатать лишний текст.",
      },
      {
        type: "callout",
        tone: "explanation",
        title: "Пояснение",
        body: "На олимпиаде строка вроде 'Введите n:' почти всегда испортит ответ. Проверяющая система ждет только числа или строки, описанные в формате вывода.",
      },
      {
        type: "code",
        title: "C++ шаблон",
        code: "#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n  ios::sync_with_stdio(false);\n  cin.tie(nullptr);\n\n  int n;\n  cin >> n;\n  cout << n * 2 << '\\n';\n}",
      },
    ],
  },
  {
    id: "simulation-basics",
    slug: "simulation-basics",
    title: "Базовая симуляция",
    description: "Как решать задачи, где нужно честно промоделировать процесс.",
    language: "ru",
    path: { track: "beginner", order: 40, label: "Начальный путь" },
    source: {
      title: "USACO Guide: Simulation",
      url: "https://usaco.guide/bronze/simulation",
      repoPath: "content/2_Bronze/Simulation",
      sourceCommit: "unknown",
    },
    license: ccLicense,
    translation: baseTranslation,
    prerequisites: [{ id: "input-output" }, { id: "time-complexity" }],
    glossaryTerms: ["simulation", "implementation", "edge-case", "debugging"],
    problems: [
      {
        title: "USACO Bronze simulation practice",
        judge: "USACO Guide",
        url: "https://usaco.guide/bronze/simulation",
        difficulty: "easy",
      },
    ],
    sections: [
      {
        type: "paragraph",
        body: "В задачах на симуляцию условие часто уже почти описывает алгоритм. Главная трудность - аккуратно хранить состояние процесса и обновлять его без ошибок.",
      },
      {
        type: "list",
        title: "Что держать под контролем",
        items: [
          "Какие переменные полностью описывают текущий момент.",
          "В каком порядке происходят события.",
          "Когда процесс должен остановиться.",
          "Какие крайние случаи возможны.",
        ],
      },
    ],
  },
  {
    id: "arrays-and-loops",
    slug: "arrays-and-loops",
    title: "Циклы и массивы для задач",
    description: "Короткое повторение инструментов, которые постоянно нужны в Bronze.",
    language: "ru",
    path: { track: "beginner", order: 50, label: "Начальный путь" },
    source: {
      title: "USACO Guide: Data Structures Review",
      url: "https://usaco.guide/general/data-structures",
      repoPath: "content/1_General",
      sourceCommit: "unknown",
    },
    license: ccLicense,
    translation: baseTranslation,
    prerequisites: [{ id: "input-output" }],
    glossaryTerms: ["array", "index", "loop", "off-by-one", "sorting"],
    problems: [
      {
        title: "Array traversal drills",
        judge: "Local exercise",
        url: "https://usaco.guide/general/data-structures",
        difficulty: "intro",
      },
    ],
    sections: [
      {
        type: "paragraph",
        body: "Массивы и циклы - не отдельная цель, а инструмент. В олимпиадных задачах важно не просто знать синтаксис, а уметь пройти данные в правильном порядке.",
      },
      {
        type: "callout",
        tone: "beginner",
        title: "Для начинающих",
        body: "Если решение кажется правильным, но падает на маленьких тестах, проверьте границы цикла: первый индекс, последний индекс и пустые участки.",
      },
    ],
  },
  {
    id: "bronze-complete-search",
    slug: "bronze-complete-search",
    title: "Bronze: полный перебор",
    description: "Первый Bronze-модуль: когда можно перебрать варианты и как не выйти за лимит времени.",
    language: "ru",
    path: { track: "bronze", order: 100, label: "Bronze" },
    source: {
      title: "USACO Guide: Complete Search",
      url: "https://usaco.guide/bronze/complete-rec",
      repoPath: "content/2_Bronze/Complete_Search",
      sourceCommit: "unknown",
    },
    license: ccLicense,
    translation: baseTranslation,
    prerequisites: [{ id: "time-complexity" }, { id: "arrays-and-loops" }],
    glossaryTerms: ["algorithm", "complexity", "implementation", "edge-case", "sorting"],
    problems: [
      {
        title: "USACO Bronze practice set",
        judge: "USACO Guide",
        url: "https://usaco.guide/bronze/complete-rec",
        difficulty: "easy",
      },
      {
        title: "Codeforces implementation practice",
        judge: "Codeforces",
        url: "https://codeforces.com/problemset?tags=implementation,brute%20force",
        difficulty: "medium",
      },
    ],
    sections: [
      {
        type: "paragraph",
        body: "Полный перебор означает, что мы рассматриваем все разумные варианты и выбираем подходящий. Это не значит 'писать медленно': перебор должен соответствовать ограничениям.",
      },
      {
        type: "callout",
        tone: "explanation",
        title: "Пояснение",
        body: "Если вариантов 1000, перебор может быть идеальным. Если вариантов 2^100, нужен другой подход. Поэтому модуль связан со сложностью.",
      },
      {
        type: "list",
        title: "Перед отправкой",
        items: [
          "Оцените число перебираемых вариантов.",
          "Проверьте минимальные и максимальные входы.",
          "Убедитесь, что ответ обновляется только при допустимом варианте.",
        ],
      },
    ],
  },
];

export function getModuleBySlug(slug: string) {
  return modules.find((module) => module.slug === slug);
}

export function getModuleById(id: string) {
  return modules.find((module) => module.id === id);
}

export function getModulesByTrack(track: ModuleInfo["path"]["track"]) {
  return modules
    .filter((module) => module.path.track === track)
    .sort((a, b) => a.path.order - b.path.order);
}
