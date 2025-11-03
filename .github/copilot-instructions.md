# Empire Sports Agency — AI Coding Instructions

Next.js 16 sports agency website built with TypeScript, React 19, and Tailwind CSS 4. Concise, actionable guidance for AI agents working in this repo.

## Architecture & Big Picture
- **Next.js App Router**: Uses `app/` directory structure. Homepage (`app/page.tsx`) composes section components from `components/`
- **Section-based composition**: Header → Hero → About → Services → WhyChooseUs → OverlayScene → OurPlayers → Testimonials → CTA → Footer
- **Route structure**: Main site at `/` + dedicated `/about` page with its own layout
- **Import pattern**: All components use `@/components/*` alias (configured in `tsconfig.json`). Prefer this over relative paths

## Styling & Design Conventions
- **Tailwind-first**: All styling uses Tailwind CSS 4 classes in JSX. No CSS modules. Check `app/globals.css` for custom animations and CSS variables
- **Typography**: Uses Geist Sans + Montserrat fonts from `next/font/google`. CSS vars: `--font-geist-sans`, `--font-montserrat`, `--font-geist-mono`
- **Brand colors**: Yellow (`yellow-500`), white overlays, gradients for image legibility
- **Images**: All stored in `/public/`. Always use `next/image` with explicit `width` & `height` + `className="object-cover"`
- **File naming**: Component files are lowercase (e.g., `ourplayers.tsx`, `whychooseus.tsx`)

## Key Visual Patterns
- **Hero backgrounds**: Inline styles `style={{backgroundImage: 'url(/hero-1.jpeg)'}}` for full-viewport coverage
- **Overlay gradients**: `bg-gradient-to-t from-black/90 via-black/30 to-transparent` for text legibility over images  
- **Glassmorphism cards**: `bg-white/20 backdrop-blur-2xl rounded-2xl` (see `components/hero.tsx`)
- **Scroll animations**: Custom CSS keyframes in `globals.css` + conditional classes based on `useScrollReveal` hook

## Code Patterns & Data Structures
- **Data-driven sections**: Most components use local arrays + `.map()` (see `services` array in `components/services.tsx`). Follow existing shape: `{id, title, subtitle, image, href?}`
- **Icons**: Exclusively `lucide-react` (e.g., `ArrowRight`). Don't add new icon libraries
- **Animations**: `useScrollReveal` hook (`hooks/useScrollReveal.ts`) + CSS classes for intersection-based animations
## Development Workflow
- **Install & run**: `npm install` → `npm run dev` (Next.js dev server on port 3000)
- **Build**: `npm run build` → `npm run start` (production)
- **No testing/linting**: Repo has minimal scripts. Adding tests or linters is fine but no existing config to extend
  - Start (production): `npm run start`
- No testing or lint scripts exist in the repo currently — adding tests or linters is allowed but note there is no baseline config to update.

## Integration & external touchpoints
## Project Structure & Integration
- **Static site**: No API routes exist. All pages under `app/` (homepage + `/about` page)
- **Assets**: All images in `/public/` (hero, services, player photos). Reference with leading slash: `/hero-1.jpeg`
- **Configuration**: `next.config.ts` is minimal. `tsconfig.json` has `@/*` path mapping

## Quick Copy-Paste Examples
- **Component import**: `import HeroSection from '@/components/hero'` (used in `app/page.tsx`)
- **Next.js image**: `<Image src="/services-1.jpeg" width={500} height={400} className="object-cover" />`
- **Scroll reveal**: `const heroRef = useScrollReveal(0.1)` → `ref={heroRef.ref}` + `className={heroRef.isVisible ? 'visible' : ''}`

## Key Files to Reference
- `app/page.tsx` (section composition), `app/layout.tsx` (fonts), `app/globals.css` (animations)
- `components/hero.tsx` (background patterns), `components/services.tsx` (data arrays), `hooks/useScrollReveal.ts`
## Quick examples to copy/paste
- Import a component: `import HeroSection from '@/components/hero'` (used in `app/page.tsx`).
- next/image example (follow width/height & object-cover):
  - ` <Image src="/services-1.jpeg" width={500} height={400} className="object-cover" />`

## When changing layout or global styles
- Edit `app/globals.css` for Tailwind tokens and variables. Avoid adding separate global CSS files; prefer Tailwind utilities.

## Files to inspect first
- `app/page.tsx`, `app/layout.tsx`, `app/globals.css`
- `components/hero.tsx`, `components/services.tsx`, `components/ourplayers.tsx`, `components/overlay-scene.tsx`, `components/header.tsx`
- `package.json` (dev scripts) and `tsconfig.json` (path alias)

If anything here is unclear or you want the instructions to stress a different area (testing, CI, or accessibility checks), tell me which parts to expand and I will iterate.