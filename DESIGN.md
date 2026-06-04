# Design: Road To IOI Russian Guide

Status: Engineering Reviewed
Date: 2026-06-04

## Goal

Build a Russian-first competitive programming learning website for Kazakhstan school students preparing for olympiads. The first version should be a separately branded derivative of USACO Guide: faithful translated content, preserved depth, and a guided entry layer that helps students choose where to start.

Kazakh localization should come after the Russian version proves the workflow, terminology, and content structure.

## Users

Primary users:

- Kazakhstan school students preparing for programming olympiads.
- Students who struggle with English explanations even when the algorithmic material is appropriate.
- Mixed ability learners: some are absolute beginners, while others already compete at regional or national level.

Secondary users:

- Teachers and coaches who need a structured Russian-language curriculum.
- School clubs that need a roadmap from beginner material toward IOI-style training.

## Core Problem

USACO Guide already provides a strong competitive programming roadmap, but English is a barrier for many Kazakhstan students. A direct translation helps, but a pure mirror risks losing beginners who do not yet know where they belong in the roadmap.

The product should therefore solve two problems at once:

1. Make high-quality CP explanations understandable in Russian.
2. Help students of different levels enter the same deep curriculum without feeling misplaced.

## Product Positioning

This is not initially a broad school platform. It is a Russian-language competitive programming guide for Kazakhstan students, based on USACO Guide, with separate branding and transparent attribution.

The site should not present itself as the official USACO Guide unless that relationship is explicitly approved by the original maintainers.

## License And Attribution

USACO Guide is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. The derivative site must:

- Credit USACO Guide and the Competitive Programming Initiative.
- Link to the original source repository and license.
- State that the Russian content is translated/adapted from USACO Guide.
- Remain non-commercial unless separate permission is obtained.
- Publish derivative content under the same license.
- Avoid implying endorsement by USACO Guide or CPI.

This should be visible in the footer and on a dedicated attribution page.

## Chosen Approach

Approach 2: Faithful Translation + Guided Entry.

Translate USACO Guide content faithfully, but add a thin Russian/Kazakhstan-specific onboarding layer:

- "Where should I start?" placement page.
- Russian glossary for CP terminology.
- Beginner notes where literal translation would be confusing.
- Level mapping for school olympiad preparation.
- Clear tracks for beginner, regional/national, and IOI-style progression.

The main curriculum should preserve USACO Guide's depth so advanced students do not feel constrained.

CEO review mode: Selective Expansion.

Accepted v1 expansions:

- Teacher/coach mode.
- Kazakhstan Olympiad Map.
- Translation Quality Pipeline.
- Local-first progress tracking.
- Bilingual terminology system.

Deferred:

- Placement diagnostic. Version 1 keeps static guided entry. A quiz-style diagnostic can come after the first translated slice proves value.

## Non-Goals For Version 1

- Do not build a full LMS.
- Do not add paid courses.
- Do not rewrite the whole curriculum around Kazakhstan olympiad stages yet.
- Do not add teacher dashboards before students can use the content.
- Do not translate Russian and Kazakh simultaneously.
- Do not create new problem archives unless needed for navigation or local context.

## Version 1 Scope

Version 1 should prove the localization workflow and the student entry experience.

Required:

- Separate brand shell.
- Attribution and license page.
- Russian language routing.
- Faithful translation structure for a small initial content slice.
- Glossary system for recurring CP terms.
- Guided entry page that routes students by level.
- Basic module navigation and reading experience.
- Teacher/coach page for school club usage.
- Kazakhstan Olympiad Map.
- Local-first progress tracking.
- Bilingual terminology system.
- Translation quality workflow and module status tracking.

Accepted first content slice:

1. Landing / guide overview.
2. "Where should I start?" guided entry.
3. Attribution/license page.
4. Teacher/coach page.
5. Kazakhstan Olympiad Map.
6. Glossary index.
7. 20-40 glossary terms.
8. One complete beginner path:
   - Intro to programming contest workflow.
   - Time complexity.
   - Input/output.
   - Basic problem-solving / simulation.
   - Loops/arrays review only if USACO source content requires it.
9. One complete Bronze topic module with problems and solution links.

## Guided Entry Design

The first page should ask students what describes them best:

- I know syntax but cannot solve olympiad problems yet.
- I can solve easy problems, but I do not know algorithms systematically.
- I already compete at regional/national level.
- I want IOI-style preparation.

