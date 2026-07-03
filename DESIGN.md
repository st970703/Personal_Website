# Mike Lee Personal Website Design System

## 1. Atmosphere & Identity

A quiet engineering field notebook for software that touches physical operations. The signature is project-led storytelling: restrained typography, warm paper surfaces, terse metrics, and small technical labels that make the work feel precise without becoming a resume dump.

## 2. Color

| Role | Token | Value | Usage |
|------|-------|-------|-------|
| Canvas | --color-canvas | #f7f6f1 | Page background |
| Surface | --color-surface | #fffdf8 | Main cards and header |
| Surface muted | --color-surface-muted | #ece8dd | Timeline and tags |
| Ink | --color-ink | #181714 | Headlines and primary text |
| Ink muted | --color-ink-muted | #676258 | Body secondary text |
| Ink soft | --color-ink-soft | #969085 | Metadata |
| Border | --color-border | #ddd6c8 | Dividers and cards |
| Accent | --color-accent | #465f4f | Links, focus, primary button |
| Accent hover | --color-accent-hover | #31483a | Hover state |
| Blue note | --color-note-blue | #e6eef4 | Technology tags |
| Green note | --color-note-green | #e4eddf | Impact tags |
| Yellow note | --color-note-yellow | #f3ead1 | Domain tags |

Rules: the palette stays warm and mostly monochrome. Accent is used for actions and field-note markers only.

## 3. Typography

| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Display | clamp(3rem, 8vw, 6.5rem) | 700 | 0.95 | Hero name |
| H1 | clamp(2.25rem, 5vw, 4.5rem) | 700 | 1.0 | Hero statement |
| H2 | clamp(1.75rem, 3vw, 2.5rem) | 650 | 1.15 | Sections |
| H3 | 1.25rem | 650 | 1.25 | Cards |
| Body large | 1.125rem | 400 | 1.65 | Lead copy |
| Body | 1rem | 400 | 1.65 | Body copy |
| Small | 0.875rem | 450 | 1.5 | Metadata |
| Label | 0.75rem | 700 | 1.35 | Uppercase labels |

Font stack: body uses Avenir Next, Segoe UI, system-ui, sans-serif. Editorial headings use Georgia, Cambria, Times New Roman, serif. Mono labels use SFMono-Regular, Consolas, Liberation Mono, monospace.

## 4. Spacing & Layout

Base unit: 4px.

| Token | Value | Usage |
|-------|-------|-------|
| --space-1 | 4px | Tight inline gaps |
| --space-2 | 8px | Tags |
| --space-3 | 12px | Compact groups |
| --space-4 | 16px | Standard groups |
| --space-6 | 24px | Card padding |
| --space-8 | 32px | Grid gaps |
| --space-12 | 48px | Section internals |
| --space-16 | 64px | Section spacing |
| --space-20 | 80px | Hero spacing |

Max content width is 1160px. Layout uses one column on mobile and two uneven columns on desktop.

## 5. Components

### Site Shell
- Structure: sticky header, main sections, footer.
- States: links have hover underline, focus outline, and active color.
- Accessibility: landmarks use header, nav, main, section, footer.

### Field Card
- Structure: label, title, summary, metadata/tags.
- Spacing: --space-6 padding, --space-8 for featured cards.
- States: hover shifts border and surface; focus applies accent outline when card has a link.
- Motion: transform and opacity only.

### Tag
- Structure: inline text badge.
- Variants: note, impact, domain.
- States: static; no hover.

### Timeline Item
- Structure: dates, role, company, summary.
- States: static.

## 6. Motion & Interaction

Micro interactions are 180ms ease-out. Page sections fade in with opacity and translateY only. Reduced-motion disables transitions and animations.

## 7. Depth & Surface

Strategy: borders with tonal shifts. Cards use a 1px border and warm surface differences. Shadows are avoided except for a very light sticky header edge.
