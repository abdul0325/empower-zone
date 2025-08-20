import React from "react";
import { useNavigate } from "react-router-dom";

const ContactSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-[#5E9EA8] to-[#4A8D99] text-white py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get the Benefits You Deserve?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl mx-auto">
          Stop struggling with confusing applications and denial letters. Let our experts handle everything for you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-sm font-semibold mb-2">No Upfront Fees</div>
            <div className="text-xs">Affordable payment options</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-sm font-semibold mb-2">98% Success Rate</div>
            <div className="text-xs">Maximum benefits guaranteed</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-sm font-semibold mb-2">Bilingual Support</div>
            <div className="text-xs">English and Spanish available</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-[#5E9EA8] font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:scale-105 shadow-lg"
          >
            Free Consultation
          </button>
          <a
            href="tel:+17187576928"
            className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#5E9EA8]"
          >
            Call Now: +1 (718) 757-6928
          </a>
        </div>

        <div className="mt-8 text-white/80 text-sm">
          <p>• No obligation • Confidential • Professional service</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;