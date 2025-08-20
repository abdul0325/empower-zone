"use client";
import { CheckCircle, Users, FileCheck, Clock, Shield } from "lucide-react";

export default function Features() {
  const features = [
    { 
      title: "We Listen", 
      desc: "You tell us what's going on, what you need, and what's been holding you back.", 
      icon: <Users className="w-8 h-8 text-[#5E9EA8]" /> 
    },
    { 
      title: "Check Eligibility", 
      desc: "We find every benefit you qualify for — many people don't realize all the programs available to them.", 
      icon: <CheckCircle className="w-8 h-8 text-[#5E9EA8]" /> 
    },
    { 
      title: "We Prepare Everything", 
      desc: "Documents, forms, and applications are taken care of. No stress about mistakes or missing paperwork.", 
      icon: <FileCheck className="w-8 h-8 text-[#5E9EA8]" /> 
    },
    { 
      title: "We Represent You", 
      desc: "With your authorization, we deal directly with agencies. No sitting on hold or stressful interviews.", 
      icon: <Shield className="w-8 h-8 text-[#5E9EA8]" /> 
    },
    { 
      title: "We Follow Through", 
      desc: "We track your case until you're approved — and if there's a problem, we fight to fix it.", 
      icon: <Clock className="w-8 h-8 text-[#5E9EA8]" /> 
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do for You</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive 5-step process takes the stress, waiting, and confusion out of applying for benefits
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#5E9EA8]/20 text-center flex flex-col items-center"
            >
              <div className="bg-[#5E9EA8]/10 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <div className="mb-2 text-sm font-medium text-[#5E9EA8]">Step {index + 1}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{feature.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-[#5E9EA8]/5 rounded-2xl p-8 border border-[#5E9EA8]/10">
          <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">Programs We Cover</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white py-3 px-4 rounded-lg shadow-sm">
              <div className="font-medium text-[#5E9EA8]">SNAP</div>
              <div className="text-sm text-gray-600">Food Stamps</div>
            </div>
            <div className="bg-white py-3 px-4 rounded-lg shadow-sm">
              <div className="font-medium text-[#5E9EA8]">Cash Assistance</div>
              <div className="text-sm text-gray-600">Financial Help</div>
            </div>
            <div className="bg-white py-3 px-4 rounded-lg shadow-sm">
              <div className="font-medium text-[#5E9EA8]">Medicaid</div>
              <div className="text-sm text-gray-600">Healthcare</div>
            </div>
            <div className="bg-white py-3 px-4 rounded-lg shadow-sm">
              <div className="font-medium text-[#5E9EA8]">WIC</div>
              <div className="text-sm text-gray-600">Women & Children</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}