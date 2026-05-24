# Smart Factory UI Platform

[![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/design/bXN0XdyGRFEyOK434KNtFy/Untitled?node-id=0-1&t=YVqbekH5XEJKoHzB-1)

A high-performance, industrial-grade management interface designed for smart manufacturing ecosystems. This project demonstrates a comprehensive **Design-to-Code** implementation, featuring a custom Design System, a robust component library, and data-intensive screens tailored for industrial operations.

## 🚀 Overview

The **Smart Factory UI Platform** is built to handle complex information architecture with a minimalist and focused aesthetic. It prioritizes data clarity, ease of navigation, and developer-ready component structures.

### Key Highlights:
- **Design System First**: Built on a strict token-based architecture using Tailwind CSS v4.
- **Information Architecture**: Optimized for high-density data display and industrial monitoring.
- **Production-Ready**: Fully typed with TypeScript, follows atomic design principles, and is built for scalability.

---

## 🎨 Design System (Core Foundations)

The platform is driven by a centralized design token system, ensuring visual consistency across all modules.

- **Design Source**: [View Figma Design File](PASTE_YOUR_FIGMA_LINK_HERE)
- **Color Palette**: A professional industrial blue scale (`Primary 50-900`) complemented by a sophisticated neutral gray system for deep focus.
- **Typography**: Utilizing `Inter` for clarity and `Roboto Mono` for technical data points.
- **Grid & Spacing**: A rigid 4px-based scaling system for perfect alignment.
- **States**: Every interactive element includes defined `Default`, `Hover`, `Active`, `Disabled`, and `Error` states.

> **Design Assets**: Foundations and tokens can be found in `/design/tokens/`.

---

## 🧩 Component Library

A collection of modular, reusable React components designed for the factory floor and management offices.

- **Actions & Navigation**: Multi-level Sidebar, Responsive Tabs, and Breadcrumbs.
- **Data Entry**: Searchable Dropdowns, Date Range Pickers, and intuitive File Upload areas.
- **Data Display**: Complex Data Tables with multi-sorting, filtering, and bulk action support.
- **Feedback Systems**: Skeleton loadings, Toast notifications, and accessible Modals.

---

## 🖥️ Screen Implementations

### 1. Dashboard Overview
A high-level view of factory performance, featuring real-time statistics, summary cards, and critical alert monitoring.

### 2. Machine Data Management (List View)
An advanced data management interface using our Complex Data Table to handle large datasets with filtering and sorting capabilities.

### 3. Data Entry & Configuration (Form View)
A structured approach to data input, supporting complex configurations and machine setup with real-time validation feedback.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Token-driven)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `clsx`, `tailwind-merge`

---

## 📂 Project Structure

```text
├── design/             # Design specs, tokens, and asset sources
├── src/
│   ├── app/            # Application routes (Dashboard, List, Form)
│   ├── components/
│   │   ├── layout/     # Global layout (Sidebar, Navbar)
│   │   ├── shared/     # Composed UI sections (Tables, Form groups)
│   │   └── ui/         # Atomic components (Buttons, Inputs, etc.)
│   └── lib/            # Shared utilities and helpers
```

---

## ⚙️ Getting Started

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

---

*Developed with focus on Industrial UX and System Integrity.*
