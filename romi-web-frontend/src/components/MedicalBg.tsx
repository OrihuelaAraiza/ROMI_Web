"use client";

/* ─────────────────────────────────────────────────────────────
   Medical animated background
   • Floating translucent cells (circles)
   • Expanding pulse rings
   • Medical "+" cross symbols drifting upward
   • Scrolling EKG heartbeat line at the bottom
   All elements are white / low-opacity so they sit elegantly
   on the brand salmon gradient.
───────────────────────────────────────────────────────────── */

const CELLS = [
  { left: "6%",   top: "12%", size: 72,  dur: 7,   delay: 0   },
  { left: "18%",  top: "68%", size: 44,  dur: 9,   delay: 1.8 },
  { left: "78%",  top: "18%", size: 88,  dur: 6.5, delay: 0.7 },
  { left: "72%",  top: "62%", size: 56,  dur: 8,   delay: 2.5 },
  { left: "44%",  top: "80%", size: 36,  dur: 10,  delay: 1.2 },
  { left: "32%",  top: "8%",  size: 50,  dur: 7.5, delay: 3.1 },
  { left: "88%",  top: "42%", size: 32,  dur: 8.5, delay: 0.4 },
  { left: "4%",   top: "48%", size: 60,  dur: 9.5, delay: 2.0 },
  { left: "55%",  top: "35%", size: 28,  dur: 6,   delay: 4.0 },
  { left: "92%",  top: "78%", size: 48,  dur: 7,   delay: 1.5 },
];

const PULSES = [
  { left: "22%", top: "35%", size: 48, dur: 4,   delay: 0   },
  { left: "68%", top: "55%", size: 36, dur: 4.5, delay: 1.8 },
  { left: "48%", top: "12%", size: 56, dur: 5,   delay: 3.2 },
  { left: "85%", top: "25%", size: 32, dur: 3.8, delay: 0.9 },
];

const CROSSES = [
  { left: "12%",  top: "22%", size: 14, dur: 7,   delay: 0   },
  { left: "82%",  top: "30%", size: 10, dur: 8,   delay: 1.5 },
  { left: "38%",  top: "58%", size: 12, dur: 9,   delay: 2.8 },
  { left: "60%",  top: "75%", size: 16, dur: 6.5, delay: 0.6 },
  { left: "25%",  top: "88%", size: 11, dur: 10,  delay: 3.5 },
  { left: "92%",  top: "68%", size: 13, dur: 7.5, delay: 1.1 },
  { left: "50%",  top: "5%",  size: 9,  dur: 8.5, delay: 4.2 },
];

/* EKG path – one 400 px tile (PQRST waveform) */
function EkgTile() {
  const path = [
    "M0,30",
    "L50,30",
    "L55,27 Q60,18 65,27 L70,30",
    "L82,30",
    "L85,34 L90,5 L95,55 L100,30",
    "L108,30",
    "Q118,14 128,30",
    "L200,30",
    "L250,30",
    "L255,27 Q260,18 265,27 L270,30",
    "L282,30",
    "L285,34 L290,5 L295,55 L300,30",
    "L308,30",
    "Q318,14 328,30",
    "L400,30",
  ].join(" ");

  return (
    <svg
      viewBox="0 0 400 60"
      width={400}
      height={60}
      className="flex-shrink-0"
      aria-hidden="true"
    >
      <path
        d={path}
        fill="none"
        stroke="white"
        strokeWidth="1.6"
        strokeOpacity="0.28"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Medical "+" cross rendered as two overlapping rects */
function Cross({ size }: { size: number }) {
  const thick = Math.max(2, Math.round(size * 0.22));
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="block"
    >
      <rect x="8" y="1" width="4" height="18" rx="1" fill="white" fillOpacity="0.55" />
      <rect x="1" y="8" width="18" height="4" rx="1" fill="white" fillOpacity="0.55" />
    </svg>
  );
}

export default function MedicalBg() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Floating cells ── */}
      {CELLS.map((c, i) => (
        <div
          key={`cell-${i}`}
          className="absolute rounded-full border border-white/25 bg-white/5"
          style={{
            left: c.left,
            top: c.top,
            width: c.size,
            height: c.size,
            animation: `med-cell-float ${c.dur}s ease-in-out ${c.delay}s infinite`,
          }}
        />
      ))}

      {/* ── Pulse rings ── */}
      {PULSES.map((p, i) => (
        <div
          key={`pulse-${i}`}
          className="absolute rounded-full border border-white/30"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animation: `med-pulse-ring ${p.dur}s ease-out ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* ── Medical crosses ── */}
      {CROSSES.map((c, i) => (
        <div
          key={`cross-${i}`}
          className="absolute"
          style={{
            left: c.left,
            top: c.top,
            animation: `cross-drift ${c.dur}s ease-in-out ${c.delay}s infinite`,
          }}
        >
          <Cross size={c.size} />
        </div>
      ))}

      {/* ── Scrolling EKG heartbeat line ── */}
      <div className="absolute bottom-4 left-0 right-0 h-[60px] overflow-hidden">
        {/* 8 tiles × 400 px = 3200 px → covers any screen + room to march */}
        <div
          style={{
            display: "flex",
            width: `${8 * 400}px`,
            animation: "ekg-march 6s linear infinite",
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <EkgTile key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
