---
name: bellcurve-design
description: Exhaustive design system specification, Neo-Brutalist paper-and-ink standards, color tokens, typography rules, component blueprints, and non-negotiable coding directives for BellCurve Studio. ACTIVATE whenever building, redesigning, or refining UI components for BellCurve Studio.
---

# BellCurve Studio — Exhaustive Design System & Engineering Specification

This document is the master specification and frontend engineering directive for **BellCurve Studio** (`https://bellcurvestudio.com`). Any AI agent or developer working on this codebase MUST strictly follow these standards.

---

## 1. Brand Philosophy & Identity

- **Core Manifesto**: *"Diagnose first, build second."* We replace fragmented, manual business workflows with durable software systems that drive measurable ROI — starting with an upfront operational audit.
- **Visual Style**: High-tactile **Neo-Brutalist Paper & Ink**. Combines precision editorial typography with hard offset drop shadows, crisp 2px borders, rich warm paper tones, and vibrant signal accent colors.
- **Target Perception**: Premium, senior-led, outcome-driven, zero generic agency buzzwords, 100% direct founder engineering.

---

## 2. Color Palette & Exact Token Reference

| Role | Color Name | Hex Code | Tailwind / Usage |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | Paper Cream | `#f4efe5` | `bg-[#f4efe5]` — Default site background |
| **Dark Ink** | Dark Navy Ink | `#17232d` | `bg-[#17232d]`, `text-[#17232d]`, `border-[#17232d]` |
| **Card Canvas** | Pure Card Cream | `#fffdf8` | `bg-[#fffdf8]` — Primary elevated card surface |
| **Muted Copy** | Dark Slate | `#56616a` | `text-[#56616a]` — Subtitles & secondary body copy |
| **Deep Copy** | Ink Slate | `#40505a` | `text-[#40505a]` — Paragraph text |
| **Primary Signal** | Signal Coral | `#ed542d` | `bg-[#ed542d]`, `text-[#ed542d]` — Primary CTAs & highlights |
| **Accent Gold** | Harvest Gold | `#ffbd5f` | `bg-[#ffbd5f]`, `text-[#ffbd5f]` — Wavy underlines & badges |
| **Accent Blue** | Soft Ice Blue | `#d7e4ff` | `bg-[#d7e4ff]` — Service & pillar highlights |
| **Accent Mint** | Fresh Sage | `#cbe9da` | `bg-[#cbe9da]` — Verified badges & success states |
| **Accent Purple** | Soft Lavender | `#e7d7ff` | `bg-[#e7d7ff]` — Innovation & technical tags |

---

## 3. Typography System & Styling Patterns

### 1. Headline Editorial Serif (`Instrument_Serif`)
- **Font Class**: `font-editorial-serif`
- **Weight**: `font-normal` or `font-italic`
- **Key Pattern**:
  ```tsx
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17232d]">
    Diagnose first,{" "}
    <em className="font-editorial-serif font-normal text-[#ed542d] underline decoration-[#ffbd5f] decoration-wavy decoration-2">
      build second.
    </em>
  </h2>
  ```

### 2. Primary Sans-Serif (`Plus_Jakarta_Sans`)
- **Font Class**: `font-sans`
- **Weights**:
  - `font-black` (900): Section titles, card headlines, price figures.
  - `font-bold` (700): Buttons, feature items, labels.
  - `font-semibold` (600) / `font-medium` (500): Body copy and descriptions.

### 3. Technical Code Mono (`JetBrains_Mono`)
- **Font Class**: `font-code-mono`
- **Pattern**:
  ```tsx
  <span className="font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ed542d]">
    STEP 01 • NO OBLIGATION
  </span>
  ```

---

## 4. Neo-Brutalist Borders & Tactile Shadows

### Borders
- **Standard Card Borders**: Always 2px hard dark navy ink: `border-2 border-[#17232d]`.
- **Inactive / Subdued Borders**: `border-2 border-[#17232d]/25`.

### Offset Hard Drop Shadows
- **Standard Card Shadow**: `shadow-[5px_5px_0_#17232d]` or `shadow-[6px_6px_0_#17232d]`
- **Hero & Command Card Shadow**: `shadow-[8px_8px_0_#17232d]`
- **Signal Coral Shadow**: `shadow-[3.5px_3.5px_0_#ed542d]`
- **Accent Gold Shadow**: `shadow-[3.5px_3.5px_0_#ffbd5f]`

### Border Radius Hierarchy
- **Primary Cards**: `rounded-3xl` (24px) or `rounded-2xl` (16px)
- **Inner Sub-containers**: `rounded-xl` (12px)
- **Pill Badges & Circular CTA Buttons**: `rounded-full` or `rounded-2xl`

---

## 5. Non-Negotiable Technical Rules & Code Gotchas

### 🚨 GOTCHA 1: CSS Specificity Exception (`text-white` Overridden)
In `src/app/globals.css`, there is a global rule: `.site-shell .text-white { color: #17232d !important; }`.
- **CRITICAL**: Do NOT use `text-white` on dark navy buttons (`bg-[#17232d]`) or container backgrounds, as the text will force to `#17232d` (dark navy on dark navy = invisible text).
- **SOLUTION**: Use `text-[#fffdf8]` or wrap inside `<span className="text-[#fffdf8]">...</span>` explicitly.

### 🚨 GOTCHA 2: Zero Layout Shift on Interactive Tabs
- When building interactive tabs or stage switchers (e.g. `WhyUs.tsx`, `AboutSection.tsx`), fix the internal demonstrator container height (e.g., `h-[215px]` or `h-[140px]`).
- Switching between tabs MUST produce **0px layout shift** for adjacent columns.

