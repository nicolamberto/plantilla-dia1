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
  return (
    <Section id="why-us" className="bg-[#777777]/30 lg:text-3xl">
      <div className="space-y-10">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold w-full text-center">
          {whyUs.title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-7 gap-y-12  gap-6 items-start">
          {whyUs.items.map((item, idx) => (
            <React.Fragment key={item.title}>
              {/* Item */}
              <div className="flex flex-col items-center text-center px-3 md:px-5">
                {/* Bloque fijo: icono + título */}
                <div className="flex flex-col items-center justify-start mb-3 md:mb-4 h-[140px] xl:h-[200px] ">
                  <div className="rounded-full h-20 w-20 sm:h-32 sm:w-32 flex items-center justify-center bg-white shadow-md mb-3">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={56}
                      height={56}
                      className=" h-12 sm:h-20 sm:w-12 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-base md:text-lg text-black/70">
                    {item.title}
                  </h3>
                </div>

                {/* Descripción alineada al mismo eje Y */}
                <p className="text-sm md:text-base leading-relaxed text-black/60 w-[180px] px-5 ">
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
