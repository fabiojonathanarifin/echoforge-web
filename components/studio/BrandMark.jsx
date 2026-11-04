import { BRAND_MARK_PATHS } from "@/constants/branding";

export default function BrandMark() {
  return <svg className="echo-brand-mark" viewBox="0 0 42 42" fill="none" aria-hidden="true">{BRAND_MARK_PATHS.map(path => <path key={path} d={path} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />)}</svg>;
}
