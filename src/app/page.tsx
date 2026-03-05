"use client";
import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto py-20 px-6 space-y-16">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="text-4xl font-bold tracking-tight text-primary">Hi, I'm {DATA.name} 👋</h1>
        <p className="text-xl text-muted-foreground">{DATA.description}</p>
        <div className="flex gap-4 text-muted-foreground">
          <Github className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
          <Linkedin className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
          <Mail className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
        </div>
      </motion.section>

      {/* Projects Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold border-b border-border pb-2">Projects</h2>
        <div className="grid gap-6">
          {DATA.projects.map((project, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              className="group p-4 rounded-xl border border-border hover:border-primary/50 bg-white shadow-sm transition-all"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{project.title}</h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mt-1">{project.desc}</p>
              <div className="flex gap-2 mt-3">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}