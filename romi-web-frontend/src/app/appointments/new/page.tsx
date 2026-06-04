import { redirect } from "next/navigation";
import NewAppointment from "@/components/appointments/newAppointment";

export const metadata = { title: "Agendar cita — ROMI" };

export default function Page({ searchParams }: { searchParams: { doctorId?: string } }) {
  const doctorId = searchParams?.doctorId;
  if (!doctorId) redirect("/doctores?reason=pick-doctor");

  return (
    <main className="romi-page max-w-4xl mx-auto">
      <NewAppointment doctorId={doctorId} />
    </main>
  );
}
