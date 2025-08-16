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
    <section className="relative w-full min-h-screen overflow-hidden pt-25">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="About Empower Zone"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#302641]/60 via-[#616564]/50 to-[#5E9EA8]/45"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#302641]/70 via-transparent to-[#616564]/50"></div>
      </div>

      {/* Noise Effect */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-repeat opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#5E9EA8] rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#302641] rounded-full animate-pulse opacity-30 delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-[#616564] rounded-full animate-pulse opacity-35 delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-25 delay-700"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-[#5E9EA8] rounded-full animate-pulse opacity-30 delay-300"></div>
        <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-20 delay-800"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title */}
          <div className="mb-8 sm:mb-12">
            <div className="relative">
              <p
                className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-light tracking-[0.2em] sm:tracking-[0.3em] mb-2 uppercase"
                style={{
                  fontFamily: "'Playfair Display', 'Georgia', serif",
                  letterSpacing: "0.15em",
                  textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                }}
              >
                About Empower Zone
              </p>
              {/* Decorative underline */}
              <div
                data-aos="fade-down"
                className="flex items-center justify-center space-x-2 sm:space-x-3 mt-3 sm:mt-4"
              >
                <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-[#5E9EA8]"></div>
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#302641] rounded-full animate-pulse"></div>
                <div
                  className="text-[#5E9EA8] text-sm sm:text-base font-light tracking-[0.3em] sm:tracking-[0.4em]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  WORLD BEST TRUSTED PLATFORM
                </div>
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#302641] rounded-full animate-pulse"></div>
                <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-[#5E9EA8]"></div>
              </div>
            </div>
          </div>

          {/* Intro Text */}
          <div className="mt-8 sm:mt-12">
            <p
              data-aos="fade-up"
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-4xl mx-auto"
              style={{
                fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                textShadow: "0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              Empower Zone is a social welfare initiative dedicated to providing
              financial assistance and support to underprivileged families.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-8 sm:mt-10 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-white/90 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-[#5E9EA8] rounded-full"></div>
                <span style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
                  +1 (718) 757-6928
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-[#5E9EA8] rounded-full"></div>
                <span style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
                  empowerzoneservices@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
