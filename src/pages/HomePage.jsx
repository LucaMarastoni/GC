import About from "../components/About.jsx";
import Benefits from "../components/Benefits.jsx";
import Contacts from "../components/Contacts.jsx";
import FinalCTA from "../components/FinalCTA.jsx";
import Hero from "../components/Hero.jsx";
import IntroSplitSection from "../components/IntroSplitSection.jsx";
import Projects from "../components/Projects.jsx";
import Reviews from "../components/Reviews.jsx";
import ServiceArea from "../components/ServiceArea.jsx";
import Services from "../components/Services.jsx";
import WorkProcess from "../components/WorkProcess.jsx";
import { useReveal } from "../hooks/useReveal.js";

function HomePage() {
  useReveal();

  return (
    <>
      <Hero />
      <IntroSplitSection />
      <Reviews />
      <Services />
      <About />
      <Benefits />
      <Projects />
      <WorkProcess />
      <ServiceArea />
      <FinalCTA />
      <Contacts />
    </>
  );
}

export default HomePage;
