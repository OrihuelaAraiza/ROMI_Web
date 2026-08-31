"use client";

import { useEffect, useState } from "react";
import { CircleMarker, MapContainer, Popup, TileLayer, ZoomControl, useMap } from "react-leaflet";
import L from "leaflet";
import Reveal from "@/components/Reveal";
import { useTranslations } from "next-intl";

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
  { id: "mx-cdmx", city: "Ciudad de México", country: "México", region: "mx", lat: 19.4326, lng: -99.1332, users: 1350, note: "Mayor concentración de chats ROMI." },
  { id: "mx-puebla", city: "Puebla", country: "México", region: "mx", lat: 19.0414, lng: -98.2063, users: 920, note: "Base clínica y comunidad local." },
  { id: "mx-gdl", city: "Guadalajara", country: "México", region: "mx", lat: 20.6597, lng: -103.3496, users: 430, note: "Usuarios recurrentes de orientación médica." },
  { id: "mx-mty", city: "Monterrey", country: "México", region: "mx", lat: 25.6866, lng: -100.3161, users: 360, note: "Actividad urbana en crecimiento." },
  { id: "mx-qro", city: "Querétaro", country: "México", region: "mx", lat: 20.5888, lng: -100.3899, users: 260, note: "Adopción en salud digital." },
  { id: "mx-merida", city: "Mérida", country: "México", region: "mx", lat: 20.9674, lng: -89.5926, users: 170, note: "Consultas preventivas y seguimiento." },
  { id: "mx-tijuana", city: "Tijuana", country: "México", region: "mx", lat: 32.5149, lng: -117.0382, users: 150, note: "Uso transfronterizo." },
  { id: "mx-cancun", city: "Cancún", country: "México", region: "mx", lat: 21.1619, lng: -86.8515, users: 120, note: "Usuarios de atención remota." },
  { id: "mx-oaxaca", city: "Oaxaca", country: "México", region: "mx", lat: 17.0732, lng: -96.7266, users: 110, note: "Crecimiento regional." },
  { id: "ec-quito", city: "Quito", country: "Ecuador", region: "ec", lat: -0.1807, lng: -78.4678, users: 760, note: "Principal comunidad de Ecuador." },
  { id: "ec-guayaquil", city: "Guayaquil", country: "Ecuador", region: "ec", lat: -2.1709, lng: -79.9224, users: 620, note: "Alta demanda de seguimiento." },
  { id: "ec-cuenca", city: "Cuenca", country: "Ecuador", region: "ec", lat: -2.9006, lng: -79.0045, users: 240, note: "Uso activo en consultas educativas." },
  { id: "ec-manta", city: "Manta", country: "Ecuador", region: "ec", lat: -0.9677, lng: -80.7089, users: 140, note: "Interacciones de orientación general." },
  { id: "ec-loja", city: "Loja", country: "Ecuador", region: "ec", lat: -3.9931, lng: -79.2042, users: 90, note: "Comunidad emergente." },
  { id: "us-la", city: "Los Ángeles", country: "USA", region: "usa", lat: 34.0522, lng: -118.2437, users: 180, note: "Usuarios hispanohablantes." },
  { id: "us-houston", city: "Houston", country: "USA", region: "usa", lat: 29.7604, lng: -95.3698, users: 160, note: "Seguimiento y preguntas médicas." },
  { id: "us-miami", city: "Miami", country: "USA", region: "usa", lat: 25.7617, lng: -80.1918, users: 140, note: "Uso internacional en español." },
  { id: "us-nyc", city: "Nueva York", country: "USA", region: "usa", lat: 40.7128, lng: -74.006, users: 120, note: "Consultas fuera de Latinoamérica." },
  { id: "us-chicago", city: "Chicago", country: "USA", region: "usa", lat: 41.8781, lng: -87.6298, users: 90, note: "Núcleo urbano en crecimiento." },
  { id: "es-madrid", city: "Madrid", country: "España", region: "rest", lat: 40.4168, lng: -3.7038, users: 230, note: "Puente con comunidad europea." },
  { id: "co-bogota", city: "Bogotá", country: "Colombia", region: "rest", lat: 4.711, lng: -74.0721, users: 220, note: "Expansión latinoamericana." },
  { id: "pe-lima", city: "Lima", country: "Perú", region: "rest", lat: -12.0464, lng: -77.0428, users: 180, note: "Crecimiento en comunidad andina." },
  { id: "ar-buenosaires", city: "Buenos Aires", country: "Argentina", region: "rest", lat: -34.6037, lng: -58.3816, users: 150, note: "Usuarios de educación médica." },
  { id: "cl-santiago", city: "Santiago", country: "Chile", region: "rest", lat: -33.4489, lng: -70.6693, users: 130, note: "Interacciones de telesalud." },
  { id: "br-saopaulo", city: "São Paulo", country: "Brasil", region: "rest", lat: -23.5558, lng: -46.6396, users: 110, note: "Primeras señales de expansión." },
  { id: "uk-london", city: "Londres", country: "Reino Unido", region: "rest", lat: 51.5074, lng: -0.1278, users: 90, note: "Usuarios internacionales." },
  { id: "ph-manila", city: "Manila", country: "Filipinas", region: "rest", lat: 14.5995, lng: 120.9842, users: 75, note: "Actividad puntual fuera de América." },
];

