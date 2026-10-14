---
version: 1
slug: "src-app-appv2-tsx"
primary_target: "src/app/AppV2.tsx"
related_targets: []
---

## Scope

Dashboard V2, route `/v2`, rendered by `src/app/AppV2.tsx` behind the prototype version toggle. Covers the default landing view (All Modules / File Status) and the Building Permission module. V1 at `/` stays untouched as the comparison baseline.

Visitor mode: **Operate**.

Audience and job: LSGD officials (secretary, department head, district/state monitors) finding where files are piling up or breaching SLI, and comparing local bodies. Citizens are a secondary readership, so domain terms carry explanation. Mixed desk and mobile use.

Constraints: K-SMART brand is pinned (navy `#09327b`, ink `#232f50`, pink `#e83a7a`, cyan `#00b2eb`, ground `#f2f6ff`, Manrope). Bilingual EN/ML. All figures are mock data and must read as such. WCAG 2.2 AA is a strong internal target.

## Direction contract

THESIS: The dashboard answers "how is the whole local body doing?" before it asks anyone to filter. Every module is present as an equal tile on first paint. It refuses the category default this product currently ships — a decorative hero and a five-dropdown filter wall that force a query before showing a single number.

OWN-WORLD: Pinned K-SMART identity. Navy `#09327b` headers and primary actions, ink `#232f50` figures, pink `#e83a7a` reserved for breach and required markers, cyan `#00b2eb` for disposal series, hairline `#e8eff4` borders on white tiles over `#f2f6ff`. Manrope, 600 weight ceiling, nothing under 13px. Equal tiles, 4px grid, tabular figures.

STORY: An official lands and reads the health of every module at once, sees which one is breaching, opens it in place, and acts — without having configured anything first.

FIRST VIEWPORT: A compact K-SMART header, then a one-line context row (local body, period, Filters). Immediately below, a responsive grid of module tiles — Civil Registration, Building Permission, Property Tax, Finance, Meeting Management, Grievance, Business Facilitation, All Modules — each carrying its delayed count at display scale, disposal rate, and a trend. Breaching tiles are marked by icon and label, never colour alone. No hero band; the first figure sits within roughly 160px of the viewport top. Primary action is selecting a tile.

SIGNATURE INTERACTION: Tiles expand in place. Selecting a module expands its tile inline into the full KPI row and charts rather than navigating away, so the board never disappears. Motion inherits the project's existing `t-resize` grammar — 300ms, `cubic-bezier(0.22, 1, 0.36, 1)` — and is disabled under `prefers-reduced-motion`.

FORM: Module Board, index 6 on the ordered grounded list, dealt by seed key `946ea18f` (surface scope, operate mode) and locked by the user over the dealt lead.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Whether the expanded tile should deep-link (`/v2?module=…`) or stay ephemeral session state.
- Whether Building Permission's Reports entry appears on its tile face or only once expanded.
