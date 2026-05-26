"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";

// Researched, real profile for Pieter Levels (@levelsio). Doubles as a usable
// starting template and a demo of every field type. Images use live screenshots
// (thum.io) + unavatar so the sample renders with real imagery out of the box.
const SAMPLE_JSON = {
  profile: {
    name: "Pieter Levels",
    bio: "i sold all my stuff, went nomad, and made 40+ startups from my laptop. a few make millions. no team, no investors, no office.",
    role: "Indie maker",
    location: "Nomadic",
    avatar_url: "https://unavatar.io/x/levelsio",
    status: "shipping Photo AI right now",
    about:
      "i taught myself to code and in 2014 i challenged myself to make 12 startups in 12 months. most of them flopped. Nomad List and Remote OK didn't, and they still pay the bills today. i build everything myself with boring tech, ship in public, and post the revenue as i go. no cofounder, no funding, no plan. just me, a laptop, and whatever city i'm in this month.",
    twitter_url: "https://x.com/levelsio",
    github_url: "https://github.com/levelsio",
    instagram_url: "https://instagram.com/levelsio",
    beliefs: [
      "launch fast, charge from day one",
      "boring tech ships faster than trendy tech",
      "build in public, post the revenue",
      "stay solo, stay free",
    ],
    experiences: [
      { title: "Photo AI", subtitle: "Founder", date_range: "2023 - now" },
      { title: "Remote OK", subtitle: "Founder", date_range: "2015 - now" },
      { title: "Nomad List", subtitle: "Founder", date_range: "2014 - now" },
    ],
    creator_kinds: ["software_engineer", "entrepreneur"],
    accent_color: "#F97316",
    card_radius: "round",
  },
  projects: [
    {
      title: "Photo AI",
      description:
        "hire an AI photographer. train it on your selfies and shoot studio photos without a camera. went from $0 to over $130k/mo in 18 months.",
      demo_url: "https://photoai.com",
      image_url: "https://image.thum.io/get/width/1200/crop/630/https://photoai.com",
      stack: ["PHP", "jQuery", "Replicate", "Stripe"],
      price: "from $29",
      cover_style: "large",
    },
    {
      title: "Remote OK",
      description:
        "the biggest remote job board on the internet. started it in 2015, it's done over $3M helping people get jobs they can do from anywhere.",
      demo_url: "https://remoteok.com",
      image_url: "https://image.thum.io/get/width/1200/crop/630/https://remoteok.com",
      stack: ["PHP", "jQuery", "SQLite"],
      cover_style: "compact",
    },
    {
      title: "Nomad List",
      description:
        "thousands of remote workers ranking the best cities to live and work in. does around $700k/year. the project that kicked off the whole 12 startups in 12 months thing.",
      demo_url: "https://nomadlist.com",
      image_url: "https://image.thum.io/get/width/1200/crop/630/https://nomadlist.com",
      stack: ["PHP", "jQuery", "MySQL"],
      cover_style: "compact",
    },
  ],
  links: [
    {
      label: "MAKE: my book on building startups solo",
      url: "https://readmake.com",
      cta_label: "Read it",
      og_title: "MAKE",
      og_description: "how to bootstrap a profitable startup by yourself, no funding needed.",
    },
    {
      label: "i went on the Lex Fridman podcast",
      url: "https://www.youtube.com/watch?v=oFtjKbXKqbg",
      cta_label: "Watch",
    },
    {
      label: "every project i've ever made",
      url: "https://levels.io/projects/",
      cta_label: "See all",
    },
  ],
};

const SAMPLE_TEXT = JSON.stringify(SAMPLE_JSON, null, 2);

const fetchJson = async (url, init) => {
  const res = await fetch(url, init);
  const text = await res.text();
  let body = null;
  try { body = text ? JSON.parse(text) : null; } catch { body = { raw: text }; }
  return { ok: res.ok, status: res.status, body };
};

const relativeTime = (iso) => {
  if (!iso) return "";
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / (1000 * 60 * 60 * 24));
  if (days < 1) return "today";
  if (days === 1) return "1 day ago";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  return months === 1 ? "1 month ago" : `${months} months ago`;
};

const daysUntil = (iso) => {
  if (!iso) return null;
  const diff = Math.ceil((new Date(iso).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
};

function CopyButton({ value, label = "Copy" }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };
  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:border-foreground/30 hover:text-foreground"
    >
      {copied ? (
        <>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
          Copied
        </>
      ) : (
        <>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
          {label}
        </>
      )}
    </button>
  );
}

