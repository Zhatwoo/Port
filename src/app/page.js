import Hero from "./components/components/Hero";
import AboutMe from "./components/components/AboutMe";
import EngineeringProjects from "./components/components/EngineeringProjects";
import TradingProjects from "./components/components/TradingProjects";
import DualExpertise from "./components/components/DualExpertise";
export default function Home() {
  return (
    <div >
      <Hero />
      <AboutMe />
      <EngineeringProjects />
      <TradingProjects />
      <DualExpertise />
    </div>
  );
}
