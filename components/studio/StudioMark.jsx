import { BRAND_MARK_PATH } from "@/constants/branding";

export function StudioMark({ className = "", size = 36 }) {
  return (
    <svg className={`studio-mark ${className}`} width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d={BRAND_MARK_PATH} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
