# Project Guidelines

## Design Style Guide

### Core Traits
- **METICULOUS**: Crafting every fine detail, from intricate designs unique to location, to thoughtful touches personal to each traveller.
- **INTRIGUING**: Dynamic and artistic, bringing exquisite experiences that excite, inspire and captivate.
- **WHOLEHEARTED**: Committed to delighting travelers with remarkable service. Making every traveler feel belonging with unconditional care.

### Tone of Voice
- **INVITING**: Charismatic, lively, charming, warm. Confident with passionate, positive energy.
- **REFINED**: Modern yet refined language reflecting freshness and sophistication. Professional and trustworthy.
- **INSPIRATIONAL**: Narratives that give insight, enlighten and elevate. Rich stories of people, culture and locality.

---

## Color Palette

| Role | Name | HEX | HSL |
|------|------|-----|-----|
| Primary | Black | #000000 | 0 0% 0% |
| Primary | Navy Blue | #1E355E | 222 52% 24% |
| Secondary | Sand | #D5D1C4 | 46 18% 80% |
| Secondary | Yellow/Gold | #EBAA20 | 40 83% 52% |
| Secondary | Silver | #D7D6DF | 245 11% 86% |

### CSS Variables
```css
:root {
  --black: 0 0% 0%;
  --navy: 222 52% 24%;
  --sand: 46 18% 80%;
  --gold: 40 83% 52%;
  --silver: 245 11% 86%;
}
```

### Tailwind Config
```javascript
colors: {
  'black': 'hsl(0, 0%, 0%)',
  'navy': 'hsl(222, 52%, 24%)',
  'sand': 'hsl(46, 18%, 80%)',
  'gold': 'hsl(40, 83%, 52%)',
  'silver': 'hsl(245, 11%, 86%)',
  'primary': 'hsl(var(--navy))',
  'accent': 'hsl(var(--gold))',
  'muted': 'hsl(var(--sand))',
}
```

---

## Typography

| Usage | Font | Weight | Style |
|-------|------|--------|-------|
| Headlines | Cinzel (Google Fonts) | Regular | Uppercase, letter-spacing: 0.3em |
| Subheadlines | Lato Light or Garamond Regular | 300 | — |
| Body text | Lato (Google Fonts) | Light (300) / Medium (400) | — |
| Navigation/UI | Lato Medium | 500 | Uppercase, letter-spacing: 0.15–0.2em |
| CTAs/Buttons | Lato Medium | 500 | Uppercase, letter-spacing: 0.1em |
| Location descriptors | Akzidenz-Grotesk BQ Light Extended | Light | All caps, tracking 200–500 |

```javascript
fontFamily: {
  'heading': ['Cinzel', 'serif'],
  'body': ['Lato', 'sans-serif'],
  'secondary': ['Garamond', 'serif'],
}
```

---

## Photography Style
- Tell a story, capture moments, establish emotional connection
- Types: Property, Lifestyle, Service & Food, Black & White, Background Location
- Natural lighting, warm sophisticated color grading, authentic moments
- Modern classic aesthetics with sense of detail and craftsmanship

---

