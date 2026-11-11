import { ImageResponse } from "next/og";
import { siteConfig } from "../../data/siteConfig";

export const alt = "SPLENDOUR Studio — Web design and development in Kenya";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fafaf9",
          color: "#18181b",
          padding: "72px 84px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 18, height: 18, borderRadius: 99, background: "#239b92" }} />
          <span style={{ fontSize: 23, fontWeight: 700, letterSpacing: 5 }}>{siteConfig.name}</span>
          <span style={{ color: "#71717a", fontSize: 18, letterSpacing: 4 }}>{siteConfig.descriptor.toUpperCase()}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <span style={{ color: "#71717a", fontSize: 20, letterSpacing: 4, textTransform: "uppercase" }}>Web design &amp; development · Kenya</span>
          <span style={{ maxWidth: 960, fontFamily: "Georgia, serif", fontSize: 70, lineHeight: 1.08, letterSpacing: -3 }}>Thoughtful design.<br />Serious engineering.</span>
        </div>
        <span style={{ color: "#71717a", fontSize: 18 }}>{siteConfig.description}</span>
      </div>
    ),
    size,
  );
}