Each answer should map to a clear first module and explain why that starting point is appropriate.

The language should be serious and school-appropriate, not childish. Beginners need clarity, but strong students should still feel that the site has depth.

## Information Architecture

Design review rating before this section: 5/10. The plan named the pages but did not define hierarchy or navigation. Version 1 should use this structure:

```text
Landing
  -> Guided Entry
      -> Beginner Path
      -> Bronze Module
      -> Kazakhstan Olympiad Map
  -> Curriculum
      -> Module Page
          -> Glossary Term
          -> Source Attribution
  -> Glossary
      -> Term Page
  -> Teacher/Coach
  -> Attribution / License
```

Persistent top-level navigation:

- Guide
- Start Here
- Curriculum
- Glossary
- For Teachers
- Olympiad Map

The first viewport has one job: make the product identity and starting action obvious. It should show:

1. Brand/product name.
2. One plain-language promise: Russian-language CP roadmap for Kazakhstan olympiad students.
3. Primary action: Start Here.

Do not lead with generic feature cards. The second screen can explain the three entry paths: beginner, regional/national, and IOI-style preparation.

## Page-Level Design Contracts

### Landing

Primary job: orient a student or teacher within 5 seconds.

Required hierarchy:

1. Brand and purpose.
2. Start Here action.
3. Three path previews: beginner, regional/national, IOI-style.
4. Trust/attribution note.
5. Teacher link.

### Guided Entry

Primary job: help students self-place without a quiz in v1.

Each path option should show:

- Who it is for.
- First recommended module.
- What the student should already know.
- What success looks like after the path.

### Curriculum / Module Page

Primary job: make long-form learning readable and source-traceable.

Required layout:

- Left or top navigation for module sequence.
- Main reading column optimized for long-form Russian text.
- Progress control with four local states.
- Glossary terms visually linked but not distracting.
- Source note near the module title or footer.
- Helper callouts clearly distinct from faithful translated content.

### Glossary

Primary job: reduce terminology friction.

Required layout:

- Search/filter.
- Russian term first.
- English term second.
- Short explanation.
- Example.
- Related modules.
- Optional Kazakh term field hidden or marked as future when empty.

### Teacher/Coach Page

Primary job: make school-club adoption obvious.

Required layout:

- 6-8 week plan.
- Mixed-level classroom guidance.
- Suggested contest rhythm.
- Links into the exact modules to assign.
- Notes on using the Kazakhstan Olympiad Map.

## Interaction States

Every v1 screen needs explicit visible states:

| Feature | Loading | Empty | Error | Success | Partial |
|---------|---------|-------|-------|---------|---------|
| Guided entry | Skeleton or stable option list placeholder | Show all paths with "not sure? start with Beginner" fallback | Explain that paths could not load and link to Curriculum | Selected path is highlighted and next module CTA appears | If a module is missing, show nearest available translated module |
| Curriculum list | Stable list placeholder | Explain no translated modules are ready yet and link to Attribution/roadmap | Show retry and plain text fallback | Modules grouped by path with status indicators | Untranslated modules appear disabled with source link |
| Module page | Reading skeleton preserving layout width | Show "module not translated yet" with source link | Show readable error, source link, and route back to Curriculum | Content, progress control, glossary links, source note visible | Missing helper notes should not block faithful translated text |
| Glossary | Search input and term-list placeholder | "No term found" plus suggest browsing all terms | Keep current query, show retry and all terms link | Term details and related modules visible | Terms can omit Kazakh field without visual breakage |
| Progress tracking | Existing state remains visible while saving | New visitor sees all modules as Not started | If local storage fails, explain progress is unavailable in this browser | State changes immediately and persists locally | If storage is cleared, user sees reset state without broken UI |
| Teacher/coach page | Static content placeholder | Not applicable; page always has starter plan | Show fallback text if module links fail | Plan and module links visible | Missing module links are labeled "coming later" |

Empty states must be useful, not dead ends. Each empty state needs one primary next action.

## User Journey And Emotional Arc

