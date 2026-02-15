"use client";
import { motion } from "framer-motion";
import  Section  from "./Section";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience">
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-16 text-center"
      >
        Professional Journey
      </motion.h2>

      <div className="relative border-l border-white/10 ml-4 md:ml-1/2 space-y-12">
        {EXPERIENCE.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Dot Indicator */}
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-black" />
            
            <div className="glass p-6 rounded-2xl md:max-w-md hover:border-blue-500/30 transition-colors">
              <span className="text-sm text-blue-400 font-mono mb-2 block">{exp.period}</span>
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <p className="text-gray-400 mb-4">{exp.company}</p>
              <p className="text-gray-300 leading-relaxed text-sm">
                {exp.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}