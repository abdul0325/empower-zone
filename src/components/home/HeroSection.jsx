import { Phone, Mail, ArrowRight, CheckCircle, Users, Clock, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1470&q=80"
          alt="Consultant helping family"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#5E9EA8] opacity-90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto w-full">
          {/* Tagline */}
          <div className="bg-white/20 backdrop-blur-sm text-white px-5 py-3 rounded-full text-sm font-medium mb-8 inline-flex items-center justify-center shadow-lg">
            <span className="animate-pulse mr-2">•</span>
            EMPOWER ZONE CONSULTING
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            SNAP, Medicaid, Cash Assistance & WIC —{" "}
            <span className="text-[#C4E3E8] relative inline-block">
              Made Simple
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#C4E3E8] transform scale-x-100 transition-transform origin-left"></span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Sit back, relax, and let us do everything. No stress, no endless forms, no waiting on hold.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            {[
              { icon: Clock, text: "No waiting on hold" },
              { icon: Shield, text: "No denial worries" },
              { icon: Users, text: "Personal representation" },
              { icon: CheckCircle, text: "Maximum benefits" }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center gap-3 text-white border border-white/20">
                <item.icon className="w-5 h-5 text-[#C4E3E8]" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 w-full sm:w-auto">
            <Link to="/contact">
            <button className="bg-white text-[#5E9EA8] hover:bg-gray-50 font-semibold py-4 px-8 sm:px-10 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-base group">
              Get Started Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            </Link>
            <Link to="/about">
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-8 sm:px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-base">
              How It Works
            </button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current text-yellow-300" />
                ))}
              </div>
              <span className="text-sm">500+ Happy Clients</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/30"></div>
            <div className="text-sm">
              Successfully secured $2M+ in benefits for families
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="absolute bottom-4 left-0 right-0 w-full px-4 sm:px-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-5 sm:p-6 max-w-6xl w-full mx-auto border border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
              {/* Phone Contact */}
              <div className="flex items-center gap-4 flex-1 min-w-[200px] w-full">
                <div className="bg-[#5E9EA8] p-3 rounded-lg flex-shrink-0 shadow-md">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-xs text-gray-600 uppercase tracking-wider font-semibold">
                    Call or WhatsApp Now
                  </p>
                  <a
                    href="tel:+17187576928"
                    className="font-bold text-gray-900 hover:text-[#5E9EA8] transition-colors text-lg"
                  >
                    +1 (718) 757-6928
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block h-12 w-px bg-gray-300"></div>

              {/* Email Contact */}
              <div className="flex items-center gap-4 flex-1 min-w-[200px] w-full">
                <div className="bg-[#5E9EA8] p-3 rounded-lg flex-shrink-0 shadow-md">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-xs text-gray-600 uppercase tracking-wider font-semibold">
                    Email us
                  </p>
                  <a
                    href="mailto:empowerzoneservices@gmail.com"
                    className="font-bold text-gray-900 hover:text-[#5E9EA8] transition-colors text-sm sm:text-base break-words"
                  >
                    EmpowerZoneServices@gmail.com
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="bg-[#5E9EA8] hover:bg-[#4a8490] text-white font-bold py-3.5 px-8 rounded-lg transition-all duration-300 w-full md:w-auto text-center text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
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