import Section from "@/components/ui/Section";
import { about } from "@/lib/data";
import Image from "next/image";

export default function About() {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Imagen del equipo */}
        <div className="order-2 w-full h-56 sm:h-72 md:h-[390px] rounded-xl overflow-hidden relative">
          <Image
            src="/images/about/aboutimg.webp"
            alt="Equipo de trabajo"
            fill   // hace que ocupe todo el div
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="order-1 space-y-10 lg:space-y-3 h-full flex justify-between items-start flex-col">
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl md:text-3xl xl:text-5xl font-bold">
              {about.title}
            </h2>
            <p className="text-neutral-500 text-md xl:text-2xl">
              {about.subtitle}
            </p>
          </div>

          <div className="space-y-5 lg:space-y-3">
            <p className="text-neutral-700 text-md xl:text-lg xl:leading-loose text-justify">
              Somos especialistas en cielorrasos, con años de trayectoria en obras
              residenciales y comerciales. Nuestro diferencial es la atención cercana:
              entendemos tus necesidades, visitamos tu espacio y diseñamos la mejor
              solución. Miles de clientes ya confiaron en nosotros por nuestra rapidez,
              calidad y compromiso.
            </p>
            <div className="pt-2">
              <a
                className="inline-flex bg-[#90ea93] items-center justify-center rounded-lg border text-black border-transparent px-5 py-3 text-sm xl:text-xl cursor-pointer font-medium hover:bg-[#90ea93]/50 transition"
              >
                Quiero agendar visita técnica
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
