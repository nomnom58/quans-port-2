# High-Performance Portfolio
> **Technical Orchestration for a Persona-Driven Information Funnel**

![Hero Section Demo](assets/hero-demo.gif)

## 🎯 The Strategy: Why it exists
Most designer portfolios suffer from "One-Size-Fits-All" syndrome, resulting in bloated experiences that fail to convert specific business stakeholders. This project is engineered as an **Information Funnel** optimized for three distinct power-users:

| Target Persona | Core Need | Technical Solution |
| :--- | :--- | :--- |
| **HR / Recruiters** | < 5s Scanning efficiency | Flat information hierarchy & instant LCP. |
| **UI/UX Leaders** | Aesthetic finesse & "Signature" feel | 60fps GSAP orchestration & pixel-perfect precision. |
| **Tech Leaders** | Reliability & Cost-efficiency | Zero-dependency logic, $0 infra cost, Clean architecture. |

---

## 🛠 Tech Stack
A specialized lean architecture designed to bypass the bloat of no-code tools like Framer or Wix.

*   **Core:** React (Component-based architecture)
*   **Motion Engine:** GSAP & ScrollTrigger (Cinematic 60fps orchestration)
*   **Styling:** Tailwind CSS JIT (Minimal payload & design tokens)
*   **Deployment:** Vercel (Edge-delivery)

---

## 🏗 Engineering Masterclass: The "How"

### 1. The "Basement Logic" (Deep Dive)
Mobile browsers suffer from address-bar height mutations, often breaking `100vh` layouts. I implemented a **"Basement Logic"** system to stabilize specific sections (reaching up to `125vh`) ensuring animations remain pinned and scroll-jacking is eliminated.

```typescript
// Architecture Logic: Viewport Stabilization
const mm = gsap.matchMedia();
mm.add("(max-width: 767px)", () => {
    // Clear props & reset logic for mobile stability
    gsap.set('.mobile-hero-content', { 
        clearProps: "all", 
        y: 0 
    });
});
```
> **Trade-off:** High Z-index management complexity in exchange for rock-solid mobile viewport performance.

### 2. The "Stable Container" Model
To achieve **Zero Layout Shift (CLS)** during logo scaling transitions, I engineered an 80px fixed-height "Stable Container". This prevents the browser from recalculating entire layout trees while the logo transforms from 80px to 32px.

| Feature | Dynamic Method | Stable Container Method (Used) |
| :--- | :--- | :--- |
| **CLS Score** | > 0.1 (Poor) | **0.0 (Perfect)** |
| **Reflows** | High | **None** |

---

## ⚡ Performance Audit
This portfolio isn't just about pixels; it's about raw engineering metrics.

- [x] **Lighthouse CLS:** 0.0 (Zero Layout Shift)
- [x] **FCP Benchmarks:** Green Zone (Sub-second rendering)
- [x] **Monthly Operation Cost:** $0.00 (Optimized for Serverless Free-tier)
- [x] **Motion Quality:** Fluid 60fps across entry-level devices

![Engineering Performance Audit](assets/performance-check.png)

---

## 🚀 Features at a Glance
- [x] **Cinematic Scroll Orchestration:** Context-aware animations.
- [x] **Adaptive Responsive Logic:** Distinct behaviors for Laptop vs. Mobile.
- [x] **Serverless Architecture:** Deployment-ready with zero maintenance.
- [x] **Typography tokens:** Optimized for readability and information hierarchy.

---

> "Design is how it works. By focusing on Basement Logic and Stable Containers, I've created a portfolio that prioritizes the user's time and the browser's performance above all else."

---
*Created with focus on High-Precision Frontend Engineering.*
