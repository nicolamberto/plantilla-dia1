import Section from "@/components/ui/Section";
import { whyUs } from "@/lib/data";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";

function ArrowDivider() {
  return (
    <div className="hidden md:flex items-center justify-center h-full text-neutral-400 rotate-90 md:rotate-0">
      <IoIosArrowForward />
    </div>
  );
}

export default function WhyUs() {
  // Config mobile
  const mobileCols = 2;

  const isSecondCol = (i) => (i % mobileCols) === 1;     // col derecha
  const isSecondRow = (i) => Math.floor(i / mobileCols) >= 1; // fila inferior

  return (
    <Section id="why-us" className="bg-[#777777]/30 lg:text-3xl">
      <div className="space-y-10">
        <h2 className="text-4xl sm:text-5xl md:text-3xl xl:text-5xl font-section-title text-center">
          {whyUs.title}
        </h2>

        {/* Mobile: grilla 2x2 sin gap + bordes internos
            Desktop: 7 cols (items + flechas) con gaps */}
        <div className="grid grid-cols-2 md:grid-cols-7 gap-0 md:gap-6 md:gap-y-12 items-start">
          {whyUs.items.map((item, idx) => (
            <React.Fragment key={item.title}>
              {/* Item */}
              <div
                className={[
                  // Bordes SOLO en mobile para crear la cruz central:
                  // - Borde izquierdo solo para segunda columna
                  // - Borde superior solo para segunda fila
                  isSecondCol(idx) ? "border-l" : "",
                  isSecondRow(idx) ? "border-t" : "",
                  "border-black/20 md:border-0",

                  // Espaciado interno ya que en mobile no hay gap
                  "px-4 py-6 md:px-0 md:py-0",

                  "flex flex-col items-center text-center"
                ].join(" ")}
              >
                {/* Bloque fijo: icono + título */}
                <div className="flex flex-col items-center justify-start mb-3 md:mb-4 h-[140px] xl:h-[200px]">
                  <div className="rounded-full h-20 w-20 sm:h-32 sm:w-32 flex items-center justify-center bg-white shadow-md mb-3">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={56}
                      height={56}
                      className="h-12 sm:h-20 sm:w-12 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-base md:text-lg text-black/70">
                    {item.title}
                  </h3>
                </div>

                {/* Descripción */}
                <p className={`${isSecondCol(idx) ? 'pl-3 md:pl-0' : 'pr-3 md:pr-0'} text-sm  leading-relaxed text-black/60 w-[180px]  md:w-auto md:px-5`}>
                  {item.desc}
                </p>
              </div>

              {/* Flecha solo en desktop y no en el último */}
              {idx < whyUs.items.length - 1 && <ArrowDivider />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
}