| Step | User does | User likely feels | Design response |
|------|-----------|-------------------|-----------------|
| 1 | Lands on site | "Is this for me?" | First viewport states Kazakhstan, Russian, CP olympiad preparation, and Start Here |
| 2 | Chooses a path | Uncertain about level | Path cards use concrete prerequisites and outcomes, not vague labels |
| 3 | Opens first module | Relief or intimidation | Reading layout is calm, glossary terms are available, helper notes are labeled |
| 4 | Marks progress | Small sense of momentum | Local progress update is immediate and visible |
| 5 | Hits unknown term | Friction | Glossary opens without losing reading context |
| 6 | Teacher checks site | "Can I use this Monday?" | Teacher page gives a 6-8 week plan and mixed-level instructions |
| 7 | Strong student scans depth | Skeptical about beginner branding | Advanced/IOI path is visible early and serious in tone |

5-second goal: user understands what the site is and where to start.

5-minute goal: user has chosen a path and opened the right first module.

5-year goal: the product feels like the trusted Russian/Kazakhstan reference for CP study, not a one-off translation dump.

## Visual System Direction

Design review rating before this section: 4/10. The plan had product direction but no visual system. The v1 UI should feel like a serious educational reference: calm, precise, and trustworthy.

Classifier: hybrid. The landing page is brand-forward, while curriculum, modules, glossary, and teacher pages are app/documentation UI.

Hard rules:

- Avoid generic SaaS feature grids as the first impression.
- Avoid purple/blue gradient startup styling.
- Avoid decorative icon-in-circle cards.
- Avoid centered everything.
- Avoid oversized rounded cards as the dominant layout.
- Use cards only for actual path choices, module tiles, and glossary entries.
- Keep module reading pages document-like, not dashboard-like.
- Preserve visited versus unvisited link distinction.

Typography:

- Choose real typefaces with strong Cyrillic support.
- Do not use `Inter`, `Roboto`, `Arial`, `system-ui`, or `-apple-system` as the primary visual identity.
- Body text must be at least 16px.
- Long-form module text should use a comfortable reading measure, roughly 65-80 characters per line on desktop.

Color:

- Define CSS variables for the color system.
- Use a restrained palette suitable for educational content.
- Use one clear accent color for actions and progress.
- Body text contrast must meet at least WCAG AA contrast.

Motion:

- Motion is optional in v1.
- If used, keep it functional: path selection, progress state change, glossary reveal.
- Do not use decorative floating shapes, blobs, or animated hero backgrounds.

## Responsive And Accessibility Requirements

Design review rating before this section: 3/10. The plan did not specify mobile, keyboard, or screen-reader behavior.

Responsive behavior:

- Mobile landing shows brand, promise, Start Here, then path options.
- Mobile module pages use top navigation and a collapsible module list; no permanent sidebar below tablet width.
- Desktop module pages may use a two-column layout: navigation/context plus reading column.
- Glossary search remains visible above term results on mobile.
- Teacher page keeps the week plan as a vertical sequence on mobile and may use a table/timeline on desktop.

Accessibility:

- All interactive targets must be at least 44px on touch devices.
- Every page must have one `h1` and logical heading order.
- Navigation, main content, and footer need semantic landmarks.
- Progress controls must be keyboard accessible and announce state changes.
- Glossary links must be understandable out of context.
- Helper callouts must not rely on color alone.
- Placeholder text must never be the only label.
- Module source/attribution links must be reachable by keyboard.

## Design Decisions Not In Scope For V1

- Full placement diagnostic: deferred until after first translated slice.
- Teacher dashboards/accounts: explicitly out of scope.
- Cloud-synced progress: explicitly out of scope.
- Visual redesign for Kazakh localization: wait until Russian workflow works.
- Automated upstream sync UI: not in v1.

## What Already Exists

- `DESIGN.md` is the design source of truth for this empty project.
- No existing app UI patterns exist in this repository yet.
- No `CLAUDE.md`, `TODOS.md`, or prior design review artifacts were found.
- USACO Guide provides source content structure and product reference, but the new frontend should not blindly copy its visual design.

## Content Rules

Translation should be faithful by default.

The main translated module text stays faithful to USACO Guide. Beginner support should live in a separate helper layer, not as silent rewrites.

Allowed additions:

- Translator notes for terminology.
- Short prerequisite reminders.
- Kazakhstan-specific level labels.
- Glossary links.
- Clarifications when an English idiom or USACO-specific framing would confuse Russian-speaking students.
- Clearly labeled helper callouts: `Пояснение`, `Термин`, and `Для начинающих`.

Avoid:

- Changing algorithms or problem recommendations without a reason.
- Rewriting advanced modules into beginner material.
- Mixing Kazakh translation into the Russian launch.
- Hiding source attribution.
- Silently changing the meaning of USACO Guide explanations during translation.

