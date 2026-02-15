"use client";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { PROFILE } from "@/lib/data";
import ShinyText from "../ui/ShinyText";
import { filter } from "framer-motion/client";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  
   
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.5 },
          filter: { blur: 3, opacity: 1 },
},

};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full shadow-xl shadow-black/70 flex flex-col justify-center items-center text-center px-4 pt-20">


    {/* --- BACKGROUND LAYER START --- */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {/* 1. Grid Pattern (CSS Murni) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
      


        {/* 3. Top Glow (Efek cahaya dari atas) */}
        <div className="absolute -top-70 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full opacity-50"></div>
        
        {/* 4. Bottom Glow (Efek cahaya ungu dari bawah) */}
      </div>
      {/* --- BACKGROUND LAYER END --- */}


      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-4xl mx-auto space-y-6"
      >
        <motion.div variants={fadeInUp} className="inline-block glass px-4 py-1.5 rounded-full text-sm font-medium text-blue-400 mb-4">
          Available for freelance work
        </motion.div>
        
        <motion.h1 variants={fadeInUp} className="text-4xl px-2 relative  md:text-7xl font-bold leading-tight tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent pb-4">
        <span className="font-extrabold text-center  left-1/2 transform -translate-x-1/2 ">I`am </span><br />
          <ShinyText  
          speed={3}
          delay={0}
          color="oklch(62.3% 0.214 259.815)"
          shineColor="oklch(93.2% 0.032 255.585)"
          spread={150}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
          text="WEB DEVELOPER" className="text-blue-500 font-extrabold">
          </ShinyText>
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-sm  md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {PROFILE.bio}
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4 pt-8">
          <a href="#projects" className="group cursor-pointer z-9999 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2">
           Donwload CV
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
        </motion.div>
      </motion.div>
    </section>
  );
}