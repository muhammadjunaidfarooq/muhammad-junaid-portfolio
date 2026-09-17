"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ABOUT_TEXT, SERVICES } from '@/lib/constants';

export default function About() {
  return (
    <motion.article 
      className="about active" 
      data-page="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="h2 article-title">About me</h2>
      </motion.header>

      <motion.section 
        className="about-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {ABOUT_TEXT.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </motion.section>

      <motion.section 
        className="service"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="h3 service-title font-bold">{"What i'm doing"}</h3>

        <ul className="service-list">
          {SERVICES.map((service, index) => (
            <motion.li 
              key={index} 
              className="service-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="service-icon-box">
                <Image src={service.icon} alt={service.title} width={60} height={32} />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </motion.article>
  );
}