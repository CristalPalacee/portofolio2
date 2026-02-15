import React from 'react'
import { cn } from '@/lib/utils'




const Section = ( { children, className, id, ...props}: { id?: string, children: React.ReactNode, className?: string} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
   <section className={cn("py-20 md:py-32 container mx-auto px-4 ", className)}
    {...props}
    id={id}>
    {children}
   </section>
  )
}

export default Section