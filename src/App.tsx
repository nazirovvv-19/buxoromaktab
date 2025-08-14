import Navbar from "@/components/Navbar";
import HeroSection from "@/pages/HeroSection";
import About from "@/components/AboutSection";
import ApplicationInfo from "./components/ApplicationInfo";
import AdvantagesSection from "./components/AdvantagesSection";
import ContactInfo from "./components/ContactInfo";
import Directors from "./components/Directors";
import News from "./components/News";
import RequestForm from "./components/RequestForm";
import Results from "./components/Results";
import SchoolPhotos from "./components/SchoolPhotos";
import Teachers from "./components/Teachers";

// import TestApi from "./http/TestApi";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-violet-50 via-white to-pink-50 min-h-screen text-gray-800">
      <Navbar />
      <HeroSection />
      <About />
      <AdvantagesSection />
      <ApplicationInfo />
      <RequestForm />
      <Directors />
      <Teachers />
      <Results />
      <SchoolPhotos />
      <News />
      <ContactInfo />
    </div>
  );
};

export default App;
