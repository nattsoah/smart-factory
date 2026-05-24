# Smart Factory UI System

## 📌 Project Overview
This repository is a production-grade UI development environment for the **Smart Factory Management System**. It uses a strict "Design-to-Code" pipeline to ensure that all React components match the Figma design system exactly.

## 🛠 Tech Stack
- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS v4 (Pure @theme configuration)
- **Language:** TypeScript (Strict)
- **Icons:** Lucide React (Preferred)

## 📂 Folder Structure
- `design/`: The source of truth.
  - `tokens/`: Design system data (Colors, Typography, etc.).
  - `specs/`: Component behavior and functional requirements.
- `src/app/`: Screen implementations (Dashboard, List, Form).
- `src/components/ui/`: Atomic components (Buttons, Inputs, Badges).
- `src/lib/`: Utility functions (e.g., `cn` for class merging).

## 🔄 Development Workflow
1. **`structure-inputs`**: The AI analyzes `Design.md` and the requested UI (screenshot or description) to identify the exact tokens needed.
2. **`dev`**: Implementation of strictly typed React components using ONLY the tokens defined in the theme.

## 🎨 Current Design Tokens (Summary from Design.md)
- **Colors**: `primary` (50-900), `neutral` (0-900), `success`, `warning`, `error`, `info` (50, 500, 700).
- **Typography**: Sizes `xs` to `4xl`, Weights `normal` to `bold`.
- **Spacing**: 4px scale (1=4px, 2=8px, etc.).
- **Radius**: `none`, `sm`, `md`, `lg`, `xl`, `full`.
- **Shadows**: `xs`, `sm`, `md`, `lg`.
