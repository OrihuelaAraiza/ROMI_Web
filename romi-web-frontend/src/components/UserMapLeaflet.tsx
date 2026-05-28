"use client";

import { useEffect, useState } from "react";
import { CircleMarker, ImageOverlay, MapContainer, Popup, ZoomControl, useMap } from "react-leaflet";
import L from "leaflet";
import Reveal from "@/components/Reveal";

type Region = "all" | "mx" | "ec" | "usa" | "rest";

type UserPoint = {
  id: string;
  city: string;
  country: string;
  region: Region;
  lat: number;
  lng: number;
  users: number;
  note: string;
};

const USER_POINTS: UserPoint[] = [
  { id: "mx-cdmx", city: "Ciudad de Mexico", country: "Mexico", region: "mx", lat: 19.4326, lng: -99.1332, users: 1350, note: "Mayor concentracion de chats ROMI." },
  { id: "mx-puebla", city: "Puebla", country: "Mexico", region: "mx", lat: 19.0414, lng: -98.2063, users: 920, note: "Base clinica y comunidad local." },
  { id: "mx-gdl", city: "Guadalajara", country: "Mexico", region: "mx", lat: 20.6597, lng: -103.3496, users: 430, note: "Usuarios recurrentes de orientacion medica." },
  { id: "mx-mty", city: "Monterrey", country: "Mexico", region: "mx", lat: 25.6866, lng: -100.3161, users: 360, note: "Actividad urbana en crecimiento." },
  { id: "mx-qro", city: "Queretaro", country: "Mexico", region: "mx", lat: 20.5888, lng: -100.3899, users: 260, note: "Adopcion en salud digital." },
  { id: "mx-merida", city: "Merida", country: "Mexico", region: "mx", lat: 20.9674, lng: -89.5926, users: 170, note: "Consultas preventivas y seguimiento." },
  { id: "mx-tijuana", city: "Tijuana", country: "Mexico", region: "mx", lat: 32.5149, lng: -117.0382, users: 150, note: "Uso transfronterizo." },
  { id: "mx-cancun", city: "Cancun", country: "Mexico", region: "mx", lat: 21.1619, lng: -86.8515, users: 120, note: "Usuarios de atencion remota." },
  { id: "mx-oaxaca", city: "Oaxaca", country: "Mexico", region: "mx", lat: 17.0732, lng: -96.7266, users: 110, note: "Crecimiento regional." },
  { id: "ec-quito", city: "Quito", country: "Ecuador", region: "ec", lat: -0.1807, lng: -78.4678, users: 760, note: "Principal comunidad de Ecuador." },
  { id: "ec-guayaquil", city: "Guayaquil", country: "Ecuador", region: "ec", lat: -2.1709, lng: -79.9224, users: 620, note: "Alta demanda de seguimiento." },
  { id: "ec-cuenca", city: "Cuenca", country: "Ecuador", region: "ec", lat: -2.9006, lng: -79.0045, users: 240, note: "Uso activo en consultas educativas." },
  { id: "ec-manta", city: "Manta", country: "Ecuador", region: "ec", lat: -0.9677, lng: -80.7089, users: 140, note: "Interacciones de orientacion general." },
  { id: "ec-loja", city: "Loja", country: "Ecuador", region: "ec", lat: -3.9931, lng: -79.2042, users: 90, note: "Comunidad emergente." },
  { id: "us-la", city: "Los Angeles", country: "USA", region: "usa", lat: 34.0522, lng: -118.2437, users: 180, note: "Usuarios hispanohablantes." },
  { id: "us-houston", city: "Houston", country: "USA", region: "usa", lat: 29.7604, lng: -95.3698, users: 160, note: "Seguimiento y preguntas medicas." },
  { id: "us-miami", city: "Miami", country: "USA", region: "usa", lat: 25.7617, lng: -80.1918, users: 140, note: "Uso internacional en espanol." },
  { id: "us-nyc", city: "Nueva York", country: "USA", region: "usa", lat: 40.7128, lng: -74.006, users: 120, note: "Consultas fuera de Latinoamerica." },
  { id: "us-chicago", city: "Chicago", country: "USA", region: "usa", lat: 41.8781, lng: -87.6298, users: 90, note: "Nucleo urbano en crecimiento." },
  { id: "es-madrid", city: "Madrid", country: "España", region: "rest", lat: 40.4168, lng: -3.7038, users: 230, note: "Puente con comunidad europea." },
  { id: "co-bogota", city: "Bogota", country: "Colombia", region: "rest", lat: 4.711, lng: -74.0721, users: 220, note: "Expansion latinoamericana." },
  { id: "pe-lima", city: "Lima", country: "Peru", region: "rest", lat: -12.0464, lng: -77.0428, users: 180, note: "Crecimiento en comunidad andina." },
  { id: "ar-buenosaires", city: "Buenos Aires", country: "Argentina", region: "rest", lat: -34.6037, lng: -58.3816, users: 150, note: "Usuarios de educacion medica." },
  { id: "cl-santiago", city: "Santiago", country: "Chile", region: "rest", lat: -33.4489, lng: -70.6693, users: 130, note: "Interacciones de telesalud." },
  { id: "br-saopaulo", city: "Sao Paulo", country: "Brasil", region: "rest", lat: -23.5558, lng: -46.6396, users: 110, note: "Primeras senales de expansion." },
  { id: "uk-london", city: "Londres", country: "Reino Unido", region: "rest", lat: 51.5074, lng: -0.1278, users: 90, note: "Usuarios internacionales." },
  { id: "ph-manila", city: "Manila", country: "Filipinas", region: "rest", lat: 14.5995, lng: 120.9842, users: 75, note: "Actividad puntual fuera de America." },
];