## Translation Quality Pipeline

Every translated module should carry a status block:

- `Draft translation`
- `Russian edited`
- `CP reviewed`
- `Student tested`
- `Glossary checked`
- `Ready`

For v1, a module should not be marked ready unless it has:

- One Russian cleanup pass.
- One CP correctness pass.
- One glossary consistency pass.

Student testing is required for the first beginner path, then can be sampled after the workflow stabilizes.

## Bilingual Terminology System

The terminology layer should track recurring competitive programming terms with:

- Russian term.
- English term.
- Short Russian explanation.
- Example usage.
- Optional Kazakh term later.
- Related modules.

Examples include greedy, prefix sums, invariant, graph traversal, dynamic programming, proof, and time complexity.

This system is part of v1 because the English barrier is often terminology, not just long-form prose.

## Progress Tracking

Progress tracking in v1 is local-first only.

Supported states:

- Not started.
- In progress.
- Completed.
- Skipped.

Use browser-local storage or an equivalent local mechanism. Do not add a new account system, teacher dashboard, cloud sync, or Firebase dependency for v1 progress tracking.

## Teacher/Coach Mode

Version 1 includes a lightweight teacher-facing page: "How to use this in a school club."

It should include:

- A 6-8 week starter plan.
- Suggested modules for mixed-level groups.
- How to combine lessons with contests.
- How to support beginners without slowing advanced students.
- How to use the Kazakhstan Olympiad Map.

Do not build teacher accounts or dashboards in v1.

## Kazakhstan Olympiad Map

Version 1 includes a local progression map:

- Beginner.
- District.
- City.
- Regional.
- National.
- IOI-style preparation.

This does not rewrite the curriculum. It maps the translated guide onto a Kazakhstan-relevant progression so students and coaches understand where modules fit.

## Technical Direction

The practical starting point is to build a new frontend and reuse USACO Guide's content structure, rather than maintaining a close fork of the existing app.

Current USACO Guide tech stack includes:

- React
- Next.js
- TypeScript
- Tailwind CSS
- MDX
- Firebase

Engineering review finding: USACO Guide is now a large Next.js application with a prebuild content indexing phase, SQLite-backed content queries, Firebase progress synchronization, Algolia indexing, Storybook, and many feature-specific dependencies. That architecture is appropriate for the full USACO Guide, but it is too heavy for this v1. Use it as a source reference, not as the app base.

The new frontend direction means:

- More effort than a direct fork.
- Better separate branding and localization architecture.
- Less risk of fighting USACO Guide's existing app architecture.
- Upstream sync becomes a content workflow problem, not a Git merge problem.
- Attribution and source provenance must be explicit in the content model.

## Engineering Architecture

Engineering review status: clear with tasks. The v1 architecture should be static-first.

Recommended stack:

- Next.js.
- TypeScript.
- MDX or MDX-compatible content files.
- Tailwind CSS or plain CSS modules with explicit design tokens.
- Build-time content validation.
- Browser `localStorage` through a small progress adapter.

Do not copy USACO Guide's full SQLite indexing, Firebase user data context, Algolia search, Monaco editor, Storybook, or benchmarking stack into v1 unless a later implementation review proves the need.

High-level architecture:

```text
content/modules/*.mdx
content/glossary/*.json|yaml
content/maps/*.json|yaml
        |
        v
build-time content loader + schema validation
        |
        +--> static route data
        +--> module graph
        +--> glossary index
        +--> attribution/source map
        |
        v
Next.js pages/components
        |
        +--> local progress adapter -> browser localStorage
```

Core app boundaries:

- `content/`: translated source-linked curriculum and glossary data.
- `src/content/`: schema validation, loaders, module graph, source provenance helpers.
- `src/progress/`: local-first progress adapter and migration/versioning.
- `src/components/`: reusable UI components for layout, module pages, glossary, callouts, and progress controls.
- `src/app/` or `src/pages/`: routes.

## Content Schema

Version 1 should use source-linked translated content. Each Russian module should have metadata similar to:

```yaml
id: "time-complexity"
title: "..."
description: "..."
language: "ru"
path:
  track: "beginner"
  order: 20
source:
  title: "Original USACO Guide module title"
  url: "https://usaco.guide/..."
  repoPath: "content/..."
  sourceCommit: "..."
license: "CC BY-NC-SA 4.0"
translation:
  status: "draft | reviewed | ready"
  translatedBy: []
  reviewedBy: []
  glossaryChecked: false
  cpReviewed: false
  studentTested: false
prerequisites: []
glossaryTerms: []
problems: []
```

