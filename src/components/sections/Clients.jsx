"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { clients } from "@/lib/data";

export default function Clients() {
  const trackRef = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);

  const [canScroll, setCanScroll] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [step, setStep] = useState(0);

  const isMobile = () =>
    typeof window !== "undefined" && window.innerWidth < 768;

  const centerFirst = () => {
    const track = trackRef.current;
    const first = firstRef.current;
    if (!track || !first) return;
    const left = first.offsetLeft - (track.clientWidth - first.clientWidth) / 2;
    track.scrollLeft = Math.max(0, left);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const compute = () => {
      const overflow = track.scrollWidth > track.clientWidth + 1;
      setCanScroll(overflow);
      setAtStart(track.scrollLeft <= 1);
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);

      let nextStep = 0;
      if (firstRef.current && secondRef.current) {
        nextStep = Math.round(
          secondRef.current.offsetLeft - firstRef.current.offsetLeft
        );
      }
      if (!nextStep && firstRef.current) {
        const rect = firstRef.current.getBoundingClientRect();
        const styles = getComputedStyle(track);
        const gap = parseFloat(styles.gap || styles.columnGap || "0") || 0;
        nextStep = Math.ceil(rect.width + gap);
      }
      setStep(nextStep);

      if (overflow && isMobile()) {
        requestAnimationFrame(centerFirst);
      }
    };

    const onScroll = () => {
      setAtStart(track.scrollLeft <= 1);
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(track);
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", compute);

    return () => {
      ro.disconnect();
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", compute);
    };
  }, []);

  const scrollByOne = (dir = 1) => {
    const track = trackRef.current;
    if (!track || !step) return;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <Section id="clients" className="bg-neutral-50">
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          {clients.title}
        </h2>

        {/* Contenedor carrusel */}
        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="
              -mx-4 px-4 md:mx-0 md:px-0
              flex flex-nowrap gap-4 md:gap-6
              overflow-x-auto
              scroll-smooth snap-x snap-mandatory
              pb-2
              scrollbar-hide
            "
            style={{ scrollPaddingLeft: 16, scrollPaddingRight: 16 }}
          >
            {clients.testimonials.map((t, i) => (
              <article
                key={i}
                ref={i === 0 ? firstRef : i === 1 ? secondRef : null}
                className="
                  shrink-0
                  w-[min(100%,380px)] md:max-w-[500px]
                  snap-center md:snap-start
                  rounded-2xl border border-neutral-200 bg-white/90 shadow-sm
                  px-5 py-4
                "
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={clients.assets?.avatar || "/images/clients/user.webp"}
                      alt={`${t.author} avatar`}
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <h3 className="font-semibold text-neutral-900 text-xl">
                      {t.author}
                    </h3>
                  </div>
                  <Image
                    src={
                      clients.assets?.stars || "/images/clients/estrellas.webp"
                    }
                    alt="Calificación 5 estrellas"
                    width={110}
                    height={20}
                    className="h-5 w-auto object-contain"
                  />
                </div>

                <p className="mt-3 text-lg text-neutral-600 leading-relaxed">
                  {t.quote}
                </p>
              </article>
            ))}
          </div>

          {/* Fades: solo desktop */}
          {canScroll && (
            <>
              <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-neutral-50 to-transparent hidden md:block" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-neutral-50 to-transparent hidden md:block" />
            </>
          )}
        </div>

        {/* Flechas abajo */}
        {canScroll && (
          <div className="flex justify-center gap-4 pt-4">
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => scrollByOne(-1)}
              disabled={atStart}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-white/90 border border-neutral-200 shadow hover:bg-white disabled:opacity-40"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 19l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Siguiente"
              onClick={() => scrollByOne(1)}
              disabled={atEnd}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-white/90 border border-neutral-200 shadow hover:bg-white disabled:opacity-40"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </Section>
  );
}
