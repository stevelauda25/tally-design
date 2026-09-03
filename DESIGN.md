---
name: Tally Design System
description: Implementation guidance for AI coding agents working on Tally UI
---

# Tally Design System

## Purpose

This file is an implementation reference for AI coding agents working in the Tally UI Design System repository. Use it to preserve the design language that is already shipped, not to create a new one.

Inspect existing tokens, components, pages, and approved assets before changing UI. Extend an established pattern when one exists. When this file and the runtime implementation differ, investigate the current sources listed below rather than guessing.

## Source Precedence

Use sources in this order:

1. Structured foundation data, especially `src/data/tally-foundation.json`.
2. Runtime semantic implementation, especially `app/globals.css`, `app/layout.tsx`, theme code, and shared components.
3. Existing Foundation documentation pages and their shared components.
4. Approved visual assets under `public/assets/`.
5. Embedded Figma links as provenance and context.

This order applies when multiple sources describe the same design decision. Runtime tokens and implementation are authoritative for current application and theme behavior. Approved artwork and assets are authoritative for their visual content, pixels, geometry, and brand treatment.

Additional source rules:

- `README.md` is not authoritative for current design-system decisions. It describes an earlier implementation state.
- Getting Started examples may contain historical or project-specific conventions. They do not override current runtime code.
- Embedded Figma references identify upstream sources, but the local implementation defines what is currently shipped unless a task explicitly provides a newer approved design.
- When sources conflict and runtime behavior does not clearly settle the question, preserve the current implementation and record or escalate the ambiguity. Do not silently standardize it.

Canonical repository sources:

- Foundation data: `src/data/tally-foundation.json`
- Semantic themes and global styles: `app/globals.css`
- Fonts and theme bootstrap: `app/layout.tsx`
- Foundation guidance: `app/foundations/*/page.tsx`
- Shared implementation patterns: `components/`
- Approved artwork: `public/assets/`

## Agent Implementation Rules

- Inspect existing components and variants before creating a new abstraction.
- Prefer semantic CSS variables and existing utilities for UI colors, surfaces, borders, radii, and shadows.
- Avoid raw values when an exact existing token is available. A raw value is appropriate when approved fixed artwork or a measured one-off composition requires it.
- Do not recreate approved raster artwork with CSS, filters, generated gradients, or approximations.
- Use SVG/vector artwork with `currentColor` or semantic color for icons and patterns that must adapt to the active theme.
- Keep approved fixed-color artwork fixed. Do not automatically invert Logo assets, branded Gradient assets, or photography.
- Extend shared primitives instead of copying their class lists into page-specific implementations.
- Preserve the existing Light/Dark theme architecture. Do not introduce a second theme mechanism.
- Do not infer tablet or mobile behavior from desktop-only examples.
- Treat documentation-site layout geometry as documentation behavior, not as universal Tally product guidance.
- Preserve existing interaction timing and reduced-motion behavior unless a task explicitly changes them.

# Foundations

## Color

### Primitive palettes

The canonical palette data lives in `src/data/tally-foundation.json`. It defines these families:

- `neutral`
- `orange-vivid`
- `green`
- `amber`
- `red`
- `gray`

The documentation UI displays human-readable labels such as “Neutral (warm)” and “Gray (cool)”; these are display labels, not data keys.

Use existing semantic tokens first for UI. Use a raw primitive value only when the existing implementation already does so, a task explicitly requires it, or design approval authorizes a new role. Do not create new semantic color roles automatically.

### Semantic UI colors

Runtime semantic colors are CSS variables in `app/globals.css`:

- `--color-background-primary`
- `--color-background-secondary`
- `--color-background-subtle`
- `--color-background-accent`
- `--color-text-primary`
- `--color-text-secondary`
- `--color-text-tertiary`
- `--color-border-default`
- `--color-border-subtle`
- `--color-border-strong`
- `--color-border-focus`
- `--color-border-contrast`

Use semantic tokens for application chrome and reusable UI. Examples include page backgrounds, cards, table cells, navigation states, text, and borders.

The accent and focus color is the established Tally orange (`#DF520C`). Do not introduce a nearby orange when the semantic accent token is appropriate.

Light and Dark Mode provide different values for surfaces, text, and borders through the same semantic names. Components should consume the semantic role rather than choose a theme-specific raw color themselves.

Fixed raw colors are acceptable when they belong to approved artwork, brand demonstrations, color swatches, or another intentionally fixed visual example. Do not convert those colors to semantic UI tokens unless the design explicitly requires theme adaptation.