### 🚨 GOTCHA 3: Manual Selection Only (NO Auto-Rotation)
- Tab selection across all components must be **100% manual selection on user click**.
- DO NOT add `useEffect` timers, interval loops, or progress bar animations for auto-rotation.

### 🚨 GOTCHA 4: Seamless Continuous Scroll (No Section Divider Lines)
- DO NOT include `border-b` bottom border lines or top accent strips between `<section>` tags.
- Sections flow continuously on canvas background `#f4efe5`.

### 🚨 GOTCHA 5: Favicon Asset Standards
- The official favicon is `/white_logo.png`.
- Favicon references MUST be updated synchronously across `src/app/favicon.ico`, `src/app/icon.png`, `public/favicon.ico`, and `src/app/layout.tsx` metadata `icons` object.

### 🚨 GOTCHA 6: Git Push Protocol
- DO NOT execute `git push origin main` unless the user explicitly gives a direct command to push.

---

## 6. Comprehensive Component Specification Index

### 1. Navigation Header (`src/components/Navbar.tsx`)
- Fixed top bar (`fixed inset-x-0 top-0 z-50`).
- Logo lockup: `logo_main.png` + `logo_text.png`.
- CTA: `Get Free Audit ↗` button with signal orange icon badge.

### 2. Hero Section (`src/components/Hero.tsx`)
- Canvas: Warm paper cream `#f4efe5`.
- Title: `Diagnose first, build second.`
- Direct CTA: `Request Free Audit` with hard tactile drop shadow.

### 3. Working Principles / Why Us (`src/components/WhyUs.tsx`)
- 4 Core Pillars:
  - `01. Founders Build Directly` (0 Middlemen)
  - `02. Diagnose Before We Build` (Honest Engineering)
  - `03. 2 Months Free Migration` (Zero Downtime)
  - `04. Outcome-First Standards` (Plain Language)
- Left Column: Pillar buttons with compact padding (`px-3.5 py-3`).
- Right Column: Interactive demonstrator stage with fixed `h-[215px]` container.

### 4. Service Tiers & Pricing (`src/components/Services.tsx`)
- **Strictly 2 Tiers**:
  1. **Free Audit & Diagnosis** (*Step 01 • Free • Dark Navy Card `#17232d`*)
  2. **Custom System Engagement** (*Step 02 • From ₹50,000 • Pure Cream Card `#fffdf8`*)
- Responsive 2-column grid (`grid-cols-1 md:grid-cols-2`).

### 5. How We Work (`src/components/HowWeWork.tsx`)
- 4-Phase Engineering Process Timeline:
  - `01. Diagnostic Audit`
  - `02. Architecture & Scope`
  - `03. Founder Sprint Build`
  - `04. Migration & Handover`

### 6. About BellCurve Studio (`src/components/AboutSection.tsx`)
- **Top Ethos Quote Spotlight Card**:
  - Quote: *“BellCurve Studio was founded by three engineers who kept seeing organisations spend money on software that didn't fix the real problem. We started BellCurve to diagnose first, and build second.”*
- **Minimal 3-Card Grid (Founding Partners)**:
  - `Product & Business Lead` (*Product Strategy & User Diagnosis*)
  - `Engineering Lead` (*System Architecture & Speed*)
  - `Partnerships & Delivery Lead` (*Workflow Integrations & Migration*)

### 7. Direct Contact & Dialogue (`src/components/ContactSection.tsx`)
- **Topic Selection Pills**: `Web Application`, `CRM & Automation`, `Data Migration`, `Performance & Speed`, `General Tech Audit`.
- **Left Sidebar**: One-click email copy (`contact@bellcurvestudio.com`), 24-hr response SLA badge.
- **Submit Button**: `bg-[#ed542d] text-[#fffdf8] shadow-[3.5px_3.5px_0_#17232d] hover:bg-[#17232d] hover:text-[#ffbd5f]`.

### 8. Free Operational Audit Dedicated Page (`src/components/FreeAuditSection.tsx`)
- Canvas: Paper cream `#f4efe5` with dark navy text `#17232d`.
- **4-Step Process Bar ("What Happens Next")**: Step 01 Intake Form, Step 02 Founder Review, Step 03 Written Report, Step 04 Action Plan.
- **High-Contrast Intake Form**: Dark navy sidebar on left (`100% Confidential`), tactile input fields on right.

### 9. Footer (`src/components/Footer.tsx`)
- **Top Audit Conversion Banner**: Left side Gold/Coral CTA card, right side Editorial Ethos card (`FOUNDER-LED ENGINEERING` badge, no logo in top right).
- **Bottom Footer Branding**: Enlarged official brand mark (`/logo_main.png` at `h-14 w-14`, `/logo_text.png` at `h-11`).
- Sitemap, Primary Conversion link, Get in Touch details, and smooth Back-to-Top button.

---

## 7. Quality Assurance Checklist for Code Verification

Before declaring any UI edit complete, execute `npx tsc --noEmit` and verify:
- [ ] `npx tsc --noEmit` exits with code 0 (zero TypeScript errors).
- [ ] Button text on dark backgrounds uses `text-[#fffdf8]` (not `text-white`).
- [ ] No section border lines or auto-rotation timers exist.
- [ ] Tab switching has 0px height shift.
- [ ] Code is NOT pushed to remote repository unless explicitly requested by the user.
