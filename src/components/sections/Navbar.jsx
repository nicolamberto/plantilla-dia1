"use client";
import { useState } from "react";
import { navbar } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedHamburgerButton } from "../ui/AnimatedHamburgerButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const panel = {
    open: {
      height: "auto",
      opacity: 1,
      // paddingY en abierto
      paddingTop: 0,  // py-5 = 20px
      paddingBottom: 0,
    },
    closed: {
      height: 0,
      opacity: 0,
      // sin padding en cerrado
      paddingTop: 0,
      paddingBottom: 0,
    },
  };

  const ease = [0.22, 1, 0.36, 1]; // easeOutCubic-ish

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200 md:h-[80px] flex items-center">
      <nav className="container mx-auto px-4 w-full relative">
        <div className="flex items-center justify-between h-14">
          <a href="#hero" className="font-semibold tracking-tight text-2xl">
            {navbar.logoAlt}
          </a>

          <AnimatedHamburgerButton setOpenMenu={setOpen} openMenu={open} />

          <ul className="hidden md:flex gap-6 text-sm">
            {navbar.links.map((l) => (
              <li key={l.href}>
                <a className="hover:text-neutral-800 uppercase" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Menú móvil animado */}
        <AnimatePresence initial={false}>
          {open && (
            <>
              <motion.button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="md:hidden fixed inset-x-0 top-14 md:top-20 bg-black/20" // <- alto real del header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18, ease }}
              />

              {/* Panel */}
              <motion.div
                key="mobile-panel"
                className="
                          md:hidden absolute inset-x-0 top-full overflow-hidden
                        bg-white/95 backdrop-blur border-t border-neutral-200 shadow-lg px-2
                          "
                // Ojo: quitamos py-* fijos del className y los animamos vía variants
                initial="closed"
                animate="open"
                exit="closed"
                variants={panel}
                transition={{
                  height: { duration: 0.4, ease },
                  opacity: { duration: 0.3, ease },
                  // y: fuera
                }}
              >
                <ul className="px-4 py-5 flex flex-col">
                  {navbar.links.map((l) => (
                    <li key={l.href}>
                      <a
                        className="block py-3 uppercase font-semibold"
                        href={l.href}
                        onClick={() => setOpen(false)}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
