"use client";
import { Clock, Heart, Shield, CheckCircle, Star, Users } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    { 
      title: "Stress-Free Process", 
      desc: "You stay home, we handle everything. No endless forms or confusing paperwork.", 
      icon: <Shield className="w-10 h-10 text-white" />,
      bgColor: "bg-[#5E9EA8]"
    },
    { 
      title: "We Save Time", 
      desc: "No more waiting on hold for hours. We handle the bureaucracy so you don't have to.", 
      icon: <Clock className="w-10 h-10 text-white" />,
      bgColor: "bg-[#4A8D99]"
    },
    { 
      title: "We Fix Denials", 
      desc: "If you've been denied, we review and reapply the right way. Denials are our specialty.", 
      icon: <CheckCircle className="w-10 h-10 text-white" />,
      bgColor: "bg-[#3D7C88]"
    },
    { 
      title: "We Care", 
      desc: "You're not a case number, you're a person. Personalized support from real humans.", 
      icon: <Heart className="w-10 h-10 text-white" />,
      bgColor: "bg-[#5E9EA8]"
    },
    { 
      title: "We Get Results", 
      desc: "Clients get approved faster and easier with us on their side. Maximum benefits guaranteed.", 
      icon: <Star className="w-10 h-10 text-white" />,
      bgColor: "bg-[#4A8D99]"
    },
    { 
      title: "Authorized Representation", 
      desc: "We become your voice with agencies. No stressful interviews or confusing communications.", 
      icon: <Users className="w-10 h-10 text-white" />,
      bgColor: "bg-[#3D7C88]"
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#5E9EA8]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C4E3E8]/20 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why People Choose <span className="text-[#5E9EA8]">Empower Zone</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're different from other services because we truly care about your success and make the process effortless for you
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-[#5E9EA8]/30 flex flex-col items-center text-center"
            >
              <div className={`${point.bgColor} p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{point.title}</h3>
              <p className="text-gray-600 flex-grow">{point.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#5E9EA8]">98%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#5E9EA8]">500+</div>
              <div className="text-sm text-gray-600">Families Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#5E9EA8]">24h</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#5E9EA8]">$2M+</div>
              <div className="text-sm text-gray-600">Benefits Secured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}