function StatusBadge({ ghost }) {
  let tone, label;
  if (ghost.claimed_at) {
    tone = "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
    label = "Claimed";
  } else if (ghost.expires_at && daysUntil(ghost.expires_at) <= 0) {
    tone = "text-red-600 dark:text-red-400 bg-red-500/10 border-red-500/20";
    label = "Expired";
  } else {
    tone = "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20";
    label = "Unclaimed";
  }
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${tone}`}>
      {label}
    </span>
  );
}

function Avatar({ name, src }) {
  const initials = (name || "?").trim().split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("");
  return (
    <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-border bg-background">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-muted">
          {initials}
        </div>
      )}
    </div>
  );
}

function InfoModal({ onClose, onUseSample }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm" onClick={onClose}>
      <div
        className="flex max-h-[85vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h3 className="text-sm font-semibold text-foreground">Page data structure</h3>
          <button onClick={onClose} className="text-xs text-muted hover:text-foreground">Close</button>
        </div>
        <pre className="flex-1 overflow-auto bg-secondary px-5 py-4 text-xs leading-relaxed text-muted">
          {SAMPLE_TEXT}
        </pre>
        <div className="space-y-1.5 border-t border-border px-5 py-4 text-xs text-muted">
          <p>Three optional top-level keys: <code className="text-foreground">profile</code>, <code className="text-foreground">projects</code>, <code className="text-foreground">links</code>.</p>
          <p><strong className="text-foreground">projects</strong>: <code>image_url</code> is the cover, <code>images</code> a gallery (up to 8), <code>cover_video_url</code> a YouTube/video cover, <code>stack</code> the tags, <code>price</code> a display string.</p>
          <p><strong className="text-foreground">links</strong>: paste a Spotify or YouTube URL and Aksara embeds it. Every link needs a label and url.</p>
          <p>Images must be public URLs. Refine anything later with the Edit link.</p>
        </div>
        <div className="flex justify-end gap-2 border-t border-border px-5 py-3">
          <button onClick={onClose} className="rounded-md px-3 py-1.5 text-xs text-muted hover:text-foreground">Close</button>
          <button
            onClick={() => { onUseSample(); onClose(); }}
            className="rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background hover:opacity-90"
          >
            Use this sample
          </button>
        </div>
      </div>
    </div>
  );
}

const SAMPLE_DM = `hey [name], i'm [your name]. i build aksara, a clean portfolio page for builders.

been following your work on [specific thing they made] for a while, so i went ahead and built a page for you: [profile link]

it's yours if you want it. free Pro forever, no strings. unlock code: [code]

if it's not your thing, hit "remove" on the claim page and it's gone. either way, big fan of what you do.`;

function PlaybookModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm" onClick={onClose}>
      <div
        className="flex max-h-[85vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h3 className="text-sm font-semibold text-foreground">Outreach playbook</h3>
          <button onClick={onClose} className="text-xs text-muted hover:text-foreground">Close</button>
        </div>

        <div className="flex-1 space-y-5 overflow-auto px-5 py-4 text-sm text-muted">
          <div>
            <p className="font-semibold text-foreground">The approach</p>
            <p className="mt-1">Build it as a gift. Let them own it. Earn the feature. No strings. You are giving real value before you ask for anything, which is why it works.</p>
          </div>

          <div>
            <p className="font-semibold text-foreground">The flow</p>
            <ol className="mt-1 list-decimal space-y-1 pl-4">
              <li>Send a personal DM with the profile link and the unlock code.</li>
              <li>They open it, enter the code, and claim it (Google, GitHub, or email). One tap.</li>
              <li>It becomes their account with free Pro. They get an optional "feature you on our homepage?" ask.</li>
              <li>If they like it, they share it on their own. That is the win. Do not push for it.</li>
            </ol>
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between gap-2">
              <p className="font-semibold text-foreground">Sample DM</p>
              <CopyButton value={SAMPLE_DM} label="Message" />
            </div>
            <pre className="whitespace-pre-wrap rounded-lg border border-border bg-secondary px-3 py-3 text-xs leading-relaxed text-foreground">{SAMPLE_DM}</pre>
            <p className="mt-1 text-xs">Fill every bracket. The specific line about their work is what stops it reading like a mass blast.</p>
          </div>

          <div>
            <p className="font-semibold text-foreground">Do</p>
            <ul className="mt-1 list-disc space-y-1 pl-4">
              <li>Personalize the first line with something they actually made. One person at a time.</li>
              <li>Lead with the gift: free Pro, no strings.</li>
              <li>Mention they can remove it. Lowering the guard raises the yes.</li>
              <li>Send mid-week, mid-month. Weekends and holidays get buried.</li>
              <li>Ask to feature them only after they claim and clearly like it.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-foreground">Don't</p>
            <ul className="mt-1 list-disc space-y-1 pl-4">
              <li>Open with "share this and I'll give you Pro." Trading Pro for a post is a paid endorsement, reads cheap, and legally needs an #ad disclosure.</li>
              <li>Put an unclaimed, made-by-you profile on the homepage. Wait for the claim and their opt-in.</li>
              <li>Mass-blast the same message. One generic DM kills the whole effect.</li>
              <li>Oversell. One honest line beats a pitch.</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-secondary px-3 py-2.5 text-xs">
            Start with builders one tier below the household names. They are flattered, likely to claim, and low risk. Land a few real wins, then approach the big names with proof you are legit.
          </div>
        </div>

        <div className="flex justify-end border-t border-border px-5 py-3">
          <button onClick={onClose} className="rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background hover:opacity-90">Got it</button>
        </div>
      </div>
    </div>
  );
}

function EditModal({ editing, onClose, onSave }) {
  const [text, setText] = useState(editing.json);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);
  const valid = useMemo(() => {
    try { JSON.parse(text); return true; } catch { return false; }
  }, [text]);

  const handleSave = async () => {
    if (!valid || saving) return;
    setSaving(true);
    setError(null);
    const res = await onSave(text);
    if (res?.error) { setError(res.error); setSaving(false); }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm" onClick={onClose}>
      <div
        className="flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h3 className="text-sm font-semibold text-foreground">Edit aksara.so/{editing.username}</h3>
          <button onClick={onClose} className="text-xs text-muted hover:text-foreground">Close</button>
        </div>
        <div className="flex-1 overflow-auto p-5">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            spellCheck={false}
            rows={20}
            className={`w-full resize-y rounded-lg border bg-secondary px-3 py-2.5 font-mono text-xs leading-relaxed text-foreground outline-none focus:border-accent ${valid ? "border-border" : "border-red-500/40"}`}
          />
          <p className="mt-2 text-xs text-muted">
            Edits profile, projects, and links. The username and claim code stay the same. Saving replaces all projects and links with what&apos;s here.
          </p>
          {error && <p className="mt-2 text-xs text-red-600 dark:text-red-400">{error}</p>}
        </div>
        <div className="flex items-center justify-between border-t border-border px-5 py-3">
          <span className={`text-xs ${valid ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>
            {valid ? "valid JSON" : "invalid JSON"}
          </span>
          <div className="flex gap-2">
            <button onClick={onClose} className="rounded-md px-3 py-1.5 text-xs text-muted hover:text-foreground">Cancel</button>
            <button
              onClick={handleSave}
              disabled={!valid || saving}
              className="rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background hover:opacity-90 disabled:opacity-40"
            >
              {saving ? "Saving..." : "Save changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConfirmDialog({ ghost, busy, onCancel, onConfirm }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm" onClick={onCancel}>
      <div
        className="w-full max-w-sm rounded-2xl border border-border bg-background p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-sm font-semibold text-foreground">Revoke this ghost?</h3>
        <p className="mt-1.5 text-xs text-muted">
          This permanently deletes the pre-built page at <span className="text-foreground">aksara.so/{ghost.username}</span>, its projects, links, and claim link. This can&apos;t be undone.
        </p>
        <div className="mt-5 flex justify-end gap-2">
          <button
            onClick={onCancel}
            disabled={busy}
            className="rounded-md px-3 py-1.5 text-xs text-muted hover:text-foreground disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={busy}
            className="rounded-md bg-red-500 px-3 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {busy ? "Revoking..." : "Yes, revoke"}
          </button>
        </div>
      </div>
    </div>
  );
}

function ResultCard({ result, onDismiss }) {
  const rows = [
    { label: "Profile URL", value: result.profile_url, hint: "the public page" },
    { label: "Claim URL", value: result.claim_url, hint: "send this to them" },
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-emerald-500/30 bg-emerald-500/5">
      <div className="flex items-center justify-between border-b border-emerald-500/20 px-5 py-3">
        <div className="flex items-center gap-2">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><path d="M20 6 9 17l-5-5" /></svg>
          <p className="text-sm font-semibold text-foreground">Created aksara.so/{result.username}</p>
        </div>
        <button onClick={onDismiss} className="text-xs text-muted hover:text-foreground">Dismiss</button>
      </div>

      <div className="space-y-3 px-5 py-4">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-3">
            <div className="w-24 shrink-0">
              <p className="text-xs font-medium text-foreground">{r.label}</p>
              <p className="text-[11px] text-muted">{r.hint}</p>
            </div>
            <code className="min-w-0 flex-1 truncate rounded-md bg-secondary px-2.5 py-1.5 text-xs text-foreground">{r.value}</code>
            <CopyButton value={r.value} />
          </div>
        ))}

        <div className="flex items-center gap-3 border-t border-border pt-3">
          <div className="w-24 shrink-0">
            <p className="text-xs font-medium text-foreground">Claim code</p>
            <p className="text-[11px] text-muted">send separately</p>
          </div>
          <code className="flex-1 rounded-md bg-secondary px-2.5 py-1.5 font-mono text-base font-bold tracking-[0.3em] text-foreground">{result.claim_code}</code>
          <CopyButton value={result.claim_code} />
        </div>
      </div>

      <p className="border-t border-emerald-500/20 px-5 py-3 text-xs text-muted">
        Send the claim URL and the code separately. They need the code to claim or remove the page.
      </p>
    </div>
  );
}

