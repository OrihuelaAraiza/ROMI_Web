"use client";

import Link from "next/link";
import { MapPin, X } from "lucide-react";
import { useState } from "react";

export default function TalentLandBar() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="relative z-50 bg-gradient-to-r from-[#1a2744] via-[#2d3f7a] to-[#1a2744] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-10 flex items-center justify-between gap-4">

        {/* Left: event label */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Live pulse dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d58b88] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d58b88]" />
          </span>
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white/90 whitespace-nowrap">
            Talent Land · 7–9 Abr 2026
          </span>
        </div>

        {/* Center: message */}
        <p className="hidden sm:block text-[11px] sm:text-xs text-white/75 font-poppins text-center truncate">
          <MapPin className="inline h-3 w-3 mr-1 text-[#d58b88]" />
          ¡Nos vemos en Guadalajara! Búscanos con nuestra playera ROMI
        </p>

        {/* Right: link + close */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href="/#talent-land"
            className="text-[11px] sm:text-xs font-semibold text-[#d58b88] hover:text-white underline underline-offset-2 transition-colors duration-200 whitespace-nowrap"
          >
            Ver playera
          </Link>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Cerrar"
            className="p-0.5 rounded hover:bg-white/10 transition-colors duration-200 text-white/50 hover:text-white"
          >
            <X size={14} />
          </button>
        </div>

      </div>
    </div>
  );
}
