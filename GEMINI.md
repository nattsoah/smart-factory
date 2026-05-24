# Project Mandates: Smart Factory UI Generation

All UI generation tasks in this repository MUST follow the strict **Design-to-Code** workflow.

## 🔄 The 2-Step Workflow

### 1. `structure-inputs`
Before implementing, silently analyze the design inputs:
- Read `design/tokens/design-tokens.json` or `Design.md`.
- Check `design/specs/` for behavioral requirements.
- Match all visual requirements to existing Design Tokens.

### 2. `dev`
Implement the code using these strict constraints:
- **Tech Stack**: Next.js (App Router), TypeScript, Tailwind CSS v4.
- **Tokens Only**: DO NOT use arbitrary Tailwind values (e.g., `text-[#123]`). Only use configured tokens.
- **Modularity**: Break down complex UIs into atomic components in `src/components/ui/`.
- **Typing**: Every component MUST have a TypeScript interface for its props.
- **Accessibility**: Use semantic HTML tags and appropriate ARIA attributes.

## 🎨 Token Reference
- **Colors**: `primary-50` to `900`, `neutral-0` to `900`, `success/warning/error/info` (50, 500, 700).
- **Spacing**: 4px scale.
- **Radius**: `none`, `sm`, `md`, `lg`, `xl`, `full`.

---
*This file serves as a foundational mandate and takes precedence over general workflows.*
