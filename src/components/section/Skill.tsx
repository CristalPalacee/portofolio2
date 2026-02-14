"use client";
import { motion } from "framer-motion";
import Section from "./Section";
import { SKILLS } from "@/lib/data";
import { Code2, Database, Wrench } from "lucide-react";

// Helper untuk ikon kategori
const getIcon = (category: string) => {
  if (category.includes("Frontend")) return <Code2 className="w-6 h-6 text-blue-400" />;
  if (category.includes("Backend")) return <Database className="w-6 h-6 text-purple-400" />;
  return <Wrench className="w-6 h-6 text-green-400" />;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <Section id="skills" className="relative overflow-hidden">
      {/* Background Decorator */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2rounded-full -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60 pb-2">
          Technical Arsenal
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Alat dan teknologi yang saya gunakan untuk mengubah konsep menjadi kode berkualitas tinggi.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div
            key={skillGroup.category}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 glass rounded-lg bg-white/5">
                {getIcon(skillGroup.category)}
              </div>
              <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
            </div>

            {/* Skills Grid */}
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="glass px-4 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-white hover:border-blue-500/50 cursor-default transition-colors duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}