## Component Design Guidelines
- Generous whitespace, subtle animations (0.3s transitions), clean minimal interface
- Gold (#EBAA20) for primary CTAs and accents
- Navy (#1E355E) for text on light backgrounds
- Black for main headlines
- Letter-spacing: 0.15em–0.3em for uppercase text
- Use semantic Tailwind tokens from index.css — never hardcode colors in components

---

## Drupal Canvas Export Rules

### Directory Structure
- Each component in its own directory under `src/drupal-canvas/`
- Directory names: `^[a-z]([a-zA-Z0-9_-]*[a-zA-Z0-9])*$` (use underscores: `hero_banner`, `food_carousel`)
- Each directory contains exactly: `component.yml`, `index.jsx`, `index.css`
- Global styles exported as `global.css`

### component.yml
```yaml
$schema: 'https://git.drupalcode.org/project/drupal_canvas/-/raw/0.x/packages/drupal_canvas/component.schema.json'
machineName: <directory_name>
name: <Component Display Name>
status: stable
props:
  type: object
  properties:
    propName:
      type: string
      title: Prop Title
```

- `machineName` must match the directory name and follow the regex above
- Must include `$schema`, `status: stable`, and wrap all props under `type: object` / `properties`
- **Do NOT include `default` values** in component.yml
- **Supported prop types**: `string`, `number`, `integer`, `boolean` only — except for **image** props
- **No `array` or `object` types** — these cause PHP errors — except for the Drupal Canvas image reference
- **Image props**: Use `type: object` with `$ref: json-schema-definitions://canvas.module/image` to enable image upload in Drupal Canvas. The prop value is an object with `src` (required), `alt`, `width`, `height`. In JSX, handle both string and object types for backward compatibility: `const imgSrc = typeof img === 'string' ? img : img?.src || '';`
- Flatten lists into numbered props (e.g., `navItem1Label`, `navItem1Href`, `navItem2Label`, etc.)

### Prop Naming Rule
1. Write the human-readable title first (e.g., "Nav Item 1 Label")
2. Derive the machine name key by converting **every word** of the title to camelCase (e.g., `navItem1Label`)
3. The key is NOT an abbreviation — it must contain **all words** from the title

### JSX File Constraints
- Export as `.jsx` (not `.tsx`)
- **ONLY React imports allowed** (`useState`, `useEffect`, etc.)
- **NO CSS imports** — use inline styles or CSS classes from the accompanying `.css` file (auto-loaded)
- **NO custom imports** — no `@/` paths, no relative paths, no component imports
- Component must be a **default export**, pure and self-contained
- All visual properties (fonts, colors, spacing, text, images) must be configurable via props
- Default prop values in JSX destructuring so the component renders immediately without configuration

### Content Parity Rule (CRITICAL)
When exporting a Lovable component to Drupal Canvas, the default prop values in the JSX destructuring **must be copied verbatim** from the corresponding Lovable React component (`src/components/*.tsx`). This includes:
- All text content (titles, descriptions, labels) — character for character
- All image URLs and alt text — exact match
- No paraphrasing, truncating, or substituting different URLs
- For local images (e.g., `/images/red-fort.jpg`), find and **verify** a matching Unsplash URL by searching Unsplash and confirming the photo ID shows the correct landmark — never guess or use unverified photo IDs
- **NEVER fabricate Unsplash photo IDs** — always search Unsplash for the subject, open the actual photo page, and extract the real `images.unsplash.com/photo-*` URL from the page HTML. Include `auto=format&fit=crop` query params for reliable loading.
- The exported component must render **identically** to the Lovable preview out of the box

### CSS File Constraints
- Class names must match those used in the JSX
- No imports or references to external files

### Global CSS Host-Safety Rule (CRITICAL)
- **NEVER** use `*`, `html`, or `body` selectors in `global.css` — these override the host Drupal page's styles and break page-level scrolling when multiple DC components are rendered together
- Only use CSS custom properties (`:root`), scoped class selectors (`.dc-*`), and heading selectors (`h1`–`h6`) in global.css
- Each component must be self-contained and not assume control of the full page

### Color Alpha Transparency Rule (CRITICAL)
- **NEVER** append hex alpha codes (`cc`, `80`, `66`, etc.) to HSL/HSLA color strings — this produces invalid CSS (e.g., `hsl(222, 52%, 6%)cc` is broken)
- For semi-transparent colors, use `hsla()` with a numeric alpha value: `hsla(222, 52%, 6%, 0.8)`
- When a color prop needs alpha variants, split it into separate H/S/L props (e.g., `backgroundColorHue`, `backgroundColorSaturation`, `backgroundColorLightness`) and construct `hsla()` in the component logic
- Always test that overlay gradients and semi-transparent elements actually render

### Viewport Units Rule (CRITICAL)
- **NEVER** use `vh`, `vw`, `dvh`, `svh`, or other viewport-relative CSS units as default prop values in DC components
- Drupal Canvas renders components inside iframes/containers where viewport units resolve unpredictably, causing infinite scrolling or layout collapse
- Use fixed pixel values instead (e.g., `700px` instead of `100vh`)
- If the Drupal site author needs full-viewport behavior, they can override the prop with `100vh` in their own context

### Section ID Props
- Section components (e.g., attractions_slider, food_cards, delhi_facts) must include a `sectionId` string prop that renders as the `id` attribute on the outermost `<div>` element
- Default values should match the header nav href anchors (e.g., `attractions`, `cuisine`, `stories`)
- This allows Drupal site authors to customize section IDs and update header/footer nav hrefs to match, enabling correct anchor-link navigation

### All Configurable Elements
Every visual element must be a prop: font name, font size, colors, images, alignments, spacing, text content, letter-spacing, etc.

### Why Import Rules Matter
Drupal Canvas parser validates ALL imports and rejects unknown component references. Uploads fail when non-React imports are detected. This is a hard platform constraint.
