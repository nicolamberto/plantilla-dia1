import Section from "@/components/ui/Section";
import { hero } from "@/lib/data";


export default function Hero() {
  return (
    <Section
      id="hero"
      className="pt-8 md:pt-16 h-[95vh] lg:h-[100vh] flex justify-center items-center"
      style={{ backgroundImage: "url('/images/hero/herobanner.webp')" }}
    >
      <div className="flex justify-center items-center gap-8 ">
        <div className="space-y-4 flex flex-col justify-center items-center gap-7 max-w-[850px] ">
          {hero.eyebrow ? (
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              {hero.eyebrow}
            </p>
          ) : null}

          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-center text-white">
            <span>{hero.titleLine1}</span>
            <br />
            <span className="">{hero.titleLine2} <span className="text-[#90ea93]">{hero.word}</span></span>
          </h1>

          <div className="text-center text-white/70">
            <p className="">{hero.desc1}</p>
            <p className="">{hero.desc2}</p>
          </div>


          <div className="pt-2">
            <a
              href={hero.ctaPrimary.href}
              className="inline-flex items-center justify-center rounded-lg border border-transparent bg-[#90ea93] hover:bg-[#90ea93]/80 text-black px-5 py-3 text-sm md:text-xl font-medium transition"
            >
              {hero.ctaPrimary.label}
            </a>
          </div>
        </div>

        {/* Placeholder de imagen */}
      </div>
    </Section>
  );
}