const REGION_SUMMARY = [
  { id: "mx" as const, label: "MX", share: "50%", users: 13250 },
  { id: "ec" as const, label: "EC", share: "20%", users: 5300 },
  { id: "usa" as const, label: "USA", share: "10%", users: 2650 },
  { id: "rest" as const, label: "Resto", share: "20%", users: 5300 },
];

const FILTERS = ["all", "mx", "ec", "usa", "rest"] as const;

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
  const t = useTranslations("map");
  const common = useTranslations("common");
  const [region, setRegion] = useState<Region>("all");
  const visiblePoints = region === "all" ? USER_POINTS : USER_POINTS.filter((point) => point.region === region);
  const totalUsers = 26500;

  return (
    <section className="mt-16 sm:mt-24">
      <Reveal className="text-center mb-8 sm:mb-10">
        <span className="kawaii-chip px-4 py-1.5 text-xs">{t("chip")}</span>
        <h3 className="mt-4 text-3xl sm:text-4xl text-primary font-fredoka-one font-bold">
          {t("title")}
        </h3>
        <p className="mt-3 text-sm sm:text-base text-[var(--text-body)] font-poppins max-w-2xl mx-auto">
          {t("description")}
        </p>
      </Reveal>

      <Reveal type="scale">
        <div className="card-premium overflow-hidden bg-[var(--surface-card)]">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="relative min-w-0">
              <MapContainer
                center={[18, -45]}
                zoom={2}
                minZoom={2}
                maxZoom={6}
                scrollWheelZoom
                zoomControl={false}
                attributionControl
                className="romi-user-map"
                worldCopyJump
              >
                <ZoomControl position="topleft" />
                <TileLayer
                  attribution="&copy; OpenStreetMap contributors &copy; CARTO"
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                  subdomains="abcd"
                  maxZoom={20}
                />
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
                          {common("estimatedUsers", {count: point.users})}
                        </p>
                        <p className="mt-1 text-xs text-[var(--text-body)]">{point.note}</p>
                      </div>
                    </Popup>
                  </CircleMarker>
                ))}
              </MapContainer>

            </div>

            <aside className="border-t-[2.5px] border-[var(--surface-card-border)] bg-[var(--surface-alt)] p-5 sm:p-6 lg:border-l-[2.5px] lg:border-t-0">
              <div className="mb-5 rounded-2xl border-2 border-[var(--surface-card-border)] bg-[var(--surface-card)] p-4 shadow-[3px_3px_0_var(--shadow-ink)]">
                <p className="font-fredoka-one text-xl text-[var(--text-primary)]">
                  {t("summary", {count: totalUsers})}
                </p>
                <p className="mt-1 text-xs font-semibold text-[var(--text-body)]">
                  {t("explore")}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {FILTERS.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setRegion(filter)}
                    className={`rounded-full border-[2px] px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                      region === filter
                        ? "border-[var(--surface-card-border)] bg-[var(--primary)] text-white shadow-[3px_3px_0_var(--shadow-ink)]"
                        : "border-[var(--surface-card-border-soft)] bg-[var(--surface-card)] text-[var(--text-primary)] hover:bg-[var(--chip-bg)]"
                    }`}
                  >
                    {t(filter === "mx" ? "mexico" : filter === "ec" ? "ecuador" : filter)}
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
                      {common("estimatedUsers", {count: item.users})}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs leading-relaxed text-[var(--text-muted)]">
                {t("note")}
              </p>
            </aside>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
