# 🌿 Urbanland Products — Premium Urban Infrastructure Platform

Welcome to the official repository for **Urbanland Products V2**, India's premier manufacturer and supplier of architectural outdoor amenities, custom bus shelters, heavy-duty canteen tables, engineered car sheds, premium wicker furniture, planter boxes, and integrated smart city public transit systems.

This high-performance, responsive corporate platform is designed with a premium, glassmorphic dark-mode visual system, smooth hardware-accelerated animations, and robust backend integrations to deliver a state-of-the-art catalog and interactive request-for-proposal (RFP) pipeline.

---

## ✨ Features & Architecture

### 1. Unified Sitemap & Corporate Hubs
*   **Dynamic Products Directory (`/products`)**: A visual product catalog grouping Mild Steel (MS), Stainless Steel (SS), and Aluminium fabrications with bespoke, high-conversion product pages like **Bus Shelters** (`/products/bus-shelters`) featuring comprehensive engineering matrices, structured interactive tables, and JSON-LD schema.
*   **Solutions Directory (`/solutions`)**: Tailored vertical configurations showcasing infrastructure applications for Smart Cities, Real Estate Townships (Lodha, Oberoi, Adani), Educational Campuses, Resorts, and Industrial Zones.
*   **Engineering Projects Portfolio (`/projects`)**: An interactive, nationwide case study showcase detailing prominent municipal and residential township transit shelter works.
*   **RFP Quote Generator (`/contact` / `/get-quote`)**: A multi-step estimation wizard designed to capture specific bulk dimensions, material choices, and delivery timelines to auto-generate RFPs.
*   **Resources & Materials Guide (`/resources`)**: A support portal including interactive technical download drawers, a responsive FAQ system, and raw weathering and specifications guides.

### 2. High-Fidelity UI & Motion Engineering
*   **Interactive Slider Hero**: Ambient backdrop transitions with GSAP Ken Burns zoom effects, an embedded fog/smoke video overlay, custom progress indicator metrics, and dynamic responsive height masking.
*   **Lenis Smooth Scrolling**: Full integration of smooth, high-frame-rate scrolling on all viewport types, keeping animations natural and fluid.
*   **Glassmorphic Overlay Accordion Menu**: A slide-out sub-navigation panel grouping the entire corporate structure into sleek, hover-triggered visual nodes.
*   **Mobile-First Fluid Sizing**: Fully responsive custom viewport calculations (`clamp()`) for typography and margins, guaranteeing elegant readability from 320px screens up to wide desktop monitors.

### 3. Headless WordPress & WooCommerce Engine
*   **Dual Data-Polling REST API**: Interrogates Headless WordPress custom post types (`/wp-json/wp/v2/products`) and falls back cleanly to the WooCommerce API (`/wc/v3/products`).
*   **High-Fidelity Offline Failover**: Integrates a seamless mock data layer that activates automatically if the server is offline, ensuring the catalog is never broken.
*   **Dynamic SEO & Structured Schema**: Injects proper `Product` and `BlogPosting` JSON-LD schemas into the DOM, generating rich google search snippets and dynamically overriding page meta-titles/descriptions.

---

## 🛠️ Technology Stack

*   **Frontend Framework:** [React 19](https://react.dev/) + [Vite](https://vite.dev/) (V5.x)
*   **Animations:** [GSAP (GreenSock Animation Platform)](https://gsap.com/) + `@gsap/react`
*   **Smooth Scrolling:** [Lenis Scroll](https://lenis.darkroom.engineering/)
*   **Styling:** [Tailwind CSS V4](https://tailwindcss.com/)
*   **Routing:** [React Router DOM V7](https://reactrouter.com/)
*   **Backend Integration:** WordPress REST API + WooCommerce API
*   **Deployment Target:** Vercel (custom SPA routing rules enabled)

---

## 📦 Installation & Local Development

### Prerequisites
*   Node.js (v18.x or higher)
*   npm (v10.x or higher)

### Setup Instructions

1.  **Navigate to the Frontend Directory**
    ```bash
    cd capsule/frontend
    ```

2.  **Install Project Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    *Open your browser and navigate to `http://localhost:5173` to view the platform.*

4.  **Production Compilation**
    ```bash
    npm run build
    ```
    *Generates optimized, static HTML, CSS, and JS chunks under the `/dist` output folder ready for deployment.*

---

## 🌐 Production Deployment Configuration (`vercel.json`)

The platform is pre-configured for automated Vercel deployments. SPA routing rewrites and build paths are declared at the root level:

```json
{
  "outputDirectory": "frontend/dist",
  "cleanUrls": true,
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

*Every push to the `main` branch automatically triggers Vercel's build engine, ensuring instant production updates.*

---

## 📜 Warranty & Certifications
*   **Quality Standard:** ISO 9001:2015 Certified Manufacturing Processes.
*   **Urbanland Guarantee:** India's only comprehensive 2-Year structural and powder-coat guarantee on municipal outdoor transit infrastructure.
