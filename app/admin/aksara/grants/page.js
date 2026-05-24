"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const fetchJson = async (url, init) => {
  const response = await fetch(url, init);
  const text = await response.text();
  let body = null;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = { raw: text };
  }
  return { ok: response.ok, status: response.status, body };
};

const relativeTime = (iso) => {
  if (!iso) return "";
  const days = Math.floor(
    (Date.now() - new Date(iso).getTime()) / (1000 * 60 * 60 * 24)
  );
  if (days < 1) return "today";
  if (days === 1) return "1 day ago";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  return months === 1 ? "1 month ago" : `${months} months ago`;
};

const initialForm = { identifier: "", reason: "", whiteglove: false };

export default function AksaraGrantsPage() {
  const [grants, setGrants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const { ok, body } = await fetchJson("/api/admin/aksara/grants");
    if (!ok) {
      setError(body?.detail || body?.error || "Failed to load grants");
      setLoading(false);
      return;
    }
    setGrants(body?.grants || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleField = (key) => (event) => {
    const value =
      event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setForm((f) => ({ ...f, [key]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setSubmitError(null);

    const { ok, body, status } = await fetchJson("/api/admin/aksara/grants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        identifier: form.identifier,
        reason: form.reason,
        whiteglove: form.whiteglove,
      }),
    });

    if (!ok) {
      const reason = body?.error || `error_${status}`;
      setSubmitError(
        reason === "user_not_found"
          ? "No aksara user with that email or username yet. They need to sign up first."
          : reason === "missing_identifier"
          ? "Enter an email or username."
          : body?.detail || "Could not grant Pro."
      );
      setSubmitting(false);
      return;
    }

    setForm(initialForm);
    setSubmitting(false);
    await load();
  };

  const handleRevoke = async (grant) => {
    const confirmed = window.confirm(
      `Revoke Pro for ${grant.username || grant.email}? Their page reverts to free-tier behavior on next render.`
    );
    if (!confirmed) return;
    const { ok, body, status } = await fetchJson(
      `/api/admin/aksara/grants?user_id=${encodeURIComponent(grant.id)}`,
      { method: "DELETE" }
    );
    if (!ok) {
      alert(body?.detail || `Revoke failed (${status})`);
      return;
    }
    await load();
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Link href="/admin/aksara" className="text-xs text-muted hover:text-foreground">
          ← Aksara
        </Link>
        <span className="text-xs text-muted">/</span>
        <span className="text-xs text-foreground">Pro grants</span>
      </div>

      <section className="rounded-xl border border-border bg-secondary p-6">
        <h2 className="text-lg font-semibold text-foreground">Grant Pro to a user</h2>
        <p className="mt-1 text-xs text-muted">
          Email or username. They must already have an aksara account.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <label className="block">
            <span className="mb-1 block text-xs font-medium text-muted">
              Email or username *
            </span>
            <input
              type="text"
              required
              value={form.identifier}
              onChange={handleField("identifier")}
              placeholder="pieter@levels.io  or  levelsio"
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-xs font-medium text-muted">
              Reason (you&apos;ll forget without this)
            </span>
            <input
              type="text"
              value={form.reason}
              onChange={handleField("reason")}
              placeholder="Buddy from buildspace, gave him pro at launch"
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
            />
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.whiteglove}
              onChange={handleField("whiteglove")}
              className="h-4 w-4"
            />
            <span className="text-sm text-foreground">
              Whiteglove (reserved for Featured tier, coming in slice 2+)
            </span>
          </label>

          {submitError ? (
            <p className="text-xs text-accent">{submitError}</p>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background disabled:opacity-50"
          >
            {submitting ? "Granting..." : "Grant Pro"}
          </button>
        </form>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-foreground">
          Current Pro grants {grants.length > 0 ? `(${grants.length})` : ""}
        </h2>

        {error ? (
          <p className="text-sm text-accent">{error}</p>
        ) : loading ? (
          <p className="text-sm text-muted">Loading...</p>
        ) : grants.length === 0 ? (
          <p className="text-sm text-muted">No grants yet.</p>
        ) : (
          <ul className="divide-y divide-border rounded-xl border border-border bg-secondary">
            {grants.map((g) => (
              <li key={g.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-3">
                <div className="min-w-0">
                  <p className="text-sm text-foreground">
                    {g.username || "(no username)"}
                    {g.whiteglove ? <span className="ml-1 text-foreground">✦</span> : null}
                    <span className="ml-2 text-xs text-muted">{g.email || ""}</span>
                  </p>
                  <p className="mt-0.5 text-xs text-muted">
                    Granted {relativeTime(g.pro_override_granted_at)}
                    {g.pro_override_granted_by ? ` by ${g.pro_override_granted_by}` : ""}
                    {g.pro_override_reason ? ` · ${g.pro_override_reason}` : ""}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleRevoke(g)}
                  className="text-xs text-muted hover:text-accent"
                >
                  Revoke
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
