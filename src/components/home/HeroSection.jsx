import { Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen max-h-[1000px] min-h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1470&q=80"
          alt="Consultant helping family"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#5E9EA8] opacity-90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full">
          {/* Tagline */}
          <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 inline-flex items-center justify-center">
            <span className="animate-pulse mr-2">•</span>
            EMPOWER ZONE CONSULTING
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-snug sm:leading-tight">
            Navigating Benefit Applications{" "}
            <br className="hidden sm:block" /> Made{" "}
            <span className="text-[#C4E3E8] relative inline-block">
              Simple
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#C4E3E8] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Expert assistance with SNAP, Medicaid, Cash Assistance and more for
            New York families
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 w-full sm:w-auto">
            <button className="bg-white text-[#5E9EA8] hover:bg-gray-50 font-semibold py-3 px-6 sm:px-8 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base">
              Get Started{" "}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="absolute bottom-2 left-0 right-0 w-full px-4 sm:px-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-4 sm:p-6 max-w-5xl w-full mx-auto border border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
              {/* Phone Contact */}
              <div className="flex items-center gap-3 flex-1 min-w-[200px] w-full">
                <div className="bg-[#5E9EA8] p-2 rounded-lg flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-xs text-gray-600 uppercase tracking-wider">
                    Call us now
                  </p>
                  <a
                    href="tel:+17187576928"
                    className="font-medium text-gray-800 hover:text-[#5E9EA8] transition-colors text-sm sm:text-base"
                  >
                    +1 (718) 757-6928
                  </a>
                </div>
              </div>

              {/* Divider (hidden on mobile) */}
              <div className="hidden md:block h-10 w-px bg-gray-300"></div>

              {/* Email Contact */}
              <div className="flex items-center gap-3 flex-1 min-w-[200px] w-full">
                <div className="bg-[#5E9EA8] p-2 rounded-lg flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-xs text-gray-600 uppercase tracking-wider">
                    Email us
                  </p>
                  <a
                    href="mailto:empowerzoneservices@gmail.com"
                    className="font-medium text-gray-800 hover:text-[#5E9EA8] transition-colors text-sm sm:text-base break-words"
                  >
                    empowerzoneservices@gmail.com
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="bg-[#5E9EA8] hover:bg-[#4d8a94] text-white font-semibold py-2.5 px-6 rounded-lg transition-colors duration-300 w-full md:w-auto text-center text-sm sm:text-base"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
