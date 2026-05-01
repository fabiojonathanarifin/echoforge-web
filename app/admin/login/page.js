"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

// Next.js requires useSearchParams() to be wrapped in a Suspense boundary
// at build time, since it forces client-side rendering. Splitting the form
// into an inner component keeps the boundary tight (just the param read)
// instead of the whole login UI.
function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/admin";

  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        router.replace(next);
        return;
      }

      const body = await response.json().catch(() => ({}));
      if (response.status === 429) {
        setError("Too many attempts. Try again in a few minutes.");
      } else if (response.status === 401) {
        setError("Wrong password.");
      } else {
        setError(body?.error || "Could not sign in.");
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-sm space-y-5 rounded-xl border border-border bg-secondary p-6 shadow-sm"
    >
      <div>
        <h1 className="text-lg font-semibold text-foreground">
          Echoforge admin
        </h1>
        <p className="mt-1 text-sm text-muted">
          Enter the admin password to continue.
        </p>
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-xs font-medium text-muted"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          autoFocus
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
        />
      </div>

      {error ? (
        <p className="text-xs text-accent" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting || password.length === 0}
        className="w-full rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition disabled:opacity-50"
      >
        {submitting ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <Suspense
        fallback={
          <div className="w-full max-w-sm rounded-xl border border-border bg-secondary p-6 text-sm text-muted">
            Loading...
          </div>
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  );
}
