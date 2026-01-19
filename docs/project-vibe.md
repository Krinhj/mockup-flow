# Project Vibe: ACA Inmate Intelligence System

Project-specific theming and design decisions aligned with the Vibe Coding Playbook.

## Project Snapshot
- **Name:** ACA Inmate Intelligence System
- **Logo asset:** `public/logo.svg` (to be provided by user)
- **Typeface:** Inter (fallbacks: system-ui, -apple-system, sans-serif)
- **Shadcn version/date:** Latest (January 2025)

## Palette Tokens

### Light Theme (Default)
```css
:root {
  --color-background: #f8fafc;      /* Slate 50 - clean, light base */
  --color-foreground: #0f172a;      /* Slate 900 - high contrast text */
  --color-muted: #64748b;           /* Slate 500 - secondary text */
  --color-border: #e2e8f0;          /* Slate 200 - subtle borders */
  --color-card: #ffffff;            /* Pure white cards */
  --color-primary: #1e3a5f;         /* Deep blue - authority, trust */
  --color-primary-foreground: #ffffff;
  --color-accent: #0ea5e9;          /* Sky 500 - teal/cyan highlight */
  --color-positive: #22c55e;        /* Green 500 - success, low risk */
  --color-negative: #ef4444;        /* Red 500 - error, critical risk */
  --color-warning: #f97316;         /* Orange 500 - caution, high risk */
  --radius: 12px;
}
```

### Dark Theme
```css
.dark {
  --color-background: #0f172a;      /* Slate 900 */
  --color-foreground: #f8fafc;      /* Slate 50 */
  --color-muted: #94a3b8;           /* Slate 400 */
  --color-border: #334155;          /* Slate 700 */
  --color-card: #1e293b;            /* Slate 800 */
  --color-primary: #3b82f6;         /* Blue 500 - lighter for dark mode */
  --color-primary-foreground: #ffffff;
  --color-accent: #38bdf8;          /* Sky 400 */
  --color-positive: #4ade80;        /* Green 400 */
  --color-negative: #f87171;        /* Red 400 */
  --color-warning: #fb923c;         /* Orange 400 */
}
```

### Risk Level Colors (Semantic)
```css
:root {
  --risk-low: #22c55e;              /* Green - safe */
  --risk-medium: #eab308;           /* Yellow - attention */
  --risk-high: #f97316;             /* Orange - warning */
  --risk-critical: #ef4444;         /* Red - danger */
}
```

- **Hover/active offsets:** +8% brightness for hover, -6% for active states

## Typography Scale

- **Hero/H1:** `text-4xl` (36px) / `font-bold` / `tracking-tight`
- **H2:** `text-2xl` (24px) / `font-semibold`
- **H3:** `text-xl` (20px) / `font-semibold`
- **Body/base:** `text-base` (16px) / `font-normal` / `leading-relaxed`
- **Secondary:** `text-sm` (14px) / `text-muted`
- **Caption:** `text-xs` (12px) / `text-muted`
- **Tracking/leading rules:** Headlines use `tracking-tight`, body uses default or `leading-6`

## Spacing & Radii

- **Base unit:** 4px; structure favors 8px multiples (8, 16, 24, 32, 40)
- **Key gaps:**
  - Cards: `gap-6` (24px)
  - Sections: `gap-8` (32px)
  - Form fields: `gap-4` (16px)
  - Inline elements: `gap-2` (8px)
- **Card padding:** `p-6` (24px)
- **Dashboard content:** `px-6 lg:px-10 py-8`
- **Radius:** `--radius: 12px` → `rounded-xl` for cards, `rounded-lg` for inputs/buttons
- **Elevation defaults:**
  - Cards: `shadow-sm`
  - Dropdowns/popovers: `shadow-md`
  - Modals: `shadow-lg`

## Components Installed (shadcn)

### Layout
- `card`, `scroll-area`, `separator`, `aspect-ratio`

### Forms
- `form`, `input`, `label`, `textarea`, `select`, `checkbox`, `switch`, `radio-group`

### Feedback/Overlays
- `alert`, `badge`, `toast` (sonner), `skeleton`, `dialog`, `popover`, `sheet`, `tooltip`, `hover-card`