Canonical sources: `src/data/tally-foundation.json`, `app/globals.css`, and `app/foundations/color/page.tsx`.

## Typography

### Families

- Inter is the primary UI and documentation family.
- Crimson Pro is the documented serif/display family where the existing scale or specimen uses it.
- SF Mono with system monospace fallbacks is used for code and token values.

Inter supports weights 400, 500, 600, and 700 in Tally's intended typography scale. The current local font implementation loads dedicated Inter files for 400, 500, and 600 only; it has not yet been expanded to include a dedicated 700 file. Crimson Pro is loaded as a local variable font from 200 through 900. Font aliases are defined in `app/globals.css`; use those aliases instead of creating duplicate font stacks.

### Scale

The structured scale in `src/data/tally-foundation.json` is authoritative for documented token names, sizes, and line heights:

- `text-xs`: 12/18
- `text-sm`: 14/20
- `text-md`: 16/24
- `text-lg`: 18/28
- `text-xl`: 20/28
- `heading-xs`: 24/32
- `heading-sm`: 32/40
- `display-sm`: 40/48, Crimson Pro
- `display-md`: 48/56, Crimson Pro
- `display-lg`: 56/64, Crimson Pro

Display styles include the documented negative letter spacing. Preserve the size/line-height pair of an existing token; do not choose line height independently because it looks close.

The supported weight scale includes regular 400, medium 500, semibold 600, and bold 700.

Canonical sources: `src/data/tally-foundation.json`, `app/layout.tsx`, `app/globals.css`, and `app/foundations/typography/page.tsx`.

## Spacing and Layout

Tally currently uses Tailwind’s default 4px-based spacing scale, where `1` = `0.25rem` = `4px`. Reuse the exact spacing pattern of the nearest established component or approved specification, use an existing Tailwind scale step, and do not invent intermediate spacing values.

The current documentation describes rem sizing against a 16px root. Some component dimensions are intentionally fixed pixels rather than reusable spacing tokens.

Do not treat documentation-shell measurements—such as its content-column width, sidebar width, or rail position—as universal Tally product spacing. Those values are documented separately under Documentation Site Behavior.

No separate local custom Tally spacing-token source is defined. Agents should reuse the established Tailwind scale and existing component spacing patterns.

Canonical sources: `app/foundations/spacing/page.tsx` and existing component implementations.

## Radius

The structured radius scale in `src/data/tally-foundation.json` contains:

`0`, `2`, `4`, `6`, `8`, `10`, `12`, `16`, and `9999` pixels.

Verified runtime uses include:

- Navigation rows: 6px through `--radius-navigation`.
- Shared cards and media containers: 8px through `--radius-card`.
- Circular or pill treatments: 9999px through `--radius-full`.
- Small code/version treatments may use a local smaller radius where already established.

Radius is component-specific in the current documentation implementation: 6px is established for documentation navigation/control patterns, and 8px is established for shared documentation cards/containers. No universal Tally product radius is defined. Reuse the radius of the existing component family being extended.

Canonical sources: `src/data/tally-foundation.json`, `app/globals.css`, and `app/foundations/radius/page.tsx`.

## Elevation

Elevation uses restrained, layered shadows to establish surface separation and interactive depth. The structured treatments are:

- `shadow-elev-1`
- `shadow-elev-2`
- `shadow-button`
- `shadow-pop`

Use the exact structured values when implementing those named demonstrations. Do not approximate layered shadows with a single generic drop shadow.

Reusable documentation cards consume `--shadow-card` through the `shadow-card` utility. Its Light and Dark values are defined independently in `app/globals.css`; components should use the shared semantic shadow rather than embed either theme value.

Intentional elevation preview cards demonstrate their own shadow tokens and must not be flattened by a global shadow override.

Runtime JSON token names are authoritative. The Figma-facing `Shadow-001`, `Shadow-002`, `Shadow-003`, and `Shadow-button` names do not currently have a verified alias mapping; do not infer or rename that mapping.

Canonical sources: `src/data/tally-foundation.json`, `app/globals.css`, and `app/foundations/elevation/page.tsx`.

# Brand and Media

## Logo

Use approved Logo assets from `public/assets/brand/` and `public/assets/foundations/logo/`. Do not redraw the mark, substitute a generic icon, or derive a new Logo variant.

Verified variants include:

- Primary full Logo: orange glyph with black wordmark.
- Black full Logo for light backgrounds.
- White full Logo for dark backgrounds.
- Standalone logomark variants.
- App-style tiles used in approved brand applications.

Color handling:

- The primary Logo orange is `#DF520C`.
- Black and white variants are fixed artwork for their specified backgrounds.
- Approved gradient or metallic app-tile artwork remains fixed-color unless separate theme assets are explicitly supplied.

Clear space:

- Keep surrounding graphics and text outside the clear-space area demonstrated by the approved assets.
- Do not crop into the mark's documented safe area.

Minimum documented sizes:

- Screen full Logo: 60px.
- Print full Logo: 35mm / 1.375in.
- Favicon: 16px.

Placement guidance applies to both digital and print compositions. Preserve the approved scale, alignment, and surrounding breathing room rather than visually compensating for a new container.

Do not:

- Change the Logo color.
- Squash or stretch the Logo.
- Outline the Logo.
- Fill the Logo with gradients.
- Place the Logo over a busy background that compromises legibility.
- Skew or rotate the Logo.

Canonical sources: `app/foundations/logo/page.tsx`, `components/foundations/logo/logo-guidance.tsx`, and approved Logo assets.

## Gradient

The branded Gradient is approved raster artwork: a mesh-based organic texture with soft light, warmth, depth, and fine grain.

**Do not recreate the branded Gradient with CSS gradients or generated color stops.** Its complexity and grain are part of the artwork. Use the approved assets in `public/assets/foundations/gradient/`.

Verified uses include hero or feature surfaces, promotional/CTA compositions, out-of-home applications, and backgrounds behind approved screenshots or device compositions.

Preserve source quality and the intended crop. The Foundation guidance describes PNG/WebP output, square/croppable masters, and a minimum 1920px source. Do not upscale a small export, apply sharpening filters, or use the documented dominant colors to reconstruct the artwork.

The dominant palette is reference material for matching and composition, not a CSS recipe.

Canonical sources: Figma node `2199:11879`, `app/foundations/gradient/page.tsx`, and `public/assets/foundations/gradient/`.

## Imagery

Tally photography depicts real businesses managing real inventory and emphasizes honest, hands-on work. The documented direction is an analog-film editorial treatment rather than polished generic stock imagery.

Use approved photography at its intended crop and resolution. Preserve subject placement and avoid stretching. If an approved composition is supplied as a raster asset, use it as artwork; do not rebuild the photograph or a flattened editorial composition as arbitrary HTML/CSS.

Photography, branded application compositions, and texture artwork remain fixed across themes unless an approved alternate asset exists. Theme changes apply to their surrounding UI surfaces, not to the pixels of the artwork.

Canonical sources: `app/foundations/imagery/page.tsx` and `public/assets/foundations/imagery/`.

## Pattern and Texture

The documented rectangular patterns are vector geometry that adds structure and reinforces Tally's organized approach to inventory.

- Preserve the existing repetition, spacing, alignment, and proportions.
- Keep pattern geometry as SVG/vector or an equally faithful code-native vector implementation.
- Theme-adaptive patterns should inherit `currentColor` or a semantic theme color.
- Do not replace theme-aware patterns with PNG/JPG assets or use CSS filters to fake theme adaptation.

Canonical sources: `app/foundations/imagery/page.tsx` and `public/assets/foundations/imagery/pattern-*.svg`.

## Icons

- Prefer SVG/vector assets for UI icons.
- Icons that adapt to theme or state should use `currentColor` or an existing semantic color.
- Preserve the existing `IconMask`, SVG sprite, or direct SVG-image approach used by the component family.
- Do not use flattened screenshots, PNG, or JPG for theme-adaptive UI icons.
- Do not invent a new icon library, glyph, or global sizing taxonomy. Match an existing neighboring implementation.
- Fixed multicolor brand artwork is an image asset, not a `currentColor` UI icon.

Canonical sources: `components/ui/icon-mask.tsx`, `components/home/foundation-icon.tsx`, `components/docs/code-block.tsx`, and `public/assets/icons/`.

# Components and Surfaces

The repository contains reusable documentation components, not a complete Tally product component library. Reuse their verified visual behavior within this site, but do not present their dimensions as universal product specifications.

## Cards

Shared Foundation and home cards generally combine:

- Semantic surface colors.
- A subtle/default 0.5px boundary.
- 8px card radius.
- The shared `shadow-card` treatment.
- Clear separation between preview/media and descriptive content where the component defines it.

Foundation overview cards use a fixed visual area, a dashed divider, and a content area. Their hover surface changes to the semantic secondary background without animation.

## Tables

Foundation tables use explicit column geometry, compact rows, semantic primary/subtle surfaces, 0.5px boundaries, 8px outer radius, and the shared card shadow. Extend an existing table's column model when possible. Do not solve overflow by changing global table typography.

