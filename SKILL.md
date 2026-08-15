---
name: bellcurve-design
description: Complete design system, aesthetic standards, color tokens, typography rules, layout principles, and neo-brutalist paper-and-ink UI standards for BellCurve Studio. ACTIVATE/READ whenever building, redesigning, or refining UI components for BellCurve Studio.
---

# BellCurve Studio Design System & Aesthetic Guidelines

This document serves as the authoritative design system and frontend engineering standard for **BellCurve Studio** (`https://bellcurvestudio.com`).

---

## 1. Core Brand Philosophy & Aesthetic Identity

- **Design Philosophy**: High-tactile **Neo-Brutalist Paper & Ink** aesthetic.
- **Brand Ethos**: *"Diagnose first, build second."* Software engineering serving real business outcomes, not agency ego.
- **Visual Feel**: Editorial, tactile, premium, high-contrast, non-generic. Feels like a precision physical engineering blueprint brought to life on digital paper.

---

## 2. Design System Tokens & Color Palette

### 🎨 Primary Canvas & Neutral Tokens
- **Paper Cream Background (Canvas)**: `#f4efe5`
- **Dark Navy Ink (Text & Borders)**: `#17232d`
- **Card Paper Background**: `#fffdf8`
- **Soft Muted Paper**: `#f4efe5` / `#f3efe6`
- **Muted Body Text**: `#56616a` / `#40505a`

### ✨ Accent Color System
- **Signal Coral / Orange**: `#ed542d` *(Primary CTAs, active highlights, key metrics)*
- **Accent Gold**: `#ffbd5f` *(Badges, signature underlines, highlight shadow accents)*
- **Accent Soft Blue**: `#d7e4ff` *(Background highlights, secondary cards)*
- **Accent Mint / Sage**: `#cbe9da` *(Verified badges, success states)*
- **Accent Purple**: `#e7d7ff` *(Compound innovation badges, secondary tags)*

---

## 3. Typography Rules & Font Hierarchy

1. **Headline Editorial Serif**:
   - Font Class: `font-editorial-serif` (`Instrument_Serif`)
   - Usage: H1/H2 highlight words, quotes, and key emphasis phrases.
   - Example Pattern: `Diagnose first, <em className="font-editorial-serif font-normal text-[#ed542d] underline decoration-[#ffbd5f] decoration-wavy decoration-2">build second.</em>`

2. **Sans-Serif Primary Body & UI**:
   - Font Class: `font-sans` (`Plus_Jakarta_Sans`)
   - Usage: Card titles, body copy, form labels, primary CTAs.
   - Weights: `font-black` (900) for titles, `font-bold` (700) for sub-elements, `font-medium` (500) for body text.

3. **Mono Technical Code Font**:
   - Font Class: `font-code-mono` (`JetBrains_Mono`)
   - Usage: Category badges, pillar labels (`PILLAR 01`), metric readouts, taglines, technical standards.
   - Format: `font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ed542d]`

---

## 4. Neo-Brutalist Border & Shadow System

- **Hard Borders**: Always use 2px hard dark navy ink borders:
  ```tsx
  className="border-2 border-[#17232d]"
  ```
- **Tactile Drop Shadows**: Use hard, un-blurred offset box-shadows:
  - Card Drop Shadow: `shadow-[5px_5px_0_#17232d]` or `shadow-[6px_6px_0_#17232d]`
  - High-Impact Hero Shadow: `shadow-[8px_8px_0_#17232d]`
  - Accent Color Shadow: `shadow-[3.5px_3.5px_0_#ffbd5f]` or `shadow-[3.5px_3.5px_0_#ed542d]`
- **Border Radius**:
  - Interactive Cards & Containers: `rounded-2xl` or `rounded-3xl`
  - Pill Badges & Buttons: `rounded-full` or `rounded-xl`

---

## 5. Critical UI & Technical Rules

