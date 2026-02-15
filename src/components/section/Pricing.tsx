"use client";
import React from "react";
import { Check, Rocket, Zap, Crown } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { useRouter } from "next/navigation";



interface Plan {
    name: string;
    price: string;
    icon: React.ReactNode;
    desc: string;
    features: string[];
    color: string;
    recommended?: boolean;
}
const Pricing = () => {

    const Router = useRouter();
const PhoneNumber = "082295244838"



const handleKonsultasi = (plan: string) => {
    const message = encodeURIComponent(`Halo Risfana, saya tertarik dengan paket layanan ${plan}.`);
  const WhatsappUrl = `https://wa.me/${PhoneNumber}?text=${message}`;
  Router.push(WhatsappUrl);
};
  const plans: Plan[] = [
    {
      name: "Standar",
      price: "1.5jt",
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      desc: "Landing page cepat untuk personal brand.",
      features: ["1 Halaman (Landing Page)", "Responsive Design", "Basic SEO", "Vercel Deployment"],
      color: "from-blue-500/20 to-transparent",
    },
    {
      name: "Menengah",
      price: "3.5jt",
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      desc: "Portofolio premium dengan animasi modern.",
      features: ["Hingga 5 Halaman", "Smooth Scroll (Lenis)", "Scroll Reveal Animations", "Contact Form (Email API)", "Custom Domain Setup"],
      color: "from-purple-500/30 to-transparent",
      recommended: true,
    },
    {
      name: "Premium",
      price: "7.5jt++",
      icon: <Crown className="w-6 h-6 text-amber-400" />,
      desc: "Aplikasi web kompleks untuk bisnis Anda.",
      features: ["Custom Web Apps", "Database Integration", "Admin Dashboard", "Auth System (Login/Sign-up)", "High Performance SEO"],
      color: "from-amber-500/20 to-transparent",
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <ScrollReveal direction="down" amount={0.2} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_5px_15px_rgba(255,255,255,0.1)]">
            Pilihan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Paket Layanan</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Pilih paket yang paling sesuai dengan kebutuhan transformasi digital Anda.
          </p>
        </ScrollReveal>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.1}
              transitionType="spring"
              amount={0.1}
              className="h-full"
            >
              <div className={`relative h-full flex flex-col p-8 rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl transition-all duration-500 hover:border-white/20 group ${plan.recommended ? 'scale-105 z-10 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)]' : ''}`}>
                
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-b ${plan.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl -z-10`} />

                {plan.recommended && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Paling Populer
                  </span>
                )}

                <div className="mb-8">
                  <div className="mb-4 bg-white/5 w-fit p-3 rounded-2xl border border-white/5">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{plan.desc}</p>
                </div>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-white leading-none">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-2">/proyek</span>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                      <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button onClick={() => handleKonsultasi(plan.name)} className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${plan.recommended ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}>
                  Konsultasi Sekarang
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;