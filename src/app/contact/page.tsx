"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
} from "@/utils/animations";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  type FormStatus = "idle" | "loading" | "success" | "error";

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="container max-w-7xl mx-auto py-20">
      <motion.h1 {...fadeInUp} className="text-4xl font-bold mb-20 text-center">
        Contect Me
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div {...slideInLeft} className="space-y-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-secondary md:w-2/3">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="space-y-4"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-4"
            >
              <FaEnvelope className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold ">Email</h3>
                <Link
                  href="mailto:junaidfarooq202@gmail.com"
                  className="text-secondary hover:text-primary"
                >
                  junaidfarooq.pk@gmail.com
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-4"
            >
              <FaPhone className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold ">Phone</h3>
                <Link
                  href="tel:+923001792770"
                  className="text-secondary hover:text-primary"
                >
                  +92 3001792770
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-4"
            >
              <FaMapMarkerAlt className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold ">Location</h3>
                <p className="text-secondary">Al Kabir Town Lahore, Pakistan</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          {...slideInRight}
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
        >
          <motion.form
            variants={fadeIn}
            initial="initial"
            animate="animate"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 placeholder:text-gray-400 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 placeholder:text-gray-400 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                id="message"
                placeholder="Enter your message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 placeholder:text-gray-400 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none"
              ></textarea>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full btn btn-primary"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-500 text-center"
              >
                Message sent successfully!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-center"
              >
                Failed to send message. Please try again.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