### ⚠️ Rule 1: Text Color on Dark Buttons (CSS Specificity Warning)
`globals.css` contains a rule: `.site-shell .text-white { color: #17232d !important; }`.
- **CRITICAL**: NEVER use plain `text-white` on dark navy buttons (`bg-[#17232d]`), or the button text will turn dark navy on dark navy (invisible!).
- **REQUIRED**: Use `text-[#fffdf8]` or `<span className="text-[#fffdf8]">Button Text</span>` explicitly.

### ⚠️ Rule 2: Zero Layout Shift on Tab Switching
- When building interactive tabs or stage switchers (e.g. `WhyUs.tsx`, `AboutSection.tsx`), fix the inner stage container height (e.g. `h-[215px]` or `h-[140px]`).
- Switching tabs must result in **0px height jump** for adjacent columns.

### ⚠️ Rule 3: Manual Selection Only (NO Auto-Rotation)
- Interactive tab panels, laboratory simulators, and pillar cards must be **100% manual selection on user click**.
- DO NOT use `useEffect` interval timers or auto-rotation state.

### ⚠️ Rule 4: No Section Divider Lines
- DO NOT add `border-b border-[#17232d]/15` section bottom borders or absolute top accent bars between sections.
- The page must scroll continuously and seamlessly across sections on canvas `#f4efe5`.

### ⚠️ Rule 5: Minimal Card Padding
- Left-side selector cards & pillar tabs should have compact, minimal padding: `px-3.5 py-3`.

### ⚠️ Rule 6: Git Push Protocol
- DO NOT execute `git push origin main` unless the user explicitly commands to push code.

---

## 6. Component Specification Index

### 🔹 Hero Section (`src/components/Hero.tsx`)
- Headline with editorial serif italics & signal coral accents.
- Direct audit CTA button with tactile drop shadow.

### 🔹 Working Principles / Why Us (`src/components/WhyUs.tsx`)
- 4 Core Pillars (Founders Build Directly, Diagnose Before We Build, 2 Months Free Migration, Outcome-First Standards).
- Left Column: Compact pillar buttons (`px-3.5 py-3`).
- Right Column: Interactive simulator stage (`h-[215px]` zero layout shift).

### 🔹 Service Tiers & Pricing (`src/components/Services.tsx`)
- **2 Tiers Only**:
  1. `Free Audit & Diagnosis` (*Free • Step 01 • Dark Navy Card*)
  2. `Custom System Engagement` (*From ₹50,000 • Step 02 • Cream Paper Card*)

### 🔹 About BellCurve Studio (`src/components/AboutSection.tsx`)
- Top Ethos Quote Spotlight Card (*“BellCurve Studio was founded by three engineers who kept seeing organisations spend money on software that didn't fix the real problem...”*).
- Minimal 3-Card Grid: `Product & Business Lead`, `Engineering Lead`, `Partnerships & Delivery Lead`.

### 🔹 Direct Contact (`src/components/ContactSection.tsx`)
- Interactive Primary Challenge Pills (*Web Application, CRM & Automation, Data Migration, Performance & Speed, General Tech Audit*).
- Left Sidebar: Copy email button (`contact@bellcurvestudio.com`), 24-hr response SLA badge.
- Submit Button: `bg-[#ed542d] text-[#fffdf8] shadow-[3.5px_3.5px_0_#17232d]`.

### 🔹 Free Operational Audit (`src/components/FreeAuditSection.tsx`)
- Paper cream canvas `#f4efe5`.
- 4-Step Process Bar (*Step 01 Intake Form, Step 02 Founder Review, Step 03 Written Report, Step 04 Action Plan*).
- High-contrast intake form with dark navy sidebar.

### 🔹 Footer (`src/components/Footer.tsx`)
- Official enlarged BellCurve Studio brand mark (`logo_main.png` + `logo_text.png`).
- Top Audit Banner card with signal orange CTA.
- Sitemap, Primary Conversion, Get in Touch details, and smooth Back-to-Top scroll.
