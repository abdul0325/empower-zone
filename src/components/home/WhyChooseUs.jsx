"use client";
import { Clock, Calendar, MapPin } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    { title: "Save Time", desc: "Skip endless paperwork with fast-tracked processes.", icon: <Clock className="w-8 h-8 text-[#5E9EA8]" /> },
    { title: "Local Knowledge", desc: "We understand Qatari regulations and business culture.", icon: <MapPin className="w-8 h-8 text-[#5E9EA8]" /> },
    { title: "End-to-End Support", desc: "From planning to execution, we’re with you throughout.", icon: <Calendar className="w-8 h-8 text-[#5E9EA8]" /> },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {points.map((point, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-6 text-center">
            {point.icon}
            <h3 className="text-xl font-semibold mt-4">{point.title}</h3>
            <p className="text-gray-600 mt-2">{point.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
