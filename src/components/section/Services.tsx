"use client";

import React from "react";
import Section from "./Section"; // Import komponen yang sudah diperbaiki
import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Smartphone } from "lucide-react"; // Pastikan install lucide-react


interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
}
// Data Layanan (Mock Data)
const services: Service[] = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Development",
    description: "Membangun website responsif dan cepat menggunakan Next.js dan Tailwind CSS.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Apps",
    description: "Pengembangan aplikasi mobile cross-platform yang mulus dengan React Native.",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Merancang antarmuka yang estetis dan fokus pada pengalaman pengguna (User Centric).",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "SEO Optimization",
    description: "Mengoptimalkan performa website agar muncul di halaman pertama Google.",
  },
];

const Services = () => {
  return (
    <Section id="services" className="bg-neutral-950/50"> 
      {/* Header */}
      <div className="mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 pb-2"
        >
          What I Can Do For You
        </motion.h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Mengubah ide kompleks menjadi solusi digital yang elegan dan fungsional.
        </p>
      </div>

      {/* Grid Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }} // Efek hover sederhana
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors group"
          >
            {/* Icon dengan efek glow saat hover */}
            <div className="mb-4 text-purple-400 group-hover:text-purple-300 transition-colors bg-purple-500/10 p-3 rounded-lg w-fit">
              {service.icon}
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;