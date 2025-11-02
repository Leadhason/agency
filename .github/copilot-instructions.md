# Empire Sports Agency - AI Coding Instructions

This is a Next.js 16 sports agency website built with TypeScript, React 19, and Tailwind CSS 4.

## Architecture & Structure

- **App Router**: Uses Next.js App Router with `app/` directory structure  
- **Component-based sections**: Main page (`app/page.tsx`) composes individual section components from `components/`
- **Section flow**: Header → Hero → About → Services → WhyChooseUs → OverlayScene → OurPlayers → Testimonials
- **Import pattern**: All components use absolute imports with `@/components/` alias (configured in tsconfig.json)

## Styling Conventions

- **Tailwind-first**: All styling uses Tailwind CSS classes, no custom CSS modules
- **Color scheme**: Primary brand colors are yellow (`yellow-500`, `yellow-400`) and olive green (`bg-[#6A6E39]`)
- **Typography**: Uses Geist Sans/Mono fonts from `next/font/google` with CSS variables (`--font-geist-sans`, `--font-geist-mono`)
- **Layout patterns**: 
  - Hero sections use full viewport height (`h-screen`) with inline background images (`style={{backgroundImage: 'url(/hero-1.jpeg)'}}`)
  - Grid layouts are common (`grid-cols-2`, `grid-cols-4`)
  - Glassmorphism effects with `bg-white/10 backdrop-blur-2xl`
  - Complex header layouts with absolute positioning (`absolute bottom-0 left-0`) and flexbox alignment

## Component Patterns

- **Data arrays**: Components like Services and OurPlayers use local data arrays with `map()` rendering
- **Image handling**: Always use `next/image` with explicit width/height, `object-cover` for consistent aspect ratios
- **Interactive elements**: Hover effects with `transition-transform duration-500 hover:scale-105` (Services) or `duration-300` (OurPlayers)
- **Icons**: Lucide React icons (`ArrowRight`, `Check`) for CTAs and feature lists
- **Section headers**: Use positioned elements with borders and rounded badges (`border border-white rounded-full py-2 px-5`)
- **File naming**: All component files are lowercase (`ourplayers.tsx`, `whychooseus.tsx`)

## Specific Implementation Patterns

- **Gradient overlays**: Use `absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent` for image overlays
- **Complex layouts**: OurPlayers section shows pattern of absolute positioned headers with `mt-[400px]` spacing
- **Card layouts**: Services uses bottom-positioned content with glassmorphism button circles
- **Feature lists**: WhyChooseUs shows checkmark pattern with `bg-gray-100 rounded-full` containers

## Development Workflow

- **Scripts**: Use `npm run dev` for development, `npm run build` for production builds
- **Dependencies**: Minimal stack - Next.js 16 + React 19 + Tailwind 4 + TypeScript 5 + Lucide React only
- **Asset path**: Images in `/public/` directory, referenced with leading slash (`/hero-1.jpeg`)
- **No testing**: Project uses no testing framework or linting setup

## Key Files to Reference

- `app/page.tsx` - Main page composition pattern with all section imports
- `components/services.tsx` - Grid layout with gradient overlay and hover effects  
- `components/hero.tsx` - Inline background image with glassmorphism card positioning
- `components/ourplayers.tsx` - Complex absolute positioning with section badges
- `app/globals.css` - Tailwind 4 inline theme configuration with CSS variables