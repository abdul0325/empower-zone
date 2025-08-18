// ContactSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const ContactSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-[#b7e9dc] to-[#99b9b2] text-white py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Guidance from EmpowerZone?
        </h2>
        <p className="text-lg md:text-xl mb-6 text-gray-200">
          Our team is here to help you understand your financial aid, 
          government support, and provide clear guidance for a secure future.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-[#1e7a66] font-semibold cursor-pointer px-8 py-3 rounded-xl transition-all duration-300"
        >
          Contact EmpowerZone
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
