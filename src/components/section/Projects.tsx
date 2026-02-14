"use client";
import { motion } from "framer-motion";
import  Section  from "./Section";
import { PROJECTS } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <Section id="projects">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group glass rounded-2xl overflow-hidden hover:bg-white/[0.07] transition-all duration-300"
          >
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
          </motion.div>
        ))}
      </div>
    </Section>
  );
}