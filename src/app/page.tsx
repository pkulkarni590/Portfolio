"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { DATA } from "@/data/resume"; // Use the resume.ts we built earlier
import { Github, Linkedin, Mail, Camera, Briefcase, GraduationCap } from "lucide-react";

export default function ReplicatedPortfolio() {
  const [view, setView] = useState("projects");
  const [filter, setFilter] = useState("All");

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 1. HERO SECTION (IMG_8791) */}
      <section className="hero-gradient min-h-[80vh] flex flex-col items-center justify-center text-center px-6 text-white">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl font-bold tracking-tighter mb-4">
          Prathmesh
        </motion.h1>
        <p className="text-xl text-blue-200 max-w-lg mb-8">Crafting experiences that blend technology, empathy, and imagination.</p>

        <div className="flex gap-6 mb-12">
          <button className="text-sm font-semibold hover:text-blue-400 transition-colors">Chat with AI</button>
          <button className="text-sm font-semibold hover:text-blue-400 transition-colors">Explore Work</button>
          <button className="text-sm font-semibold hover:text-blue-400 transition-colors">About Me</button>
        </div>

        <div className="flex gap-4 opacity-70">
          <Mail size={20} /> <Linkedin size={20} /> <Github size={20} /> <Camera size={20} />
        </div>
      </section>

      {/* 2. WORK SECTION (IMG_8792 & IMG_8793) */}
      <section id="work" className="max-w-6xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">My Work</h2>
          <p className="text-slate-500">Explore my projects and professional journey</p>

          {/* Projects/Experience Toggle */}
          <div className="inline-flex bg-slate-100 p-1 rounded-xl mt-8 mb-12">
            <button
              onClick={() => setView("projects")}
              className={`px-8 py-2 rounded-lg text-sm font-bold transition-all ${view === "projects" ? "bg-white shadow-md text-blue-600" : "text-slate-500"}`}
            >
              Projects
            </button>
            <button
              onClick={() => setView("experience")}
              className={`px-8 py-2 rounded-lg text-sm font-bold transition-all ${view === "experience" ? "bg-white shadow-md text-blue-600" : "text-slate-500"}`}
            >
              Experience
            </button>
          </div>

          {/* Filter Pills */}
          {view === "projects" && (
            <div className="flex justify-center gap-3 mb-12">
              {["All", "AI", "Product", "Consulting"].map((f) => (
                <button
                  key={f} onClick={() => setFilter(f)}
                  className={`px-4 py-1 rounded-full text-xs font-medium border transition-all ${filter === f ? "bg-slate-900 text-white" : "border-slate-200 text-slate-500 hover:border-slate-400"}`}
                >
                  {f}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DATA.projects.map((project, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm bg-white">
              <div className="h-48 bg-slate-200 relative">
                <span className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-md uppercase">Featured</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.desc}</p>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. FOUNDATION YEARS (IMG_8794) */}
      <section className="bg-slate-50 py-24 px-6 border-y border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">The Foundation Years</h2>
          <p className="text-slate-500 mb-12">Academic Excellence</p>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-left relative overflow-hidden">
             <div className="flex items-start gap-4">
               <div className="p-3 bg-red-50 text-red-600 rounded-2xl"><GraduationCap /></div>
               <div>
                 <h4 className="font-bold text-xl">Master of Information Systems Management</h4>
                 <p className="text-red-600 font-medium">Johns Hopkins University</p>
                 <p className="text-slate-400 text-sm mt-1">Baltimore, MD • 2024 - 2026 • GPA: 3.75/4.0</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. PHOTOGRAPHY (IMG_8795) */}
      <section className="max-w-6xl mx-auto py-24 px-6 text-center">
         <h2 className="text-4xl font-bold mb-4">My Life Beyond Work</h2>
         <p className="text-slate-500 mb-12">Exploring the world through my lens.</p>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           {["Adventure Moment", "Creative Shot", "Memorable Experience"].map((cap, i) => (
             <div key={i} className="space-y-3">
               <div className="aspect-[4/5] bg-slate-200 rounded-3xl"></div>
               <p className="font-semibold text-sm">{cap}</p>
             </div>
           ))}
         </div>
      </section>
    </div>
  );
}