## Code Blocks

Code blocks use a semantic surface, a distinct header region, monospace content, and an existing Copy control. Preserve each block's defined height and its relationship to the surrounding page.

Copy controls use native clipboard behavior and a temporary success/check state. Do not replace vector Copy/Check icons with raster assets.

## Inline Code

Inline code is a compact, non-wrapping monospace treatment with its own surface, boundary/ring, radius, and padding. Use the shared `InlineCode` component instead of recreating the chip locally.

## Navigation Rows

Navigation rows use semantic text/icon color, a 6px radius, and the semantic secondary background for hover or active states. Hover changes are immediate; do not add transitions by default.

## Buttons and Icon Controls

Existing documentation controls such as `IconButton` and Copy controls should reuse their established behavior, dimensions, states, accessible labels, and visual patterns. This repository does not define a complete Tally product button system; do not infer unsupported button variants, dimensions, states, or APIs.

## Media Containers

Shared media containers use approved artwork inside real UI shells. Keep container borders, radii, clipping, and shadows in the component layer; keep photography, Gradient, Logo constructions, and other genuine artwork as assets.

Canonical component sources include:

- `components/home/foundation-card.tsx`
- `components/foundations/foundation-table.tsx`
- `components/foundations/foundation-media-card.tsx`
- `components/foundations/provenance-card.tsx`
- `components/docs/code-block.tsx`
- `components/docs/inline-code.tsx`
- `components/layout/navigation-item.tsx`
- `components/ui/icon-button.tsx`

# Theme Behavior

## Light Mode

Light Mode is the default application theme. It uses the base semantic variables in `app/globals.css`, including a white primary background, dark primary text, light neutral supporting surfaces, translucent dark boundaries, and the Light Mode card shadow.

Do not change approved Light Mode values as a side effect of Dark Mode work.

## Dark Mode

Dark Mode is applied through `html[data-theme="dark"]`. It overrides the semantic background, text, border, and card-shadow variables while keeping their names stable.

The theme bootstrap in `app/layout.tsx` reads the persisted `tally-ui-theme` local-storage value before the application renders. `ThemeToggle` updates the root `data-theme`, persists the selection, and listens for storage changes. Do not add a parallel `.dark` theme system.

Surfaces and icons should adapt by consuming semantic tokens or `currentColor`. Do not hardcode Light and Dark raw colors in every consumer when the existing semantic role is sufficient.

## Fixed vs Theme-Aware Assets

Theme-aware examples:

- UI surfaces, text, and boundaries using semantic variables.
- Utility and Foundation icons using `currentColor`.
- Pattern geometry designed to inherit theme color.
- Brand elements that explicitly provide separate Light/Dark assets.

Fixed-artwork examples:

- Approved Logo artwork and documented Logo variants.
- Branded Gradient textures.
- Photography and flattened editorial/application compositions.

Do not invert, recolor, filter, or regenerate fixed artwork to approximate a theme variant.

The adaptive favicon is separate from application theme selection. `app/icon.svg` follows browser/OS `prefers-color-scheme`; it does not follow the manual `data-theme` value.

Canonical sources: `app/globals.css`, `app/layout.tsx`, `lib/theme.ts`, `components/theme/theme-toggle.tsx`, `components/layout/docs-brand.tsx`, and `app/icon.svg`.

# Layout, Navigation, and Scrolling

## Documentation Site Behavior

The following describes this documentation website. It is not a universal Tally product layout system.

- The shell is desktop-constrained and uses a 1440px minimum composition.
- The global header is 64px high.
- The left documentation sidebar is 300px wide.
- The shared `<main>` region owns vertical scrolling; do not introduce a competing page-level scroll container.
- Standard documentation pages use a 680px column.
- Foundation detail pages use a 584px content column within a content-and-rail grid.
- Foundation detail content keeps 58px top and bottom padding.
- Direct Foundation content sections commonly use a 28px vertical gap.
- Foundation detail pages include a sticky right-side `On this page` rail.
- Anchor scrolling uses a 28px top offset.
- The bottom boundary is determined by real content and normal padding. Final anchors clamp naturally when insufficient scroll range remains.
- The left sidebar stays expanded between Foundation child navigation events and only collapses through its explicit disclosure interaction.
- Navigation hover is immediate and changes text/icon color and/or semantic background according to the existing row state.

Preserve the single-scrollbar architecture, fixed header/sidebar relationship, right-rail behavior, URL hash behavior, and active-section tracking when editing Foundation pages.

