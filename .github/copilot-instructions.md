# Maths Hebeca - AI Coding Guide

This guide helps AI agents understand the architecture, patterns, and workflows of the Maths Hebeca project - an educational platform built with React, TypeScript, and Vite.

## 🏗 Architecture Overview

### Core Technologies
- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom theme system
- **Routing**: React Router v6
- **Components**: Custom UI components in `src/components`

### Key Directories
- `src/pages/` - Main route components
- `src/components/ui/` - Reusable UI components
- `src/data/` - Static data and content
- `public/pdfs/` - PDF files for notes (organized by exam type and chapter)

## 💡 Important Patterns

### 1. Theme System
The project uses a custom theme system with CSS variables for colors and design tokens. See:
- `src/index.css` - Theme variables and dark mode
- `ThemeToggle.tsx` - Theme switching component
- Use `text-foreground`, `bg-background`, etc. for theme-aware styling

### 2. Component Structure
Components follow a consistent pattern:
```tsx
// Example from ThemeToggle.tsx
export function ComponentName() {
  // State hooks at the top
  const [state, setState] = useState();
  
  // useEffect hooks next
  useEffect(() => {}, []);
  
  // Event handlers
  const handleEvent = () => {};
  
  // JSX with tailwind classes
  return <div className="..."></div>;
}
```

### 3. Routing & Navigation
- URLs use search params for state: `/chapter-notes?chapter=1&type=jee`
- Use `useNavigate()` for programmatic navigation
- Use `useSearchParams()` to access URL parameters

## 🛠 Development Workflow

### Local Development
1. Start dev server:
```bash
npm run dev
```
2. Access at http://localhost:5173

### Adding New Features
1. Chapter content: Update `src/data/chapters.ts`
2. New PDF notes: Add to `public/pdfs/{jee|cbse}/chapterX/`
3. New pages: Add component to `src/pages/` and route to `App.tsx`

### Styling Guidelines
- Use Tailwind's utility classes
- Follow dark mode pattern: `bg-white dark:bg-gray-800`
- Use semantic color tokens: `text-foreground`, `bg-background`
- Maintain consistent spacing with container classes

## 🎯 Common Tasks

### Adding a New Chapter
1. Add chapter data to `src/data/chapters.ts`:
```ts
{
  id: [next_id],
  name: "Chapter Name",
  description: "Chapter description..."
}
```
2. Create PDF directories:
```
public/pdfs/jee/chapter[id]/
public/pdfs/cbse/chapter[id]/
```

### Modifying Theme
Edit CSS variables in `src/index.css`:
```css
:root {
  --background: [value];
  --foreground: [value];
  /* etc */
}
```

### Adding New Pages
1. Create component in `src/pages/`
2. Add route to `App.tsx`:
```tsx
<Route path="/new-path" element={<NewComponent />} />
```

## ⚠️ Common Pitfalls

1. **Theme Consistency**: Always use theme color tokens (`text-foreground`, `bg-background`) instead of hardcoded colors
2. **PDF Paths**: Maintain consistent PDF directory structure: `/{exam_type}/chapter{id}/`
3. **Component Libraries**: Project uses custom components from `components/ui/` - avoid external UI libraries
4. **Mobile First**: Always develop mobile-first using Tailwind's responsive prefixes

## 🔄 File Relationships

- `index.html` → `src/main.tsx` → `App.tsx` → Page Components
- Theme system: `index.css` ↔ `ThemeToggle.tsx`
- Chapter data: `chapters.ts` → `Index.tsx` + `ChapterNotes.tsx`
- PDF content: Referenced in `NotesPreview.tsx`