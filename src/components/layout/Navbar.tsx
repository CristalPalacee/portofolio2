'use client'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import React from 'react'
import {motion} from 'framer-motion'
import { NAV_LINKS } from '@/lib/data'
import Link from 'next/link'


const Navbar = () => {

    const [hidden, setHidden] = React.useState<boolean>(false)
    const {scrollYProgress} = useScroll()

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
      className="fixed top-0 inset-x-0 z-50 flex justify-center pt-6 pointer-events-none"
    >
      <div className="glass pointer-events-auto rounded-full px-6 py-3 flex items-center gap-6 shadow-xl shadow-black/20">
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
    </motion.nav>
  )
}

export default Navbar