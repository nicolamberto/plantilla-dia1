// src/components/providers/LenisProvider.jsx
"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

function SmoothAnchors() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, {
        offset: -80,           // altura de tu navbar fija
        duration: 1.0,
        easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
      });
    };
    document.addEventListener("click", onClick, { passive: false });
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);

  return null;
}

export default function LenisProvider({ children }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        smoothWheel: true,
        smoothTouch: true,
      }}
    >
      <SmoothAnchors />
      {children}
    </ReactLenis>
  );
}
