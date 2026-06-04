import LegalDocument from "@/components/LegalDocument";

export const metadata = {
  title: "ROMI - Aviso de Privacidad",
};

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Aviso de Privacidad"
      updated="Fecha de ultima actualizacion: febrero 2025"
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
        El Centro de Innovacion y Desarrollo Integral, empresa de la cual depende el modelo de asistencia virtual
        (en adelante, &quot;Romi&quot; o &quot;el Servicio&quot;), con domicilio en Calle Benito Juarez, Reserva Territorial
        Atlixcayotl, 72820 Heroica Puebla de Zaragoza, Pue., correo electronico de contacto{" "}
        <strong>contacto@romiai.com.mx</strong> y telefono <strong>222 921 5715</strong>, actua como Responsable del
        tratamiento de sus datos personales conforme a las leyes de proteccion de datos aplicables. En cumplimiento
        de la normativa, se hace del conocimiento de los titulares de datos personales que accedan a la plataforma o
        hagan uso de los asistentes virtuales las condiciones sobre el tratamiento de su informacion. Por ello, le
        solicitamos lea detenidamente el presente aviso.
      </p>

      <h2>Identidad y domicilio del responsable</h2>
      <p>
        Romi tiene domicilio en Calle Benito Juarez, Reserva Territorial Atlixcayotl, 72820 Heroica Puebla de
        Zaragoza, Pue. y correo electronico de contacto <strong>contacto@romiai.com.mx</strong>.
      </p>

      <h2>Informacion que se recaba</h2>
      <p>
        Para brindar nuestros servicios, la plataforma puede recabar datos personales de usuarios, medicos,
        profesionales de la salud o pacientes, entre los que se incluyen:
      </p>
      <ul>
        <li><strong>Datos de identificacion:</strong> nombre, telefono, correo electronico, etc.</li>
        <li><strong>Datos de salud autorreportados:</strong> informacion sobre medidas, historial de enfermedades y otros datos sensibles.</li>
        <li><strong>Metadatos de uso:</strong> fecha, hora y frecuencia de interacciones con Romi.</li>
      </ul>
      <p>Ademas, se podran recabar datos personales sensibles siempre que sean necesarios para el servicio.</p>

      <h2>Finalidades del tratamiento</h2>
      <p>El tratamiento de sus datos se basa en su consentimiento y se realizara para:</p>
      <ol>
        <li>
          <strong>Finalidades primarias:</strong>
          <ul>
            <li>Orientacion general de salud y recomendaciones educativas.</li>
            <li>Comunicacion y seguimiento, incluyendo recordatorios y notificaciones.</li>
            <li>Personalizacion de la experiencia en funcion de sus datos.</li>
            <li>Mejora continua del servicio mediante analisis anonimo.</li>
            <li>Cumplimiento legal.</li>
          </ul>
        </li>
        <li>
          <strong>Finalidades secundarias:</strong>
          <ul>
            <li>Compartir informacion con especialistas en casos de emergencia.</li>
            <li>Referir al paciente con el especialista adecuado cuando sea necesario.</li>
            <li>Mantener actualizados expedientes clinicos.</li>
            <li>Notificar sobre citas y otras actividades relacionadas.</li>
            <li>Realizar estudios y analisis para investigacion en salud.</li>
          </ul>
        </li>
      </ol>

      <h2>Transferencias de datos</h2>
      <p>
        Para cumplir con las finalidades y requisitos legales, sus datos podran ser transferidos a terceros,
        sociedades afiliadas, proveedores de servicios u otros aliados, siempre garantizando la proteccion de su
        informacion.
      </p>

      <h2>Sobre ROMI</h2>
      <p>
        Romi es un asistente virtual basado en inteligencia artificial que brinda recomendaciones generales en salud.
        La informacion proporcionada es referencial y no sustituye un diagnostico medico personalizado.
      </p>

      <h2>Medios para ejercer sus derechos ARCO</h2>
      <p>
        Usted podra ejercer sus derechos de Acceso, Rectificacion, Cancelacion y Oposicion enviando una solicitud a{" "}
        <strong>contacto@romiai.com.mx</strong>. La solicitud debera incluir:
      </p>
      <ul>
        <li>Su nombre, domicilio y correo electronico.</li>
        <li>Una copia de un documento oficial que acredite su identidad.</li>
        <li>Una descripcion de los datos sobre los que desea ejercer sus derechos.</li>
      </ul>

      <h2>Limitacion del uso de sus datos</h2>
      <p>
        Implementamos medidas de seguridad para proteger sus datos. Solo el personal autorizado tendra acceso,
        siempre bajo estricta obligacion de confidencialidad.
      </p>

      <h2>Revocacion del consentimiento</h2>
      <p>
        Usted puede revocar su consentimiento para el tratamiento de sus datos contactandonos a{" "}
        <strong>contacto@romiai.com.mx</strong>. Tenga en cuenta que en algunos casos no sera posible cesar
        inmediatamente el tratamiento por obligaciones legales.
      </p>

      <h2>Cambios al aviso de privacidad</h2>
      <p>
        Cualquier cambio a este Aviso de Privacidad se publicara en nuestros medios habituales. Su uso continuado de
        Romi constituye su aceptacion de dichas modificaciones.
      </p>

      <h2>Consentimiento</h2>
      <p>
        Al utilizar Romi, usted declara que la informacion proporcionada es veridica y otorga su consentimiento para
        el tratamiento de sus datos personales conforme a este Aviso de Privacidad.
      </p>

      <p className="text-center text-sm font-semibold text-[var(--text-muted)]">Ultima actualizacion: febrero 2025</p>
    </LegalDocument>
  );
}
