import React, { useEffect } from "react";
import { BiSolidMap } from "react-icons/bi";
import { FaPhoneAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  // ✅ FIXED useEffect
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once:true,
      offset: 100,
    });
  }, []);

  const SocialLink = [
    {
      id: 1,
      icon: <BiSolidMap className="text-lg" />,
      name: "Address",
      desc: "USA, Washington Building No3, Third Floor",
    },
    {
      id: 2,
      icon: <FaPhoneAlt className="text-sm" />,
      name: "Phone",
      desc: "+1 (718) 757-6928",
    },
    {
      id: 3,
      icon: <MdOutlineMail className="text-lg" />,
      name: "Email",
      desc: "empowerzoneservices@gmail.com",
    },
  ];

  const social = [
    { id: 1, icon: <FaFacebookF />, path: "#" },
    { id: 2, icon: <RiTwitterXLine />, path: "#" },
    { id: 3, icon: <IoLogoInstagram />, path: "#" },
    { id: 4, icon: <FaLinkedinIn />, path: "#" },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-6 py-12 bg-gray-50">
      {/* Header */}
      <section className="w-full text-center mt-20 mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Contact Us</h1>
        <div className="w-20 h-1 bg-[#9CBEB6] mx-auto mb-4"></div>
        <p data-aos="fade-up" className="text-gray-600 max-w-2xl mx-auto">
          We're here to assist you. Reach out for any queries or support.
        </p>
      </section>

      {/* Contact Info + Form */}
      <div className="flex flex-col lg:flex-row gap-12 w-full sm:px-10 md:px-2 max-w-6xl">
        {/* Left - Contact Info */}
        <div className="w-full lg:w-1/2 space-y-8">
          {SocialLink.map((item) => (
            <div
            data-aos="fade-right"
              key={item.id}
              className="flex flex-col sm:flex-row  gap-5 items-center p-4 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              <div className="p-3 bg-[#9CBEB6] text-white rounded-lg shadow-sm">
                {item.icon}
              </div>
              <div className="text-center sm:text-left">
                <h1 className="font-semibold text-gray-800 text-lg">
                  {item.name}
                </h1>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}

          {/* Social Icons */}
          <div className="mt-10">
            <h1 className="text-lg font-semibold mb-4 text-gray-800">
              Connect With Us
            </h1>
            <div data-aos="fade-up" className="flex gap-4">
              {social.map((item) => (
                <a
                  key={item.id}
                  href={item.path}
                  className="p-3 rounded-full bg-gray-200 hover:bg-[#9CBEB6] hover:text-white transition duration-300 transform hover:-translate-y-1"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="w-full lg:w-1/2">
          <div className="relative group">
            <div
             
              className="absolute -inset-1  bg-[#9CBEB6] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"
            ></div>
            <div  data-aos="fade-left" className="relative p-6 bg-[#9CBEB6] rounded-lg text-white">
              <h1 className="font-semibold text-2xl mb-6">Send Us a Message</h1>

              <div className="mb-5">
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  className="w-full px-3 py-2 bg-transparent border-b border-white/50 focus:border-white focus:outline-none transition"
                  type="text"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  className="w-full px-3 py-2 bg-transparent border-b border-white/50 focus:border-white focus:outline-none transition"
                  type="email"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  className="w-full px-3 py-2 bg-transparent border-b border-white/50 focus:border-white focus:outline-none transition"
                  rows="3"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button className="w-full px-6 py-3 bg-white text-[#9CBEB6] font-semibold rounded shadow hover:bg-gray-100 transition duration-300 transform hover:scale-105">
                Submit Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full mt-20 max-w-6xl rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d397486.5396655753!2d-77.60552501262212!3d38.89280002786329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2s!4v1755519491992!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
