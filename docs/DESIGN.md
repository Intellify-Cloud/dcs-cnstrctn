---
name: Industrial Integrity System
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#43474e'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#73777f'
  outline-variant: '#c3c6d0'
  surface-tint: '#3f608b'
  primary: '#001833'
  on-primary: '#ffffff'
  primary-container: '#002d56'
  on-primary-container: '#7596c4'
  inverse-primary: '#a7c8fa'
  secondary: '#785a00'
  on-secondary: '#ffffff'
  secondary-container: '#fdc008'
  on-secondary-container: '#6c5000'
  tertiary: '#1b1718'
  on-tertiary: '#ffffff'
  tertiary-container: '#302b2c'
  on-tertiary-container: '#999293'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a7c8fa'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#254872'
  secondary-fixed: '#ffdf9d'
  secondary-fixed-dim: '#f9bd00'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#e9e0e1'
  tertiary-fixed-dim: '#cdc4c5'
  on-tertiary-fixed: '#1e1b1c'
  on-tertiary-fixed-variant: '#4b4546'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
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
  label-lg:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  grid-gutter: 24px
  container-max: 1440px
---

## Brand & Style

The design system is engineered for a large-scale construction and design-build environment where trust, precision, and scale are paramount. The aesthetic is **Corporate / Modern** with a strong **Industrial** influence, characterized by structural stability and high-visibility accents.

The visual narrative focuses on "Expertise at Scale." It utilizes heavy, confident typography to convey authority, paired with a layout that mimics architectural blueprints—structured, clean, and intentional. The emotional response should be one of unwavering reliability and sophisticated engineering. 

Key stylistic pillars:
- **Structural Integrity:** Use of rigid grids and clear delineations.
- **High Visibility:** Utilizing safety-inspired accents to guide the eye to critical actions.
- **Architectural Scale:** Large-scale imagery and expansive whitespace to mirror the physical magnitude of construction projects.

## Colors

The palette is derived from the heavy-industry heritage of construction, balancing professional deep tones with high-contrast utility colors.

- **Primary (Deep Navy):** Represents stability, corporate history, and trust. Used for headers, primary backgrounds, and key navigation elements.
- **Secondary (Safety Yellow):** Inspired by high-visibility safety gear and heavy machinery. This is a functional color used sparingly for CTAs, focus states, and meaningful highlights.
- **Tertiary (Charcoal):** Provides a grounding neutral for text and structural borders, offering better legibility and a more modern feel than pure black.
- **Neutral (Concrete/Stone):** A range of cool grays used for section backgrounds and surface layers to create depth without sacrificing the "industrial" cleanliness.

**Color Usage:**
- Use **Deep Navy** for high-impact content blocks and footers.
- Reserve **Safety Yellow** for interactive elements only (buttons, icons with links, progress bars).
- Backgrounds should toggle between pure white for readability and light grey (#F4F4F4) for content separation.

## Typography

This design system uses a hierarchical type system to establish dominance and clarity.

- **Headlines (Montserrat):** A geometric sans-serif that feels engineered and modern. Large scales should use Bold or Extra Bold weights to create a "built" look. 
- **Body (Inter):** Chosen for its exceptional legibility in technical contexts. It handles data and long-form project descriptions with professional neutrality.
- **Labels (IBM Plex Sans):** The "technical" voice of the system. Used for data points, statistics, and captions. The monolinear nature and slight technical grit of Plex reinforce the industrial theme.

**Styling Rules:**
- All H1 and H2 tags should use tight letter spacing to feel more cohesive.
- Labels and Small Caps should always use generous letter spacing (10%+) to maintain readability in industrial environments or high-glare screens.

## Layout & Spacing

The layout philosophy is based on a **Fixed Grid** model that emphasizes structural alignment and geometric "blocks" of content.

- **Grid:** A 12-column grid for desktop (1440px max width) with 24px gutters. Elements should snap strictly to the grid to evoke precision.
- **Rhythm:** A base-8 vertical rhythm ensures consistent spacing between components.
- **Sectioning:** Large vertical gaps (120px+) are used between major content areas to allow architectural photography to "breathe" and to signal a transition between different project phases or services.
- **Mobile Adaption:** On mobile, the 12-column grid collapses to a 4-column fluid grid with 16px margins. Headline sizes are reduced significantly to ensure they do not break across lines.

## Elevation & Depth

To maintain an industrial and authoritative feel, this design system avoids soft, floating aesthetics in favor of **Tonal Layers** and **Rigid Depth**.

- **Surface Tiers:** Use subtle shifts in background color (White to #F4F4F4) to define content areas rather than heavy shadows.
- **Shadows:** When necessary (e.g., on primary project cards), use "Structural Shadows"—low-blur, slightly higher opacity, and tinted with the Primary Navy color. This makes elements feel heavy and grounded rather than airy.
- **Outlines:** Use 1px solid borders in #E0E0E0 for input fields and card containers to reinforce the "blueprint" aesthetic.
- **Overlays:** Text on imagery must use a 40-60% Charcoal/Navy gradient overlay to ensure high-contrast legibility for white typography.

## Shapes

The shape language is strictly **Sharp (0)**. 

Rounded corners are avoided to reflect the hard-edged materials of construction: steel beams, glass panes, and concrete blocks. 

- **Buttons:** Sharp 90-degree corners.
- **Cards:** No border radius.
- **Inputs:** Square edges.
- **Exceptions:** Very small icons or decorative pill-shaped tags used for "Status" indicators (e.g., "Active Project") may use a soft radius to differentiate them from structural UI elements.

## Components

### Buttons
- **Primary:** Deep Navy background with White text. Sharp corners. On hover, background shifts to Secondary Yellow with Charcoal text.
- **Secondary/Ghost:** 2px Navy border with Navy text. Sharp corners.
- **CTA Utility:** Secondary Yellow background with Charcoal text. Used for "Inquire" or "Safety" related actions.

### Cards (Project & News)
- Cards should have a "heavy" feel. Use a 1px border.
- Images should be top-aligned with no padding (bleed to edges).
- Content padding should be generous (24px or 32px).
- Incorporate a "Secondary Yellow" accent line (2px height) at the top of featured cards.

### Statistic Callouts
- Large-scale Display typography for numbers.
- A horizontal 4px thick "Safety Yellow" bar underneath the number.
- Label-style text underneath the bar for the description.

### Input Fields
- Understated but clear. 1px Charcoal border. 
- Focus state: 2px Deep Navy border with a 2px "Safety Yellow" left-hand accent strip inside the field.

### Lists & Navigation
- Top navigation should be clean and uppercase (Label-lg style).
- Footer should be "Deep Navy" with White/Grey text, organized in strict vertical columns.