import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Hero = () => {
  const Aray = [
    {
      id: 1,
      name: "Empower Zone Services",
      desc: "Know About the Services of BEST TRUSTED PLATFORM",
      about: "We provide trusted, professional, and client-focused services to meet your goals effectively.",
      bgimg:
        "https://images.unsplash.com/photo-1755216007736-9920ec4d07f3?w=1200&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      name: "Empower Zone Solutions",
      desc: "Your Trusted Partner in Excellence",
      about: "Our goal is to empower businesses with innovative solutions and reliable expertise.",
      bgimg:
        "https://images.unsplash.com/photo-1754430544039-9da4dc746d2a?w=1200&auto=format&fit=crop&q=60",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Aray.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [Aray.length]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-25">
      {/* Background Image */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        <img
          src={Aray[current].bgimg}
          alt="carousel bg"
          className="w-full h-full object-cover transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#302641]/60 via-[#616564]/50 to-[#5E9EA8]/45"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#302641]/70 via-transparent to-[#616564]/50"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#5E9EA8] rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#302641] rounded-full animate-pulse opacity-30 delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-[#616564] rounded-full animate-pulse opacity-35 delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-25 delay-700"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title */}
          <div className="mb-8 sm:mb-12">
            <div className="relative">
              <p
                className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-light tracking-[0.2em] mb-2 uppercase"
                style={{
                  fontFamily: "'Playfair Display', 'Georgia', serif",
                  textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                }}
              >
                {Aray[current].name}
              </p>
              <div
                data-aos="fade-down"
                className="flex items-center justify-center space-x-2 sm:space-x-3 mt-3 sm:mt-4"
              >
                <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-[#5E9EA8]"></div>
                <div
                  className=" text-white uppercase text-sm sm:text-base font-light tracking-[0.3em]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {Aray[current].desc}
                </div>
                <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-[#5E9EA8]"></div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed">
            {Aray[current].about}
          </p>

          {/* Buttons */}
          <div className="mt-8 sm:mt-12 flex justify-center gap-6">
      <Link to="/contact" >      <button className="px-6 py-2 cursor-pointer font-semibold bg-[#5E9EA8] text-white rounded-full hover:bg-[#4c8c92] transition">
              Get Consultation
            </button></Link>
        <Link to="/contact">    <button className="px-6 py-2 font-semibold cursor-pointer border border-white text-white rounded-full hover:bg-white hover:text-black transition">
              About Us
            </button></Link>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-10">
            {Aray.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  current === index ? "bg-[#5E9EA8] scale-110" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
