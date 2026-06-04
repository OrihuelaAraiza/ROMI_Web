import DoctorsBrowser from "@/components/doctors/DoctorBrowser";

export const metadata = { title: "ROMI — Doctores" };

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto py-6 sm:py-10">
      <DoctorsBrowser />
    </main>
  );
}
