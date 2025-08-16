import React, { useState, useEffect, useRef } from "react";
import { FaHandsHelping, FaUserFriends, FaShieldAlt, FaClock, FaCheckCircle, FaAward, FaUsers, FaChartLine } from "react-icons/fa";

const Convince = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: FaHandsHelping,
      title: "Financial Assistance Programs",
      description: "We provide direct financial support to underprivileged families through our comprehensive income support initiatives.",
      color: "from-[#5E9EA8] to-[#302641]"
    },
    {
      icon: FaUserFriends,
      title: "Community Support Network",
      description: "Our program connects beneficiaries with essential community resources and support services.",
      color: "from-[#302641] to-[#5E9EA8]"
    },
    {
      icon: FaShieldAlt,
      title: "Beneficiary Protection",
      description: "We maintain strict confidentiality and dignity in all our assistance programs to protect our beneficiaries.",
      color: "from-[#616564] to-[#302641]"
    },
    {
      icon: FaClock,
      title: "Sustainable Solutions",
      description: "Our initiatives focus on long-term empowerment rather than temporary relief, creating lasting impact.",
      color: "from-[#5E9EA8] to-[#616564]"
    }
  ];

  const stats = [
    { icon: FaAward, number: "5+", label: "Years Serving" },
    { icon: FaUsers, number: "10K+", label: "Families Helped" },
    { icon: FaChartLine, number: "92%", label: "Satisfaction Rate" },
    { icon: FaCheckCircle, number: "100%", label: "Commitment" }
  ];

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        className="relative bg-gradient-to-b from-white via-gray-50/30 to-white py-16 sm:py-20 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23616564' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#5E9EA8] rounded-full animate-pulse opacity-30"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-[#302641] rounded-full animate-pulse opacity-25 delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-3 h-3 bg-[#616564] rounded-full animate-pulse opacity-20 delay-500"></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#5E9EA8] rounded-full animate-pulse opacity-15 delay-700"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#302641] mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Why Choose <span className="text-[#5E9EA8]">Empower Zone</span>?
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
              <strong className="text-[#5E9EA8]">Empower Zone</strong> is a social welfare initiative dedicated to providing financial assistance and support to underprivileged families. 
              We believe in empowering communities through sustainable income support programs.
            </p>
          </div>

          {/* Hero Image & Content Section */}
          <div className={`mb-20 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-full items-center">
              {/* Content Side */}
              <div className="space-y-8">
                {/* Stats Mini Grid */}
                <div className="grid grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:border-[#5E9EA8]/30 transition-all duration-300 text-center group">
                      <stat.icon className="w-6 h-6 text-[#302641] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-2xl font-bold text-[#616564] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {stat.number}
                      </div>
                      <div className="text-xs text-gray-600 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#5E9EA8]/30 transition-all duration-500 transform hover:scale-105 hover:shadow-xl cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-[#616564] mb-3 group-hover:text-[#5E9EA8] transition-colors duration-300" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effect Indicator */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Statement */}
          <div className={`mt-20 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-br from-[#616564] to-[#302641] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-repeat opacity-30" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.6'/%3E%3C/svg%3E")`
                }}></div>
              </div>

              <div className="relative z-10 max-w-4xl mx-auto">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <FaHandsHelping className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Your Trusted Social Support Platform
                </h3>
                
                <p className="text-lg text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Crimson Text', serif" }}>
                  Choosing <strong className="text-[#5E9EA8]">Empower Zone</strong> means choosing compassion, dignity, and real support. 
                  We are committed to helping underprivileged families overcome financial challenges through our income support programs. 
                  Our mission is to empower individuals and strengthen communities through sustainable assistance.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-[#302641] px-8 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Apply for Support
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#302641] transition-all duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Learn About Our Programs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Convince;