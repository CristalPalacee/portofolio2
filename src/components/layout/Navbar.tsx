'use client'
import { AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'
import React from 'react'
import {motion} from 'framer-motion'
import { NAV_LINKS } from '@/lib/data'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { is } from 'zod/locales'


const Navbar = () => {

    const [hidden, setHidden] = React.useState<boolean>(false)
    const {scrollYProgress} = useScroll()
    const [isOpen, setIsOpen] = React.useState<boolean>(false)


    useMotionValueEvent(scrollYProgress, "change", (latest : number) => {
    const previous = scrollYProgress.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed  top-0 inset-x-0 z-50 flex justify-center pt-6 "
    >

      {/* Mobile Toggle Button */}
      {!isOpen && (
                    <motion.button 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="md:hidden pointer-events-auto px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-bold tracking-widest uppercase"
                        onClick={() => setIsOpen(true)}
                    >
                        Navbar
                    </motion.button>
                )}

      <div className={`glass  pointer-events-auto rounded-full px-6 py-3 hidden md:flex items-center gap-6 shadow-lg shadow-purple-700/30`}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
    
            className="text-sm font-medium text-white/70 hover:text-white transition-colors hover:scale-105 active:scale-95"
          >
            {link.name}
          </Link>
        ))}
      </div>


      <AnimatePresence>
        {isOpen && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={cn(
      "fixed z-[60]   border-1 border-purple-600/80 bg-purple-700/10 backdrop-blur-md flex gap-5 items-center justify-center py-4 px-3 shadow-md rounded-xl shadow-purple-700/30 transition-all duration-500 md:hidden pointer-events-auto",
      isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none")}>
        {/* Tombol Close di dalam Overlay */}
                       
          {NAV_LINKS.map((link, i) => (
            <motion.div
            key={link.name}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
                                >
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors hover:scale-105 active:scale-95"
            >
              {link.name}
            </Link>
            </motion.div>
          ))}
        </motion.div> 
        )}
    </AnimatePresence>
      </motion.nav>
  )
}

export default Navbar