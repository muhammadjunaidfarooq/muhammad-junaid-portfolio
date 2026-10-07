import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Eye, FolderGit2, Construction } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProjectModal } from './ProjectModal';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  link: string;
  status?: string;
  description?: string;
  tech?: string[];
  expected?: string;
  live?: string;
  github?: string;
  features?: string[];
  index: number;
  className?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const overlayVariants = {
  hidden: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

export const ProjectCard = ({
  title,
  category,
  image,
  link,
  status,
  description,
  tech,
  expected,
  live,
  github,
  features,
  index,
  className
}: ProjectCardProps) => {
  const [imgError, setImgError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const inProgress = status === "in-progress";

  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
      className={cn("group cursor-pointer", className)}
    >
      <a
        href={link || undefined}
        className="block"
        role="button"
        tabIndex={0}
        onClick={(e) => { e.preventDefault(); setModalOpen(true); }}
        onKeyDown={(e) => { if (e.key === "Enter") setModalOpen(true); }}
      >
        <div className="relative mb-4 rounded-xl overflow-hidden">
          <motion.div 
            variants={overlayVariants}
            className="absolute inset-0 bg-black/50 z-10"
          />
          
          <motion.div
            variants={overlayVariants}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              bg-[var(--jet)] text-[var(--orange-yellow-crayola)] p-4 rounded-xl z-20"
          >
            {inProgress ? <Construction size={24} /> : <Eye size={24} />}
          </motion.div>

          {inProgress && (
            <span className="absolute top-3 left-3 z-20 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg
              text-xs font-medium bg-[var(--jet)] text-[var(--orange-yellow-crayola)]">
              <Construction size={12} /> Under Development
            </span>
          )}
          
          <motion.div variants={imageVariants}>
            {imgError ? (
              <div
                className="w-full h-[200px] flex flex-col items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, var(--onyx), var(--eerie-black-1))' }}
              >
                <FolderGit2 className="text-[var(--orange-yellow-crayola)] opacity-50" size={40} />
                <span className="text-[var(--light-gray-70)] text-xs">Preview coming soon</span>
              </div>
            ) : (
              <Image
                src={image}
                alt={title}
                width={400}
                height={300}
                className="w-full h-[200px] object-cover"
                onError={() => setImgError(true)}
              />
            )}
          </motion.div>
        </div>
        
        <motion.div>
          <h3 className="text-[var(--white-2)] text-base mb-1 
            group-hover:text-[var(--orange-yellow-crayola)] transition-colors">
            {title}
          </h3>
          <p className="text-[var(--light-gray-70)] text-sm capitalize">
            {category}
          </p>
        </motion.div>
      </a>

      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        project={{ title, category, image, description, features, tech, live, github, expected, inProgress }}
      />
    </motion.div>
  );
};