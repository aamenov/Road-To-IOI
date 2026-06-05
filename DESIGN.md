# Design System - Road To IOI

Status: Fresh direction, USACO Guide-inspired
Date: 2026-06-06

## Product Context

- **What this is:** A Russian-first competitive programming guide for Kazakhstan school students preparing for olympiads, ICPC-style contests, and IOI-style progression.
- **Who it is for:** Beginners who need a clear entry point, strong regional/national students who need depth, and teachers running school clubs.
- **Project type:** Dense learning web app and documentation system, not a marketing site.
- **Primary reference:** USACO Guide. Match its information architecture, density, dark reading surfaces, progress vocabulary, module navigation, and contest-training seriousness. Do not copy its official branding or imply endorsement.

## Approved Shotgun Direction

Approved variant: **C - IOI Training Console**.

This means Road To IOI should bias toward the module reading experience as the product's trust anchor. The dashboard and division pages still follow USACO Guide patterns, but the strongest visual identity should come from:

- Fixed curriculum rail on module pages.
- Dense central article layout.
- Right table of contents.
- Source/resource tables.
- Code blocks and quizzes.
- Minimal decoration and fast scanning for advanced students.

The site should feel like a training console for serious olympiad preparation, not just a dashboard clone.

## Memorable Target

Road To IOI should feel like the Russian/Kazakhstan version of a serious olympiad training reference: dark, precise, structured, and deep enough that strong students trust it immediately.

The first impression should not be "school website." It should be "this is the place where I can systematically train for programming olympiads."

## Aesthetic Direction

- **Direction:** Competitive-programming documentation app.
- **Decoration level:** Minimal-functional. Structure, color, progress states, and code blocks carry the interface.
- **Mood:** Serious, technical, calm, and slightly intense.
- **Density:** High. Pages should be scannable and information-rich, closer to a training console and USACO Guide module page than to a SaaS landing page.

Hard rules:

- Use a dark app shell as the default identity.
- Keep Road To IOI visibly separate from USACO Guide.
- Never use generic hero gradients, floating blobs, or startup-style feature cards.
- Do not center everything. Most content should align to a strong grid.
- Use cards only when they represent actual UI objects: progress panels, resources, modules, path choices, glossary terms.
- Keep module pages document-like, with side navigation and a right table of contents on desktop.
- Preserve visited and unvisited link styling.
- Attribution must be visible in footer and module source notes.

## Information Architecture

Top navigation should mirror the mental model of USACO Guide:

- **Road To IOI** brand mark and wordmark.
- **Sections** dropdown: General, Bronze, Silver, Gold, Platinum, Advanced, IOI.
- **Problems**
- **Resources** dropdown: Glossary, Kazakhstan Olympiad Map, Teacher Plan, Attribution.
- **Contact**
- **Search**
- **Login** placeholder only until accounts exist.
- **Settings** for theme/language later.

Russian labels are the product default:

- `Разделы`
- `Задачи`
- `Ресурсы`
- `Связаться`
- `Поиск`
- `Войти`

Core pages:

- `/ru`: dashboard-style home.
- `/ru/start`: guided entry.
- `/ru/curriculum`: division overview and timeline.
- `/ru/modules/[slug]`: module reading page.
- `/ru/glossary`: terminology index.
- `/ru/teachers`: teacher/coach page.
- `/ru/olympiad-map`: Kazakhstan olympiad map.
- `/ru/attribution`: source and license.

## Page Contracts

### Home Dashboard

Purpose: route students back into modules quickly. The dashboard supports the training workflow; it should not become the main visual identity.

Required sections:

- Not-signed-in or local-progress notice.
- Wide "Welcome back" card with continue CTA.
- Activity heatmap surface.
- Statistics cards for modules and problems.
- Section cards for General, Bronze, Advanced/IOI.
- Recent modules.
- Attribution strip.

Avoid a marketing hero as the main first viewport. The home page should look like a learner dashboard.

### Division Page

Purpose: show roadmap depth and make topic order obvious.

Required layout:

- Strong division hero band, with Bronze using rust/bronze.
- Module and problem progress cards.
- Vertical timeline grouped by topic.
- Each module row shows title, short description, frequency/status, and updated/translation status.

### Module Page

Purpose: long-form learning with minimal distraction. This is the primary design surface and should receive the highest polish.

Desktop layout:

