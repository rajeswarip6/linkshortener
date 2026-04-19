# Authentication Standards

All authentication in this project is handled exclusively by **Clerk**. No alternative authentication methods should be implemented.

## Core Principles

✅ **Use Clerk exclusively** - All user authentication flows go through Clerk  
✅ **Protected routes require login** - Use middleware or authentication checks  
✅ **Modal-based auth UX** - Sign in/sign up always launch as modals  
✅ **Redirect authenticated users** - Already logged-in users are redirected appropriately

## Route Protection

### Dashboard Route (`/dashboard`)

The `/dashboard` page is a **protected route** and must:
- Require user to be logged in (authenticated via Clerk)
- Redirect unauthenticated users to the home page
- Use `useAuth()` or middleware to enforce authentication

**Implementation Example:**
```typescript
// pages/dashboard/page.tsx
"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div>
      {/* Dashboard content */}
    </div>
  );
}
```

Alternatively, use **middleware** for route protection:
```typescript
// middleware.ts
import { auth } from "@clerk/nextjs/server";

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname.startsWith("/dashboard")) {
    return Response.redirect(new URL("/", req.url));
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

### Home Page Redirect

When a **logged-in user** accesses the home page (`/`):
- Redirect them to `/dashboard`
- Use `useAuth()` hook and `useRouter()` for client-side navigation

**Implementation:**
```typescript
// pages/page.tsx
"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/dashboard");
    }
  }, [isLoaded, isSignedIn, router]);

  if (isLoaded && isSignedIn) {
    return null;
  }

  return (
    <div>
      {/* Home page content for unauthenticated users */}
    </div>
  );
}
```

## Sign In / Sign Up Modals

Sign in and sign up must always launch as **modals**, never as separate pages.

### Using `<SignInButton>` and `<SignUpButton>`

```typescript
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export function AuthButtons() {
  return (
    <div>
      <SignInButton mode="modal" />
      <SignUpButton mode="modal" />
    </div>
  );
}
```

### Configuration

Ensure Clerk is configured in `layout.tsx` with the `<ClerkProvider>` wrapper:

```typescript
// app/layout.tsx
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
```

## Clerk Hooks

### Common Hooks

| Hook | Purpose |
|------|---------|
| `useAuth()` | Get authentication state (`isSignedIn`, `userId`, etc.) |
| `useUser()` | Get current user object with full profile data |
| `useSession()` | Get session information |
| `useSignUp()` | Access sign-up flow methods |
| `useSignIn()` | Access sign-in flow methods |

### Example: Accessing User Data

```typescript
import { useUser } from "@clerk/nextjs";

export function UserProfile() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <div>Loading...</div>;

  return <div>Welcome, {user?.firstName}</div>;
}
```

## Environment Variables

Ensure these are set in `.env.local`:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_key>
CLERK_SECRET_KEY=<your_secret>
```

## Best Practices

❌ **Never**:
- Implement custom authentication logic
- Use hardcoded user credentials
- Store session tokens in localStorage
- Skip authentication checks on protected routes
- Allow unauthenticated access to `/dashboard`

✅ **Always**:
- Use Clerk hooks and components
- Check `isLoaded` before accessing auth state
- Redirect users based on authentication status
- Use modals for sign in/up flows
- Verify `isSignedIn` before rendering protected content
