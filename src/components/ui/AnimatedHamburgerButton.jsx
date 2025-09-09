import React from "react";
import { MotionConfig, motion } from "framer-motion";


export const AnimatedHamburgerButton = ({ setOpenMenu, openMenu }) => {  

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="md:hidden inline-flex items-center justify-center">

        <motion.button
          initial={false}
          animate={openMenu ? "open" : "closed"}
          onClick={() => setOpenMenu(!openMenu)}
          className="relative h-20 w-20 rounded-full transition-colors hover:bg-white/20"
        >
          <motion.span
            variants={VARIANTS.top}
            className={`absolute h-1 w-8 transition bg-black/80`}
            style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
          />
          <motion.span
            variants={VARIANTS.middle}
            className={`absolute h-1 w-8  transition bg-black/80 `}
            style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
          />
          <motion.span
            variants={VARIANTS.bottom}
            className={`absolute h-1 w-3  transition bg-black/80 `}
            style={{
              x: "-50%",
              y: "50%",
              bottom: "35%",
              left: "calc(50% + 10px)",
            }}
          />
        </motion.button>
      </div>

    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};