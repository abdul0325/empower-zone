import React, { useEffect } from "react";
import { FaPiggyBank, FaBell, FaHeadset, FaChartLine } from "react-icons/fa";
 import AOS from "aos"
 import "aos/dist/aos.css"
const ServCard = [
  {
    id: 1,
    servic: "Financial Guidance",
    desc: "One-on-one guidance from our team to help you manage, budget, and plan your funds wisely.",
    icon: <FaChartLine className="text-[#5E9EA8] text-5xl" />,
  },
  {
    id: 2,
    servic: "Benefit Alerts",
    desc: "Stay informed with instant notifications when new financial aid or government programs are released.",
    icon: <FaBell className="text-[#5E9EA8] text-5xl" />,
  },
  {
    id: 3,
    servic: "Support Desk",
    desc: "Get personal assistance from our team for resolving issues, understanding benefits, and accessing resources.",
    icon: <FaHeadset className="text-[#5E9EA8] text-5xl" />,
  },
  {
    id: 4,
    servic: "Fund Tracker",
    desc: "Easily track government aid, grants, or subsidies securely deposited into your personal account",
    icon: <FaPiggyBank className="text-[#5E9EA8] text-5xl" />,
  },
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
    <div className="min-h-screen px-6 py-16 bg-gradient-to-b from-gray-50 to-gray-100"
    style={{
        backgroundImage:"url('https://images.unsplash.com/photo-1754901350791-04eff8b6289c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D')",
        backgroundAttachment:"fixed",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center"
    }}
    >
      {/* Title */}
      <h1 className="text-center mb-14 font-bold text-4xl text-white">
        Our <span className="">Services</span>
      </h1>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
        {ServCard.map((item) => (
          <div
          data-aos="fade-up"
            key={item.id}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center 
              transform transition duration-300 hover:-translate-y-3 hover:shadow-2xl group"
          >
            {/* Icon */}
            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {item.servic}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>

            {/* Learn More Button */}
            <button className="mt-6 px-5 py-2 rounded-full text-sm font-medium bg-[#5E9EA8] text-white hover:bg-[#4c8c92] transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmpServCard;
