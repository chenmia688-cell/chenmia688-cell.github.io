---
name: CORE_OS Architecture
colors:
  surface: '#0e1513'
  surface-dim: '#0e1513'
  surface-bright: '#333b38'
  surface-container-lowest: '#09100e'
  surface-container-low: '#161d1b'
  surface-container: '#1a211f'
  surface-container-high: '#242b29'
  surface-container-highest: '#2f3634'
  on-surface: '#dde4e0'
  on-surface-variant: '#c3caac'
  inverse-surface: '#dde4e0'
  inverse-on-surface: '#2b322f'
  outline: '#8d9479'
  outline-variant: '#434933'
  surface-tint: '#a6d700'
  primary: '#ffffff'
  on-primary: '#273500'
  primary-container: '#bef500'
  on-primary-container: '#536d00'
  inverse-primary: '#4e6700'
  secondary: '#a7cfbe'
  on-secondary: '#11372b'
  secondary-container: '#294e41'
  on-secondary-container: '#96bead'
  tertiary: '#ffffff'
  on-tertiary: '#432c00'
  tertiary-container: '#ffdeac'
  on-tertiary-container: '#865c00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#bef500'
  primary-fixed-dim: '#a6d700'
  on-primary-fixed: '#151f00'
  on-primary-fixed-variant: '#3a4d00'
  secondary-fixed: '#c3ebda'
  secondary-fixed-dim: '#a7cfbe'
  on-secondary-fixed: '#002117'
  on-secondary-fixed-variant: '#294e41'
  tertiary-fixed: '#ffdeac'
  tertiary-fixed-dim: '#ffba38'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#604100'
  background: '#0e1513'
  on-background: '#dde4e0'
  surface-variant: '#2f3634'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-mono-xs:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '400'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 16px
  margin: 24px
  panel-padding: 20px
  stack-gap: 12px
---

## Brand & Style

The design system is envisioned as a high-fidelity "Engineering Blueprint" or "Product Operating System." It targets an audience of technical stakeholders, engineers, and AI researchers who value precision over polish. The aesthetic is intentionally "geeky but refined," moving away from consumer-grade softness toward a professional, high-density technical interface.

The style is rooted in **Modern Technical Minimalism** with **Industrial/CRT influences**. It prioritizes information density and structural clarity. Key visual drivers include:
- **Structural Integrity:** Elements are defined by thin, precise borders rather than shadows.
- **Legacy Technical Aesthetics:** Subtle nods to terminal interfaces through monospaced metadata and scan-line details.
- **Non-Decorative:** Every element serves a functional purpose or provides necessary system context (status, coordinates, versioning).

## Colors

The palette is a "Terminal Monochromatic" scheme, utilizing varying luminosities of green-tinted hues to create a cohesive, low-strain environment.

- **Background:** A deep, obsidian-green base that provides maximum contrast for the accent color.
- **Surface:** Used for cards, panels, and input backgrounds to create subtle containment.
- **Accent:** A restrained fluorescent green used for primary actions, critical status indicators, and highlight details. Use sparingly to maintain its impact.
- **Muted Text:** Used for metadata, labels, and inactive states to ensure the hierarchy remains clear.
- **Warning:** A muted amber reserved exclusively for system alerts, errors, or high-priority dependencies.

## Typography

Typography functions as a data-visualization tool. 

1. **Headlines:** Use **Geist** for a sharp, neo-grotesque appearance that feels engineered. Large headlines should be tight and impactful.
2. **Body:** **Inter** provides high legibility for long-form project documentation and product strategies.
3. **Labels & Accents:** **JetBrains Mono** is mandatory for all metadata, status tags, timestamps, and "system-speak." This distinguishes human-centric content from system-generated data.

Always use uppercase for monospaced labels to reinforce the "terminal" feel.

## Layout & Spacing

The layout follows a **Fixed Grid** model based on a 4px baseline unit. This "Grid-First" approach ensures every element feels slotted into a larger blueprint.

- **Grid:** 12-column layout for desktop. Panels should snap to grid lines.
- **Density:** High. Content should be packed efficiently, using thin borders (`1px`) to separate sections rather than wide margins.
- **Borders:** Use `oklch(0.25 0.02 155)` for standard structural borders.
- **Scan-lines:** Horizontal dividers should be 1px solid, occasionally broken by a small coordinate dot or a status label (e.g., `[SECTION_END]`).

## Elevation & Depth

This design system is strictly **Flat**. There are no shadows or blurs. 

- **Hierarchy through Borders:** Use nested borders to show containment. A primary container has a slightly brighter border than its internal child modules.
- **Tonal Layering:** Depth is achieved by shifting background colors from `background` to `surface`.
- **Textural Depth:** Apply a subtle, global CRT scan-line overlay (a repeating pattern of 1px dark lines with 2% opacity) to the entire viewport to create the "Operating System" feel.
- **Active State:** Elements indicate focus or "active" status through a color shift to the Accent Green or by adding a solid 2px border on the left edge.

## Shapes

The shape language is **Sharp (0px)**. 

Every element—buttons, cards, input fields, and tags—must have square corners. This reinforces the technical, blueprint-like nature of the design. Curved lines are permitted only in data visualizations (e.g., circular nodes in an architecture diagram), but the containers for those visualizations must remain rectangular.

## Components

- **Terminal-Style Panels:** Cards with a solid 1px border and a "Header Bar" containing a monospaced title on the left and coordinate data (e.g., `LOC: 42.09 / 12.04`) on the right.
- **Primary Buttons:** Solid Accent Green background with black text. On hover, invert to Accent Green border with Accent Green text.
- **Ghost Buttons:** 1px border of Muted Text color, using Mono labels.
- **Status Chips:** Small, rectangular boxes with a "Status Dot" on the left. Green for `ACTIVE`, Amber for `PENDING`, Muted for `IDLE`.
- **Input Fields:** Bottom-border only (1px) with a monospaced "Field Label" floating inside the top left of the container.
- **Architecture Modules:** Diagrams built using 1px solid lines and square connection points. No rounded paths; use 90-degree angles for all connectors.
- **Scan-line Underlines:** For text links, use a dotted or dashed 1px underline that extends 4px beyond the text width on both sides.