Do not build an automated upstream sync/importer in v1. Translate selected modules manually with source metadata.

Validation rules:

- `id`, `title`, `description`, `language`, `source.url`, `source.repoPath`, `source.sourceCommit`, `license`, and `translation.status` are required.
- `language` is `ru` for v1.
- `translation.status: ready` is invalid unless Russian cleanup, CP review, and glossary check are complete.
- `source.url` must be a valid URL.
- `sourceCommit` must be a commit SHA or explicit `unknown` during draft only.
- Module IDs must be stable, lowercase, and URL-safe.
- Glossary term references must resolve.
- Prerequisite module IDs must resolve or be marked `comingLater`.

## Data Flow

Module render flow:

```text
MDX module file
  -> parse frontmatter
  -> validate schema
  -> compile/render MDX
  -> collect glossary references
  -> build source attribution block
  -> render module page
```

Progress flow:

```text
User clicks progress state
  -> ProgressControl validates next state
  -> progress adapter writes {schemaVersion, updatedAt, modules}
  -> UI updates optimistically
  -> storage failure falls back to in-memory state + visible warning
```

Glossary flow:

```text
Glossary data
  -> validate terms
  -> build search/filter index in memory
  -> module page links terms
  -> glossary term page links back to modules
```

Attribution flow:

```text
module.source metadata
  -> module source note
  -> attribution/license page source list
  -> footer license link
```

## Progress Adapter

Do not let progress tracking leak into the whole app. Implement it behind a narrow interface:

```ts
type ProgressState = "not-started" | "in-progress" | "completed" | "skipped";

type ProgressStore = {
  get(moduleId: string): ProgressState;
  set(moduleId: string, state: ProgressState): void;
  list(): Record<string, ProgressState>;
  reset(): void;
};
```

Storage shape:

```json
{
  "schemaVersion": 1,
  "updatedAt": "2026-06-04T00:00:00.000Z",
  "modules": {
    "time-complexity": "completed"
  }
}
```

Failure rules:

- If `localStorage` is unavailable, progress controls remain visible but show a clear browser-storage warning.
- Invalid stored states are ignored and reset to `not-started`.
- Unknown module IDs are ignored during reads.
- Storage schema migrations must be explicit by `schemaVersion`.

## Error Handling And Failure Modes

| Codepath | What can go wrong | Handling | Test |
|----------|-------------------|----------|------|
| Content loader | Missing required frontmatter | Fail build with module path and missing field | Schema validation unit test |
| Content loader | Broken prerequisite/glossary reference | Fail build unless explicitly marked `comingLater` | Fixture with broken reference |
| MDX render | Unsupported MDX component copied from USACO Guide | Fail build or render explicit unsupported-component warning in draft | Fixture using unsupported component |
| Attribution | Missing source URL or license | Fail build for ready modules | Metadata validation test |
| Progress adapter | `localStorage` unavailable or quota exceeded | Keep in-memory state and show warning | Mock storage throwing errors |
| Progress adapter | Corrupt stored JSON | Ignore corrupt data, reset, and avoid crash | Corrupt JSON unit test |
| Glossary | Search returns zero terms | Render useful empty state with all-terms link | Component test |
| Module route | Requested module not translated | Render coming-later page with original source link | Route/component test |

Critical gap resolved by this review: no v1 user-visible flow should fail silently.

## Security And Privacy

V1 should not collect accounts, emails, classroom data, or analytics by default.

Security requirements:

- Treat MDX content as trusted repository content, not user input.
- Do not support arbitrary user-authored MDX in v1.
- Avoid `rehype-raw` unless there is a specific reviewed need.
- External links from translated content should use safe link attributes where applicable.
- No Firebase, no server-side secrets, and no API write endpoints in v1.
- Local progress data stays in the user's browser and is not transmitted.

## Performance Requirements

- Generate static pages for the accepted v1 content slice.
- Keep client JavaScript small on module reading pages.
- Do not ship Monaco/editor, Firebase, Algolia, or database clients in v1.
- Glossary search can be client-side over 20-40 terms.
- Module pages should remain readable without progress hydration completing.

Performance budget for v1:

