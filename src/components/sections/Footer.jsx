import Section from "@/components/ui/Section";
import { footer } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="container mx-auto px-4 py-8 text-sm text-neutral-600">
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
