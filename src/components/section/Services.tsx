"use client";

import React from "react";
import Section from "./Section"; // Import komponen yang sudah diperbaiki
import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Smartphone } from "lucide-react"; // Pastikan install lucide-react
import { ScrollReveal } from "../ui/ScrollReveal";


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
    <Section id="services" > 
      {/* Header */}
      <div className="mb-16 text-center">
        <ScrollReveal direction="down"
        
        duration={1}
        transitionType="easeIn"
        className=" w-full "
        >
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/60 pb-2 bg-clip-text text-transparent">What I Can Do For You</h1>
        </ScrollReveal>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Mengubah ide kompleks menjadi solusi digital yang elegan dan fungsional.
        </p>
      </div>

      {/* Grid Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-5 px-3 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ScrollReveal
           key={index}
            direction="up" 
            duration={1}
            delay={index * 0.2} // Memberikan efek muncul bergantian
            transitionType="spring" // Agar terasa lebih dinamis (membal)
             // Efek hover sederhana
          >
            {/* Icon dengan efek glow saat hover */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors group">
              <div className="mb-4 text-purple-400 group-hover:text-purple-300 transition-colors bg-purple-500/10 p-3 rounded-lg w-fit">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
};

export default Services;