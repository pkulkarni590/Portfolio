"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-6 text-center">
      {/* Small Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="px-3 py-1 mb-6 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold tracking-widest uppercase border border-blue-200"
      >
        Available for Summer Internships
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold tracking-tighter text-blue-950 italic"
      >
        Prathmesh.
      </motion.h1>

      {/* Subtext with Glassmorphism feel */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 max-w-xl text-lg md:text-xl text-slate-600 leading-relaxed"
      >
        Blending <span className="text-blue-600 font-medium">SDE Rigor</span> with
        <span className="text-blue-600 font-medium"> AI Strategy</span> to build
        agentic systems for legal tech and human performance.
      </motion.p>
    </section>
  );
}