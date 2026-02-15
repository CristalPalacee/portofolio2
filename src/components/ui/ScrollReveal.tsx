'use client'

import { cn } from '@/lib/utils'
import { motion, Transition, Variants } from 'framer-motion'
import { de } from 'zod/locales'

type TransitionType = 'spring' | 'tween' | 'easeIn' | 'easeOut' | 'bounce' | 'stiff'
type Direction = 'up' | 'down' | 'left' | 'right'
interface ScrollRevealProps {
    children: React.ReactNode
    direction?: Direction
    delay?: number
    duration?: number
    distance?: number
    customVariants?: Variants;
    amount?: number | "some" | "all";
     margin?: string;
     once?: boolean;
     className?: string
     transitionType?: TransitionType
}
export const ScrollReveal = ({ children, direction='up', delay=0.25, duration=0.5, distance=75, amount = 0.1, margin = "0px", once = false, transitionType="tween",  className }: ScrollRevealProps) => {

    const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

 const transitions: Record<TransitionType, Transition> = {
    easeIn: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
    easeOut: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
    tween: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
    spring: { type: "spring", damping: 20, stiffness: 100, delay },
    bounce: { type: "spring", bounce: 0.6, duration: 0.8, delay },
    stiff: { type: "spring", stiffness: 500, damping: 30, delay }
  };

  

  const { x, y } = directions[direction];

    return (
      <div className={cn("relative  w-full", className)}>
      <motion.div
        custom={delay}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin , amount}}
        transition={{ 
            duration, 
            delay, 
            ease: [0.25, 0.1, 0.25, 1] // Custom cubic-bezier untuk gerakan lebih organik
        }}
         variants={{
        hidden: { 
          opacity: 0, 
          x, 
          y,
          filter: "blur(10px)", // Opsional: efek blur saat keluar
          transition: { duration: 0.3 } 
        },
        visible: { 
          opacity: 1, 
          x: 0, 
          y: 0,
          filter: "blur(0px)",
          transition: transitions[transitionType || "tween"]
        },
      }}
      >
        {children}
      </motion.div>
    </div>
    )
}