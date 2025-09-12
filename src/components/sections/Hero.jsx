"use client";
import Section from "@/components/ui/Section";
import { hero } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  return (
    <Section
      id="hero"
      // svh/dvh: alturas estables en mobile; overflow hidden evita parpadeos
      className="relative min-h-[100svh] md:min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Fondo desktop */}
      <div className="absolute inset-0 hidden md:block -z-10">
        <Image
          src={hero.imageDesktop}
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 100vw"
          className="object-cover"
        />
      </div>

      {/* Fondo mobile */}
      <div className="absolute inset-0 md:hidden -z-10">
        <Image
          src={hero.imageMobile}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overlay para contraste */}
      <div
        className="
          absolute inset-0 -z-10
          bg-black/10
          md:bg-gradient-to-b md:from-black/45 md:to-black/15
          pointer-events-none
        "
      />

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-[850px] flex flex-col items-center gap-7 text-center">
          {hero.eyebrow ? (
            <p className="text-xs uppercase tracking-widest text-white/80">
              {hero.eyebrow}
            </p>
          ) : null}

          <h1 className="text-[27px] w-full sm:text-4xl md:text-5xl xl:text-6xl font-hero leading-tight text-white">
            <span>{hero.titleLine1}</span>
            <br />
            <span>
              {hero.titleLine2} <span className="text-[#90ea93]">{hero.word}</span>
            </span>
          </h1>

          <div className="text-white/80 space-y-1 text-[14px]">
            <p>{hero.desc1}</p>
            <p>{hero.desc2}</p>
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
      </div>
    </Section>
  );
}
