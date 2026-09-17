import { TimelineItem } from "@/types";

export const ABOUT_TEXT = [
  "I'm Muhammad Junaid Farooq, a Software Engineering graduate (CGPA 3.8/4.0) with a strong foundation in full-stack development (MERN stack + Next.js), now expanding into AI/ML. I'm currently an AI/ML Trainee at NETSOL Institute of Artificial Intelligence (NIAI), focused on Machine Learning, Deep Learning, Generative AI, Computer Vision, and MLOps.",
  "My expertise spans React, Next.js, Node.js, Express.js, and MongoDB, with TypeScript and JavaScript as my primary languages. I also work with Python for AI/ML development, applying frameworks and data-driven approaches to build practical machine learning solutions.",
  "I'm open to AI/ML Engineering, AI Engineering, Software Engineering, and Full-Stack roles, and I enjoy building complete products end-to-end — from backend APIs and databases to polished, responsive interfaces."
];

export const SERVICES = [
  {
    icon: "/images/icon-dev.svg",
    title: "Frontend development",
    text: "Responsive, accessible interfaces built with React, Next.js, and Tailwind CSS."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Backend development",
    text: "RESTful APIs and services with Node.js, Express.js, and MongoDB."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Machine Learning",
    text: "Applying Python, Deep Learning, and Computer Vision to data-driven problems."
  },
  {
    icon: "/images/icon-design.svg",
    title: "Full-Stack Delivery",
    text: "End-to-end product builds — from database design to deployment on Vercel."
  }
];

export const EDUCATION: TimelineItem[] = [
  {
    title: "The Islamia University of Bahawalpur",
    period: "Aug 2022 – Jun 2026 | CGPA - 3.8/4.0",
    description: [
      "BS Software Engineering"
    ]
  },
  {
    title: "Punjab Group of Colleges",
    period: "Mar 2020 – Jun 2022",
    description: "FSc Pre-Engineering"
  }
];

export const PROFESSIONAL_EXPERIENCE: TimelineItem[] = [
  {
    title: "NETSOL Technologies Inc.",
    role: "AI/ML Trainee, NETSOL Institute of Artificial Intelligence (NIAI)",
    period: "Sep 2026 - Present",
    description: [
      "• Developing hands-on expertise in ML, Deep Learning, Generative AI, Computer Vision, and MLOps through structured training and practical projects.",
      "• Applying Python and AI/ML frameworks to data-driven problems and building practical ML solutions."
    ]
  },
  {
    title: "Arch Technologies",
    role: "Web Development Intern",
    period: "Dec 2025 - Jan 2026",
    description: [
      "• Built a full-stack social networking platform using React, Node.js, Express.js, and MongoDB.",
      "• Implemented JWT authentication/authorization, RESTful APIs, Redux Toolkit state management, and Git feature-branch workflows with Conventional Commits."
    ]
  }
];

export const TECH_STACK: TimelineItem[] = [
  {
    title: "Front-end",
    description: [
      "• JavaScript, React.js, Next.js, Redux Toolkit, React Query",
      "• Tailwind CSS"
    ]
  },
  {
    title: "Back-end",
    description: [
      "• Node.js, Express.js, REST APIs, JWT, MVC",
      "• Database (MongoDB, MySQL, SQL)"
    ]
  },
  {
    title: "Artificial Intelligence",
    description: [
      "• Python, NumPy, Pandas, Matplotlib",
      "• Machine Learning, Deep Learning, Generative AI, Computer Vision, MLOps"
    ]
  },
  {
    title: "Tools & Cloud",
    description: [
      "• Git, GitHub, Google Colab, VS Code",
      "• Vercel, Render, Cloudinary, Mapbox API"
    ]
  }
];

export const CERTIFICATIONS: TimelineItem[] = [
  {
    title: "Python Programming Bootcamp",
    role: "Udemy",
    period: "Feb 2024"
  },
  {
    title: "Full Stack Web Developer (MERN Stack)",
    role: "Apna College",
    period: "Oct 2025"
  },
  {
    title: "Aspire Leaders Program",
    period: ""
  }
];

export const PORTFOLIO_ITEMS = [
  {
    title: "WanderLust — Geospatial Rental Platform",
    category: "Software Engineering",
    image: "/images/wanderlust.png",
    link: "https://github.com/muhammadjunaidfarooq/wanderlust-geospatial-rental-platform"
  },
  {
    title: "Personal Portfolio Website",
    category: "Software Engineering",
    image: "/images/portfolio-site.png",
    link: "https://github.com/muhammadjunaidfarooq/muhammad-junaid-portfolio"
  }
];

export const SKILLS = [
  { name: "Frontend Development", percentage: 85 },
  { name: "Backend Development", percentage: 80 },
  { name: "AI/ML & Data", percentage: 65 },
  { name: "Full-Stack Delivery", percentage: 80 }
];