- Fixed left rail with brand, selected division, topic groups, and module links.
- Central reading column.
- Right table of contents.
- Top breadcrumb row with previous/home/division/current/next.
- Sign-in/local-progress card.
- Compact module progress control.
- Source/translation note near the title.
- Resources, code blocks, callouts, problems, quiz/progress sections.

Mobile layout:

- Top navigation remains available.
- Sidebar becomes a compact block above content or collapsible module list.
- Right TOC is hidden or collapsed.
- Reading column has no horizontal scroll except code blocks.

### Glossary

Purpose: remove terminology friction.

Required layout:

- Search always visible above results.
- Russian term first.
- English term second.
- Short explanation, example, and related modules.
- Kazakh field may be absent without visual gaps.

### Teacher Page

Purpose: make school-club adoption practical.

Required layout:

- 6-8 week plan.
- Mixed-level classroom guidance.
- Contest rhythm.
- Exact module links to assign.
- How to use Kazakhstan Olympiad Map.

## Typography

Use fonts with strong Cyrillic support and a technical reading feel.

- **Display / page titles:** Source Sans 3, 800-900 weight.
- **Body:** Source Sans 3, 400-600 weight.
- **UI labels:** Source Sans 3, 700-800 weight.
- **Data / small metadata:** IBM Plex Sans or Source Sans 3 with tabular numbers.
- **Code:** JetBrains Mono.

Loading strategy:

- Prefer self-hosted fonts for production.
- During scaffold, a font stack fallback is acceptable:
  `"Source Sans 3", "Segoe UI", "Noto Sans", Arial, sans-serif`
- Do not use Inter as the primary design recommendation.

Type scale:

- `xs`: 0.82rem / 13px - metadata, captions.
- `sm`: 0.94rem / 15px - side nav, labels.
- `base`: 1rem / 16px - app UI.
- `reading`: 1.15rem / 18px - module body.
- `h3`: 1.35rem / 22px.
- `h2`: 2rem / 32px.
- `h1`: clamp(2.6rem, 5vw, 4rem).

Line length:

- Module body: 65-80 characters.
- Navigation labels: no wrapping unless mobile.
- Code blocks: horizontal scroll is acceptable.

## Color

Approach: dark restrained palette with semantic accents.

Core tokens:

```css
--bg: #0f0f10;
--bg-deep: #080b12;
--nav: #101927;
--sidebar: #141b27;
--panel: #1c2a3d;
--panel-dark: #0e1625;
--panel-soft: #172235;
--line: #28364a;
--line-strong: #3b4b62;
--text: #f8fafc;
--muted: #b5c3d7;
--subtle: #8290a7;
--link: #8cbcff;
--visited: #b9a5ff;
--accent: #3b82f6;
--accent-strong: #2148d5;
--bronze: #8b270d;
--silver: #6b7280;
--gold: #b7791f;
--platinum: #4b5563;
--green: #00843d;
--amber: #b26b00;
--blue: #2446ce;
--purple: #3b0d56;
--code: #1c1c1d;
```

Usage:

- Page background: `--bg`.
- Header: `--nav`.
- Module sidebar: `--sidebar`.
- Cards and dashboard panels: `--panel`.
- Reading source cards: `--panel-dark`.
- Links/actions: `--link` and `--accent`.
- Bronze division hero: `--bronze`.
- Progress status: green completed, amber in progress, blue skipped, near-white not started.
- Callouts: amber for warning/beginner, purple for term/explanation.

Contrast:

- Body text must meet WCAG AA on dark surfaces.
- Muted text must stay readable, especially in Russian paragraphs.
- Do not rely on color alone for status.

## Layout

Approach: grid-disciplined app layout.

Spacing:

- Base unit: 8px.
- Dense app surfaces use 16-24px inner padding.
- Major sections use 48-80px vertical spacing.
- Module page side rail is intentionally dense.

Breakpoints:

- `<= 860px`: mobile stacked layout.
- `861px - 1240px`: collapse module page to single-column to avoid narrow reading.
- `> 1240px`: three-column module layout.

Desktop widths:

- Dashboard content max width: 1520px.
- Module article max width: 1040px.
- Reading paragraph max width: 78ch.
- Left module rail: 300-400px.
- Right TOC: 220-300px.

Radius:

- Default card radius: 8px.
- Buttons: 6px.
- Code blocks: 4px.
- Circular progress/status markers: full radius.

