import React, { useState, useEffect, useRef } from "react";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
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

  const advantages = [
    {
      title: "Stress-Free Process",
      description: "You stay home, we handle everything. No endless forms or confusing paperwork.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "We Save Time",
      description: "No more waiting on hold for hours. We handle the bureaucracy so you don't have to.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "We Fix Denials",
      description: "If you've been denied, we review and reapply the right way. Denials are our specialty.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "We Get Results",
      description: "Clients get approved faster and easier with us on their side. Maximum benefits guaranteed.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-16 sm:py-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-[#3D7C88] mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            About Empower Zone
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We started because we saw too many people struggle with the system and give up on benefits they actually deserved.
          </p>
          
          <div className="w-20 h-1 bg-[#5E9EA8] mx-auto"></div>
        </div>

        {/* Mission Statement */}
        <div className={`bg-[#5E9EA8]/5 rounded-xl p-8 mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 text-lg">
              To fight for you, guide you, and make government benefits easy and accessible.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-[#3D7C88] mb-6">Why People Choose Empower Zone</h3>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-gray-50 border border-[#5E9EA8]/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group h-full">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-[#5E9EA8] rounded-lg flex items-center justify-center group-hover:bg-[#4A8D99] transition-all duration-300">
                    <div className="text-white">
                      {advantage.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Commitment */}
        <div className={`bg-white rounded-xl p-8 border border-[#5E9EA8]/20 shadow-lg transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">We Care About You</h3>
            <p className="text-gray-600">
              You're not a case number, you're a person. We provide personalized support from real humans who understand your situation.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-gray-700 mb-6">
            "Your Benefits. Your Rights. Your Advocate. Empower Zone makes it simple."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+17187576928" 
              className="bg-[#5E9EA8] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4A8D99] transition-colors duration-300"
            >
              Call Now: +1 (718) 757-6928
            </a>
            <a 
              href="mailto:EmpowerZoneServices@gmail.com" 
              className="border border-[#5E9EA8] text-[#5E9EA8] px-8 py-3 rounded-lg font-semibold hover:bg-[#5E9EA8] hover:text-white transition-colors duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}