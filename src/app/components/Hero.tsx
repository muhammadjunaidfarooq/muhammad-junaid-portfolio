"use client";

import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "@/utils/animations";

const Hero = () => {
  return (<>
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            {...scaleIn}
            transition={{ delay: 0.2 }}
            className="mb-4 flex flex-col items-center"
          >
            <Image
              src="/profile.avif"
              alt="profile picture"
              width={100}
              height={100}
              className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary"
            />
          </motion.div>

          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Hi, I'm <span className="text-primary">Muhammad Junaid</span>
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Software Engineering Graduate (‘26) | MERN & Next.js Developer |
            React, Node.js, MongoDB, Express.js | JavaScript, Python | Exploring
            AI Integration
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.5 }}
            className="flex justify-center space-x-6 mb-8"
          >
            <motion.a
              href="https://github.com/muhammadjunaidfarooq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/muhammadjunaidfarooq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <FaLinkedin />
            </motion.a>

          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-gray-500 inline-block w-full md:w-auto text-white hover:text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Contect Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    </>
  );
};

export default Hero;
