import Section from "@/components/ui/Section";
import { works } from "@/lib/data";
import Image from "next/image";

// Card con overlay y dos modos:
// - Mobile: mantiene aspecto 16/9
// - Desktop (fillParent=true): llena el alto del padre (h-full)
function ImgCard({ title, image, fillParent = false, className = "" }) {
  return (
    <div className={`relative group rounded-xl overflow-hidden
        ${fillParent ? "aspect-[16/9] md:aspect-auto md:h-full" : ""}
        ${className}`}>
      {image ? (
        fillParent ? (
          // Llenar alto del contenedor (desktop)
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={false}
          />
        ) : (
          // Aspecto 16/9 (mobile)
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full aspect-[16/9] object-cover"
          />
        )
      ) : (
        // Placeholders (dos modos)
        fillParent ? (
          <div className="absolute inset-0 bg-neutral-200 border-2 border-dashed border-neutral-300" />
        ) : (
          <div className="w-full aspect-[16/9] bg-neutral-200 border-2 border-dashed border-neutral-300" />
        )
      )}

      {/* Overlay con título */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="
            px-3 py-2 rounded-md text-white
            bg-black/60
            opacity-100 md:opacity-0 md:group-hover:opacity-100
            transition-opacity duration-200
          "
        >
          <span className="block text-base md:text-lg font-semibold text-center">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Works() {
  return (
    <Section id="works">
      <div className="space-y-6">
        <h2 className="text-4xl sm:text-5xl md:text-3xl xl:text-5xl font-bold">{works.title}</h2>

        {/* Fila 1: texto (1/2) + trabajo estrella (1/2)
            items-stretch = ambas columnas igual altura en md+ */}
        <div className="grid md:grid-cols-2 gap-6 items-start md:items-stretch">
          <div className="order-2 md:order-1">
            <p className="text-neutral-700 text-md xl:text-lg xl:leading-loose text-justify">
              {works.subtitle}
            </p>
            <p className="text-neutral-700 text-md xl:text-lg xl:leading-loose text-justify mt-4">
              {works.subtitle2}
            </p>
          </div>

          <div className="order-1 md:order-2">
            {/* En mobile: 16/9; en desktop: llenar alto del padre */}
            <div className="md:h-full min-h-[220px]">
              <ImgCard
                title={works.featured?.title || "Trabajo destacado"}
                image={works.featured?.image}
                // Solo llenamos altura en md+
                fillParent={true}
              />
            </div>
          </div>
        </div>

        {/* Fila 2: 4 trabajos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {works.items?.slice(0, 4).map((w, idx) => (
            <ImgCard key={idx} title={w.title} image={w.image} />
          ))}
        </div>

        {/* CTA centrado */}
        <div className="pt-2 w-full flex justify-center">
          <a className="inline-flex bg-[#90ea93] items-center justify-center rounded-lg border text-black border-transparent px-5 py-3 text-sm xl:text-xl cursor-pointer font-medium hover:bg-[#90ea93]/50 transition">
            Quiero agendar visita técnica
          </a>
        </div>
      </div>
    </Section>
  );
}
