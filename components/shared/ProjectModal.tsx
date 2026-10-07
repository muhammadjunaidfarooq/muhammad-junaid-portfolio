// components/shared/ProjectModal.tsx
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, Construction, ExternalLink, Github, CheckCircle2 } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    image?: string;
    description?: string;
    features?: string[];
    tech?: string[];
    live?: string;
    github?: string;
    expected?: string;
    inProgress?: boolean;
  };
}

const buttonClass =
  "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-[var(--onyx)] " +
  "text-[var(--orange-yellow-crayola)] hover:bg-[var(--jet)] transition-colors";

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [mounted, setMounted] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => setMounted(true), []);

  // Close with the Escape key and stop the page scrolling behind the popup
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    // Hide the scrollbar but keep its width, so the page doesn't jump
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const oldOverflow = document.body.style.overflow;
    const oldPadding = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = oldOverflow;
      document.body.style.paddingRight = oldPadding;
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  const showImage = project.image && !imgError && !project.inProgress;

  // Rendered into <body> so the card's hover animation can't affect its position.
  // AnimatePresence keeps the popup on screen until its closing animation finishes.
  return createPortal(
    <AnimatePresence>
      {isOpen && (
    <div className="modal-container active">
      <motion.div
        className="fixed inset-0 z-[1]"
        style={{ background: "hsl(0, 0%, 5%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        onClick={onClose}
      />

      <motion.section
        className="testimonials-modal w-full max-w-[600px] max-h-[90vh] overflow-y-auto"
        style={{ transition: "none" }}
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        <button className="modal-close-btn z-10" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        {showImage && (
          <div className="rounded-xl overflow-hidden mb-4 mt-10">
            <Image
              src={project.image as string}
              alt={project.title}
              width={1200}
              height={700}
              className="w-full h-[220px] object-cover object-top"
              onError={() => setImgError(true)}
            />
          </div>
        )}

        <div className={`modal-content ${showImage ? "" : "pr-10"}`}>
          {project.inProgress && (
            <span
              className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-lg text-xs font-medium
                bg-[var(--onyx)] text-[var(--orange-yellow-crayola)]"
            >
              <Construction size={14} /> Under Development
            </span>
          )}

          <h4 className="h3 modal-title">{project.title}</h4>
          <h4 className="exp-role modal-title mb-3">{project.category}</h4>

          {project.description && (
            <div className="mb-4">
              <p>{project.description}</p>
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <ul className="mb-4 space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-[var(--light-gray)] font-light">
                  <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-[var(--orange-yellow-crayola)]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          )}

          {project.tech && project.tech.length > 0 && (
            <ul className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="px-2 py-0.5 rounded-md text-[11px] bg-[var(--onyx)] text-[var(--light-gray)]"
                >
                  {t}
                </li>
              ))}
            </ul>
          )}

          {(project.live || project.github) && (
            <div className="flex flex-wrap gap-3">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                  <Github size={16} /> GitHub
                </a>
              )}
            </div>
          )}

          {project.expected && (
            <time className="block italic">Expected completion: {project.expected}</time>
          )}
        </div>
      </motion.section>
    </div>
      )}
    </AnimatePresence>,
    document.body
  );
};
