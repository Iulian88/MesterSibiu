import { ImageResponse } from "next/og";
import { CONTACT } from "@/lib/contact";

export const alt = "Meșter la Tine Acasă — Meșter Sibiu";
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
          background: "#F9F8F3",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            color: "#1F5C45",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#1F5C45",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F9F8F3",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            M
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>{CONTACT.brand}</span>
            <span
              style={{
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#5C6660",
                marginTop: 4,
              }}
            >
              Servicii pentru casă · Sibiu
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#1F5C45",
              maxWidth: 900,
            }}
          >
            Meșter Sibiu — reparații și lucrări practice
          </div>
          <div style={{ fontSize: 28, color: "#5C6660", maxWidth: 820 }}>
            Handyman Sibiu · Montaj mobilier · Reparații prin casă · Mici
            reparații
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#1F5C45",
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          <span>{CONTACT.tagline}</span>
          <span style={{ color: "#087F83" }}>{CONTACT.phoneDisplay}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