- Module page should render useful static content before any client progress code runs.
- Progress tracking should be a small client-only island/component.
- No global client state library unless a later feature requires it.

## Test Plan

Minimum automated tests before v1 launch:

- Content schema validation tests.
- Fixture tests for ready/draft module status gates.
- Glossary reference resolution tests.
- Prerequisite/module graph resolution tests.
- Progress adapter tests for normal, unavailable storage, quota error, corrupt JSON, and migration.
- Component tests for guided entry path cards, progress control, module source note, glossary empty state, and helper callouts.
- Accessibility checks for navigation, progress controls, glossary search, and module page landmarks.

Minimum manual QA:

- 375px mobile viewport.
- Desktop module reading layout.
- Keyboard-only navigation.
- Disable local storage and verify graceful progress fallback.
- Open untranslated module route and verify source link.
- Verify footer, license page, and module-level source notes all exist.

## Deployment And Rollout

V1 should deploy as a static or mostly-static site on a simple host such as Vercel, Netlify, or GitHub Pages-compatible static hosting. Avoid backend infrastructure until accounts, sync, or contribution workflows become real requirements.

Rollout order:

1. Content schema and validation.
2. Static routes and layout.
3. Attribution/license surface.
4. Module rendering.
5. Glossary.
6. Local-first progress.
7. Teacher/coach and Olympiad Map pages.
8. Pilot release.

CI should run:

- Type checking.
- Linting/format check.
- Content validation.
- Unit/component tests.
- Production build.

## Engineering Decisions Not In Scope For V1

- Automated upstream importer/sync.
- SQLite content database.
- Firebase/auth/cloud progress.
- Algolia search.
- Monaco editor or in-browser code runner.
- Teacher dashboards.
- User submissions or public comments.
- Full offline/PWA mode.
- Translation contribution workflow with accounts.

## Risks

- Full translation scope is large; translating everything before launch will stall the project.
- Faithful translation may still be too hard for beginners without the guided entry layer.
- License non-compliance would create avoidable trust and legal problems.
- Separate branding can look dishonest if attribution is weak.
- A new frontend increases implementation effort compared with a fork.
- Without source metadata, translated modules can lose provenance and become hard to audit.
- Progress tracking can bloat v1 if it becomes an account/cloud-sync project.
- Translation status can become bureaucratic unless the ready gates stay minimal.
- Copying USACO Guide's full app architecture would import unnecessary operational complexity.
- Unsupported MDX components from USACO source content can break the new frontend unless detected at build time.
- Local progress can silently fail in restricted browsers unless storage errors are surfaced.

## Success Criteria

Version 1 succeeds if:

- A student can open the Russian site and understand where to start within 60 seconds.
- A beginner can complete the first translated path without needing English.
- A stronger student can see that advanced content exists and is not simplified away.
- Attribution is clear and license-compliant.
- The translation workflow is repeatable for the next module.
- A teacher can understand how to use the site for a 6-8 week school club.
- Each ready module has source metadata and minimum review gates.
- Progress tracking works locally without accounts.

## The Assignment

Before implementing the full clone, create a 1-week pilot:

1. Pick 5-8 Russian-speaking Kazakhstan students across beginner and regional/national levels.
2. Show them a translated first module and the guided entry page.
3. Watch silently as they choose where to start.
4. Record where they hesitate, what terms confuse them, and whether stronger students trust the roadmap.
5. Use those observations to decide the first 10 modules to translate.

Do not ask only whether they "like it." Watch whether they can actually use it.

## Next Implementation Plan

1. Inspect `cpinitiative/usaco-guide` to understand module structure, metadata, and source URLs.
2. Define the new frontend content schema for source-linked Russian modules.
3. Implement content validation before writing most UI.
4. Choose typefaces, color tokens, responsive breakpoints, and base layout primitives before building pages.
5. Scaffold the separate brand frontend.
6. Add attribution/license handling globally and per module.
7. Build module rendering and unsupported-MDX detection.
8. Build landing, guided entry, teacher/coach page, Kazakhstan Olympiad Map, glossary, and local-first progress tracking.
9. Implement interaction states and accessibility requirements for each v1 screen.
10. Translate the accepted v1 content slice with source metadata.
11. Apply the translation quality pipeline to the first path.
12. Run automated validation, accessibility checks, production build, and manual QA.
13. Run the student and teacher pilot before expanding the translation scope.

## Implementation Tasks

Synthesized from design review findings. Each task derives from a specific finding above.

