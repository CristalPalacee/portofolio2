"use client";
import React from "react";
import { Gauge, ShieldCheck, Zap, Search } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import Image from "next/image";


interface Score {
    label: string;
    value: number;
    icon: React.ReactNode;
    color: string;
}
const WebPerformance = () => {
  const scores: Score[] = [
    { label: "Performance", value: 94, icon: <Zap className="text-yellow-400" />, color: "from-yellow-500/50" },
    { label: "Accessibility", value: 94, icon: <Gauge className="text-blue-400" />, color: "from-blue-500/50" },
    { label: "Best Practices", value: 100, icon: <ShieldCheck className="text-green-400" />, color: "from-green-500/50" },
    { label: "SEO", value: 100, icon: <Search className="text-purple-400" />, color: "from-purple-500/50" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] -z-10 rounded-full"></div>

      <div className="container mx-auto px-6">
        <ScrollReveal direction="down" amount={0.2} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Excellence</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dioptimalkan untuk kecepatan, aksesibilitas, dan standar industri tertinggi guna memberikan pengalaman pengguna terbaik.
          </p>
          <h3 className="text-xl sm:pt-5 font-bold text-white mb-6 text-center">
      Real-time Audit Proof
    </h3>
    
    {/* Container Gambar dengan Efek Glassmorphism */}
    <div className="relative md:w-[500px] mt-10 group max-w-8xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[500px] md:h-[500px]">
      <Image 
        src="/image/performance.png" // 2. Sesuaikan dengan path gambar SS Anda
        alt="Lighthouse Audit Result"
        fill
        className="grayscale h-full w-full object-cover group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
      />
      
      {/* Overlay Gradient agar menyatu dengan tema Dark */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60"></div>
    </div>

    {/* Keterangan tambahan di bawah gambar */}
    <p className="text-gray-500 text-xs mt-4 font-mono">
      Snapshot taken on: February 15, 2026 - Optimized for Core Web Vitals.
    </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {scores.map((item, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.15}
              transitionType="spring"
              amount={0.1}
              className="group"
            >
              <div className="relative p-10 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col items-center text-center transition-all duration-500 hover:border-white/20  hover:bg-white/[0.05]">
                
                {/* Score Circular Indicator */}
                <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                  {/* Progress Circle (SVG) */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="42"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      className="text-white/5"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="42"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={264}
                      strokeDashoffset={264 - (264 * item.value) / 100}
                      className={`transition-all duration-1000 delay-500 ${item.label === 'Performance' ? 'text-yellow-500' : 'text-emerald-500'}`}
                    />
                  </svg>
                  <span className="absolute text-xl sm:text-2xl font-black text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                    {item.value}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row  items-center gap-5 mb-2">
                  <div className="p-1 bg-white/5 rounded-lg border border-white/5">
                    {React.cloneElement(item.icon as React.ReactElement<undefined>,)}
                  </div>
                  <h3 className="text-white font-semibold sm:text-sm  text-[12px] tracking-wide uppercase">{item.label}</h3>
                </div>
                
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-b ${item.color} to-transparent opacity-0 group-hover:opacity-10 transition-opacity rounded-[2rem] -z-10`} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Lighthouse Badge Sederhana */}
        <ScrollReveal amount={0.1} delay={0.8} className="mt-16 flex justify-center">
          <div className="px-6 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            Verified by Google Lighthouse Performance
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WebPerformance;