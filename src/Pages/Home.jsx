import { Phone, ArrowRight, Mail } from "lucide-react";

export default function Home() {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Happy Clients" },
    { number: "50+", label: "Awards Won" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const items = [
    "Excellence",
    "Trust",
    "Integrity",
    "Professional Results",
    "Client Satisfaction",
  ];

  const cards = [
    {
      title: "Business Growth",
      text: "We help companies scale their operations and maximize profits.",
      img: "../home/home.png",
    },
    {
      title: "Legal Support",
      text: "Providing strong legal foundations for sustainable businesses.",
      img: "../home/home.png",
    },
    {
      title: "Market Research",
      text: "Comprehensive analysis to ensure better decision-making.",
      img: "../home/home.png",
    },
    {
      title: "Innovation",
      text: "Encouraging creativity to keep your business future-ready.",
      img: "../home/home.png",
    },
  ];

  return (
    <div className="">
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src="../home/home.png"
          alt="Consultant helping family"
          className="w-full h-full object-cover"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Overlay Text */}
        <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-[#5E9EA8] mb-2 leading-tight">
            EMPOWER ZONE
          </h1>
          <p className="text-base md:text-xl text-[#D1D5DB] max-w-2xl mx-auto leading-snug">
            Helping You Applying With Ease
          </p>
        </div>

        <div className="flex flex-col">
          {/* Paragraph Block */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
             bg-[#616564]/40 backdrop-blur-sm rounded-3xl 
             text-center p-6 sm:p-10 w-[90%] max-w-4xl mt-4"
          >
            <p className="text-white text-sm sm:text-lg leading-relaxed">
              Helping individuals & families across NYC apply for SNAP (food
              stamps), Cash Assistance, WIC, Medicaid & other benefits, from
              paperwork to interviews, we make the process simple, fast, and
              stress-free.
            </p>
          </div>

          {/* Row of Contact Info */}
          <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-4 sm:gap-6 px-4">
            <div className="flex items-center gap-3 bg-[#616564]/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 w-fit text-white text-sm sm:text-base">
              <Phone className="w-5 h-5 text-white" />
              <span>+1 (718) 757-6928</span>
            </div>

            <div className="flex items-center gap-3 bg-[#616564]/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 w-fit text-white text-sm sm:text-base">
              <Mail className="w-5 h-5 text-white" />
              <span>empowerzoneservices@gmail.com</span>
            </div>
          </div>

          {/* Row of Buttons */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-4 sm:gap-6 px-4">
            <div className="flex items-center gap-3 bg-[#616564]/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 w-fit text-white">
              <button className="flex items-center gap-2 text-sm sm:text-base">
                Our Services
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-[#616564]/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 w-fit text-white text-sm sm:text-base">
              Free Consultation
            </div>
          </div>
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white 
                    flex flex-wrap items-center justify-center px-4"
          >
            {items.map((item, i) => (
              <div key={i} className="flex items-center">
                <span>{item}</span>

                {/* Dot separator (not after last item) */}
                {i < items.length - 1 && (
                  <span className="mx-2 sm:mx-3 inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-current opacity-80" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sm:pl-20 sm:pr-20">
        <section className="py-16 px-4 sm:px-6 lg:px-12 bg-gray-50">
          {/* Heading & Description */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Our Achievements & Goals
            </h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              We take pride in the milestones we’ve reached and the values we
              stand for. Our commitment drives us forward every day.
            </p>
          </div>

          {/* Small Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition h-40 sm:h-48"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-[#5E9EA8]">
                  {item.number}
                </h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Big Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                {/* Image top (2/5 height) */}
                <div className="h-40 sm:h-48 md:h-56">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content bottom (3/5 height) */}
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
