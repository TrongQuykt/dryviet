<div align="center">
  <img 
    src="https://github.com/user-attachments/assets/69494ee7-24e0-48a6-976d-8103f891d86f" 
    alt="Viet Nam Cuong Thinh Logo" 
    width="320" 
    height="240" 
  />
</div>

  # 🚀 Dryviet | KOTHECHE Next.js Enterprise Ecosystem
  *Advanced B2B Export & B2C Premium E-Commerce Architecture*

  [![Next.js](https://img.shields.io/badge/Next.js-16.2.2-black?logo=next.js&style=flat-square)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.2.4-blue?logo=react&style=flat-square)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&style=flat-square)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-Ultra_Strict-3178C6?logo=typescript&style=flat-square)](https://www.typescriptlang.org/)
  [![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma&style=flat-square)](https://www.prisma.io/)
  [![Google SEO](https://img.shields.io/badge/SEO-Rank_1_Optimized-4285F4?logo=google&style=flat-square)](https://search.google.com/search-console/about)
</div>

---

## 📖 Executive Summary
The **DryViet/KOTHECHE ecosystem** is a top-tier enterprise web application designed to command the global B2B OEM Freeze Drying market and the B2C Premium US Amazon market. Built upon a Next.js 16 (App Router) foundation, this platform serves as both a high-converting lead generation hub for B2B export partnerships and an immersive product catalog for retail customers.

This repository tracks the entire journey from ideation to the final hyper-optimized deployment, emphasizing **Performance (Core Web Vitals)**, **SEO/Semantic HTML**, and **Responsive, Component-Driven Design**.

---

## 🛠️ Tech Stack & Dependencies
*An enterprise stack built for uncompromised speed, security, and scalability.*

- **Core Framework**: Next.js (Version 16.2.2) utilizing the modern **App Router (`/src/app`)**.
- **UI Library**: React (Version 19.2.4) with concurrent rendering optimizations.
- **Styling**: Tailwind CSS v4 for aggressive utility-first styling supplemented by custom CSS logic in `globals.css` and `clsx` + `tailwind-merge` for hyper-dynamic class parsing.
- **Animations & Visuals**: `framer-motion` for fluid, hardware-accelerated orchestrations, and `swiper` for touch-ready carousels. `lucide-react` forms the iconography system.
- **Form Management**: `react-hook-form` bound explicitly to `zod` schema validations to ensure zero junk data impacts the backend.
- **Database & ORM**: Prisma (`@prisma/client`) scaling seamlessly on top of a relational **MySQL (`mysql2`)** engine for secure Admin/Leads storage.
- **Content Parsing**: `react-markdown` with `remark-gfm` seamlessly converts raw markdown into styled HTML logic for the Blog system.
- **Vercel Ecosystem**: Fully integrated with `@vercel/analytics` and `@vercel/speed-insights`.

---

## 🗺️ Project Architecture & Sitemap

### 1. Folder Structure (Feature-First Pattern)
```text
/src
 ├── app/                  # Next.js App Router (Pages & Layouts)
 │    ├── (main)/          # Public-facing application group
 │    │    ├── about/
 │    │    ├── blog/       # Pagination & CMS logic integrated
 │    │    ├── products/   # Dynamic paths [slug] for product PDPs
 │    │    └── contact/
 │    ├── admin/           # Secured operational interface
 │    ├── sitemap.ts       # Dynamic XML Sitemap Generator
 │    └── robots.ts        # Dynamic Crawler allowance
 ├── components/           # Generic atomic design UI elements (Buttons, Inputs)
 ├── features/             # Complex Business Component blocks
 │    ├── home/            # e.g., HeroSection, CertificationsSection
 │    ├── products/        # e.g., ProductRichDescription (Amazon-style grid)
 │    └── admin/
 ├── data/                 # SSG / ISG Pre-compiled static contexts
 │    ├── blog-posts.ts    # 21 deeply researched AI-curated Markdown articles
 │    └── products.ts      # Structured Specs/Benefits multidimensional arrays
 └── lib/                  # Utilities (Prisma init, Zod schemas, API clients)
```

---

## 🎯 Global SEO & Metatags Strategy (The 'SaaS' Approach)

The core business goal of this app was **Organic Traffic Dominance** using psychological keyword clustering (e.g., *sấy thăng hoa, OEM thực phẩm, freeze drying Vietnam*).

### 1. Multi-layered Metatags & OpenGraph
By centralizing Next.js `generateMetadata`, every dynamic route calculates precise tags:
- **`title` & `description`**: Strictly adhering to 60/160 character limits to prevent Google SERP truncation.
- **`keywords`**: Deep integration of targeted semantic clusters.
- **OpenGraph (`og:image`)**: Pre-rendered high-res covers allocated to specifically trigger conversions when shared via LinkedIn and iMessage.
- **Canonical URLs**: Strictly defined `<link rel="canonical" />` ensuring zero duplicate-content penalties regarding the paginated limits (e.g., `?page=2`).

### 2. Semantic HTML & Schema.org (JSON-LD)
Pages are constructed mirroring an academic dissertation for robot-crawlers:
- Only *One* `<h1>` per page. Hierarchical mapping flows sequentially down to `<h2>`, `<h3>`.
- **`Product` Schema**: Used on PDPs with specs (`getSpecs`), brand, and SKU mappings.
- **`Article` Schema**: Injected automatically onto all `/blog/[slug]` endpoints. 
- **Image `alt` Strategy**: Every single `<Image />` component mandates descriptive spatial awareness for ADA compliance & Google Image search (e.g., `alt="High-tech stainless steel freeze dryer machine in Ho Chi Minh City"`).

### 3. Deep Content Matrix (The `blog-posts.ts` System)
We deployed 21 hyper-optimized, long-form markdown articles. These aren't generic texts; they are clustered to attack highly localized B2B intents (*gia công sấy thăng hoa quận 12*) and International Amazon ambitions (*Sản phẩm Kotheche trên Amazon US*).

---

## ⚡ Core Web Vitals (CWV) & Performance Tuning

To hit `95+` on Lighthouse and ensuring mobile conversion doesn't bleed data:
1. **Next `next/image` Optimization**: All heavy headers are flagged with `priority={true}` and `fetchPriority="high"` which solves the **Largest Contentful Paint (LCP)** bottleneck. Image assets are locally sourced WebP variants or aggressively cached.
2. **Dynamic Pagination Architecture**: The Blog was completely refactored via SSR `searchParams` parsing to deliver a payload of exactly `6` posts per load, calculating slices server-side — preventing client DOM bloat and minimizing main-thread blocking.
3. **High-Density Mobile Grid**: A distinct request was made for mobile utility. We enforced `grid-cols-2` intertwined with `aspect-square` typography squishing (`text-[10px]`) allowing B2B buyers to scan content instantaneously on weak 3G networks.

---

## ⚙️ How to Operate the Repository

### Installation
Make sure you are on Node `v20+`.
\`\`\`bash
# 1. Clone & Install
npm install

# 2. Database Introspection (Prisma MySQL setup)
npx prisma generate
npx prisma db push

# 3. Environment Variables
# Copy the structure of .env.example into .env
# Includes: DATABASE_URL, SENDER_EMAIL, SENDER_PASSWORD
\`\`\`

### Execution
\`\`\`bash
# Run local dev-server on port 3000
npm run dev

# Audit the production build locally (Crucial before Vercel push)
npm run build
npm run start
\`\`\`

---

## 📝 Change Log & Task Tracking Summary

**[PHASE 1] Structural Pivot & Next.js Initialization**
- Migrated out from an old conceptual base to `App Router`.
- Implemented static generation rules.

**[PHASE 2] UI/UX B2B Refinement**
- Established Glassmorphic components.
- Developed the `ProductRichDescription.tsx` mapping arrays to UI (Core Values Matrix + Zebra-Striped Data Tables analogous to Amazon's layout).

**[PHASE 3] SEO Engine & Content Overhaul**
- Wrote algorithms mapping 9-to-21 blog arrays with proper React-Markdown components.
- Auto-calculated reading times.
- Fixed mobile CSS flex/grid structures to restore a true 2-col High-Density layout.

**[PHASE 4] Form Integrity & Security**
- Finalized Admin SMTP validations.
- Connected backend `.env` variables via strictly parsed APIs ensuring error boundaries swallow non-critical faults.

---

## ©️ License
Private & Confidential. 
Property of **Viet Nam Cuong Thinh LLC (VNCT)** / **KOTHECHE**.
For inquiry: [vyquy633@gmail.com](mailto:vyquy633@gmail.com)
