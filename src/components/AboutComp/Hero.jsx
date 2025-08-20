import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
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
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1470&q=80"
          alt="Family receiving benefit assistance"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#5E9EA8] opacity-90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Headline */}
          <div className="mb-8">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              SNAP, Medicaid, Cash Assistance & WIC —{" "}
              <span className="text-[#C4E3E8]">Made Simple</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className="mt-6">
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-xl text-white/95 font-light leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Sit back, relax, and let us do everything. No stress, no endless forms, no waiting on hold.
            </p>
          </div>

          {/* Contact Information */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 inline-block">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-white/90">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#C4E3E8] rounded-full"></div>
                  <span className="font-medium">+1 (718) 757-6928</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#C4E3E8] rounded-full"></div>
                  <span>EmpowerZoneServices@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;