"use client";
import { motion } from "framer-motion";

export default function Section({ id, className = "", children, style, ...props }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`} style={style}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-2 md:px-4"
      >
        {children}
      </motion.div>
    </section>
  );
}
