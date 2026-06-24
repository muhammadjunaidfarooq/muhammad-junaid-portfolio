"use client";

import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animations";

const About = () => {
  return (
    <div className="container max-w-7xl mx-auto py-10">
      <motion.h1
        {...fadeInDown}
        className="text-4xl font-bold mb-8 text-center"
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section {...fadeInUp} className="mb-10">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          Software Engineering graduate with a 3.7 CGPA and practical experience
          developing full-stack web applications using the MERN stack and
          Next.js. Skilled in designing responsive user interfaces, building
          RESTful APIs, integrating third-party services, and deploying scalable
          web solutions.
          <br />
          Passionate about creating high-quality digital experiences, learning
          new technologies, and solving real-world problems through software.
          Currently seeking opportunities to contribute as a Software Engineer,
          Full-Stack Developer, MERN Stack Developer, or Next.js Developer.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.2 }} className="mb-16">
        <motion.h2 {...fadeInUp} className="section-title">
          Skills
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            variants={fadeInUp}
            {...cardHover}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React.js / Next.js</li>
              <li>JavaScript / TypeScript</li>
              <li>Redux Toolkit / React Query</li>
              <li>Tailwind CSS / Material UI</li>
              <li>HTML5 / CSS3 / Bootstrap</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            {...cardHover}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend & Database</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js / Express.js</li>
              <li>RESTful APIs</li>
              <li>JWT Authentication</li>
              <li>MongoDB</li> <li>MySQL</li>
            </ul>
          </motion.div>

          <motion.div
            {...cardHover}
            variants={fadeInUp}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools, Cloud & APIs</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Vercel / Render</li>
              <li>Cloudinary</li>
              <li>Mapbox API</li>
              <li>Python</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.4 }} className="mb-16">
        <motion.h2 {...fadeInUp} className="section-title">
          Experiences
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-3xl mx-auto space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">
              {" "}
              Web Development Intern{" "}
            </h3>{" "}
            <p className="text-primary mb-2">
              {" "}
              Arch Technologies (Remote) • Dec 2025 – Jan 2026{" "}
            </p>{" "}
            <ul className="text-secondary space-y-2 list-disc list-inside">
              {" "}
              <li>
                {" "}
                Engineered a full-stack social networking platform using React,
                Node.js, Express.js, and MongoDB.{" "}
              </li>{" "}
              <li>
                {" "}
                Implemented JWT-based authentication and authorization for
                secure access control.{" "}
              </li>{" "}
              <li>
                {" "}
                Managed application state with Redux Toolkit to improve UI
                responsiveness and maintainability.{" "}
              </li>{" "}
              <li>
                {" "}
                Built a dynamic social feed system leveraging MongoDB
                .populate() for efficient relational data retrieval.{" "}
              </li>{" "}
              <li>
                {" "}
                Applied Git feature-branching workflows and Conventional Commits
                to maintain a scalable codebase.{" "}
              </li>{" "}
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section {...fadeIn} className="mb-16">
        <motion.h2 {...fadeInUp} className="section-title">
          Education
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-3xl mx-auto space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">
              {" "}
              Bachelor of Science in Software Engineering{" "}
            </h3>{" "}
            <p className="text-primary mb-2">
              {" "}
              The Islamia University of Bahawalpur (IUB) • 2022 – 2026{" "}
            </p>{" "}
            <p className="text-secondary">
              {" "}
              Graduated with a{" "}
              <span className="inline-block px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                CGPA: 3.7 / 4.0
              </span>
              . Focused on Full-Stack Web Development using the MERN Stack and
              Next.js, with coursework in Database Systems, Software
              Engineering, Web Development, Operating Systems, and Computer
              Networks.{" "}
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;
