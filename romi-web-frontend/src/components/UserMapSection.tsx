"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

function MapLoading() {
  const t = useTranslations("map");
  return (
    <section className="mt-16 sm:mt-24">
      <div className="card-premium flex min-h-[420px] items-center justify-center bg-[var(--surface-card)] p-8 text-center">
        <div>
          <p className="kawaii-chip mx-auto px-4 py-1.5 text-xs">{t("chip")}</p>
          <p className="mt-4 font-fredoka-one text-2xl text-[var(--primary)]">{t("loading")}</p>
        </div>
      </div>
    </section>
  );
}

const UserMapLeaflet = dynamic(() => import("@/components/UserMapLeaflet"), {
  ssr: false,
  loading: MapLoading,
});

export default function UserMapSection() {
  return <UserMapLeaflet />;
}
