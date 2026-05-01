"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
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

const initialForm = {
  church_name: "",
  contact_name: "",
  notes: "",
  pastor_count: 1,
  lifetime_count: 0,
  leader_count: 5,
  leader_uses_per_code: 1,
};

export default function ProtosCodesPage() {
  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");

  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [recent, setRecent] = useState([]);
  const [submitError, setSubmitError] = useState(null);

  const loadCodes = useCallback(async (churchFilter) => {
    setLoading(true);
    setError(null);
    const url = churchFilter
      ? `/api/admin/protos/codes?church=${encodeURIComponent(churchFilter)}`
      : "/api/admin/protos/codes";
    const { ok, body } = await fetchJson(url);
    if (!ok) {
      setError(body?.detail || body?.error || "Failed to load codes");
      setLoading(false);
      return;
    }
    setCodes(body?.codes || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadCodes("");
  }, [loadCodes]);

  const grouped = useMemo(() => {
    const map = new Map();
    for (const c of codes) {
      const church = c.church_name || "(no church)";
      if (!map.has(church)) map.set(church, []);
      map.get(church).push(c);
    }
    return Array.from(map.entries()).sort((a, b) =>
      a[0].localeCompare(b[0])
    );
  }, [codes]);

  const handleField = (key) => (event) => {
    const value =
      event.target.type === "number"
        ? event.target.value === ""
          ? ""
          : Number(event.target.value)
        : event.target.value;
    setForm((f) => ({ ...f, [key]: value }));
  };

  const handleGenerate = async (event) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setSubmitError(null);
    setRecent([]);

    const payload = {
      church_name: form.church_name,
      contact_name: form.contact_name,
      notes: form.notes,
      pastor_count: Number(form.pastor_count) || 0,
      lifetime_count: Number(form.lifetime_count) || 0,
      leader_count: Number(form.leader_count) || 0,
      leader_uses_per_code: Number(form.leader_uses_per_code) || 1,
    };

    const { ok, body, status } = await fetchJson("/api/admin/protos/codes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!ok) {
      const reason = body?.error || `error_${status}`;
      setSubmitError(
        reason === "duplicate_code"
          ? "Some codes already exist for that church name. Tweak the church or counts and try again."
          : reason === "missing_church_name"
          ? "Add a church name."
          : reason === "no_codes_requested"
          ? "Add at least one code count."
          : body?.detail || "Could not generate codes."
      );
      setSubmitting(false);
      return;
    }

    setRecent(body?.codes || []);
    setSubmitting(false);
    await loadCodes(filter);
  };

  const handleRevoke = async (code) => {
    if (typeof window !== "undefined") {
      const confirmed = window.confirm(
        `Revoke ${code}? Future redemptions will fail. Past redemptions keep their RC entitlement (revoke that in RC dashboard if needed).`
      );
      if (!confirmed) return;
    }
    const { ok, body, status } = await fetchJson(
      `/api/admin/protos/codes/${encodeURIComponent(code)}`,
      { method: "DELETE" }
    );
    if (!ok) {
      alert(body?.detail || `Revoke failed (${status})`);
      return;
    }
    await loadCodes(filter);
  };

  const handleFilter = (event) => {
    event.preventDefault();
    loadCodes(filter);
  };

  const copyAll = () => {
    if (recent.length === 0) return;
    const text = recent
      .map(
        (c) =>
          `${c.code}\t${c.tier}\t${c.rc_duration}\tmax_uses=${c.max_uses}`
      )
      .join("\n");
    navigator.clipboard?.writeText(text);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Link href="/admin" className="text-xs text-muted hover:text-foreground">
          ← All apps
        </Link>
        <span className="text-xs text-muted">/</span>
        <span className="text-xs text-foreground">Protos · Promo codes</span>
      </div>

      <section className="rounded-xl border border-border bg-secondary p-6">
        <h2 className="text-lg font-semibold text-foreground">
          Generate codes for a church
        </h2>
        <p className="mt-1 text-xs text-muted">
          Codes are named like{" "}
          <code className="font-mono">CHURCH-PASTOR-1</code>,{" "}
          <code className="font-mono">CHURCH-LEAD-1</code>. Pastor codes are 12
          months. Lifetime codes never expire. Leader codes are 90 days.
        </p>

        <form
          onSubmit={handleGenerate}
          className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <Field
            label="Church name"
            required
            value={form.church_name}
            onChange={handleField("church_name")}
            placeholder="Grace Church Plano"
          />
          <Field
            label="Contact"
            value={form.contact_name}
            onChange={handleField("contact_name")}
            placeholder="Dave Lopez, small groups pastor"
          />

          <NumberField
            label="Pastor codes (12mo)"
            value={form.pastor_count}
            onChange={handleField("pastor_count")}
            min={0}
            max={50}
          />
          <NumberField
            label="Lifetime codes (inner circle)"
            value={form.lifetime_count}
            onChange={handleField("lifetime_count")}
            min={0}
            max={10}
          />
          <NumberField
            label="Leader codes (90d)"
            value={form.leader_count}
            onChange={handleField("leader_count")}
            min={0}
            max={200}
          />
          <NumberField
            label="Uses per leader code"
            value={form.leader_uses_per_code}
            onChange={handleField("leader_uses_per_code")}
            min={1}
            max={10}
          />

          <div className="sm:col-span-2">
            <Field
              label="Notes"
              value={form.notes}
              onChange={handleField("notes")}
              placeholder="Bible college 2018, met at TGC"
            />
          </div>

          {submitError ? (
            <p className="sm:col-span-2 text-xs text-accent">{submitError}</p>
          ) : null}

          <div className="sm:col-span-2 flex items-center gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background disabled:opacity-50"
            >
              {submitting ? "Generating..." : "Generate codes"}
            </button>
            {recent.length > 0 ? (
              <button
                type="button"
                onClick={copyAll}
                className="rounded-md border border-border bg-background px-3 py-2 text-xs text-foreground hover:border-foreground"
              >
                Copy all ({recent.length})
              </button>
            ) : null}
          </div>
        </form>

        {recent.length > 0 ? (
          <div className="mt-5 rounded-md border border-border bg-background p-4">
            <p className="mb-2 text-xs font-semibold text-muted">
              Just generated
            </p>
            <ul className="space-y-1 font-mono text-xs text-foreground">
              {recent.map((c) => (
                <li key={c.code}>
                  {c.code}
                  <span className="ml-2 text-muted">
                    {c.tier} · {c.rc_duration} · max {c.max_uses}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      <section>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-lg font-semibold text-foreground">
            Existing codes
          </h2>
          <form onSubmit={handleFilter} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Filter by church"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-md border border-border bg-secondary px-3 py-1.5 text-xs text-foreground outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="rounded-md border border-border bg-background px-3 py-1.5 text-xs hover:border-foreground"
            >
              Filter
            </button>
            {filter ? (
              <button
                type="button"
                onClick={() => {
                  setFilter("");
                  loadCodes("");
                }}
                className="text-xs text-muted hover:text-foreground"
              >
                Clear
              </button>
            ) : null}
          </form>
        </div>

        {error ? (
          <p className="text-sm text-accent">{error}</p>
        ) : loading ? (
          <p className="text-sm text-muted">Loading...</p>
        ) : grouped.length === 0 ? (
          <p className="text-sm text-muted">No codes yet.</p>
        ) : (
          <div className="space-y-6">
            {grouped.map(([church, list]) => (
              <ChurchGroup
                key={church}
                church={church}
                codes={list}
                onRevoke={handleRevoke}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function Field({ label, required, ...inputProps }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-muted">
        {label}
        {required ? " *" : null}
      </span>
      <input
        type="text"
        required={required}
        {...inputProps}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
      />
    </label>
  );
}

function NumberField({ label, ...inputProps }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-muted">{label}</span>
      <input
        type="number"
        {...inputProps}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
      />
    </label>
  );
}

function ChurchGroup({ church, codes, onRevoke }) {
  const totalSeats = codes.reduce((acc, c) => acc + c.max_uses, 0);
  const usedSeats = codes.reduce((acc, c) => acc + c.current_uses, 0);

  return (
    <div className="rounded-xl border border-border bg-secondary">
      <div className="flex items-baseline justify-between border-b border-border px-5 py-3">
        <p className="text-sm font-semibold text-foreground">{church}</p>
        <p className="text-xs text-muted">
          {usedSeats} / {totalSeats} seats redeemed · {codes.length} codes
        </p>
      </div>
      <ul className="divide-y divide-border">
        {codes.map((c) => (
          <CodeRow key={c.code} code={c} onRevoke={onRevoke} />
        ))}
      </ul>
    </div>
  );
}

function CodeRow({ code, onRevoke }) {
  const isExpired = code.expires_at && new Date(code.expires_at) <= new Date();
  const isExhausted = code.current_uses >= code.max_uses;
  const status = isExpired
    ? "Expired"
    : isExhausted
    ? "Exhausted"
    : "Active";

  return (
    <li className="flex flex-wrap items-center justify-between gap-3 px-5 py-3">
      <div>
        <p className="font-mono text-sm text-foreground">{code.code}</p>
        <p className="mt-0.5 text-xs text-muted">
          {code.tier} · {code.rc_duration} · {code.current_uses}/{code.max_uses}
          {code.contact_name ? ` · ${code.contact_name}` : null}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <span
          className={
            "rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wide " +
            (status === "Active"
              ? "border-accent/40 text-foreground"
              : "border-border text-muted")
          }
        >
          {status}
        </span>
        {!isExpired ? (
          <button
            type="button"
            onClick={() => onRevoke(code.code)}
            className="text-xs text-muted hover:text-accent"
          >
            Revoke
          </button>
        ) : null}
      </div>
    </li>
  );
}
