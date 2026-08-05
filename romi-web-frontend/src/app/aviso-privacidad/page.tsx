import LegalDocument from "@/components/LegalDocument";
import { EnglishPrivacyContent } from "@/components/EnglishLegalContent";

export const metadata = {
  title: "ROMI - Aviso de Privacidad",
};

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Aviso de Privacidad"
      englishTitle="Privacy Notice"
      updated="Fecha de última actualización: febrero 2025"
      englishUpdated="Last updated: February 2025"
      englishChildren={<EnglishPrivacyContent />}
      actions={
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="https://wa.me/+522213716632"
            className="kawaii-button kawaii-button-primary inline-flex justify-center px-6 py-3 text-sm font-semibold"
          >
            Acepto
          </a>
          <a
            href="/"
            className="kawaii-button inline-flex justify-center bg-[var(--surface-card)] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--chip-bg)]"
          >
            No acepto
          </a>
        </div>
      }
    >
      <p>
        El Centro de Innovación y Desarrollo Integral, empresa de la cual depende el modelo de asistencia virtual
        (en adelante, &quot;Romi&quot; o &quot;el Servicio&quot;), con domicilio en Calle Benito Juárez, Reserva Territorial
        Atlixcáyotl, 72820 Heroica Puebla de Zaragoza, Pue., correo electrónico de contacto{" "}
        <strong>contacto@romiai.com.mx</strong> y teléfono <strong>222 921 5715</strong>, actúa como Responsable del
        tratamiento de sus datos personales conforme a las leyes de protección de datos aplicables. En cumplimiento
        de la normativa, se hace del conocimiento de los titulares de datos personales que accedan a la plataforma o
        hagan uso de los asistentes virtuales las condiciones sobre el tratamiento de su información. Por ello, le
        solicitamos lea detenidamente el presente aviso.
      </p>

      <h2>Identidad y domicilio del responsable</h2>
      <p>
        Romi tiene domicilio en Calle Benito Juárez, Reserva Territorial Atlixcáyotl, 72820 Heroica Puebla de
        Zaragoza, Pue. y correo electrónico de contacto <strong>contacto@romiai.com.mx</strong>.
      </p>

      <h2>Información que se recaba</h2>
      <p>
        Para brindar nuestros servicios, la plataforma puede recabar datos personales de usuarios, médicos,
        profesionales de la salud o pacientes, entre los que se incluyen:
      </p>
      <ul>
        <li><strong>Datos de identificación:</strong> nombre, teléfono, correo electrónico, etc.</li>
        <li><strong>Datos de salud autorreportados:</strong> información sobre medidas, historial de enfermedades y otros datos sensibles.</li>
        <li><strong>Metadatos de uso:</strong> fecha, hora y frecuencia de interacciones con Romi.</li>
      </ul>
      <p>Además, se podrán recabar datos personales sensibles siempre que sean necesarios para el servicio.</p>

      <h2>Finalidades del tratamiento</h2>
      <p>El tratamiento de sus datos se basa en su consentimiento y se realizará para:</p>
      <ol>
        <li>
          <strong>Finalidades primarias:</strong>
          <ul>
            <li>Orientación general de salud y recomendaciones educativas.</li>
            <li>Comunicación y seguimiento, incluyendo recordatorios y notificaciones.</li>
            <li>Personalización de la experiencia en función de sus datos.</li>
            <li>Mejora continua del servicio mediante análisis anónimo.</li>
            <li>Cumplimiento legal.</li>
          </ul>
        </li>
        <li>
          <strong>Finalidades secundarias:</strong>
          <ul>
            <li>Compartir información con especialistas en casos de emergencia.</li>
            <li>Referir al paciente con el especialista adecuado cuando sea necesario.</li>
            <li>Mantener actualizados expedientes clínicos.</li>
            <li>Notificar sobre citas y otras actividades relacionadas.</li>
            <li>Realizar estudios y análisis para investigación en salud.</li>
          </ul>
        </li>
      </ol>

      <h2>Transferencias de datos</h2>
      <p>
        Para cumplir con las finalidades y requisitos legales, sus datos podrán ser transferidos a terceros,
        sociedades afiliadas, proveedores de servicios u otros aliados, siempre garantizando la protección de su
        información.
      </p>

      <h2>Sobre ROMI</h2>
      <p>
        Romi es un asistente virtual basado en inteligencia artificial que brinda recomendaciones generales en salud.
        La información proporcionada es referencial y no sustituye un diagnóstico médico personalizado.
      </p>

      <h2>Medios para ejercer sus derechos ARCO</h2>
      <p>
        Usted podrá ejercer sus derechos de Acceso, Rectificación, Cancelación y Oposición enviando una solicitud a{" "}
        <strong>contacto@romiai.com.mx</strong>. La solicitud deberá incluir:
      </p>
      <ul>
        <li>Su nombre, domicilio y correo electrónico.</li>
        <li>Una copia de un documento oficial que acredite su identidad.</li>
        <li>Una descripción de los datos sobre los que desea ejercer sus derechos.</li>
      </ul>

      <h2>Limitación del uso de sus datos</h2>
      <p>
        Implementamos medidas de seguridad para proteger sus datos. Solo el personal autorizado tendrá acceso,
        siempre bajo estricta obligación de confidencialidad.
      </p>

      <h2>Revocación del consentimiento</h2>
      <p>
        Usted puede revocar su consentimiento para el tratamiento de sus datos contactándonos a{" "}
        <strong>contacto@romiai.com.mx</strong>. Tenga en cuenta que en algunos casos no será posible cesar
        inmediatamente el tratamiento por obligaciones legales.
      </p>

      <h2>Cambios al aviso de privacidad</h2>
      <p>
        Cualquier cambio a este Aviso de Privacidad se publicará en nuestros medios habituales. Su uso continuado de
        Romi constituye su aceptación de dichas modificaciones.
      </p>

      <h2>Consentimiento</h2>
      <p>
        Al utilizar Romi, usted declara que la información proporcionada es verídica y otorga su consentimiento para
        el tratamiento de sus datos personales conforme a este Aviso de Privacidad.
      </p>

      <p className="text-center text-sm font-semibold text-[var(--text-muted)]">Última actualización: febrero 2025</p>
    </LegalDocument>
  );
}