## Components

### Brand Mark

Use a circular graph-like mark: three nodes connected visually through position or subtle strokes. It can echo the reference pattern but must not copy the USACO Guide logo exactly.

### Header

- Sticky.
- Dark navy.
- Dense but touch-friendly.
- Dropdowns should look like app menus, not marketing mega menus.
- Search should feel like a command affordance.

### Progress Cards

USACO-like circular counters:

- Large colored circle.
- Number inside.
- Label below.
- Thin progress bar underneath.
- Total count aligned right.

### Timeline

- Vertical center line on desktop.
- Topic group label on the left.
- Module list on the right.
- Dots or nodes mark module positions.
- On mobile, collapse to a simple ordered list.

### Module Sidebar

- Sticky on desktop.
- Topic sections with h2 labels.
- Module links as vertical lists.
- Current module has left accent and brighter text.
- Bottom links for settings/contact can be added later.

### Right TOC

- Sticky.
- Uppercase small heading.
- Plain links, no cards.
- Use real anchors only.

### Code Blocks

- Dark code surface.
- JetBrains Mono.
- Language badge in bright yellow.
- Copy button can be added later.
- Lines should remain readable without decorative chrome.

### Callouts

Allowed callout types:

- `Пояснение`
- `Термин`
- `Для начинающих`
- `Предупреждение`

Callouts must include text labels/icons, not color alone.

## Motion

Approach: minimal-functional.

Use motion only for:

- Dropdown open/close.
- Progress state change.
- Search result filtering.
- Collapsible mobile navigation.

Timing:

- Micro: 80-120ms.
- Standard: 150-220ms.
- Avoid long animated entrances.

No decorative animated backgrounds.

## Accessibility

Requirements:

- One `h1` per page.
- Semantic `header`, `nav`, `main`, `aside`, and `footer`.
- Touch targets at least 44px.
- Keyboard focus must be visible on dark surfaces.
- Progress controls must announce state changes.
- Dropdowns must be keyboard reachable.
- Search input needs a visible label or accessible name.
- Module TOC links must target real anchors.
- External source links must be reachable by keyboard.

## Content Tone

Russian copy should be direct and serious.

Use:

- `Разделы`
- `Модули`
- `Задачи`
- `Прогресс`
- `Не начато`
- `В процессе`
- `Завершено`
- `Пропущено`

Avoid:

- Childish encouragement.
- Startup slogans.
- Overexplaining UI mechanics inside the app.
- Promising official USACO affiliation.

## Attribution And Licensing

Road To IOI must clearly state:

- Content is translated/adapted from USACO Guide where applicable.
- USACO Guide and the Competitive Programming Initiative are credited.
- Derivative translated content follows CC BY-NC-SA 4.0 unless permission changes.
- Road To IOI is not the official USACO Guide.

Attribution appears:

- In the footer.
- On `/ru/attribution`.
- In every translated module source note.

## Safe Choices

These intentionally follow USACO Guide because users in this category benefit from familiarity:

- Dark navy app shell.
- Division-based navigation.
- Progress cards and local progress states.
- Left rail plus right TOC on module pages.
- Timeline curriculum view.
- Dense resources/problems surfaces.

## Road To IOI Differentiators

These are where the design becomes its own product:

- Russian-first labels and typography tuned for Cyrillic.
- Kazakhstan olympiad progression map.
- Teacher/coach page for school clubs.
- Bilingual terminology system with future Kazakh field.
- Clear derivative attribution instead of pretending to be USACO Guide.

## Do Not Do

- Do not build a beige school portal.
- Do not build a glossy SaaS landing page.
- Do not use purple gradients as identity.
- Do not add decorative icon cards as a first-screen pattern.
- Do not hide attribution.
- Do not make every page a centered hero.
- Do not simplify advanced content visually so much that strong students distrust it.

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-06-06 | Start fresh toward a USACO Guide-inspired design system | User explicitly chose a fresh design direction but closer to `usaco.guide` |
| 2026-06-06 | Make the home page a learner dashboard, not a marketing hero | The reference product behaves like a guide app with progress and modules |
| 2026-06-06 | Keep Road To IOI separately branded | Required for trust, licensing, and avoiding implied USACO endorsement |
| 2026-06-06 | Approve shotgun variant C, IOI Training Console | User selected the denser module-first direction as the strongest visual target |
