import Section from "@/components/ui/Section";
import { contactInfo } from "@/lib/data";

export default function ContactInfo() {
  return (
    <Section id="contact" className="bg-neutral-50">
      <div className="grid md:grid-cols-2 gap-6 items-start w-full">
        {/* Columna izquierda: datos */}
        <div className="rounded-xl bg-white/70 border border-neutral-200 p-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            {contactInfo.title || "Contacto"}
          </h2>

          {contactInfo.subtitle && (
            <p className="text-neutral-600 mb-4">
              {contactInfo.subtitle}
            </p>
          )}

          <ul className="space-y-3">
            {contactInfo.items?.map((it, i) => (
              <li
                key={i}
                className="flex flex-col rounded-lg bg-neutral-100 px-4 py-3"
              >
                <span className="text-xs uppercase tracking-wider text-neutral-500">
                  {it.label}
                </span>
                <span className="font-medium text-neutral-900 break-words">
                  {it.value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna derecha: mapa */}
        <div className="rounded-xl  border border-neutral-200 h-full">
          <iframe
            title="Mapa - Buenos Aires"
            src="https://www.google.com/maps?q=-32.42140804384866,-63.21606088790512&z=15&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}
