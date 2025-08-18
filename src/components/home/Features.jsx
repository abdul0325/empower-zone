"use client";
import { Check, FileText, HeartHandshake, Shield } from "lucide-react";

export default function Features() {
  const features = [
    { title: "Clear Guidance", desc: "We simplify the business setup journey with step-by-step clarity.", icon: <Check className="w-8 h-8 text-[#5E9EA8]" /> },
    { title: "Expert Connections", desc: "Connect with vetted PROs, accountants, and legal professionals.", icon: <HeartHandshake className="w-8 h-8 text-[#5E9EA8]" /> },
    { title: "Legal & Compliance", desc: "Ensure smooth registration with full compliance support.", icon: <FileText className="w-8 h-8 text-[#5E9EA8]" /> },
    { title: "Trust & Security", desc: "Your business foundation is protected with reliable services.", icon: <Shield className="w-8 h-8 text-[#5E9EA8]" /> },
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Our Core Offer</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-gray-50 rounded-2xl shadow-md text-center">
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
