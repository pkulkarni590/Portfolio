"use client";
import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import { Linkedin, Instagram, Github, Briefcase, Trophy, Zap, GraduationCap } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function PremiumUI() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-blue-100 p-4 md:p-12">
      <motion.div
        variants={container} initial="hidden" animate="show"
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {/* HERO CARD - Span 2 columns */}
        <motion.div variants={item} className="md:col-span-2 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-center space-y-4">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-sm tracking-widest uppercase">
            <GraduationCap size={16} /> Johns Hopkins University
          </div>
          <h1 className="text-5xl font-black tracking-tighter italic">I'm {DATA.name}.</h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-md">
            SDE & AI Product Management Intern at <span className="text-blue-600 font-semibold">CounselAI</span>.
            Building the future of legal tech and fitness agents.
          </p>
        </motion.div>

        {/* SOCIAL CARD - Span 1 column */}
        <motion.div variants={item} className="p-8 rounded-3xl bg-blue-600 text-white shadow-xl flex flex-col justify-between">
          <Zap size={32} fill="white" />
          <div className="space-y-4">
            <h3 className="font-bold">Let's Connect</h3>
            <div className="flex gap-4">
               <a href={DATA.socials.linkedin} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"><Linkedin size={20} /></a>
               <a href={DATA.socials.instagram} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"><Instagram size={20} /></a>
               <a href={DATA.socials.github} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"><Github size={20} /></a>
            </div>
          </div>
        </motion.div>

        {/* EXPERIENCE CARD */}
        <motion.div variants={item} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2 font-bold text-slate-400"><Briefcase size={18}/> EXPERIENCE</div>
          {DATA.experience.slice(0, 2).map((exp, i) => (
            <div key={i} className="relative pl-4 border-l-2 border-blue-100">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
              <h4 className="font-bold text-sm">{exp.company}</h4>
              <p className="text-xs text-slate-400">{exp.role}</p>
            </div>
          ))}
        </motion.div>

        {/* IRONMAN CARD - The "Fancy" Athletic Card */}
        <motion.div variants={item} className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl relative overflow-hidden group">
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2 font-bold text-blue-400"><Trophy size={18}/> EXTRACURRICULAR</div>
            <h2 className="text-3xl font-black italic">IRONMAN 70.3 FINISHER</h2>
            <p className="text-slate-400 text-sm max-w-sm">
              Applying AI to human performance. Integrated Garmin data into a personal fitness RAG agent for recovery optimization.
            </p>
            <button className="px-6 py-2 bg-blue-600 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-500 transition-all">
              View Stats
            </button>
          </div>
          <Trophy className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
        </motion.div>
      </motion.div>
    </main>
  );
}