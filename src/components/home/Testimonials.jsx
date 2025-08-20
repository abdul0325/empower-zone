import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    { 
      name: "Maria Rodriguez", 
      feedback: "I was denied SNAP benefits twice before finding Empower Zone. They handled everything and got me approved in just three weeks. Now my family has food security thanks to their help!", 
      program: "SNAP Benefits",
      rating: 5
    },
    { 
      name: "James Wilson", 
      feedback: "As a senior on fixed income, I was struggling with medical costs. Empower Zone helped me get Medicaid and even found additional assistance programs I didn't know about. They treated me with respect and patience.", 
      program: "Medicaid",
      rating: 5
    },
    { 
      name: "The Johnson Family", 
      feedback: "After my husband lost his job, we didn't know how we'd pay rent. Empower Zone got us emergency cash assistance and food stamps within 2 weeks. They were a lifesaver during our toughest time.", 
      program: "Cash Assistance & SNAP",
      rating: 5
    },
    { 
      name: "Sophia Chen", 
      feedback: "The WIC application process seemed overwhelming as a new mom. Empower Zone handled all the paperwork and even accompanied me to my appointment. I couldn't have done it without them!", 
      program: "WIC",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial]);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-[#C4E3E8]/30 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-28 h-28 bg-[#5E9EA8]/20 rounded-full"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success <span className="text-[#5E9EA8]">Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from families we've helped secure the benefits they deserve
          </p>
        </div>

        {/* Carousel Container with Fade Effect */}
        <div 
          className="relative overflow-hidden rounded-xl mb-8 min-h-[350px]" // ✅ ensures visible height
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 relative h-full flex flex-col justify-center">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-12 h-12 text-[#5E9EA8]" />
                </div>
                
                {/* Star rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mx-1" />
                  ))}
                </div>
                
                {/* Feedback text */}
                <p className="text-gray-700 text-lg italic mb-6 text-center relative z-10">
                  "{testimonial.feedback}"
                </p>
                
                {/* Client info */}
                <div className="flex flex-col items-center">
                  <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                  <div className="text-sm text-[#5E9EA8] font-medium mt-1">
                    {testimonial.program}
                  </div>
                  <div className="bg-[#5E9EA8]/10 px-3 py-1 rounded-full text-xs font-medium text-[#5E9EA8] mt-2">
                    Approved ✓
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-[#5E9EA8]" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-[#5E9EA8]" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#5E9EA8]" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-[#5E9EA8]/5 rounded-2xl p-8 border border-[#5E9EA8]/10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to become our next success story?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of families who have successfully navigated the benefits system with our help
            </p>
            <button className="bg-[#5E9EA8] hover:bg-[#4a8490] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
              Start Your Application Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
