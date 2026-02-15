import About from "@/components/section/About";
import Contact from "@/components/section/Contact";
import Experience from "@/components/section/Experience";
import Hero from "@/components/section/Hero";
import Projects from "@/components/section/Projects";
import Services from "@/components/section/Services";
import Skills from "@/components/section/Skill";
import Image from "next/image";

export default function Home() {
  return (
   <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between" id="home">
    <Hero />
    <About/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Services/>
    <Contact />
   </main>
  );
}
