import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const ServicesHero = () => {
  const services = [
    {
      id: 1,
      name: "SNAP Benefits Assistance",
      desc: "MAXIMUM NUTRITION SUPPORT FOR YOUR FAMILY",
      about: "We ensure you receive the maximum food stamp benefits you're entitled to with our expert application assistance.",
      bgimg: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=1200&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Medicaid & Healthcare",
      desc: "HEALTHCARE COVERAGE MADE SIMPLE",
      about: "Get the healthcare coverage you need without the confusing paperwork and denial headaches.",
      bgimg: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Cash Assistance Programs",
      desc: "FINANCIAL SUPPORT WHEN YOU NEED IT MOST",
      about: "Emergency financial help for rent, bills, and daily expenses with guaranteed maximum benefits.",
      bgimg: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&auto=format&fit=crop&q=80",
    }
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [services.length]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        <img
          src={services[current].bgimg}
          alt={services[current].name}
          className="w-full h-full object-cover transition-all duration-1000"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#5E9EA8] opacity-90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Tagline */}
          <div 
            data-aos="fade-down"
            className="bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-medium mb-6 inline-flex items-center justify-center"
          >
            <span className="animate-pulse mr-2">•</span>
            YOUR BENEFITS ADVOCATE
          </div>

          {/* Title */}
          <div className="mb-8">
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {services[current].name}
            </h1>
          </div>

          {/* Description */}
          <div className="mt-6">
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-xl text-white/95 font-light leading-relaxed max-w-2xl mx-auto mb-8"
            >
              {services[current].about}
            </p>
          </div>

          {/* Sub-description */}
          <div className="mt-4">
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto mb-10"
            >
              Sit back, relax, and let us handle everything. No stress, no endless forms, no waiting on hold.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <button className="bg-white text-[#5E9EA8] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 text-sm sm:text-base">
                Free Consultation
              </button>
            </Link>
            <Link to="/services">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#5E9EA8] transition-colors duration-300 text-sm sm:text-base">
                View All Services
              </button>
            </Link>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index ? "bg-white scale-110" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Contact Info */}
          <div 
            data-aos="fade-up"
            data-aos-delay="500"
            className="mt-8 text-white/80 text-sm"
          >
            <p>Call today: <strong>+1 (718) 757-6928</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;