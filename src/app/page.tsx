import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ResumeSection from "./components/ResumeSection";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <>
      <Hero />
      <ResumeSection/>
      <Projects />
      <ContactPage/>
    </>
  );
}
