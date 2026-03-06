"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DATA } from "@/data/resume";
import { Linkedin, Instagram, Github, Trophy, Briefcase, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <main className="max-w-2xl mx-auto py-20 px-6 font-sans">
      {/* 1. HERO SECTION */}
      <section className="mb-12 text-center md:text-left">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-5xl font-black tracking-tighter text-primary">
          {DATA.name}.
        </motion.h1>
        <p className="text-xl text-muted-foreground mt-4">{DATA.role}</p>

        {/* Socials Row */}
        <div className="flex justify-center md:justify-start gap-5 mt-6 text-muted-foreground">
          <a href={DATA.socials.linkedin} className="hover:text-primary transition-colors"><Linkedin size={22} /></a>
          <a href={DATA.socials.instagram} className="hover:text-primary transition-colors"><Instagram size={22} /></a>
          <a href={DATA.socials.github} className="hover:text-primary transition-colors"><Github size={22} /></a>
        </div>
      </section>

      {/* 2. FANCY TAB NAVIGATION */}
      <div className="flex bg-blue-50/50 p-1 rounded-full mb-10 border border-blue-100">
        <button
          onClick={() => setActiveTab("experience")}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-full text-sm font-bold transition-all ${activeTab === "experience" ? "bg-primary text-white shadow-lg" : "text-blue-600 hover:bg-blue-100"}`}
        >
          <Briefcase size={16} /> Experience
        </button>
        <button
          onClick={() => setActiveTab("extra")}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-full text-sm font-bold transition-all ${activeTab === "extra" ? "bg-primary text-white shadow-lg" : "text-blue-600 hover:bg-blue-100"}`}
        >
          <Trophy size={16} /> Extracurriculars
        </button>
      </div>

      {/* 3. DYNAMIC CONTENT AREA */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTab === "experience" ? (
            <motion.div key="exp" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-6">
              {DATA.experience.map((exp, i) => (
                <div key={i} className="p-5 border-l-4 border-primary bg-white shadow-sm rounded-r-xl">
                  <div className="flex justify-between font-bold">
                    <span>{exp.company}</span>
                    <span className="text-primary text-sm">{exp.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">{exp.role}</p>
                  <p className="mt-2 text-sm leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div key="extra" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="grid gap-4">
              {DATA.extracurriculars.map((item, i) => (
                <div key={i} className="group p-6 rounded-2xl border-2 border-dashed border-blue-200 hover:border-primary hover:bg-blue-50 transition-all">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}