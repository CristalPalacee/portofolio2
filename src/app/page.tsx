import About from "@/components/section/About";
import Contact from "@/components/section/Contact";
import Experience from "@/components/section/Experience";
import Hero from "@/components/section/Hero";
import WebPerformance from "@/components/section/Perfomance";
import Pricing from "@/components/section/Pricing";
import Projects from "@/components/section/Projects";
import Services from "@/components/section/Services";
import Skills from "@/components/section/Skill";
import Image from "next/image";

export default function Home() {
  return (
   <main className="flex min-h-screen w-full overflow-x-hidden flex-col items-center justify-between" id="home">
    <Hero />
    <section className="relative md:pt-10 lg:pt-15 w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[#030014] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] -z-10">
      </div>
    <About/>
    <Skills/>
    <Experience/>
    <Projects/> 
    <Pricing/>
    <Services/>
    <WebPerformance/>
    <Contact />
    </section>
   </main>
  );
}
