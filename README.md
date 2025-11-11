# Atlas Homes Frontend

## Overview
Atlas Homes Frontend is a Vite-powered React + TypeScript single-page application that markets Atlas Homestays inventory and captures booking intent. Routing is centralized in [`src/App.tsx`](src/App.tsx), which mounts global UI elements (navbar, scroll restoration, footer) around page-level routes. The landing experience rendered by [`src/pages/home/Home.tsx`](src/pages/home/Home.tsx) weaves together carousel hero content, featured locations, marketing callouts, and testimonials composed from modular components and the structured property inventory exported by [`src/data.ts`](src/data.ts).

## Prerequisites
- Node.js **18.18+** or **20.0+** (required by Vite 5)
- npm **9+** (ships with the recommended Node releases)
- Modern browser for previewing the development server

Optional tooling:
- Wrangler CLI (for deploying the production build to Cloudflare Workers)
- ESLint-compatible editor integration for real-time lint feedback

## Quickstart
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Copy environment variables**
   ```bash
   cp .env.example .env
   ```
   Populate the EmailJS identifiers before attempting to send booking/contact forms.
3. **Run the development server**
   ```bash
   npm run dev
   ```
   The app binds to `http://localhost:5173` by default. Pass `--host 0.0.0.0` if you need LAN access.
4. **Lint and format checks**
   ```bash
   npm run lint
   ```
5. **Create a production build**
   ```bash
   npm run build
   ```
6. **Preview the production bundle**
   ```bash
   npm run preview
   ```

## Project Map
| Path | Description |
| --- | --- |
| `src/main.tsx` | Entry point bootstrapping React with router context and Tailwind global styles. |
| `src/App.tsx` | Declares `BrowserRouter` routes for the home page, property detail views, location collections, and 404 handling while wrapping shared layout pieces. |
| `src/pages/home/Home.tsx` | Home hero, location scroller, parallax CTA, and marketing sections composing homepage modules. |
| `src/components/homepage_components/homepage_locations/HomePage_Locations.tsx` | Grid of property cards sourced from `propertyData`, each linking to the slugged property detail view. |
| `src/components/homepage_components/homepage_Propertydetails/Homepage_PropertyDetails.tsx` | Property detail page rendering gallery, amenities, booking widget, and policies from `propertyData`. |
| `src/components/homepage_components/homepage_locationsdetails/Homepage_LocationDetails.tsx` | Location-deep page with filters, hero carousel, and booking modal for grouped listings. |
| `src/data.ts` | Source of property metadata, navigation content, and footer links consumed across the UI. |
| `src/components/commonComponents/navbar/Navbar.tsx` / `footer/Footer.tsx` | Global navigation/header ribbon and footer contact blocks. |
| `docs/` | Living documentation for onboarding, architecture, operations, security, and starter tasks. |

## Common Tasks
| Goal | Command |
| --- | --- |
| Start dev server with network access | `npm run dev -- --host 0.0.0.0` |
| Run ESLint across the project | `npm run lint` |
| Build production assets | `npm run build` |
| Preview built assets locally | `npm run preview` |
| Deploy static bundle with Wrangler | `npx wrangler deploy` |

## Troubleshooting
- **Node version errors:** Verify `node -v` meets the prerequisite range. Use `nvm` or `fnm` to align versions.
- **Port 5173 already in use:** Override with `npm run dev -- --port 5174` or free the port before starting Vite.
- **Blank property pages:** Ensure navigation via the homepage so React Router receives the `location.state` payload required by [`Homepage_LocationDetails`](src/components/homepage_components/homepage_locationsdetails/Homepage_LocationDetails.tsx).
- **Email delivery fails:** Confirm the EmailJS service, template, and public keys are filled in `.env` and referenced in [`BookingFrom.tsx`](src/components/homepage_components/homepage_Propertydetails/BookingFrom.tsx) and [`ContactUs.tsx`](src/pages/contactus/ContactUs.tsx).
- **Cloudflare deployment issues:** Run `npm run build` before `wrangler deploy`; Wrangler serves the contents of `dist/` configured in [`wrangler.toml`](wrangler.toml).
