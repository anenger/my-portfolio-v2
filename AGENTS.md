# Agent Guidelines

This file contains guidelines for agentic coding assistants working in this
repository.

## Build & Development Commands

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Production build with Turbopack
npm run start        # Start production server
npm run lint         # Run ESLint on all files
```

**Testing**: This project does not currently have a test framework configured.
Before adding tests, consult with the project owner to determine the testing
strategy (Jest, Vitest, Playwright, etc.).

## Code Style Guidelines

### Imports & Dependencies

- Use path aliases: `@/` maps to `./src/`
- Group imports: external dependencies → internal modules → relative imports
- React imports: Use `import * as React from 'react'` for type utilities, or
  named imports for hooks
- Prefer named exports over default exports for components and utilities
- Keep imports at the top of files, with one empty line between import groups

Example:

```typescript
import * as React from "react";
import { Card } from "./Card";
import { MasonryLayout } from "@/components/MasonryLayout";
```

### Formatting (Prettier)

- Single quotes for strings and JSX attributes
- 2 space indentation (no tabs)
- Trailing commas for multi-line arrays/objects
- 80 character line width
- Semicolons required
- Arrow function parentheses: `() => {}` (never omit)

### TypeScript Conventions

- **Strict mode enabled**: All files must pass strict type checking
- Use `interface` for component props and object shapes
- Use `type` for unions, intersections, and literal types
- Use `React.PropsWithChildren<T>` for components that accept children
- Prefer `Record<string, string>` over plain objects with indexed signatures
- Use `Readonly<{ children: React.ReactNode }>` for Next.js page component props
- Leverage template literal types for string unions when appropriate

Example:

```typescript
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "1x1" | "1x2" | "2x1" | "2x2";
  className?: string;
}

export const Card = ({
  size = "1x1",
  className = "",
  children,
  ...props
}: React.PropsWithChildren<CardProps>) => {
  // component logic
};
```

### Naming Conventions

- **Components**: PascalCase (`Card`, `MasonryLayout`)
- **Props/Interfaces**: PascalCase with `Props` suffix (`CardProps`,
  `MasonryLayoutProps`)
- **Variables/Functions**: camelCase (`gapClass`, `sizeClass`)
- **Constants**: camelCase for component-specific (`gapClasses`,
  `columnClasses`)
- **Types**: PascalCase for custom types, lowercase for primitives

### Component Patterns

- Use functional components with hooks (no class components)
- Prefer named exports over default exports
- Accept `className` prop for custom styling
- Spread remaining props (`...props`) to pass through to DOM elements
- Use template literals for conditional class composition
- Extract repeated class strings into constants
  (`const sizeClasses: Record<string, string>`)

Example:

```typescript
const sizeClasses: Record<string, string> = {
  small: "col-span-1 row-span-1",
  medium: "col-span-2 row-span-2",
};

export const Card = ({
  size = "small",
  className = "",
  children,
  ...props
}: CardProps) => {
  const sizeClass = sizeClasses[size];

  return (
    <div className={`${sizeClass} ${className}`} {...props}>
      {children}
    </div>
  );
};
```

### Tailwind CSS Guidelines

- Use utility classes for all styling (no custom CSS in component files)
- Prefer responsive prefixes: `p-3 md:p-4 lg:p-6`
- Use opacity modifiers: `opacity-80`, `bg-border/10`
- Color variables from CSS: `bg-card`, `text-foreground`, `border-border/10`
- Group related utilities: `rounded-xl p-3 border bg-card`
- Use arbitrary values sparingly, prefer spacing scale

### Error Handling

- Always handle async errors with try/catch
- Use TypeScript's `unknown` type for caught errors
- Validate data from external sources (API, localStorage)
- Provide fallback UI for error states
- Log errors appropriately (avoid logging sensitive data)

### File Structure

- **Components**: `src/components/` - Reusable UI components
- **Pages**: `src/app/` - Next.js App Router pages
- **Styles**: `src/app/globals.css` - Global styles and Tailwind configuration
- **Types**: Co-locate with components or use `src/types/` for shared types
- **Utilities**: `src/utils/` - Helper functions and utilities

### Before Committing

1. Run `npm run lint` and fix all errors
2. Run `npm run build` to ensure production build succeeds
3. Run `npm run typecheck` (if available) to verify types
4. Test changes manually in development mode
5. Ensure all files follow the style guidelines above

### Technology Stack

- **Framework**: Next.js 15.5.6 (App Router)
- **Runtime**: React 19.1.0
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript 5 (strict mode)
- **Linting**: ESLint with Next.js config
- **Formatting**: Prettier 3.7.4
- **Package Manager**: pnpm (pnpm-lock.yaml present)

### Additional Notes

- Use Turbopack for faster builds (already configured)
- Dark mode support via `prefers-color-scheme` media query
- Responsive-first design approach
- Accessibility: Use semantic HTML and proper ARIA labels when needed
- Performance: Optimize images, lazy load components, use Next.js built-in
  optimizations
