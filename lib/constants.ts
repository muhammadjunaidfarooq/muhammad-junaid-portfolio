import { TimelineItem } from "@/types";

export const ABOUT_TEXT = [
  "I'm Muhammad Junaid Farooq, a Software Engineering graduate (CGPA 3.8/4.0) from The Islamia University of Bahawalpur. I build full-stack web apps with the MERN stack and Next.js, and I'm now growing into AI/ML engineering as an AI/ML Trainee at NETSOL Institute of Artificial Intelligence (NIAI).",
  "I've built and deployed real projects: a grocery delivery platform with live rider tracking (Socket.IO), a LinkedIn-style social platform, and a machine learning model that predicts insurance costs, served through a FastAPI API. I like taking an idea from the database all the way to a live product.",
  "I'm currently learning Deep Learning and Computer Vision, and building Khamosh, an offline tool that removes private information from Urdu-English audio. I'm open to AI/ML Engineering, Software Engineering and Full-Stack roles."
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
    text: "Building and deploying ML models with Python, Scikit-learn and FastAPI. Currently learning Deep Learning and Computer Vision."
  },
  {
    icon: "/images/icon-design.svg",
    title: "Full-Stack Delivery",
    text: "End-to-end product builds — from database design to deployment on Vercel and Render."
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
      "• Built and deployed a full-stack social networking platform (Next.js, Node.js, Express.js, MongoDB): frontend on Vercel, backend on Render.",
      "• Implemented JWT authentication/authorization, RESTful APIs, Redux Toolkit state management, and Git feature-branch workflows with Conventional Commits."
    ]
  }
];

export const TECH_STACK: TimelineItem[] = [
  {
    title: "AI / Machine Learning",
    description: [
      "• Python, Scikit-learn, Pandas, NumPy, Matplotlib",
      "• Exploratory Data Analysis, Linear Regression"
    ]
  },
  {
    title: "Back-end",
    description: [
      "• Node.js, Express.js, FastAPI, REST APIs",
      "• Socket.IO, JWT, Auth.js, MVC"
    ]
  },
  {
    title: "Front-end",
    description: [
      "• React.js, Next.js, TypeScript, JavaScript",
      "• Redux Toolkit, Tailwind CSS"
    ]
  },
  {
    title: "Database",
    description: [
      "• MongoDB (Mongoose, Atlas)"
    ]
  },
  {
    title: "Tools & Deployment",
    description: [
      "• Git, GitHub, Google Colab, Jupyter, VS Code",
      "• Vercel, Render, Cloudinary, Stripe, Mapbox"
    ]
  },
  {
    title: "Currently Learning",
    description: [
      "• Deep Learning, PyTorch, Computer Vision, Speech Recognition"
    ]
  }
];

export const CERTIFICATIONS: TimelineItem[] = [
  {
    title: "Web Development Internship & Training Program",
    role: "Arch Technologies",
    period: "Jan 2026"
  },
  {
    title: "Sigma 6.0 – Full Stack Web Development",
    role: "Apna College",
    period: "Oct 2025"
  },
  {
    title: "Aspire Leaders Program",
    role: "Aspire Institute",
    period: "Oct 2025"
  },
  {
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    role: "Udemy",
    period: "Feb 2024"
  }
];

export const HONORS: TimelineItem[] = [
  {
    title: "Prime Minister's Youth Laptop Scheme",
    role: "Government of Pakistan",
    period: "Mar 2025",
    description: "Awarded on merit for academic performance at The Islamia University of Bahawalpur."
  }
];

export const PORTFOLIO_ITEMS = [
  {
    title: "Medical Insurance Cost Predictor",
    category: "Machine Learning",
    image: "/projects/insurance.png",
    link: "https://medical-insurance-charge-predictor.onrender.com/",
    live: "https://medical-insurance-charge-predictor.onrender.com/",
    github: "https://github.com/muhammadjunaidfarooq/medical--insurance-charge-predictor",
    description: "Predicts yearly medical insurance charges from a person's age, BMI, smoking status and region.",
    features: [
      "Linear regression trained on 1,337 records after EDA and feature encoding",
      "FastAPI REST API that serves predictions through a web form",
      "Compares each estimate with dataset averages"
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "FastAPI", "Render"]
  },
  {
    title: "OmniMart – Grocery Delivery Platform",
    category: "Software Engineering",
    image: "/projects/grocery.png",
    link: "https://grocery-delivery-app-omega-lilac.vercel.app/",
    live: "https://grocery-delivery-app-omega-lilac.vercel.app/",
    github: "https://github.com/muhammadjunaidfarooq/grocery-delivery-app",
    description: "A full grocery delivery system with customer, admin and rider roles.",
    features: [
      "Live GPS rider tracking and order updates with Socket.IO",
      "Nearest-rider dispatch using MongoDB geospatial queries",
      "Stripe Checkout plus a Cash-on-Delivery confirmation flow"
    ],
    tech: ["Next.js", "TypeScript", "MongoDB", "Socket.IO", "Express", "Stripe"]
  },
  {
    title: "Professional Network – LinkedIn-Style Social Platform",
    category: "Software Engineering",
    image: "/projects/network.png",
    link: "https://fullstack-professional-network.vercel.app/",
    live: "https://fullstack-professional-network.vercel.app/",
    github: "https://github.com/muhammadjunaidfarooq/fullstack-professional-network",
    description: "A LinkedIn-style platform built during my Arch Technologies internship.",
    features: [
      "Profiles with PDF resume export",
      "Search people by name, role or skill, and connect",
      "Posts with photos, likes and comments; JWT authentication"
    ],
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "JWT"]
  },
  {
    title: "WanderLust – Geospatial Rental Platform",
    category: "Software Engineering",
    image: "/projects/wanderlust.png",
    link: "https://online-rental-marketplace-geospatial.onrender.com/listings",
    live: "https://online-rental-marketplace-geospatial.onrender.com/listings",
    github: "https://github.com/muhammadjunaidfarooq/wanderlust-geospatial-rental-platform",
    description: "A rental marketplace to list, review and discover properties on a map.",
    features: [
      "10+ REST APIs for listings, auth, reviews and image uploads",
      "Mapbox location search",
      "MVC backend structure"
    ],
    tech: ["Node.js", "Express", "MongoDB", "Mapbox", "Cloudinary"]
  },
  {
    title: "Personal Portfolio Website",
    category: "Software Engineering",
    image: "/projects/portfolio.png",
    link: "https://muhammadjunaidfarooq.vercel.app/",
    live: "https://muhammadjunaidfarooq.vercel.app/",
    github: "https://github.com/muhammadjunaidfarooq/muhammad-junaid-portfolio",
    description: "This site, built to show my projects and experience.",
    features: [
      "Animated pages with Framer Motion",
      "Contact form that sends email through Resend",
      "Fully responsive design"
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend"]
  },
  {
    title: "Khamosh – Offline PII Redaction Tool",
    category: "NLP & Generative AI",
    image: "/projects/khamosh.png",
    link: "",
    status: "in-progress",
    description: "Khamosh is an offline tool that protects privacy in Urdu-English audio and video. It finds spoken CNIC and phone numbers, shows their exact timestamps, and mutes or beeps them out. Everything runs locally, so private recordings never leave the computer.",
    tech: ["Python", "faster-whisper", "FFmpeg", "pydub", "Gradio"],
    expected: "November 2026"
  }
];

export const SKILLS = [
  { name: "Frontend Development", percentage: 85 },
  { name: "Backend Development", percentage: 80 },
  { name: "AI/ML & Data", percentage: 65 },
  { name: "Full-Stack Delivery", percentage: 80 }
];
