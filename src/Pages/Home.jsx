import Contact from "../components/home/Contact";
import Features from "../components/home/Features";
import HeroSection from "../components/home/HeroSection";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";

;

export default function Home() {
  return (
    <>
      <HeroSection />
      <Stats />
      <Features />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </>
  );
}