const REGION_SUMMARY = [
  { id: "mx" as const, label: "MX", share: "50%", users: 5050 },
  { id: "ec" as const, label: "EC", share: "20%", users: 2020 },
  { id: "usa" as const, label: "USA", share: "10%", users: 1010 },
  { id: "rest" as const, label: "Resto", share: "20%", users: 2020 },
];

const FILTERS = [
  { id: "all" as const, label: "Global" },
  { id: "mx" as const, label: "Mexico" },
  { id: "ec" as const, label: "Ecuador" },
  { id: "usa" as const, label: "USA" },
  { id: "rest" as const, label: "Resto" },
];

const WORLD_MAP_SVG = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500">
  <rect width="1000" height="500" fill="#add8e3"/>
  <g fill="#f7f1ea" stroke="#e1d8cf" stroke-width="1.2">
    <path d="M104 68 C142 42 197 42 228 73 C255 100 253 135 233 160 C215 183 181 188 165 214 C148 242 161 278 144 304 C128 329 94 332 72 315 C50 298 47 265 61 241 C74 218 102 209 99 184 C96 158 66 146 63 119 C60 97 78 82 104 68 Z"/>
    <path d="M198 198 C226 186 258 197 270 224 C283 251 270 281 248 299 C232 313 220 331 225 352 C230 376 254 391 251 417 C248 446 217 462 193 448 C174 438 170 414 176 393 C184 366 172 347 153 328 C131 307 128 276 143 252 C155 228 173 210 198 198 Z"/>
    <path d="M376 116 C406 96 447 101 473 125 C493 144 503 171 492 194 C477 224 438 226 414 212 C388 197 363 201 348 181 C334 162 349 134 376 116 Z"/>
    <path d="M475 210 C514 192 565 205 588 244 C611 284 598 337 568 369 C543 396 508 405 478 388 C448 371 432 335 438 300 C444 263 445 224 475 210 Z"/>
    <path d="M545 92 C594 58 671 59 724 88 C773 115 801 161 795 208 C789 253 753 282 710 282 C669 282 640 256 603 263 C565 271 532 306 495 291 C464 278 459 238 478 210 C496 184 530 176 535 146 C538 126 528 106 545 92 Z"/>
    <path d="M735 216 C769 204 806 214 825 241 C844 267 835 305 805 321 C779 335 746 327 728 304 C707 278 706 232 735 216 Z"/>
    <path d="M760 346 C798 329 848 335 874 364 C897 390 889 425 857 439 C825 452 780 444 756 419 C731 393 728 361 760 346 Z"/>
    <path d="M884 150 C916 128 960 135 979 165 C998 196 980 234 946 241 C913 248 876 224 870 191 C867 174 872 159 884 150 Z"/>
    <path d="M313 112 C327 101 348 102 360 115 C371 129 366 149 350 157 C334 165 313 158 306 143 C301 131 304 120 313 112 Z"/>
    <path d="M676 313 C695 302 723 308 734 327 C746 347 733 373 710 378 C686 384 664 367 661 343 C660 331 665 320 676 313 Z"/>
  </g>
  <g fill="none" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1">
    <path d="M0 250H1000"/>
    <path d="M500 0V500"/>
  </g>
