# Smart Factory UI System: Foundation & Mandates

All UI generation in this project MUST adhere to this document.

## 📁 Project Structure
- `src/app/`: App Router pages and layouts.
- `src/components/ui/`: Atomic, reusable components (Buttons, Inputs, etc.).
- `src/components/shared/`: Composed UI sections (Tables, Form Groups).
- `src/components/layout/`: Global layout elements (Sidebar, Navbar).
- `design/assets/`: Icons and brand images.

## 🎨 Design Tokens (Tailwind CSS v4)

### Colors
- **Primary**: `primary-50` to `primary-900` (Core brand blue).
- **Neutral**: `neutral-0` (White), `neutral-50` to `neutral-900` (Grays).
- **Semantic**:
  - **Success**: `success-50`, `success-500`, `success-700`.
  - **Warning**: `warning-50`, `warning-500`, `warning-700`.
  - **Error**: `error-50`, `error-500`, `error-700`.
  - **Info**: `info-50`, `info-500`, `info-700`.

### Spacing & Radius
- **Spacing**: 4px scale (e.g., `p-1` = 4px, `m-4` = 16px).
- **Radius**: `rounded-md` (6px - standard), `rounded-xl` (12px - cards), `rounded-full`.

## 🧩 Reusable Component Library
Use these existing components before building anything new:
- **Navigation**: `Sidebar`, `Navbar`, `Tabs`, `Breadcrumbs`, `Pagination`.
- **Forms**: `Button`, `Input`, `SearchInput`, `Select`, `Checkbox`, `Radio`, `Switch`, `DatePicker`, `FileUpload`, `Textarea`, `Label`.
- **Display**: `Table`, `Card`, `Badge`.
- **Feedback**: `Alert`, `Skeleton`, `Modal`.

## 🛠️ Implementation Rules
1. **Design-to-Code**: Map all visual inputs to the tokens above.
2. **No Arbitrary Values**: Never use `[#hex]` or `[px]`. Use token classes only.
3. **Type Safety**: All components must have TypeScript interfaces for props.
4. **Consistency**: Follow the industrial/minimalist aesthetic established in the mockups.
