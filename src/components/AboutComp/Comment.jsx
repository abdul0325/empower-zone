import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Maria Rodriguez",
    role: "SNAP Recipient",
    location: "New York, NY",
    text: "I was denied SNAP benefits twice before finding Empower Zone. They handled everything and got me approved in just three weeks. Now my family has food security thanks to their help!",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
    service: "SNAP Benefits",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Medicaid Recipient",
    location: "Brooklyn, NY",
    text: "As a senior on fixed income, I was struggling with medical costs. Empower Zone helped me get Medicaid and even found additional assistance programs I didn't know about.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    service: "Medicaid",
  },
  {
    id: 3,
    name: "The Johnson Family",
    role: "Cash Assistance",
    location: "Queens, NY",
    text: "After my husband lost his job, we didn't know how we'd pay rent. Empower Zone got us emergency cash assistance and food stamps within 2 weeks. They were a lifesaver!",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    service: "Cash Assistance & SNAP",
  },
  {
    id: 4,
    name: "Sophia Chen",
    role: "WIC Participant",
    location: "Bronx, NY",
    text: "The WIC application process seemed overwhelming as a new mom. Empower Zone handled all the paperwork and even accompanied me to my appointment. I couldn't have done it without them!",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 5,
    service: "WIC Program",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // SVG Icons
  const QuoteIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
    </svg>
  );

  const StarIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  const ChevronLeft = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  const ChevronRight = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-16 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3D7C88] mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from families we've helped secure the benefits they deserve
          </p>
        </div>

        {/* Main Testimonial */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Featured Testimonial */}
          <div className="relative mb-8">
            <div className="bg-[#5E9EA8]/5 rounded-xl p-6 sm:p-8 border border-[#5E9EA8]/20 shadow-lg">

              <div className="grid lg:grid-cols-3 gap-6 items-center">
                {/* Client Photo & Info */}
                <div className="lg:col-span-1 text-center">
                  <div className="relative inline-block mb-4">
                    <img
                      src={testimonials[currentTestimonial].img}
                      alt={testimonials[currentTestimonial].name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-3 border-[#5E9EA8] object-cover shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#5E9EA8] rounded-full flex items-center justify-center">
                      <CheckIcon />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-[#5E9EA8] font-medium mb-1 text-sm">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-600 text-xs">
                    {testimonials[currentTestimonial].location}
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center space-x-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="text-[#5E9EA8]">
                        <StarIcon />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex justify-center lg:justify-start mb-4">
                    <div className="w-8 h-8 bg-[#5E9EA8] rounded-lg flex items-center justify-center">
                      <QuoteIcon />
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 leading-relaxed text-lg">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#5E9EA8]/20 rounded flex items-center justify-center">
                      <CheckIcon />
                    </div>
                    <span className="text-[#5E9EA8] font-medium text-sm">
                      Program: {testimonials[currentTestimonial].service}
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center space-x-4 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-[#5E9EA8] rounded-full flex items-center justify-center text-white hover:bg-[#4A8D99] transition-colors duration-300"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-[#5E9EA8] rounded-full flex items-center justify-center text-white hover:bg-[#4A8D99] transition-colors duration-300"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`cursor-pointer transition-all duration-300 ${
                  index === currentTestimonial ? 'scale-105' : 'hover:scale-105'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className={`bg-white rounded-lg p-3 border transition-all duration-300 shadow-sm hover:shadow-md ${
                  index === currentTestimonial 
                    ? 'border-[#5E9EA8] ring-1 ring-[#5E9EA8]' 
                    : 'border-gray-200 hover:border-[#5E9EA8]'
                }`}>
                  <div className="text-center space-y-2">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full border-2 border-[#5E9EA8] object-cover mx-auto"
                    />
                    <h4 className="text-sm font-medium text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#5E9EA8] text-xs">
                      {testimonial.service}
                    </p>
                    {index === currentTestimonial && (
                      <div className="w-1.5 h-1.5 bg-[#5E9EA8] rounded-full mx-auto animate-pulse"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-[#5E9EA8] scale-125' 
                    : 'bg-gray-300 hover:bg-[#5E9EA8]/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;