Canonical sources: `components/layout/docs-shell.tsx`, `components/layout/docs-header.tsx`, `components/layout/docs-sidebar.tsx`, `components/layout/navigation-item.tsx`, and `components/foundations/on-this-page.tsx`.

# Interaction and Motion

There is no broad motion system defined in this repository. Preserve the verified interactions instead of extrapolating new animation rules.

- Sidebar and theme-toggle hover backgrounds change immediately without transitions.
- Navigation text color does not animate.
- Copy actions temporarily replace the Copy icon with a Check icon after a successful clipboard write.
- The copied state remains for approximately 1600ms.
- The Check icon uses a small pop/bounce animation of approximately 360ms.
- Copy feedback respects `prefers-reduced-motion`.
- The `On this page` orange indicator is a single moving element.
- Its position and height are measured from the actual active navigation row, including multiline labels.
- Its transform movement uses the existing spring-like easing over approximately 480ms.
- Indicator motion respects reduced-motion preference.
- Anchor clicks preserve native URL hashes, smooth scrolling, active tracking, and natural bottom clamping.

Do not add page-wide transitions, text fades, layout animation, or generalized `transition: all` without an approved requirement.

Canonical sources: `components/docs/code-block.tsx`, `components/foundations/on-this-page.tsx`, `components/layout/navigation-item.tsx`, and `components/ui/icon-button.tsx`.

# Responsive Behavior

The runtime defines `sm`, `md`, `lg`, `xl`, and `2xl` breakpoints in both `app/globals.css` and `lib/design-tokens.ts`.

The current documentation shell is still desktop-constrained, and the repository does not sufficiently define tablet or mobile behavior for its documentation layouts or individual Foundation compositions.

- Do not invent responsive stacking, reordering, resizing, or navigation behavior solely from desktop examples.
- Reuse an existing responsive precedent if the same component family has one.
- If no precedent exists, obtain design confirmation before defining new tablet or mobile behavior.

# Accessibility

Preserve accessibility behavior that already exists:

- Use native links for navigation and external references.
- Use native buttons for actions and toggles.
- Retain accessible names, `aria-label`, and `aria-pressed` where already provided.
- Use semantic lists, code elements, headings, and `<time>` for their intended content.
- Keep keyboard behavior native unless a component has an established custom interaction.
- Respect `prefers-reduced-motion` for animated feedback and navigation indicators.
- Keep vector icons decorative when their button or link already supplies the accessible name.

This repository does not establish a complete focus-state specification, keyboard-interaction policy, or claimed WCAG conformance level. Do not claim one here or remove browser-accessible behavior while styling a component.

# Do / Don't

## Do

- Inspect the nearest existing implementation before writing new UI.
- Reuse structured tokens, semantic variables, and shared components.
- Use semantic colors for reusable UI surfaces and states.
- Preserve approved Logo, Gradient, photography, and application artwork.
- Keep theme-adaptive icons and patterns vector-based.
- Verify both Light and Dark Mode after visual changes.
- Match existing typography size/line-height pairs.
- Match the radius and elevation of the component family being extended.
- Preserve existing scrolling, navigation, and interaction behavior.
- Mark unresolved behavior and request design confirmation when no precedent exists.

## Don't

- Invent a new color when an appropriate semantic token exists.
- Recreate the branded Gradient with CSS.
- Rasterize theme-adaptive icons or patterns.
- Apply automatic inversion or filters to fixed artwork.
- Treat documentation-site dimensions as product-wide rules.
- Infer mobile layouts from desktop frames.
- Treat Getting Started examples or the README as stronger than runtime code.
- Resolve known token or naming conflicts without explicit approval.
- Copy Vercel's design values or visual decisions into Tally.

# Agent Verification Checklist

Before considering UI work complete, verify:

- [ ] An existing component or variant was reused where possible.
- [ ] Structured or semantic tokens were used where available.
- [ ] No unnecessary hardcoded colors, radii, or shadows were introduced.
- [ ] Typography follows an existing family and size/line-height pair.
- [ ] Component radius and elevation match the relevant existing pattern.
- [ ] Light Mode remains correct.
- [ ] Dark Mode remains correct.
- [ ] Theme-adaptive icons and patterns remain vector-based.
- [ ] Approved fixed artwork was not recolored, filtered, or regenerated.
- [ ] Existing hover, active, focus, scrolling, and motion behavior was preserved.
- [ ] Reduced-motion behavior remains intact where animation exists.
- [ ] No undocumented responsive behavior was invented.
- [ ] Documentation-site geometry was not generalized into a product rule.
- [ ] Copy, labels, and source references were not changed without instruction.
- [ ] The final diff contains only the requested scope.
