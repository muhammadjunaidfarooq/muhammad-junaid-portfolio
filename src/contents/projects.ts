import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    description:"A personal portfolio website built to showcase my projects, skills, and provide an easy way to connect with me.",
    technologies: ["Gatsby", "GraphQL", "Contentful"],
    githubLink: "https://github.com/muhammadjunaidfarooq/my-portfolio-website",
    demoLink: "https://muhammadjunaid-swe.vercel.app/",
    image: "/projects/portflio.png",
  },
  {
    title: "Online Rental Booking Platform",
    description:
      "Developed a full-stack rental booking platform with 10+ RESTful APIs, Mapbox maps, Cloudinary image uploads, and secure authentication, supporting 50k+ property records with 99.9% uptime on Render + MongoDB Atlas.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Passport.js",
      "Bootstrap",
      "Cloudinary",
      "Mapbox",
      "Render",
    ],
    githubLink:
      "https://github.com/muhammadjunaidfarooq/Online-Rental-Booking-Platform_airbnb_clone",
    demoLink: "https://rental-booking-platform-12hv.onrender.com/listings",
    image: "/projects/e-commerce-website.png",
  },
  {
    title: "Netflix Landing Page",
    description:
      "Responsive clone of Netflix Pakistan's landing page with 95% design accuracy, optimized for desktop and mobile, and deployed on Render for global access.",
    technologies: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Font Awesome",
      "Google Fonts",
      "Render",
    ],
    githubLink: "https://github.com/muhammadjunaidfarooq/netflix-ui-clone",
    demoLink: "https://netflix-ui-clone-61hu.onrender.com/",
    image: "/projects/netflix-landing-page.png",
  },
  {
    title: "To-Do Application",
    description:
      "Developed a To-Do App using JavaScript, HTML, and CSS with dynamic DOM updates, efficient event handling, and support for 500+ tasks.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "DOM Manipulation",
      "Event Handling",
    ],
    githubLink: "https://github.com/muhammadjunaidfarooq/Simple-Todo-App",
    demoLink: "https://simple-todo-app-t0gl.onrender.com",
    image: "/projects/todo-app.png",
  },
  // {
  //   title: 'Weather App',
  //   description: 'A weather application that provides real-time weather updates.',
  //   technologies: ['React', 'OpenWeatherMap API'],
  //   githubLink: 'https://github.com',
  //   demoLink: 'https://demo.com',
  //   image: '/projects/weather-app.png',
  // },
  // {
  //   title: 'Chat Application',
  //   description: 'A real-time chat application using WebSocket technology.',
  //   technologies: ['React', 'Node.js', 'Socket.io'],
  //   githubLink: 'https://github.com',
  //   demoLink: 'https://demo.com',
  //   image: '/projects/chat-app.png',
  // },
  // {
  //   title: 'Recipe Finder',
  //   description: 'A recipe search application using the Edamam API.',
  //   technologies: ['React', 'Edamam API'],
  //   githubLink: 'https://github.com',
  //   demoLink: 'https://demo.com',
  //   image: '/projects/recipe-finder.png',
  // },
  // {
  //   title: 'Expense Tracker',
  //   description: 'A personal finance tracker to manage expenses and income.',
  //   technologies: ['React', 'Firebase'],
  //   githubLink: 'https://github.com',
  //   demoLink: 'https://demo.com',
  //   image: '/projects/expense-tracker.webp',
  // }
];