function GhostCard({ ghost, onEdit, onRevoke }) {
  const expiresIn = daysUntil(ghost.expires_at);
  return (
    <div className="rounded-xl border border-border bg-secondary p-4 transition-colors hover:border-foreground/20">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <Avatar name={ghost.name} src={ghost.avatar_url} />
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <p className="truncate text-sm font-semibold text-foreground">{ghost.name || ghost.username}</p>
              <StatusBadge ghost={ghost} />
            </div>
            <p className="truncate text-xs text-muted">
              aksara.so/{ghost.username} · created {relativeTime(ghost.created_at)}
              {ghost.claimed_at ? (
                <span className="text-emerald-600 dark:text-emerald-400"> · claimed {relativeTime(ghost.claimed_at)}</span>
              ) : expiresIn !== null ? (
                <span>{expiresIn > 0 ? ` · expires in ${expiresIn}d` : " · link expired"}</span>
              ) : null}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <a
            href={`https://aksara.so/${ghost.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            View
          </a>
          {!ghost.claimed_at && (
            <>
              <a
                href={`https://aksara.so/${ghost.username}/edit`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent transition-colors hover:bg-accent/20"
              >
                Open editor
              </a>
              <button
                type="button"
                onClick={() => onEdit(ghost)}
                className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                JSON
              </button>
              <button
                type="button"
                onClick={() => onRevoke(ghost)}
                className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:border-red-500/40 hover:text-red-500"
              >
                Revoke
              </button>
            </>
          )}
        </div>
      </div>

      {ghost.claim_code && !ghost.claimed_at && (
        <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-border pt-3">
          <span className="text-xs text-muted">Code</span>
          <code className="rounded bg-background px-2 py-0.5 font-mono text-xs font-bold tracking-widest text-foreground">{ghost.claim_code}</code>
          <CopyButton value={ghost.claim_code} label="Code" />
          {ghost.token && <CopyButton value={`https://aksara.so/claim/${ghost.token}`} label="Claim link" />}
        </div>
      )}
    </div>
  );
}

