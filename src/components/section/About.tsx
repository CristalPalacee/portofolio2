"use client";

import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import Image from "next/image";
import { Code, Globe, Cpu } from "lucide-react"; // Install lucide-react jika belum
import { ScrollReveal } from "../ui/ScrollReveal";

const About = () => {

  
  // Data statistik singkat
  const stats = [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "4+" },
   
  ];

  return (
    <section id="about" className=" lg:max-w-7xl md:max-w-4xl max-w-sm px-5 md:px-10 lg:p-10">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* --- KOLOM KIRI: TEXT & STATS --- */}
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge Kecil */}
          <ScrollReveal direction="right" duration={1} amount={0.5} >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Cpu className="w-4 h-4" />
            <span>Who I Am</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Bridging the gap between <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Design & Engineering
            </span>
          </h2>
          </ScrollReveal>


            <ScrollReveal direction="right" duration={1} amount={0.7} >
          <p className="text-gray-400 lg:text-lg md:text-md leading-relaxed mb-6">
            Halo! Saya adalah seorang Frontend Developer yang berbasis di Indonesia. 
            Saya tidak hanya menulis kode, tapi saya membangun solusi. Dengan latar belakang 
            teknik yang kuat dan mata untuk desain, saya menciptakan aplikasi web yang 
            tidak hanya cepat secara teknis, tapi juga menyenangkan untuk digunakan.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Saat tidak sedang coding, Anda bisa menemukan saya sedang bereksperimen 
            dengan teknologi AI terbaru atau berkontribusi di komunitas open source.
          </p>
          </ScrollReveal>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>


        {/* --- KOLOM KANAN: IMAGE CARD --- */}
        <ScrollReveal direction="left" duration={1}   className="relative lg:max-w-8xl  flex justify-center lg:justify-end" >
         
        
          {/* Container Relatif untuk menumpuk elemen */}
          <div className="relative w-72 h-96 md:w-100 md:h-[450px]">
            
            {/* Layer 1: Dekorasi Belakang (Rotated Box) */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl rotate-6 opacity-20 blur-sm scale-105"></div>
            
            {/* Layer 2: Border Gradient Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/5 rounded-2xl border border-white/10 backdrop-blur-sm -rotate-3 z-10"></div>

            {/* Layer 3: Gambar Utama */}
            {/* Ganti src dengan foto asli Anda */}
            <div className="absolute inset-2 rounded-xl overflow-hidden z-20 bg-neutral-800 border border-white/10 shadow-2xl">
               {/* Gunakan Unsplash sebagai placeholder sementara */}
              <Image 
                src="/image/profil.jpg" 
                alt="Profile Picture"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay Gradient Halus di bawah gambar */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent"></div>
              
              {/* Nama di atas gambar (Opsional) */}
              <div className="absolute bottom-4 left-4 text-white">
                 <p className="text-xs font-mono text-blue-400 mb-1">Developer</p>
                 <h3 className="text-xl font-bold">Risfana</h3>
              </div>
            </div>

            {/* Floating Icon Decoration */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -right-4 top-10 z-30 bg-neutral-900 p-3 rounded-lg border border-white/10 shadow-xl"
            >
              <Code className="text-blue-500 w-6 h-6" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -left-4 bottom-20 z-30 bg-neutral-900 p-3 rounded-lg border border-white/10 shadow-xl"
            >
              <Globe className="text-purple-500 w-6 h-6" />
            </motion.div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default About;