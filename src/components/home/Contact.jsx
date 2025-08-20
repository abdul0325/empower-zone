"use client";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#5E9EA8] to-[#4A8D99] text-white text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Benefits Journey Starts Here</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Take one small step — and we'll handle the rest. No stress, no endless forms, no waiting on hold.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Phone Contact */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="bg-white p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-[#5E9EA8]" />
            </div>
            <h3 className="font-semibold mb-2">Call Us</h3>
            <a 
              href="tel:+17187576928" 
              className="text-lg font-medium hover:text-[#C4E3E8] transition-colors block"
            >
              +1 (718) 757-6928
            </a>
            <p className="text-sm text-white/80 mt-1">Mon-Fri, 9AM-6PM EST</p>
          </div>

          {/* WhatsApp */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="bg-white p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-7 h-7 text-[#5E9EA8]" />
            </div>
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <a 
              href="https://wa.me/17187576928" 
              className="text-lg font-medium hover:text-[#C4E3E8] transition-colors block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message Us
            </a>
            <p className="text-sm text-white/80 mt-1">Quick responses</p>
          </div>

          {/* Email */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="bg-white p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-[#5E9EA8]" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <a 
              href="mailto:EmpowerZoneServices@gmail.com" 
              className="text-lg font-medium hover:text-[#C4E3E8] transition-colors block break-words"
            >
              EmpowerZoneServices@gmail.com
            </a>
            <p className="text-sm text-white/80 mt-1">24/7 availability</p>
          </div>

          {/* Consultation */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
            <div className="bg-white p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-[#5E9EA8]" />
            </div>
            <h3 className="font-semibold mb-2">Free Consultation</h3>
            <p className="text-lg font-medium">No obligation</p>
            <p className="text-sm text-white/80 mt-1">Get started today</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto border border-white/20">
          <h3 className="text-xl font-semibold mb-4">Why Contact Us Today?</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            <div className="flex items-start">
              <div className="bg-[#C4E3E8] text-[#5E9EA8] rounded-full p-1 mr-3 flex-shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>No upfront fees - affordable payment options</span>
            </div>
            <div className="flex items-start">
              <div className="bg-[#C4E3E8] text-[#5E9EA8] rounded-full p-1 mr-3 flex-shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Spanish and English assistance available</span>
            </div>
            <div className="flex items-start">
              <div className="bg-[#C4E3E8] text-[#5E9EA8] rounded-full p-1 mr-3 flex-shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>98% success rate with applications</span>
            </div>
            <div className="flex items-start">
              <div className="bg-[#C4E3E8] text-[#5E9EA8] rounded-full p-1 mr-3 flex-shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Serving all New York residents</span>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-10">
          <p className="text-2xl font-light italic">"Your Benefits. Your Rights. Your Advocate. Empower Zone makes it simple."</p>
        </div>
      </div>
    </section>
  );
}