- [ ] **T1 (P1, human: ~2h / CC: ~20min)** - Information architecture - Implement the v1 page hierarchy and persistent navigation
  - Surfaced by: Information Architecture - the plan had pages but not what users see first, second, and third.
  - Files: frontend routes/layout/navigation once scaffolded.
  - Verify: desktop and mobile navigation answer what site this is, where the user is, and where to start.

- [ ] **T2 (P1, human: ~2h / CC: ~20min)** - Interaction states - Add loading, empty, error, success, and partial states for v1 screens
  - Surfaced by: Interaction State Coverage - empty and error states were unspecified.
  - Files: guided entry, curriculum, module page, glossary, progress control, teacher page.
  - Verify: manually force empty/missing/error data and confirm each state gives a next action.

- [ ] **T3 (P2, human: ~2h / CC: ~15min)** - Visual system - Define typography, color tokens, and anti-slop rules before page implementation
  - Surfaced by: AI Slop Risk and Design System Alignment - the plan lacked concrete visual constraints.
  - Files: global CSS/theme configuration/design tokens once scaffolded.
  - Verify: no default primary font stack, no generic SaaS card-grid first impression, body text AA contrast.

- [ ] **T4 (P1, human: ~2h / CC: ~20min)** - Accessibility and responsive design - Build mobile and keyboard behavior into the page specs
  - Surfaced by: Responsive & Accessibility - mobile nav, touch targets, landmarks, and progress announcements were unspecified.
  - Files: layout, module navigation, progress controls, glossary search, teacher plan.
  - Verify: keyboard-only navigation, 375px mobile viewport check, semantic landmarks, visible labels.

- [ ] **T5 (P1, human: ~3h / CC: ~30min)** - Content schema - Implement source-linked module schema and build-time validation
  - Surfaced by: Engineering Architecture - translated modules need provenance, status gates, and broken-reference detection.
  - Files: content schema, content loader, validation fixtures.
  - Verify: invalid ready module, missing source URL, broken glossary term, and broken prerequisite all fail validation.

- [ ] **T6 (P1, human: ~2h / CC: ~20min)** - Progress adapter - Implement local-first progress behind a narrow storage interface
  - Surfaced by: Progress Adapter - progress must not become Firebase/auth architecture in v1.
  - Files: progress adapter, progress control, storage tests.
  - Verify: normal write, unavailable storage, quota error, corrupt JSON, unknown module, and schema migration tests pass.

- [ ] **T7 (P1, human: ~2h / CC: ~20min)** - MDX safety - Detect unsupported USACO MDX components at build time
  - Surfaced by: Error Handling - selected USACO content may reference components the new frontend does not implement.
  - Files: MDX loader/compiler, allowed component registry, validation fixtures.
  - Verify: fixture with unsupported component fails build or is blocked from ready status.

- [ ] **T8 (P2, human: ~2h / CC: ~15min)** - CI and rollout - Add typecheck, lint, content validation, tests, and production build to CI
  - Surfaced by: Deployment and Rollout - v1 needs repeatable validation before content expansion.
  - Files: package scripts, CI workflow once repository is scaffolded.
  - Verify: CI fails on invalid content and passes on the v1 fixture set.

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/plan-ceo-review` | Scope & strategy | 1 | CLEAR_WITH_DECISIONS | Approach B selected; selective expansion accepted 5 v1 additions, deferred diagnostic, changed technical strategy to new frontend with source-linked content |
| Codex Review | `codex review` | Independent 2nd opinion | 0 | not run | Not applicable yet |
| Eng Review | `/plan-eng-review` | Architecture & tests | 1 | CLEAR_WITH_TASKS | Static-first Next/TS/MDX architecture selected; added content schema, data flows, progress adapter, failure modes, security/privacy, performance, test plan, rollout, and 4 engineering tasks |
| Design Review | `/plan-design-review` | UI/UX gaps | 1 | CLEAR_WITH_TASKS | Initial score 5/10 -> 8/10; added IA, page contracts, interaction states, journey, visual system, responsive/a11y, and 4 implementation tasks |
| DX Review | `/plan-devex-review` | Developer experience gaps | 0 | optional later | Translation workflow may need DX review once tooling exists |

UNRESOLVED: exact typefaces and color tokens remain design implementation decisions.
VERDICT: CEO + DESIGN + ENG REVIEW CLEARED WITH TASKS; ready to implement v1 scaffold.
