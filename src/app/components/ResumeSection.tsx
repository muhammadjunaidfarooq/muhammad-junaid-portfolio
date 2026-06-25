"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FaDownload } from "react-icons/fa";


const Document = dynamic(
  () => import("react-pdf").then((mod) => mod.Document),
  { ssr: false }
);

const Page = dynamic(
  () => import("react-pdf").then((mod) => mod.Page),
  { ssr: false }
);

const ResumeSection = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState(900);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    import("react-pdf").then(({ pdfjs }) => {
      pdfjs.GlobalWorkerOptions.workerSrc =
        "https://cdn.jsdelivr.net/npm/pdfjs-dist@5.3.31/build/pdf.worker.min.mjs";
    });

    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setPageWidth(window.innerWidth - 32);
      } else if (window.innerWidth < 1024) {
        setPageWidth(window.innerWidth - 80);
      } else {
        setPageWidth(900);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const onLoadSuccess = ({
    numPages,
  }: {
    numPages: number;
  }) => {
    setNumPages(numPages);
  };

  const onLoadError = (error: Error) => {
    setError(error.message);
  };

  return (
    <section id="resume" className="py-2">
  <div className="container max-w-7xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        My <span className="text-primary">Resume</span>
      </h2>

      <p className="text-gray-600 dark:text-gray-400 text-lg">
        View my professional qualifications and experience.
      </p>
    </div>

    <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl">
      <iframe
        src="/MuhammadJunaidFarooqResume.pdf"
        className="w-full h-225"
        title="Resume Preview"
      />
    </div>

    <div className="flex justify-center mt-8">
      <a
        href="/MuhammadJunaidFarooqResume.pdf"
        download
        className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-all"
      >
        <FaDownload />
        Download Resume
      </a>
    </div>
  </div>
</section>
  );
};

export default ResumeSection;