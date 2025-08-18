"use client";
import { Award, Users, Smile, BarChart2 } from "lucide-react";

export default function Stats() {
  const stats = [
    { number: "10+", label: "Years Experience", icon: <Award className="w-8 h-8 text-[#5E9EA8]" /> },
    { number: "500+", label: "Happy Clients", icon: <Smile className="w-8 h-8 text-[#5E9EA8]" /> },
    { number: "50+", label: "Experts Network", icon: <Users className="w-8 h-8 text-[#5E9EA8]" /> },
    { number: "100%", label: "Success Rate", icon: <BarChart2 className="w-8 h-8 text-[#5E9EA8]" /> },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white shadow-md rounded-2xl p-6">
            {stat.icon}
            <h2 className="text-2xl font-bold mt-2">{stat.number}</h2>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
