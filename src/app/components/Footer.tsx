import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <Link
              href="/"
              className="flex items-center justify-center md:justify-start gap-2 text-xl font-bold text-primary"
            >
              <Image
                src="/static/images/portfolio-brand-icon.png"
                alt="Muhammad Junaid Farooq"
                width={36}
                height={36}
                priority
              />
              <span>Muhammad Junaid Farooq</span>
            </Link>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6 mr-3">
            <Link
              href="https://github.com/muhammadjunaidfarooq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <FaGithub />
            </Link>

            <Link
              href="https://www.linkedin.com/in/muhammadjunaidfarooq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
