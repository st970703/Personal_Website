# PROJECT KNOWLEDGE BASE

**Generated:** 2026-07-10  
**Commit:** 0c4c7af  
**Branch:** master

## OVERVIEW

Single-page personal portfolio for Mike Lee, a Brisbane software engineer. The site introduces his work to a general audience while giving potential employers concrete evidence of backend, integration, and operational software experience.

Stack: React 19, TypeScript, Vite, and one global CSS file. There is no server, router, component library, test runner, linter, or deployment configuration.

## PRODUCT INTENT

- Lead with plain-language outcomes; technical detail should support the story rather than read like a keyword list.
- Serve both non-technical visitors and hiring reviewers: keep the page scannable, credible, and specific.
- Preserve the current project-led narrative: practical software, physical operations, measurable impact.
- Treat employment history, dates, metrics, and technology claims as factual content. Check source material before changing them; do not embellish.

## STRUCTURE

```text
./
├── index.html          # Vite HTML shell and #root mount point
├── DESIGN.md          # Visual design source of truth
├── src/
│   ├── main.tsx       # React mount and global CSS import
│   ├── App.tsx        # Entire page structure and contact links
│   ├── content.ts     # Typed projects, experience, and skills data
│   └── styles.css     # All tokens, layout, components, and breakpoints
├── package.json       # npm scripts and dependencies
├── tsconfig.json      # Strict TypeScript configuration
└── vite.config.ts     # Minimal React plugin configuration
```

`Additional_Resources.txt` and `Boeing_Mike_CV.docx` are untracked user-provided source material. Read them when validating biographical content; do not modify or commit them unless explicitly requested.

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Change page copy or sections | `src/App.tsx` | One named `App` component owns all markup |
| Change projects, roles, or skills | `src/content.ts` | Keep typed readonly arrays and stable display order |
| Change visual language | `DESIGN.md`, then `src/styles.css` | Update the design spec when intentionally changing the system |
| Change layout or responsive behavior | `src/styles.css` | Breakpoints currently live at 820px and 520px |
| Change startup behavior | `src/main.tsx`, `index.html` | `#root` is required; missing root throws explicitly |
| Change build behavior | `package.json`, `vite.config.ts`, `tsconfig.json` | Vite defaults are otherwise in use |

## CODE MAP

| Symbol | Type | Location | Role |
|--------|------|----------|------|
| `App` | function component | `src/App.tsx` | Renders header, all content sections, and footer |
| `Project` | type | `src/content.ts` | Shape for project evidence cards |
| `Experience` | type | `src/content.ts` | Shape for employment timeline items |
| `projects` | readonly data | `src/content.ts` | Drives the selected-work card grid |
| `experiences` | readonly data | `src/content.ts` | Drives the experience timeline |
| `skills` | readonly data | `src/content.ts` | Drives the tooling tag cloud |

Render flow: `index.html` -> `src/main.tsx` -> `App` -> `projects` / `experiences` / `skills`.

## CONVENTIONS

- Use npm; `package-lock.json` is authoritative.
- Keep the flat structure while the site remains this small. Do not create component, hook, utility, or state layers for one-off markup.
- Use named React components, strict TypeScript, readonly content shapes, and `as const` for static datasets.
- Use extensionless relative imports. No path aliases are configured.
- Match existing formatting: double quotes, no semicolons, trailing commas in multiline structures.
- Keep styling in `src/styles.css`: semantic kebab-case classes, `:root` custom-property tokens, plain CSS.
- Preserve semantic landmarks, accessible labels, visible keyboard focus, responsive layouts, and reduced-motion behavior.
- Use stable content-derived React keys; titles and company/role pairs currently provide them.

## DESIGN CONSTRAINTS

- The visual identity is a quiet engineering field notebook: warm paper surfaces, editorial headings, mono labels, and restrained color.
- Keep the 1160px content width, 4px spacing scale, border-based depth, and mobile-first single-column behavior unless the design direction changes.
- Accent color is for actions and field-note markers.
- Avoid shadows except a very light sticky-header edge.
- Motion is limited to opacity and transforms at 180ms ease-out; reduced-motion users must not receive decorative animation.

## PROJECT-SPECIFIC ANTI-PATTERNS

- Do not edit generated or local state: `dist/`, `node_modules/`, `.qa/screenshots/`, `.superpowers/`, or `.codegraph/`.
- Do not add a router, state manager, CSS framework, component library, or test stack without a requirement that needs it.
- Do not move structured portfolio data back into repeated JSX.
- Do not introduce claims or metrics that are not supported by the user's source material.
- Do not assume the copy remains evergreen; duration statements and current-role language can become stale.

## COMMANDS

```bash
npm ci
npm run dev
npm run build
npm run preview
```

`npm run build` runs `tsc --noEmit && vite build` and writes the static site to `dist/`. Preview expects an existing build. There is currently no lint or test command.

## VERIFICATION

- Run `npm run build` after source or configuration changes.
- For UI changes, inspect the rendered page at desktop and mobile widths, including anchor navigation, mail/GitHub links, keyboard focus, and reduced motion.
- Check factual copy against the supplied CV/resources when employment dates, experience duration, metrics, or skills change.

## NOTES

- Vite uses base `/`; subpath deployment would require an explicit base setting.
- Dependency declarations use `latest`, but the lockfile pins the installed versions. Avoid regenerating the lockfile incidentally.
- The existing `.reveal` class names have no matching CSS rule; do not assume reveal animation is active.
