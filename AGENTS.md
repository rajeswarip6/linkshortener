# Agent Instructions for LinkShortener

This file contains coding standards and best practices for AI agents working on this Next.js LinkShortener project.

---

## ⚠️ CRITICAL: READ /docs INSTRUCTIONS FIRST

**Before writing ANY code, you MUST read the relevant instruction files in the `/docs` directory.** This is non-negotiable and essential to the project's success. Each feature area has specific requirements, APIs, and conventions documented there. Skipping this step will result in non-compliant code that violates project standards.

**Do not proceed with implementation until you have thoroughly reviewed the applicable documentation.**

---

## Quick Start for Agents

1. **Read first**: Review the relevant guide in `/docs` before writing any code
2. **Check versions**: This project uses cutting-edge dependencies—always verify API documentation
3. **Follow conventions**: Adhere to TypeScript strict mode, ESLint rules, and Tailwind CSS patterns
4. **Authentication**: All data access must respect Clerk authentication context
5. **Database**: Use Drizzle ORM exclusively; no raw SQL queries

## Key Technologies

- **Next.js 16.2.4** (App Router, React 19.2.4)
- **TypeScript 5** (strict mode enforced)
- **Tailwind CSS v4** with shadcn/ui components
- **Drizzle ORM** with Neon serverless database
- **Clerk** for authentication
- **ESLint 9** with Next.js & TypeScript rules

## Important Notes

⚠️ **Breaking Changes**: This project uses recent major versions of all dependencies. APIs and conventions may differ significantly from older documentation. Always check the latest documentation in `node_modules` or official sources.

## Documentation Structure

Detailed guidelines are organized in the `/docs` directory. ALWAYS refer to the relevant .md file BEFORE generating any code:

- [Authentication](./docs/authentication.md) - Clerk authentication, protected routes, modals
- [UI Components](./docs/ui-components.md) - shadcn/ui usage, component composition, standards

## General Guidelines

### When implementing features:

1. ✅ Always start with `"use client"` for interactive components
2. ✅ Use `const` for all variable declarations
3. ✅ Import types separately: `import type { User } from '@/types'`
4. ✅ Use path aliases: `@/components`, `@/lib`, `@/hooks`, `@/db`
5. ✅ Run `npm lint` and fix all warnings
6. ✅ Ensure TypeScript strict mode compliance
7. ✅ Use Clerk's hooks for authentication state
8. ✅ Apply Tailwind CSS classes for all styling
9. ✅ Use shadcn/ui components from `@/components/ui`
10. ✅ Add proper type annotations to all functions

### When you encounter:

- **Unknown APIs**: Search the `/node_modules` docs or official Next.js/React documentation
- **Styling issues**: Check `components.json` for shadcn configuration and Tailwind setup
- **Database errors**: Verify schema in `db/schema.ts` and use Drizzle type-safe queries
- **Authentication issues**: Check Clerk provider setup in `layout.tsx`
- **Build errors**: Run `npm lint`, verify TypeScript compilation with `tsc --noEmit`

## Code Quality Checklist

Before marking work as complete:

- [ ] TypeScript compiles with no errors
- [ ] ESLint passes with `npm lint`
- [ ] All functions have proper type annotations
- [ ] No `any` types unless absolutely necessary with justification
- [ ] Clerk authentication properly integrated for protected endpoints
- [ ] Tailwind classes are used for all styling (no inline styles)
- [ ] Component names match file names (PascalCase)
- [ ] Imports are organized: external, internal, types
- [ ] Database queries use Drizzle ORM helpers
- [ ] Error handling is explicit and informative

## Critical Rules

❌ **Never**:
- Skip reading the `/docs` instructions for your task (this is mandatory)
- Use `middleware.ts` (deprecated in Next.js 16.2.4; use `proxy.ts` instead)
- Use `var` declarations
- Write raw SQL queries (use Drizzle ORM)
- Forget `"use client"` directive on interactive components
- Add untyped `any` values without comment
- Ignore ESLint warnings
- Use inline CSS styles (use Tailwind only)
- Skip TypeScript strict mode compliance
- Implement authentication without Clerk
- Create components without proper exports

## Questions or Conflicts?

If guidelines in `/docs` conflict with requirements or if something is unclear, refer to the most specific document first, then escalate to project requirements.
