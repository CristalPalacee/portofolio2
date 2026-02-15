"use client";
import { motion } from "framer-motion";
import  Section  from "./Section";
import { PROJECTS } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";

export default function Projects() {
  return (
    <Section id="projects">
      <ScrollReveal 
        direction="down" 
         amount={0.2}
         margin="-50px"
        className="w-full mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-blue-400 to-purple-500">Featured</span> Projects
        </h2>
      </ScrollReveal>

      <div className="sm:max-w-xl mx-auto  lg:max-w-7xl px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ScrollReveal
              key={index}
              margin="-50px"
              duration={1}
              direction={index % 2 === 0 ? "right" : "left"} // Variasi: muncul dari kanan & kiri
              delay={index * 0.1}
              amount={0.3} // Kartu muncul saat 30% terlihat
        
            >
              <div className="group glass rounded-2xl overflow-hidden hover:bg-white/[0.07] transition-all duration-300">
                {/* Placeholder for Image - In production use next/image */}
                <div className="h-48 bg-gradient-to-br from-blue-900/20 to-purple-900/20 w-full group-hover:scale-105 transition-transform duration-500" />
        
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="flex gap-3">
                      <a href={project.github} className="text-gray-400 hover:text-white"><Github size={20}/></a>
                      <a href={project.link} className="text-gray-400 hover:text-white"><ExternalLink size={20}/></a>
                    </div>
                  </div>
        
                  <p className="text-gray-400 mb-6 line-clamp-2">{project.desc}</p>
        
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs text-blue-300 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}