</svg>
`);

const WORLD_MAP_URL = `data:image/svg+xml;charset=utf-8,${WORLD_MAP_SVG}`;

function radiusForUsers(users: number) {
  return Math.max(7, Math.min(34, Math.sqrt(users) * 0.74));
}

function FitBounds({ points, region }: { points: UserPoint[]; region: Region }) {
  const map = useMap();

  useEffect(() => {
    if (!points.length) return;
    const bounds = L.latLngBounds(points.map((point) => [point.lat, point.lng]));
    map.fitBounds(bounds.pad(region === "all" ? 0.28 : 0.46), {
      animate: true,
      duration: 0.7,
      maxZoom: region === "all" ? 3 : 5,
    });
  }, [map, points, region]);

  return null;
}

export default function UserMapSection() {
  const [region, setRegion] = useState<Region>("all");
  const visiblePoints = region === "all" ? USER_POINTS : USER_POINTS.filter((point) => point.region === region);
  const totalUsers = 10100;

  return (
    <section className="mt-16 sm:mt-24">
      <Reveal className="text-center mb-8 sm:mb-10">
        <span className="kawaii-chip px-4 py-1.5 text-xs">Comunidad global</span>
        <h3 className="mt-4 text-3xl sm:text-4xl text-primary font-fredoka-one font-bold">
          Mapa de usuarios de ROMI
        </h3>
        <p className="mt-3 text-sm sm:text-base text-[var(--text-body)] font-poppins max-w-2xl mx-auto">
          Distribucion estimada de interacciones y usuarios activos por region.
        </p>
      </Reveal>

      <Reveal type="scale">
        <div className="card-premium overflow-hidden bg-[var(--surface-card)]">
          <div className="grid gap-0 lg:grid-cols-[1fr_320px]">
            <div className="relative min-h-[420px] sm:min-h-[520px]">
              <MapContainer
                center={[18, -45]}
                zoom={2}
                minZoom={2}
                maxZoom={6}
                scrollWheelZoom
                zoomControl={false}
                attributionControl={false}
                className="romi-user-map"
                worldCopyJump
              >
                <ZoomControl position="topleft" />
                <ImageOverlay url={WORLD_MAP_URL} bounds={[[-85, -180], [85, 180]]} opacity={1} zIndex={1} />
                <FitBounds points={visiblePoints} region={region} />
                {visiblePoints.map((point) => (
                  <CircleMarker
                    key={point.id}
                    center={[point.lat, point.lng]}
                    radius={radiusForUsers(point.users)}
                    pathOptions={{
                      color: "var(--primary)",
                      fillColor: "var(--primary)",
                      fillOpacity: 0.18,
                      opacity: 0.95,
                      weight: point.users > 500 ? 3 : 2,
                    }}
                  >
                    <Popup>
                      <div className="min-w-[170px] font-poppins">
                        <p className="font-bold text-[var(--text-primary)]">{point.city}</p>
                        <p className="text-xs text-[var(--text-body)]">{point.country}</p>
                        <p className="mt-2 text-sm font-semibold text-[var(--primary)]">
                          {point.users.toLocaleString("es-MX")} usuarios estimados
                        </p>
                        <p className="mt-1 text-xs text-[var(--text-body)]">{point.note}</p>
                      </div>
                    </Popup>
                  </CircleMarker>
                ))}
              </MapContainer>

              <div className="absolute right-4 top-4 z-[500] max-w-[calc(100%-2rem)] rounded-2xl border-[2px] border-[var(--surface-card-border)] bg-[var(--surface-card)]/95 px-4 py-3 text-right shadow-[4px_4px_0_var(--shadow-ink)] backdrop-blur">
                <p className="font-fredoka-one text-lg text-[var(--text-primary)]">
                  Usuarios ROMI: {totalUsers.toLocaleString("es-MX")}
                </p>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-[var(--text-body)]">
                  MX 50% · EC 20% · USA 10% · Resto 20%
                </p>
              </div>
              <div className="absolute bottom-2 left-3 z-[500] rounded-full bg-[var(--surface-card)]/90 px-3 py-1 text-[10px] font-semibold text-[var(--text-muted)] shadow-sm">
                Leaflet · ROMI basemap
              </div>
            </div>

            <aside className="border-t-[2.5px] border-[var(--surface-card-border)] bg-[var(--surface-alt)] p-5 sm:p-6 lg:border-l-[2.5px] lg:border-t-0">
              <div className="flex flex-wrap gap-2">
                {FILTERS.map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setRegion(filter.id)}
                    className={`rounded-full border-[2px] px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                      region === filter.id
                        ? "border-[var(--surface-card-border)] bg-[var(--primary)] text-white shadow-[3px_3px_0_var(--shadow-ink)]"
                        : "border-[var(--surface-card-border-soft)] bg-[var(--surface-card)] text-[var(--text-primary)] hover:bg-[var(--chip-bg)]"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                {REGION_SUMMARY.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-[var(--surface-card-border-soft)] bg-[var(--surface-card)] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-fredoka-one text-lg text-[var(--text-primary)]">{item.label}</span>
                      <span className="rounded-full bg-[var(--chip-bg)] px-3 py-1 text-xs font-bold text-[var(--primary)]">
                        {item.share}
                      </span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-[var(--surface-alt)]">
                      <div className="h-full rounded-full bg-[var(--primary)]" style={{ width: item.share }} />
                    </div>
                    <p className="mt-2 text-sm text-[var(--text-body)]">
                      {item.users.toLocaleString("es-MX")} usuarios estimados
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs leading-relaxed text-[var(--text-muted)]">
                Los puntos representan ubicaciones agregadas para visualizacion. Usa zoom, arrastra el mapa o filtra por region.
              </p>
            </aside>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
