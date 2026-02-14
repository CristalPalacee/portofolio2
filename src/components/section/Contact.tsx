"use client";

import React, { useActionState, useState } from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Copy, Check, Github, Linkedin, Twitter } from "lucide-react";
import { sendEmail } from "@/lib/contact";
import { error } from "console";
import { useContactForm } from "@/lib/alert";

const Contact = () => {
const { formAction, isPending, state } = useContactForm();
  


  return (
    <Section id="contact" className="bg-neutral-950 relative overflow-hidden">
      
      {/* Background Glow (Opsional) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 pb-2"
          >
            Let`s Work Together
          </motion.h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Punya ide proyek menarik atau sekadar ingin menyapa? 
            Saya selalu terbuka untuk diskusi dan kolaborasi baru.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 max-w-6xl mx-auto">
          
          {/* --- KOLOM KIRI: INFO --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-white">Get in touch</h3>
            
    

            {/* Location */}
            <div className="flex items-center gap-4 p-4">
              <div className="p-3 rounded-lg bg-purple-500/20 text-purple-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Based in</p>
                <p className="text-white font-medium">Cirebon, Jawa Barat Indonesia</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-gray-400 mb-4">Connect with me</p>
              <div className="flex gap-4">
                {[Github, Linkedin, Twitter].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="https://github.com/indraaditya"
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- KOLOM KANAN: FORM --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <form action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Name</label>
                  <input 
                    name="name"
                    type="text" 
                    placeholder="User"
                    className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="user@example.com"
                    className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                  />
                  {state.errors?. subject && <span className="text-red-500 text-sm">{state.errors.subject}</span>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Subject</label>
                <input 
                name="subject"
                  type="text" 
                  placeholder="Project Discussion"
                  className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                />
                  {state.errors?. subject && <span className="text-red-500 text-sm">{state.errors.subject}</span>}
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Message</label>
                <textarea 
                name="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600 resize-none"
                ></textarea>
                   {state.errors?. subject && <span className="text-red-500 text-sm">{state.errors.subject}</span>}
              </div>


                {state.message && (
                    <p>{state.message}</p>
                )}

              <button type="submit" disabled={isPending} className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                {isPending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </Section>
  );
};

export default Contact;