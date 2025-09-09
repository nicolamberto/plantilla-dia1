import Section from "@/components/ui/Section";
import { whyUs } from "@/lib/data";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

function ArrowDivider() {
  return (
    <div className="flex items-center justify-center h-full text-neutral-400 rotate-90 md:rotate-0">
      <IoIosArrowForward />
    </div>
  );
}

export default function WhyUs() {
  return (
    <Section id="why-us" className="bg-[#777777]/30 lg:text-3xl ">
      <div className="space-y-10">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold w-full text-center">
          {whyUs.title}
        </h2>

        {/* Grid intercalado: 7 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center justify-around">
          {whyUs.items.map((item, idx) => (
            <>
              <div
                key={idx}
                className="flex flex-col items-center justify-center px-5 py-4 text-center"
              >
                <div className=" rounded-full h-30 w-30 flex items-center justify-center bg-white shadow-md mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="h-12 w-12 object-contain"
                  />
                </div>

                <h3 className="font-semibold text-base md:text-lg text-black/60">{item.title}</h3>
              </div>

              {/* Flecha solo entre elementos (no al final) */}
              {idx < whyUs.items.length - 1 && (
                <ArrowDivider key={`arrow-${idx}`} />
              )}
            </>
          ))}
        </div>
      </div>
    </Section>
  );
}
