import Section from "@/components/ui/Section";
import { footer, socials } from "@/lib/data";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const ICONS = {
  instagram: FaInstagram,
  facebook: FaFacebook,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
};

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="container mx-auto px-4 py-8 text-sm text-neutral-600 relative">
        {/* Iconos centrados: solo desktop */}
        <div className="hidden md:flex absolute inset-x-0 top-1/2 -translate-y-1/2 justify-center gap-5">
          {socials.map((s) => {
            const Icon = ICONS[s.type] ?? FaInstagram;
            return (
              <a
                key={s.type}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-neutral-600 hover:text-neutral-900 transition"
              >
                <Icon className="text-xl" />
              </a>
            );
          })}
        </div>

        {/* Contenido original */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>{footer.smallprint}</p>
          <nav className="flex gap-4">
            <a href="#faqs" className="hover:text-neutral-800">FAQs</a>
            <a href="#contact" className="hover:text-neutral-800">Contacto</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
