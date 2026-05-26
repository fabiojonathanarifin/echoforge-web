// Shared helpers for building and editing Aksara ghost profiles from JSON.
// Used by the whiteglove create (POST) and edit (PUT/GET) admin routes so the
// field allowlists and normalization stay in one place.

// Allowlists mirror the live Aksara schema. System/auth-managed columns are
// intentionally excluded so pasted JSON can never set is_ghost, plan, username, etc.
export const PROFILE_FIELDS = [
  "name", "bio", "role", "location", "avatar_url", "status", "about",
  "about_visible", "experiences", "experience_visible",
  "github_url", "twitter_url", "linkedin_url", "instagram_url",
  "beliefs", "beliefs_visible", "creator_kinds",
  "section_order", "section_titles",
  "accent_color", "bg_color", "font_family", "card_radius",
  "custom_og_url", "hide_branding",
];

export const PROJECT_FIELDS = [
  "title", "description", "image_url", "demo_url", "repo_url", "stack",
  "images", "og_image_url", "icon", "icon_url", "show_og", "price",
  "cover_video_url", "cover_style", "cover_only",
];

export const LINK_FIELDS = [
  "label", "url", "icon", "cta_label",
  "og_title", "og_description", "og_image_url", "image_url",
];

export function pick(obj, fields) {
  const out = {};
  if (!obj || typeof obj !== "object") return out;
  for (const f of fields) if (obj[f] !== undefined) out[f] = obj[f];
  return out;
}

// Like pick, but drops null/empty so reconstructed JSON for the editor stays clean.
function pickPresent(obj, fields) {
  const out = {};
  if (!obj || typeof obj !== "object") return out;
  for (const f of fields) {
    const v = obj[f];
    if (v === undefined || v === null) continue;
    if (typeof v === "string" && v.trim() === "") continue;
    if (Array.isArray(v) && v.length === 0) continue;
    out[f] = v;
  }
  return out;
}

export function slugify(str) {
  return (
    (str || "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "project"
  );
}

export function generateClaimCode() {
  const bytes = new Uint8Array(4);
  crypto.getRandomValues(bytes);
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0").toUpperCase()).join("");
}

// Accept either nested { profile, projects, links } or a flat profile object.
export function parseGhostInput(data) {
  data = data && typeof data === "object" ? data : {};
  const profileInput =
    data.profile && typeof data.profile === "object"
      ? data.profile
      : !data.projects && !data.links
      ? data
      : {};
  const projectsInput = Array.isArray(data.projects) ? data.projects : [];
  const linksInput = Array.isArray(data.links) ? data.links : [];
  return { profileInput, projectsInput, linksInput };
}

// DB columns are NOT NULL for project title and link label/url. Return an error
// code (or null) before any write so we fail with a clear message.
export function validateGhostData(projectsInput, linksInput) {
  for (const p of projectsInput) {
    if (!p?.title || !String(p.title).trim()) return "project_missing_title";
  }
  for (const l of linksInput) {
    if (!l?.label || !String(l.label).trim() || !l?.url || !String(l.url).trim()) {
      return "link_missing_label_or_url";
    }
  }
  return null;
}

export function normalizeProfile(profileInput) {
  const profile = pick(profileInput, PROFILE_FIELDS);

  // Visibility defaults so the curated page actually shows what we filled in.
  if (profile.about && profile.about_visible === undefined) profile.about_visible = true;
  if (Array.isArray(profile.beliefs) && profile.beliefs.length && profile.beliefs_visible === undefined) {
    profile.beliefs_visible = true;
  }
  if (Array.isArray(profile.experiences)) {
    profile.experiences = profile.experiences.slice(0, 5).map((e) => ({
      id: e.id || crypto.randomUUID(),
      title: e.title || "",
      subtitle: e.subtitle || "",
      date_range: e.date_range || "",
    }));
    if (profile.experience_visible === undefined && profile.experiences.length) {
      profile.experience_visible = true;
    }
  }
  return profile;
}

export function buildProjectRows(projectsInput, userId) {
  const usedSlugs = new Set();
  return projectsInput.map((p, i) => {
    const fields = pick(p, PROJECT_FIELDS);
    const base = slugify(p.slug || p.title);
    let slug = base;
    let n = 2;
    while (usedSlugs.has(slug)) slug = `${base}-${n++}`;
    usedSlugs.add(slug);
    return {
      ...fields,
      user_id: userId,
      slug,
      is_visible: p.is_visible !== undefined ? p.is_visible : true,
      display_order: i,
    };
  });
}

export function buildLinkRows(linksInput, userId) {
  return linksInput.map((l, i) => ({
    ...pick(l, LINK_FIELDS),
    user_id: userId,
    display_order: i,
  }));
}

// Rebuild the editable { profile, projects, links } JSON from DB rows.
export function extractEditableJson(userRow, projects, links) {
  return {
    profile: pickPresent(userRow, PROFILE_FIELDS),
    projects: (projects || []).map((p) => pickPresent(p, PROJECT_FIELDS)),
    links: (links || []).map((l) => pickPresent(l, LINK_FIELDS)),
  };
}