export default function WhiteGlovesPage() {
  const [ghosts, setGhosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  const [username, setUsername] = useState("");
  const [profileJson, setProfileJson] = useState("");
  const [targetEmail, setTargetEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [result, setResult] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [showPlaybook, setShowPlaybook] = useState(false);
  const [editing, setEditing] = useState(null); // { id, username, json }
  const [confirmRevoke, setConfirmRevoke] = useState(null); // ghost pending revoke
  const [revoking, setRevoking] = useState(false);

  // Live JSON validity feedback for the textarea.
  const jsonState = useMemo(() => {
    if (!profileJson.trim()) return "empty";
    try { JSON.parse(profileJson); return "valid"; } catch { return "invalid"; }
  }, [profileJson]);

  const load = useCallback(async () => {
    setLoading(true);
    setLoadError(null);
    const { ok, body } = await fetchJson("/api/admin/aksara/whitegloves");
    if (!ok) { setLoadError(body?.detail || body?.error || "Failed to load"); setLoading(false); return; }
    setGhosts(body?.ghosts || []);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const useSample = () => {
    setProfileJson(SAMPLE_TEXT);
    if (!username.trim()) setUsername("pieterlevels");
    setSubmitError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    let parsed = null;
    if (profileJson.trim()) {
      try { parsed = JSON.parse(profileJson); }
      catch { setSubmitError("The page data is not valid JSON."); return; }
    }

    setSubmitting(true);
    setSubmitError(null);

    const { ok, body, status } = await fetchJson("/api/admin/aksara/whitegloves", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username.trim(),
        data: parsed || {},
        target_email: targetEmail.trim() || null,
      }),
    });

    if (!ok) {
      const msg =
        body?.error === "username_taken" ? "That username is taken by a real user."
        : body?.error === "ghost_already_exists" ? "A ghost already exists for that username."
        : body?.error === "missing_username" ? "Username is required."
        : body?.error === "project_missing_title" ? "Every project needs a title."
        : body?.error === "link_missing_label_or_url" ? "Every link needs both a label and a url."
        : body?.detail || `Error ${status}`;
      setSubmitError(msg);
      setSubmitting(false);
      return;
    }

    setResult(body);
    setUsername("");
    setProfileJson("");
    setTargetEmail("");
    setSubmitting(false);
    load();
  };

  const handleEdit = async (ghost) => {
    const { ok, body } = await fetchJson(`/api/admin/aksara/whitegloves/${ghost.ghost_user_id}`);
    if (!ok || !body?.data) { alert("Could not load profile data."); return; }
    setEditing({
      id: ghost.ghost_user_id,
      username: ghost.username,
      json: JSON.stringify(body.data, null, 2),
    });
  };

  const handleSaveEdit = async (jsonText) => {
    let parsed;
    try { parsed = JSON.parse(jsonText); } catch { return { error: "That's not valid JSON." }; }

    const { ok, body, status } = await fetchJson(`/api/admin/aksara/whitegloves/${editing.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: parsed }),
    });

    if (!ok) {
      return {
        error:
          body?.error === "project_missing_title" ? "Every project needs a title."
          : body?.error === "link_missing_label_or_url" ? "Every link needs a label and a url."
          : body?.detail || `Save failed (${status})`,
      };
    }

    setEditing(null);
    load();
    return { ok: true };
  };

  const doRevoke = async () => {
    if (!confirmRevoke || revoking) return;
    setRevoking(true);
    const { ok, body, status } = await fetchJson(
      `/api/admin/aksara/whitegloves/${confirmRevoke.ghost_user_id}`,
      { method: "DELETE" }
    );
    setRevoking(false);
    if (!ok) { alert(body?.detail || `Revoke failed (${status})`); return; }
    setConfirmRevoke(null);
    load();
  };

  const activeCount = ghosts.filter((g) => !g.claimed_at).length;
  const claimedCount = ghosts.length - activeCount;

  return (
    <div className="space-y-8">
      {showInfo && <InfoModal onClose={() => setShowInfo(false)} onUseSample={useSample} />}
      {showPlaybook && <PlaybookModal onClose={() => setShowPlaybook(false)} />}
      {editing && <EditModal editing={editing} onClose={() => setEditing(null)} onSave={handleSaveEdit} />}
      {confirmRevoke && (
        <ConfirmDialog
          ghost={confirmRevoke}
          busy={revoking}
          onCancel={() => setConfirmRevoke(null)}
          onConfirm={doRevoke}
        />
      )}

      <div className="flex items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <Link href="/admin/aksara" className="text-muted hover:text-foreground">Aksara</Link>
          <span className="text-muted">/</span>
          <span className="text-foreground">White Gloves</span>
        </div>
        <button
          type="button"
          onClick={() => setShowPlaybook(true)}
          className="rounded-md border border-border px-2.5 py-1 font-medium text-muted transition-colors hover:border-foreground/30 hover:text-foreground"
        >
          Outreach playbook
        </button>
      </div>

      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">White Gloves</h1>
          <p className="mt-1 max-w-xl text-sm text-muted">
            Pre-build a full profile for someone, then send them a claim link and code. They claim it with one tap and it becomes theirs, Pro included.
          </p>
        </div>
        {ghosts.length > 0 && (
          <div className="flex gap-4 text-right">
            <div>
              <p className="text-xl font-semibold text-foreground">{activeCount}</p>
              <p className="text-[11px] uppercase tracking-wide text-muted">Unclaimed</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-foreground">{claimedCount}</p>
              <p className="text-[11px] uppercase tracking-wide text-muted">Claimed</p>
            </div>
          </div>
        )}
      </header>

      {result && <ResultCard result={result} onDismiss={() => setResult(null)} />}

      <section className="rounded-2xl border border-border bg-secondary p-6">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-foreground">Create ghost profile</h2>
            <p className="mt-0.5 text-xs text-muted">Lives at aksara.so/[username], unclaimed until they take it.</p>
          </div>
          <button
            type="button"
            onClick={useSample}
            className="shrink-0 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            Load sample
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-foreground">Username <span className="text-accent">*</span></span>
              <div className="flex items-center overflow-hidden rounded-lg border border-border bg-background focus-within:border-accent">
                <span className="select-none border-r border-border px-2.5 py-2 text-xs text-muted">aksara.so/</span>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, ""))}
                  placeholder="pieterlevels"
                  className="w-full bg-transparent px-2.5 py-2 font-mono text-sm text-foreground outline-none"
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-foreground">Their email <span className="font-normal text-muted">(optional)</span></span>
              <input
                type="email"
                value={targetEmail}
                onChange={(e) => setTargetEmail(e.target.value)}
                placeholder="pieter@levels.io"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
              />
            </label>
          </div>

          <label className="block">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-xs font-medium text-foreground">Page data</span>
              <div className="flex items-center gap-3 text-xs">
                {jsonState === "valid" && <span className="text-emerald-600 dark:text-emerald-400">valid JSON</span>}
                {jsonState === "invalid" && <span className="text-red-600 dark:text-red-400">invalid JSON</span>}
                <button type="button" onClick={() => setShowInfo(true)} className="text-muted underline decoration-border hover:text-foreground">
                  see structure
                </button>
              </div>
            </div>
            <textarea
              rows={10}
              value={profileJson}
              onChange={(e) => setProfileJson(e.target.value)}
              spellCheck={false}
              placeholder={'{\n  "profile": { "name": "Pieter Levels", "bio": "...", "role": "Maker" },\n  "projects": [ { "title": "Photo AI", "demo_url": "https://photoai.com" } ],\n  "links": [ { "label": "My book", "url": "https://readmake.com" } ]\n}'}
              className={`w-full resize-y rounded-lg border bg-background px-3 py-2.5 font-mono text-xs leading-relaxed text-foreground outline-none focus:border-accent ${jsonState === "invalid" ? "border-red-500/40" : "border-border"}`}
            />
          </label>

          {submitError && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-600 dark:text-red-400">
              {submitError}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting || !username.trim() || jsonState === "invalid"}
            className="rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-40"
          >
            {submitting ? "Creating..." : "Create ghost profile"}
          </button>
        </form>
      </section>

      <section>
        <h2 className="mb-4 text-base font-semibold text-foreground">
          Ghost profiles{ghosts.length > 0 ? ` (${ghosts.length})` : ""}
        </h2>

        {loadError ? (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400">{loadError}</div>
        ) : loading ? (
          <div className="space-y-2">
            {[0, 1].map((i) => (
              <div key={i} className="h-[78px] animate-pulse rounded-xl border border-border bg-secondary" />
            ))}
          </div>
        ) : ghosts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-secondary/50 px-6 py-12 text-center">
            <p className="text-sm font-medium text-foreground">No ghost profiles yet</p>
            <p className="mx-auto mt-1 max-w-xs text-xs text-muted">
              Create one above, or hit Load sample to spin up a fully-built Pieter Levels page in seconds.
            </p>
          </div>
        ) : (
          <div className="space-y-2.5">
            {ghosts.map((g) => (
              <GhostCard key={g.token} ghost={g} onEdit={handleEdit} onRevoke={setConfirmRevoke} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
