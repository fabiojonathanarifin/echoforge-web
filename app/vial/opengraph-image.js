import { ImageResponse } from "next/og";

// Branded OG/Twitter card for /vial. Light, on-brand with the mobile app
// (accent #00B380 on a neutral canvas). Replaces the previously-referenced
// static PNG that did not exist.
export const runtime = "edge";
export const alt = "Vial: Peptide, GLP-1 & TRT dose tracker, and AI coach.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "#00B380";
const BG = "#F4F4F5";
const TEXT = "#09090B";
const TEXT_SECONDARY = "#52525B";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: BG,
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 26, height: 26, borderRadius: 8, backgroundColor: ACCENT, marginRight: 16 }} />
          <span style={{ fontSize: 34, fontWeight: 800, color: TEXT, letterSpacing: -1 }}>Vial</span>
          <span style={{ fontSize: 22, color: TEXT_SECONDARY, marginLeft: 16 }}>by EchoForge</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 800, color: TEXT, letterSpacing: -3, lineHeight: 1.08 }}>
            Peptide, GLP-1 &
          </div>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 800, color: TEXT, letterSpacing: -3, lineHeight: 1.08 }}>
            TRT dose tracker,
          </div>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 800, color: ACCENT, letterSpacing: -3, lineHeight: 1.08 }}>
            and AI coach
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", fontSize: 28, color: TEXT_SECONDARY }}>
          {"For compounded GLP-1, TRT & peptide protocols"}
          <span style={{ color: ACCENT, margin: "0 16px" }}>•</span>
          Free to start
        </div>
      </div>
    ),
    { ...size }
  );
}
