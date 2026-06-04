# Road To IOI

Russian-first competitive programming guide for Kazakhstan olympiad students.

## Commands

```bash
bun install
bun run dev
bun run validate:content
bun run typecheck
bun run build
```

The first implementation is static-first: translated modules live in TypeScript
content files, glossary references are validated by `scripts/validate-content.mjs`,
and student progress is stored only in the browser.
