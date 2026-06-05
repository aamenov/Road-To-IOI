export type GuideSectionSlug = "general" | "bronze" | "silver" | "gold" | "platinum" | "advanced";

export type GuideSectionModule = {
  title: string;
  description: string;
  frequency?: string;
};

export type GuideSectionGroup = {
  title: string;
  progress: string;
  note?: string;
  modules: GuideSectionModule[];
};

export type GuideSection = {
  slug: GuideSectionSlug;
  label: string;
  title: string;
  sourceUrl: string;
  accent: "general" | "bronze" | "silver" | "gold" | "platinum" | "advanced";
  intro: string[];
  moduleCount: number;
  problemCount: number;
  groups: GuideSectionGroup[];
};

export const guideSections: GuideSection[] = [
  {
    slug: "general",
    label: "General",
    title: "General",
    sourceUrl: "https://usaco.guide/general",
    accent: "general",
    intro: [
      "Не обязательно проходить все модули этого раздела перед переходом к Bronze.",
      "Можно отмечать часть тем как пропущенные и возвращаться к ним позже.",
    ],
    moduleCount: 29,
    problemCount: 10,
    groups: [
      {
        title: "Начало работы",
        progress: "0/9",
        note: "Начните здесь, если вы только входите в спортивное программирование.",
        modules: [
          { title: "Как пользоваться этим руководством", description: "Как эффективно использовать guide, чтобы учиться продуктивнее." },
          { title: "Введение в спортивное программирование", description: "Соревнования по программированию, включая USA Computing Olympiad." },
          { title: "Выбор языка", description: "Какие языки можно использовать на соревнованиях по программированию." },
          { title: "Ресурсы: обучение программированию", description: "Материалы, которые помогают научиться писать код." },
          { title: "Запуск кода онлайн", description: "Варианты запуска выбранного языка программирования в браузере." },
          { title: "Типы данных", description: "Типы данных, которые нужны в спортивном программировании." },
          { title: "Ввод и вывод", description: "Как читать входные данные и печатать ответ в задачах USACO." },
          { title: "Ожидаемые знания", description: "Что нужно знать перед переходом к остальной части USACO Bronze." },
        ],
      },
      {
        title: "Участие в проекте",
        progress: "0/4",
        note: "Как добавлять материалы в guide.",
        modules: [
          { title: "Участие в проекте", description: "Как внести вклад в руководство." },
          { title: "Добавление решений", description: "Как добавить собственные решения в guide." },
          { title: "Введение модулей", description: "Как устроен каждый модуль." },
          { title: "Работа с MDX", description: "Frontmatter перед каждым модулем и решением, а также список пользовательских компонентов." },
        ],
      },
      {
        title: "Общие ресурсы",
        progress: "0/6",
        note: "Полезно участникам любого уровня.",
        modules: [
          { title: "Как отлаживать", description: "Что делать, когда решение не работает." },
          { title: "Как практиковаться", description: "Как тренироваться и когда читать разборы по мнению разных участников USACO." },
          { title: "Стратегия контеста", description: "Общие идеи о том, как действовать во время USACO-контеста." },
          { title: "Ресурсы: спортивное программирование", description: "Полезные ссылки именно для спортивного программирования." },
          { title: "Соревнования", description: "Известные соревнования по программированию и полезные инструменты для контестов." },
          { title: "Олимпиады", description: "Крупные национальные и международные олимпиады по информатике." },
        ],
      },
      {
        title: "По языкам",
        progress: "0/1",
        note: "Настройка и особенности конкретных языков.",
        modules: [
          { title: "Запуск кода локально", description: "Варианты запуска выбранного языка на своем компьютере." },
          { title: "C++ через командную строку", description: "Инструкции для разных ОС по установке и запуску C++ из командной строки." },
          { title: "Быстрый ввод и вывод", description: "Почему скорость I/O может быть разницей между TLE и AC." },
          { title: "Базовая отладка", description: "Как находить ошибки в программе или избегать их заранее." },
          { title: "Отладка C++", description: "Советы по отладке, специфичные для C++." },
          { title: "(Опционально) C++: обобщенный код", description: "Как писать код, который легко переиспользовать и расширять." },
          { title: "(Опционально) C++: лямбда-выражения", description: "Как задавать анонимные функциональные объекты." },
        ],
      },
      {
        title: "США",
        progress: "0/4",
        note: "Информация, специфичная для USACO, лагерей и контестов США.",
        modules: [
          { title: "USACO FAQ", description: "Ответы на частые вопросы об USA Computing Olympiad." },
          { title: "USACO Monthlies", description: "Таблица со всеми недавними задачами USACO Monthly." },
          { title: "USACO Camp", description: "Ссылки и материалы о квалификации на USACO Camp." },
          { title: "Ресурсы: США", description: "Ресурсы, специфичные для США." },
        ],
      },
    ],
  },
  {
    slug: "bronze",
    label: "Bronze",
    title: "Bronze",
    sourceUrl: "https://usaco.guide/bronze",
    accent: "bronze",
    intro: [
      "Темы ниже не являются исчерпывающим списком для этого дивизиона.",
      "Контестные задачи могут включать темы, которых нет в guide, или темы из других дивизионов.",
      "Если вам удобнее видео, у CPI есть бесплатный self-study курс Bronze.",
    ],
    moduleCount: 13,
    problemCount: 107,
    groups: [
      {
        title: "Начало работы",
        progress: "0/15",
        modules: [
          { title: "Оценка сложности", description: "Измерение числа операций, которые выполняет алгоритм." },
          { title: "Введение в структуры данных", description: "Что такое структура данных: динамические массивы, пары и кортежи." },
          { title: "Симуляция", description: "Прямая симуляция условия задачи.", frequency: "Очень часто" },
        ],
      },
      {
        title: "Полный перебор",
        progress: "0/29",
        modules: [
          { title: "Базовый полный перебор", description: "Задачи, где нужно пройти по всему пространству решений.", frequency: "Очень часто" },
          { title: "Полный перебор с рекурсией", description: "Более сложные задачи полного перебора, включая генерацию подмножеств и перестановок.", frequency: "Редко" },
        ],
      },
      {
        title: "Сортировка и множества",
        progress: "0/18",
        modules: [
          { title: "Введение в сортировку", description: "Упорядочивание коллекций по возрастанию.", frequency: "Нечасто" },
          { title: "Введение в множества и отображения", description: "Хранение коллекций различных элементов или ключей с помощью set и map.", frequency: "Нечасто" },
        ],
      },
      {
        title: "Дополнительно",
        progress: "0/32",
        modules: [
          { title: "Разбор случаев", description: "Деление задачи на несколько случаев и отдельное решение каждого.", frequency: "Нечасто" },
          { title: "Введение в жадные алгоритмы", description: "Задачи, где на каждом шаге выбирается вариант, который сейчас кажется лучшим.", frequency: "Довольно часто" },
          { title: "Введение в графы", description: "Что такое графы.", frequency: "Нечасто" },
          { title: "Геометрия прямоугольников", description: "Задачи о прямоугольниках со сторонами, параллельными осям координат.", frequency: "Редко" },
          { title: "Ad Hoc задачи", description: "Задачи, которые не попадают в стандартные категории с хорошо изученными решениями.", frequency: "Очень часто" },
        ],
      },
      {
        title: "Завершение",
        progress: "0/13",
        note: "Поздравляем: вы дошли до конца раздела.",
        modules: [
          { title: "Дополнительная практика для USACO Bronze", description: "Финальные советы для Bronze и дополнительные тренировочные задачи." },
        ],
      },
    ],
  },
  {
    slug: "silver",
    label: "Silver",
    title: "Silver",
    sourceUrl: "https://usaco.guide/silver",
    accent: "silver",
    intro: [
      "Темы ниже не являются исчерпывающим списком для этого дивизиона.",
      "Контестные задачи могут включать темы, которых нет в guide, или темы из других дивизионов.",
      "Если вам удобнее видео, у CPI есть бесплатный self-study курс Silver.",
    ],
    moduleCount: 14,
    problemCount: 230,
    groups: [
      {
        title: "Префиксные суммы",
        progress: "0/28",
        modules: [
          { title: "Введение в префиксные суммы", description: "Ответы на запросы суммы на отрезке за O(1) по фиксированному одномерному массиву.", frequency: "Довольно часто" },
          { title: "Подробнее о префиксных суммах", description: "Максимальная сумма подмассива, двумерные префиксные суммы и более сложный пример.", frequency: "Нечасто" },
        ],
      },
      {
        title: "Сортировка и поиск",
        progress: "0/83",
        modules: [
          { title: "Два указателя", description: "Два монотонных указателя проходят по массиву и ищут пару индексов за линейное время.", frequency: "Нечасто" },
          { title: "Бинарный поиск в отсортированном массиве", description: "Эффективный поиск значения в отсортированном массиве.", frequency: "Довольно часто" },
          { title: "Бинарный поиск", description: "Бинарный поиск по произвольным монотонным функциям.", frequency: "Довольно часто" },
          { title: "Пользовательские компараторы и сжатие координат", description: "Сортировка объектов в нестандартном порядке и сжатие больших диапазонов значений.", frequency: "Довольно часто" },
          { title: "Жадные алгоритмы с сортировкой", description: "Решение жадных задач через сортировку входных данных.", frequency: "Довольно часто" },
          { title: "Очереди с приоритетом", description: "Структура данных с операциями вставки, запроса максимума и удаления максимума.", frequency: "Нечасто" },
        ],
      },
      {
        title: "Графы",
        progress: "0/62",
        note: "В большинстве контестов от Silver до Platinum есть хотя бы одна задача на графы.",
        modules: [
          { title: "Обход графа", description: "Обход графа с помощью DFS и BFS.", frequency: "Очень часто" },
          { title: "Flood Fill", description: "Поиск компонент связности в графе, представленном сеткой.", frequency: "Довольно часто" },
          { title: "Введение в алгоритмы на деревьях", description: "Введение в особый тип графов: деревья.", frequency: "Нечасто" },
          { title: "Введение в функциональные графы", description: "Ориентированные графы, где из каждой вершины выходит ровно одно ребро.", frequency: "Нечасто" },
        ],
      },
      {
        title: "Дополнительные темы",
        progress: "0/16",
        modules: [
          { title: "Введение в битовые операторы", description: "Шесть битовых операторов и типичные способы их применения.", frequency: "Довольно часто" },
        ],
      },
      {
        title: "Завершение",
        progress: "0/41",
        note: "Поздравляем: вы дошли до конца раздела.",
        modules: [
          { title: "Дополнительная практика для USACO Silver", description: "Финальные советы для Silver и дополнительные тренировочные задачи." },
        ],
      },
    ],
  },
  {
    slug: "gold",
    label: "Gold",
    title: "Gold",
    sourceUrl: "https://usaco.guide/gold",
    accent: "gold",
    intro: [
      "Темы ниже не являются исчерпывающим списком для этого дивизиона.",
      "Контестные задачи могут включать темы, которых нет в guide, или темы из других дивизионов.",
    ],
    moduleCount: 28,
    problemCount: 389,
    groups: [
      {
        title: "Математика",
        progress: "0/41",
        modules: [
          { title: "Делимость", description: "Использование факта, что одно целое число делится на другое без остатка.", frequency: "Редко" },
          { title: "Модульная арифметика", description: "Работа с остатками от деления.", frequency: "Нечасто" },
          { title: "Комбинаторика", description: "Как считать количество вариантов.", frequency: "Нечасто" },
        ],
      },
      {
        title: "Динамическое программирование",
        progress: "0/98",
        note: "В большинстве Gold и Platinum контестов есть хотя бы одна задача на DP.",
        modules: [
          { title: "Введение в DP", description: "Ускорение наивных рекурсивных решений с помощью мемоизации.", frequency: "Очень часто" },
          { title: "Knapsack DP", description: "Задачи, которые можно моделировать как заполнение контейнера ограниченного размера предметами.", frequency: "Нечасто" },
          { title: "Пути на сетках", description: "Подсчет числа специальных путей на сетке и связь некоторых строковых задач с сетками.", frequency: "Нечасто" },
          { title: "Наибольшая возрастающая подпоследовательность", description: "Поиск и использование LIS массива.", frequency: "Не встречалось" },
          { title: "Bitmask DP", description: "DP-задачи, где нужно перебирать подмножества.", frequency: "Нечасто" },
          { title: "Range DP", description: "Решение DP-задачи на каждом непрерывном подмассиве исходного массива.", frequency: "Редко" },
          { title: "Digit DP", description: "Поиск числа целых в диапазоне, обладающих некоторым свойством.", frequency: "Редко" },
        ],
      },
      {
        title: "Графы",
        progress: "0/79",
        note: "В большинстве контестов от Silver до Platinum есть хотя бы одна задача на графы.",
        modules: [
          { title: "Кратчайшие пути в невзвешенных графах", description: "Как BFS используется для поиска кратчайших путей в невзвешенных графах.", frequency: "Нечасто" },
          { title: "DSU", description: "Структура Disjoint Set Union, позволяющая добавлять ребра и проверять связность вершин.", frequency: "Довольно часто" },
          { title: "Топологическая сортировка", description: "Порядок вершин DAG, при котором каждая вершина посещается раньше своих потомков.", frequency: "Редко" },
          { title: "Кратчайшие пути с неотрицательными весами", description: "Bellman-Ford, Floyd-Warshall и Dijkstra.", frequency: "Нечасто" },
          { title: "Минимальные остовные деревья", description: "Поиск подмножества ребер связного неориентированного взвешенного графа с минимальной суммарной стоимостью.", frequency: "Нечасто" },
        ],
      },
      {
        title: "Структуры данных",
        progress: "0/65",
        modules: [
          { title: "Дополнительные операции в отсортированных множествах", description: "Поиск следующего меньшего или большего элемента и работа с итераторами.", frequency: "Нечасто" },
          { title: "(Опционально) Отсортированные множества с компараторами", description: "Использование пользовательских компараторов в контейнерах стандартной библиотеки.", frequency: "Редко" },
          { title: "Стеки", description: "Структура данных, где вставка и удаление разрешены только с одного конца.", frequency: "Редко" },
          { title: "Скользящее окно", description: "Поддержание данных по последовательным подмассивам.", frequency: "Нечасто" },
          { title: "Point Update Range Sum", description: "Дерево отрезков, Binary Indexed Tree и Order Statistic Tree в C++.", frequency: "Довольно часто" },
        ],
      },
      {
        title: "Деревья",
        progress: "0/38",
        modules: [
          { title: "Техника Euler Tour", description: "Превращение дерева в массив для удобных запросов и обновлений поддеревьев.", frequency: "Нечасто" },
          { title: "DP на деревьях: введение", description: "Использование поддеревьев как подзадач.", frequency: "Нечасто" },
          { title: "DP на деревьях: все корни", description: "Tree DP задачи с rerooting.", frequency: "Редко" },
        ],
      },
      {
        title: "Дополнительные темы",
        progress: "0/35",
        note: "Редко требуется.",
        modules: [
          { title: "Хеширование", description: "Быстрая проверка равенства подстрок или множеств с небольшой вероятностью ошибки.", frequency: "Редко" },
          { title: "(Опционально) Hashmaps", description: "Поддержание коллекций различных элементов с помощью хеширования.", frequency: "Редко" },
          { title: "Meet In The Middle", description: "Задачи, где пространство поиска делится на две части.", frequency: "Редко" },
          { title: "Оптимизация унимодальных функций", description: "Тернарный или бинарный поиск моды унимодальной функции.", frequency: "Редко" },
        ],
      },
      {
        title: "Завершение",
        progress: "0/33",
        note: "Поздравляем: вы дошли до конца раздела.",
        modules: [
          { title: "Дополнительная практика для USACO Gold", description: "Финальные советы для Gold и дополнительные тренировочные задачи." },
        ],
      },
    ],
  },
  {
    slug: "platinum",
    label: "Platinum",
    title: "Platinum",
    sourceUrl: "https://usaco.guide/plat",
    accent: "platinum",
    intro: [
      "Темы ниже не являются исчерпывающим списком для этого дивизиона.",
      "Контестные задачи могут включать темы, которых нет в guide, или темы из других дивизионов.",
      "Некоторые низкочастотные темы вынесены в Advanced.",
    ],
    moduleCount: 23,
    problemCount: 269,
    groups: [
      {
        title: "Запросы на отрезках",
        progress: "0/78",
        modules: [
          { title: "Дополнительные применения дерева отрезков", description: "Спуск по дереву отрезков и некоммутативные combiner-функции.", frequency: "Довольно часто" },
          { title: "Range Queries со sweep line", description: "Решение 2D задач на сетке через одномерные range queries.", frequency: "Нечасто" },
          { title: "Range Update Range Query", description: "Ленивые обновления в дереве отрезков и две Fenwick tree вместе.", frequency: "Редко" },
          { title: "Разреженные деревья отрезков", description: "Запросы на больших диапазонах.", frequency: "Редко" },
          { title: "2D Range Queries", description: "Расширение range queries на 2D и выше.", frequency: "Редко" },
          { title: "Divide & Conquer - SRQ", description: "Divide & Conquer для offline или online запросов на статическом массиве.", frequency: "Редко" },
          { title: "Sqrt-декомпозиция", description: "Разбиение данных на небольшие блоки для ускорения обработки.", frequency: "Редко" },
        ],
      },
      {
        title: "Деревья",
        progress: "0/75",
        modules: [
          { title: "Binary Jumping", description: "Эффективный поиск предков вершины.", frequency: "Довольно часто" },
          { title: "Small-To-Large Merging", description: "Способ эффективно сливать два множества.", frequency: "Редко" },
          { title: "Heavy-Light Decomposition", description: "Запросы и обновления на пути и поддереве.", frequency: "Редко" },
          { title: "Centroid Decomposition", description: "Декомпозиция дерева для вычислений на путях.", frequency: "Редко" },
          { title: "Virtual Tree", description: "Сжатие дерева до только необходимых вершин.", frequency: "Не встречалось" },
          { title: "Kruskal Reconstruction Tree", description: "Декомпозиция алгоритма Краскала для задач о минимальных и максимальных весах ребер.", frequency: "Редко" },
        ],
      },
      {
        title: "Геометрия",
        progress: "0/56",
        modules: [
          { title: "Геометрические примитивы", description: "Базовая настройка для геометрических задач.", frequency: "Редко" },
          { title: "Sweep Line", description: "Введение в заметающую прямую.", frequency: "Редко" },
          { title: "Convex Hull", description: "Наименьший выпуклый многоугольник, содержащий множество точек на сетке.", frequency: "Нечасто" },
          { title: "Convex Hull Trick", description: "Способ искать максимум или минимум среди нескольких выпуклых функций в заданных точках.", frequency: "Нечасто" },
        ],
      },
      {
        title: "Разные темы",
        progress: "0/52",
        modules: [
          { title: "Принцип включений-исключений", description: "Техника подсчета, обобщающая формулу размера объединения n конечных множеств.", frequency: "Редко" },
          { title: "Возведение матрицы в степень", description: "Многократное умножение квадратной матрицы самой на себя.", frequency: "Редко" },
          { title: "(Опционально) Bitsets", description: "Примеры того, как bitset дает неожиданные решения в недавних задачах USACO.", frequency: "Редко" },
          { title: "Divide & Conquer - DP", description: "Использование Divide & Conquer как оптимизации DP.", frequency: "Редко" },
          { title: "Sum over Subsets DP", description: "Эффективное решение subset sum задач с помощью DP.", frequency: "Нечасто" },
        ],
      },
      {
        title: "Завершение",
        progress: "0/8",
        modules: [
          { title: "Дополнительная практика для USACO Platinum", description: "Финальные советы для Platinum и дополнительные тренировочные задачи." },
        ],
      },
    ],
  },
  {
    slug: "advanced",
    label: "Advanced",
    title: "Advanced",
    sourceUrl: "https://usaco.guide/adv",
    accent: "advanced",
    intro: [
      "Некоторые из этих тем не появлялись в Platinum и, вероятно, никогда не появятся, например Matroid Intersection.",
      "Другие темы встречались в старом Gold или Platinum очень редко, например BCC и Suffix Array.",
    ],
    moduleCount: 40,
    problemCount: 377,
    groups: [
      {
        title: "Структуры данных",
        progress: "0/50",
        modules: [
          { title: "Max Suffix Query только со вставками", description: "Решение задачи USACO Gold - Springboards.", frequency: "Редко" },
          { title: "Wavelet Tree", description: "Эффективные запросы k-го минимума на подмассиве.", frequency: "Не встречалось" },
          { title: "Подсчет минимумов деревом отрезков", description: "Запрос минимума и количества его вхождений на отрезке.", frequency: "Не встречалось" },
          { title: "Segment Tree Beats", description: "Операции chmin и chmax на диапазоне.", frequency: "Редко" },
          { title: "Персистентные структуры данных", description: "Что если структуры данных могут путешествовать во времени?", frequency: "Редко" },
          { title: "Treaps", description: "Рандомизированное бинарное дерево поиска.", frequency: "Нечасто" },
        ],
      },
      {
        title: "Выпуклость",
        progress: "0/33",
        modules: [
          { title: "LineContainer", description: "Convex containers.", frequency: "Редко" },
          { title: "Лагранжева релаксация", description: "Также известна как Aliens Trick.", frequency: "Редко" },
          { title: "Slope Trick", description: "Способ манипулировать кусочно-линейными выпуклыми функциями; включает простое решение USACO Landscaping.", frequency: "Редко" },
        ],
      },
      {
        title: "Графы",
        progress: "0/84",
        modules: [
          { title: "Кратчайшие пути с отрицательными весами", description: "Возвращаемся к Bellman-Ford и Floyd-Warshall.", frequency: "Не встречалось" },
          { title: "Эйлеровы обходы", description: "Посещение каждого ребра графа ровно один раз.", frequency: "Не встречалось" },
          { title: "BCC и 2CC", description: "Двусвязные компоненты и компоненты реберной двусвязности.", frequency: "Редко" },
          { title: "Сильно связные компоненты", description: "Подмножества вершин ориентированного графа, где каждая вершина достижима из каждой другой.", frequency: "Редко" },
          { title: "Offline Deletion", description: "Удаление из неамортизированных структур данных только со вставками.", frequency: "Не встречалось" },
          { title: "Формула Эйлера", description: "Формула для поиска числа граней в планарном графе.", frequency: "Редко" },
          { title: "Critical", description: "Поиск вершин, которые обязательно нужно посетить на любом пути.", frequency: "Редко" },
          { title: "Link Cut Tree", description: "Динамические операции над корневым лесом.", frequency: "Редко" },
        ],
      },
      {
        title: "Динамическое программирование",
        progress: "0/24",
        modules: [
          { title: "DP на деревьях: объединение поддеревьев", description: "Продвинутый прием для объединения состояний поддеревьев.", frequency: "Редко" },
          { title: "DP по сломанному профилю", description: "Динамическое программирование по состояниям границы сетки.", frequency: "Редко" },
          { title: "Дополнительные оптимизации DP", description: "Дополнительные техники и оптимизации DP, например оптимизация Кнута.", frequency: "Редко" },
        ],
      },
      {
        title: "Потоки",
        progress: "0/30",
        modules: [
          { title: "Максимальный поток", description: "Введение в максимальный поток, включая поток с нижними границами.", frequency: "Редко" },
          { title: "Минимальный разрез", description: "Разрез минимальной пропускной способности.", frequency: "Редко" },
          { title: "Поток с нижними границами", description: "Модель потока, где у ребер есть нижние ограничения.", frequency: "Не встречалось" },
          { title: "Минимальная стоимость потока", description: "Неравенство треугольника, алгоритм Джонсона и min-cost flow.", frequency: "Редко" },
        ],
      },
      {
        title: "Многочлены",
        progress: "0/12",
        modules: [
          { title: "Введение в FFT", description: "Быстрое умножение многочленов.", frequency: "Не встречалось" },
          { title: "Более сложные операции с FFT", description: "Продвинутые операции над многочленами через FFT.", frequency: "Не встречалось" },
        ],
      },
      {
        title: "Строки",
        progress: "0/62",
        modules: [
          { title: "Поиск в строке", description: "Алгоритмы Кнута-Морриса-Пратта, Z-функция и несколько связанных тем.", frequency: "Редко" },
          { title: "Суффиксный массив", description: "Быстрая сортировка суффиксов строки и ее применения.", frequency: "Редко" },
          { title: "Суффиксные структуры строк", description: "Суффиксные автоматы, суффиксные деревья и палиндромные деревья.", frequency: "Не встречалось" },
        ],
      },
      {
        title: "Разные темы",
        progress: "0/82",
        modules: [
          { title: "Расширенный алгоритм Евклида", description: "Нахождение коэффициентов Безу и работа с линейными диофантовыми уравнениями.", frequency: "Редко" },
          { title: "Числа Каталана", description: "Классическая последовательность подсчета комбинаторных объектов.", frequency: "Редко" },
          { title: "XOR Basis", description: "Линейный базис по xor для множества чисел.", frequency: "Редко" },
          { title: "Fracturing Search", description: "Простое решение Robotic Cow Herd, которое обобщается.", frequency: "Редко" },
          { title: "Теория игр", description: "Решение обычно двухигроковых игр для определения победителя.", frequency: "Не встречалось" },
          { title: "Префиксные суммы теоретико-числовых функций, часть 1", description: "Введение в свертку Дирихле.", frequency: "Не встречалось" },
          { title: "Префиксные суммы теоретико-числовых функций, часть 2", description: "Как считать простые числа.", frequency: "Не встречалось" },
          { title: "Пересечение матроидов", description: "Продвинутая тема комбинаторной оптимизации.", frequency: "Не встречалось" },
          { title: "Случайность", description: "Использование рандомизированных алгоритмов для решения задач.", frequency: "Не встречалось" },
          { title: "Интерактивные и коммуникационные задачи", description: "Советы и приемы для интерактивных и коммуникационных форматов.", frequency: "Редко" },
          { title: "Векторизация в C++", description: "Использование SIMD/векторизации для ускорения C++ кода.", frequency: "Не встречалось" },
        ],
      },
    ],
  },
];

export function getGuideSection(slug: string) {
  return guideSections.find((section) => section.slug === slug);
}