### Navigation
- `button`, `sidebar`, `dropdown-menu`, `tabs`, `breadcrumb`, `pagination`

### Data Display
- `table`, `avatar`, `progress`

### Charts
- Recharts integration for analytics (area, bar, line, pie charts)

## Background & Motion Choices

### Landing Hero
- **Gradient recipe:**
  ```css
  background:
    radial-gradient(ellipse at 20% 0%, rgba(30, 58, 95, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 100%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
    linear-gradient(180deg, var(--color-background) 0%, #f1f5f9 100%);
  ```
- **Noise overlay:** Yes, subtle (opacity 0.03)
- **Visual asset:** Abstract geometric pattern or dashboard screenshot mockup

### Auth Visual Panel
- **Animation type:** Floating gradient orbs (blobs)
- **Speed:** 15-20s loop, slow and calming
- **Opacity:** 0.25-0.35 max
- **Colors:** Primary blue and accent teal gradients

### Dashboard
- **Motion policy:** Skeletons for loading, subtle fade-in for cards (200ms)
- **Background:** Plain `--color-background`, no noise or patterns
- **Transitions:** `transition-colors duration-200` for interactive elements

### Reduced Motion
- **Strategy:** `@media (prefers-reduced-motion: reduce)` - disable all animations, show static gradients, instant transitions

## Layout Selections

### Auth Pages
- **Breakpoint:** `lg` (1024px) for two-column split
- **Form width:** `max-w-sm` (384px)
- **Visual copy:** "Secure Intelligence for Safer Facilities"
- **Grid:** `lg:grid-cols-[1fr_420px]`

### Landing Page
- **Grid ratio:** `lg:grid-cols-[1.1fr_0.9fr]` (content left, visual right)
- **CTA styles:**
  - Primary: `bg-primary text-primary-foreground hover:bg-primary/90`
  - Secondary: `variant="outline"` with border

### Dashboard
- **Shell grid:** `grid-cols-[260px_minmax(0,1fr)]`
- **Sidebar width:** 260px (collapsible to 64px icons-only)
- **Full-bleed fix:** Applied per `fullbleed-layout.md` - `min-w-0` on main content
- **Content max-width:** None (full-bleed), but inner content may use `max-w-7xl` for readability

## Assets

- **Icons:** Lucide React
  - Sizes: 16px (inline), 20px (buttons), 24px (navigation)
  - Stroke width: 1.5 (default)
- **Avatar placeholders:** UI Avatars or initials-based
- **Illustration/texture sources:**
  - Noise texture: CSS-generated or tiny PNG
  - Patterns: CSS gradients only (no external dependencies)

## Content Tone

### Voice Guidelines
- **Professional and direct:** Clear, authoritative language befitting corrections environment
- **Data-focused:** Lead with metrics and insights, avoid fluff
- **Supportive:** Frame AI insights as recommendations, not commands
- **Accessible:** Avoid jargon; explain technical terms when necessary

### Microcopy Rules
- **Empty states:** Always provide an action - "No incidents recorded. Upload a report to get started."
- **Tooltips:** Brief, action-oriented - "Generate AI insight report"
- **Error messages:** Specific and helpful - "Unable to process file. Please upload a PDF or text document."
- **Loading states:** Contextual - "Analyzing incident patterns..." not just "Loading..."

## Risk Level Badge Styles

```tsx
const riskBadgeVariants = {
  low: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  high: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
  critical: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
}
```

## QA Checklist (per build)

- [ ] Tokens mapped to Tailwind (`var(--color-*)`)
- [ ] Shadcn components installed via CLI (list above). No custom clones for existing shadcn parts
- [ ] Full-bleed dashboard verified on ultrawide; no hidden sidebar rails
- [ ] Spacing matches playbook guidelines; 8px multiples preferred
- [ ] Motion respects `prefers-reduced-motion`
- [ ] Contrast ≥ 4.5:1 for text on all backgrounds
- [ ] Risk badges use semantic colors consistently
- [ ] AI insight panels have clear visual hierarchy
- [ ] All interactive elements have visible focus states
- [ ] Loading states use skeleton components, not spinners

---

*Theming defined: January 2025*
*Ready for Phase 4: Implementation Planning*