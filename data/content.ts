export interface Project {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  url: string;
  screenshot: string;
  wide?: boolean;
  bullets: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period?: string;
}

export interface AwardItem {
  title: string;
  eventOrDetail: string;
}

export interface CertificationItem {
  title: string;
  detail?: string;
}

export interface ToolCategory {
  category: string;
  items: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  username: string;
}

export const portfolioContent = {
  personal: {
    name: "Justin Lyoid T. Frias",
    displayName: "JUSTIN FRIAS",
    firstName: "JUSTIN",
    lastName: "FRIAS",
    role: "FRONTEND DEVELOPER",
    subRole: "REAL-TIME WEB APPS",
    location: "Antipolo City, Philippines",
    photo: "/justin-cutout.png",
    email: "justinfrias951@gmail.com",
    phoneDisplay: "0993-245-5116",
    phoneTel: "+639932455116",
    footerText: "Bagong Nayon, Antipolo City · © 2026 Justin Lyoid T. Frias",
  },
  hero: {
    words: ["DESIGN.", "BUILD.", "SHIP."],
    ctaWork: "▶ VIEW WORK",
    ctaContact: "COLLABORATE ↗",
  },
  navigation: [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "WORK", href: "#work" },
    { label: "TOOLS", href: "#tools" },
  ],
  about: {
    title: "About",
    bio: "I'm a frontend developer who specializes in React, Next.js and TypeScript. I build responsive, animated interfaces with Tailwind CSS, shadcn/ui and Framer Motion, and I know enough Python, PostgreSQL and MySQL to work with the backend. My Computer Engineering background in hardware and embedded systems shapes how I solve problems, and I use AI-assisted workflows to ship features quickly without lowering code quality.",
    education: [
      {
        institution: "STI College Ortigas-Cainta, 2022 to present",
        degree: "BS in Computer Engineering",
      },
      {
        institution: "TeksSquad Institute of Technology, 2016 to 2018",
        degree: "Senior High School, TVL: ICT Track",
      },
    ] as EducationItem[],
    awards: [
      {
        title: "1st Place, Line-Following Robot",
        eventOrDetail: "Tech Fest 2025",
      },
      {
        title: "Arduino-based automated peanut fryer",
        eventOrDetail:
          "Air cooling, measuring and grinding stages for peanut butter production",
      },
    ] as AwardItem[],
    certifications: [
      {
        title: "TESDA NC II",
        detail: "Computer Systems Servicing",
      },
      {
        title: "Java Fundamentals",
      },
      {
        title: "Basic VB 6.0 Programming",
        detail: "TVL: ICT Track",
      },
    ] as CertificationItem[],
  },
  work: {
    title: "Selected work",
    projects: [
      {
        id: "worklane",
        tag: "Beta, in company use",
        title: "Worklane",
        subtitle: "Smart project management platform",
        url: "https://worklane-five.vercel.app/",
        screenshot: "/screens/worklane.png",
        bullets: [
          "Kanban board for organizing, assigning and tracking tasks across workflow stages.",
          "Roadmap module with an interactive Gantt chart for timelines and progress.",
          "Real-time sync across every feature so changes appear instantly for all users.",
          "Tested by an active company team, with features shaped by their feedback.",
        ],
      },
      {
        id: "inky",
        tag: "Shipped",
        title: "Inky",
        subtitle: "Real-time document signing app (automated e-signatures)",
        url: "https://inky-tan.vercel.app/",
        screenshot: "/screens/inky.png",
        bullets: [
          "Share a personal inbox link so others can submit files that need your signature.",
          "Recipients sign the uploaded document and it returns to the sender automatically.",
          "Live status updates show both sides every upload, signature and return.",
        ],
      },
      {
        id: "resiboss",
        tag: "Live",
        title: "Resiboss 2.0",
        subtitle: "Personal spending intelligence platform",
        url: "https://resiboss.vercel.app/",
        screenshot: "/screens/resiboss.png",
        wide: true,
        bullets: [
          "Turns every receipt into smarter spending decisions.",
          "AI purchase memory keeps track of what you buy.",
          "Price history shows how prices change over time.",
        ],
      },
    ] as Project[],
  },
  tools: {
    title: "Tools",
    groups: [
      {
        category: "Frontend",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Vite",
          "Tailwind CSS",
          "shadcn/ui",
          "Framer Motion",
          "Zustand",
        ],
      },
      {
        category: "Mobile",
        items: ["React Native", "Flutter", "Swift", "Android Studio"],
      },
      {
        category: "Backend and data",
        items: ["Python", "PostgreSQL", "MySQL"],
      },
      {
        category: "Dev tools and AI",
        items: [
          "VS Code",
          "Cursor",
          "Google Antigravity",
          "Claude Code",
          "Claude.ai",
          "OpenCode",
        ],
      },
      {
        category: "Engineering",
        items: [
          "Real-time apps",
          "Responsive UI",
          "State management",
          "Hardware troubleshooting",
          "Arduino",
        ],
      },
    ] as ToolCategory[],
  },
  contact: {
    title: "Let's work together",
    text: "Have a project or a role in mind? Send me an email or give me a call.",
    email: "justinfrias951@gmail.com",
    phone: "0993-245-5116",
    tel: "tel:+639932455116",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/JustinFrias",
        username: "JustinFrias",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/Justin1031",
        username: "Justin Frias",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/frias_tintin/",
        username: "@frias_tintin",
      },
      {
        name: "Twitter / X",
        url: "https://x.com/Tinn_Ready",
        username: "@Tinn_Ready",
      },
    ] as SocialLink[],
  },
};
