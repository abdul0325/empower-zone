// app/empower-zone/page.jsx (Next.js App Router)
// OR src/pages/EmpowerZone.jsx (CRA / Next.js Pages Router)

import { FaCheckCircle, FaHandsHelping, FaShieldAlt, FaRocket } from "react-icons/fa";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Satisfaction() {
    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:true,
            offset:100
        })
    })
  return (
    <div className="w-full">
      {/* Hero Section */}
      

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#302641]">
          Why Choose Empower Zone?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div data-aos="fade-right" className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <FaCheckCircle className="text-[#5E9EA8] text-5xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Trusted Services</h3>
            <p className="mt-2 text-gray-600">
              100% reliable and professional services tailored to meet your
              needs.
            </p>
          </div>

          <div data-aos="fade-up" className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <FaHandsHelping className="text-[#5E9EA8] text-5xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Customer Support</h3>
            <p className="mt-2 text-gray-600">
              Always ready to assist you with round-the-clock customer care.
            </p>
          </div>

          <div data-aos="fade-down" className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <FaShieldAlt className="text-[#5E9EA8] text-5xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Secure & Safe</h3>
            <p className="mt-2 text-gray-600">
              Ensuring safety, privacy, and complete satisfaction every time.
            </p>
          </div>

          <div data-aos="fade-left" className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <FaRocket className="text-[#5E9EA8] text-5xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Fast & Reliable</h3>
            <p className="mt-2 text-gray-600">
              Quick turnaround and efficient solutions for all your needs.
            </p>
          </div>
        </div>
      </section>

      {/* About Empower Zone */}
      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#302641]">
          Empowering You Everyday
        </h2>
        <p className="mt-6 text-lg max-w-4xl mx-auto text-gray-700 leading-relaxed">
          At Empower Zone, we believe in creating value through exceptional
          service. Our mission is to simplify your daily challenges with
          solutions that are not only reliable but also empowering. With our
          professional team, secure processes, and customer-first approach, we
          ensure that your trust in us turns into long-term satisfaction.
        </p>
   
      </section>
    </div>
  );
}
