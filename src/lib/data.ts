



export interface NavType {
    name: string;
    href: string;
}

export interface ProfileType{
    name: string;
    title:string
    bio: string;
    socials: {
      github: string;
      linkedin: string;
      email: string;
    };
}


export interface ProjectType {
  title: string;
  desc: string;
  tags: string[];
  link: string;
  github: string;
}


export interface ExperienceType {
  company: string;
  role: string;
  period: string;
  desc: string;
}

export const NAV_LINKS: NavType[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const PROFILE: ProfileType = {
  name: "Alex Dev",
  title: "Frontend Engineer",
  bio: "Specializing in building exceptional digital experiences using modern web technologies. Obsessed with performance and pixel-perfect UI.",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "hello@example.com"
  }
};


export const PROJECTS: ProjectType[] = [
  {
    title: "E-Commerce Dashboard",
    desc: "A high-performance analytics dashboard with real-time data visualization.",
    tags: ["Next.js", "TypeScript", "Recharts", "Supabase"],
    link: "#",
    github: "#"
  },
  {
    title: "SaaS Landing Page",
    desc: "Marketing site with complex scroll animations and 99/100 lighthouse score.",
    tags: ["React", "Framer Motion", "Tailwind"],
    link: "#",
    github: "#"
  }
];

export const EXPERIENCE: ExperienceType[] = [
  {
    company: "Tech Corp",
    role: "Junior Frontend Dev",
    period: "2022 - Present",
    desc: "Leading the migration to Next.js App Router and implementing a design system."
  },
  {
    company: "Creative Agency",
    role: "Web Developer HTML",
    period: "2020 - 2022",
    desc: "Developed award-winning websites for Fortune 500 clients."
  }
];


// lib/data.ts

interface SkillCategory {
  category: string;
  items: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend Core",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
  },
  {
    category: "Backend & Services",
    items: ["Node.js", "Mysql", "PostgreSQL",]
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "Figma", "Jest/Vitest", "CI/CD", "Vercel"]
  }
];