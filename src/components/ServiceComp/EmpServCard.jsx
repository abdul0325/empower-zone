import React from "react";
import { Link } from "react-router-dom";

const ServCard = [
  {
    id: 1,
    servic: "SNAP (Food Stamps) Assistance",
    desc: "We ensure you receive the maximum nutrition benefits you're entitled to. Complete application support from start to approval.",
    icon: (
      <svg className="w-12 h-12 text-[#5E9EA8]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 2,
    servic: "Medicaid Applications",
    desc: "Healthcare coverage applications and renewals without the headaches. We handle the complex paperwork for you.",
    icon: (
      <svg className="w-12 h-12 text-[#5E9EA8]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 3,
    servic: "Cash Assistance Programs",
    desc: "Financial help for rent, bills, or daily expenses. We secure emergency and ongoing cash support for qualified families.",
    icon: (
      <svg className="w-12 h-12 text-[#5E9EA8]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
  },
  {
    id: 4,
    servic: "WIC Program Support",
    desc: "Nutrition and support for women, infants, and children. We simplify the WIC application and renewal process.",
    icon: (
      <svg className="w-12 h-12 text-[#5E9EA8]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 5,
    servic: "Denial Appeals",
    desc: "If you've been denied benefits, we review and reapply the right way. Denials are our specialty.",
    icon: (
      <svg className="w-12 h-12 text-[#5E9EA8]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 6,
    servic: "Authorized Representation",
    desc: "With your authorization, we become your voice with agencies. No stressful interviews or confusing communications.",
    icon: (
      <svg className="w-12 h-12 text-[#5E9EA8]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    ),
  }
];

const EmpServCard = () => {
    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:true,
            offset:100,
        })
    })
  return (
    <div className="min-h-screen px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Programs We <span className="text-[#5E9EA8]">Cover</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive benefit assistance services to help you access the support you deserve
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ServCard.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-xl shadow-sm p-6 flex flex-col items-center text-center 
                transform transition duration-300 hover:-translate-y-2 hover:shadow-md group border border-gray-100"
            >
              {/* Icon */}
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {item.servic}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {item.desc}
              </p>

              {/* Learn More Button */}
              <Link to="/contact">
              <button className="px-6 py-2 rounded-lg text-sm font-medium bg-[#5E9EA8] text-white hover:bg-[#4A8D99] transition-colors duration-300">
                Get Started
              </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-[#5E9EA8]/5 rounded-xl p-8 border border-[#5E9EA8]/20 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-6">
            Take one small step — and we'll handle the rest. No stress, no endless forms, no waiting on hold.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+17187576928" 
              className="bg-[#5E9EA8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4A8D99] transition-colors duration-300"
            >
              Call Now: +1 (718) 757-6928
            </a>
            <a 
              href="mailto:EmpowerZoneServices@gmail.com" 
              className="border border-[#5E9EA8] text-[#5E9EA8] px-6 py-3 rounded-lg font-semibold hover:bg-[#5E9EA8] hover:text-white transition-colors duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpServCard;