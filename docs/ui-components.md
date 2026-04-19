# UI Components Standards

All UI elements in this project **must** use shadcn/ui components. No custom component implementations are permitted.

## Core Principles

✅ **Use shadcn/ui exclusively** - All UI elements must come from the shadcn/ui library  
✅ **No custom components** - Do not create custom UI components even if shadcn/ui doesn't have an exact match  
✅ **Compose from shadcn/ui** - Combine existing shadcn/ui components to create complex UIs  
✅ **Check components.json** - Verify available components in `components.json` before implementation  

## Available Components

All shadcn/ui components are available in `@/components/ui/` and can be imported directly:

```typescript
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog } from "@/components/ui/dialog";
// ... all other shadcn/ui components
```

## Usage Guidelines

### Do's ✅

- Use `@/components/ui` path alias for all component imports
- Apply Tailwind CSS classes to customize shadcn/ui components
- Compose multiple shadcn/ui components to build complex UIs
- Pass props to shadcn/ui components for configuration
- Use TypeScript types exported from shadcn/ui components

### Don'ts ❌

- **Never** create custom styled components
- **Never** build your own Button, Input, Dialog, etc.
- **Never** use unstyled HTML elements when shadcn/ui has an equivalent
- **Never** import components from anywhere except `@/components/ui`
- **Never** implement missing shadcn/ui components with custom CSS/JSX

## Component Composition Example

When you need a complex UI, compose shadcn/ui components:

```typescript
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LinkForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Short Link</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="url">Original URL</Label>
          <Input id="url" placeholder="https://example.com" />
        </div>
        <Button type="submit">Shorten</Button>
      </CardContent>
    </Card>
  );
}
```

## When shadcn/ui Doesn't Have Exact Match

If shadcn/ui doesn't provide the exact component you need:

1. Check the [shadcn/ui documentation](https://ui.shadcn.com) for similar components
2. Compose existing components to achieve the desired functionality
3. Use Tailwind CSS classes to customize the look and feel
4. **Do not** create a custom component

## Configuration

- shadcn/ui configuration is in `components.json`
- Component styles are in `components/ui/` directory
- All components use Tailwind CSS v4 for styling
