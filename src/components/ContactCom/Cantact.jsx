import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  Mail,
  Phone,
  Send,
  Clock,
  MessageCircle,
  Users,
  Shield
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: "Please enter a valid email address.",
      });
      return;
    }

    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      await emailjs.send(
        "service_0gnln6l",
        "template_m1lq3vr",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          program: formData.program,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "44F19eKvZXO5ilpy8"
      );

      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: "", email: "", phone: "", program: "", message: "" });

      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: "Failed to send message. Please try again or call us directly.",
      });
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white sm:px-6 md:px-16 lg:px-28 py-12 sm:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl pt-20 font-bold text-gray-800">
          Get Your <span className="text-[#5E9EA8]">Benefits Started</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3 sm:mt-4 text-base sm:text-lg">
          Take one small step — and we'll handle the rest. No stress, no endless forms, no waiting on hold.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-5 sm:mb-6 flex items-center gap-2 group">
            <Send className="w-5 h-5 sm:w-6 sm:h-6 text-[#5E9EA8] group-hover:text-[#4A8D99] transition-colors duration-300" />
            Free Benefits Consultation
          </h2>

          {formStatus.submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4"
            >
              ✅ Thank you! We've received your information and will contact you within 24 hours to start your benefits process.
            </motion.div>
          ) : formStatus.error ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4"
            >
              {formStatus.error}
            </motion.div>
          ) : null}

          <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-xl p-3 text-sm sm:text-base focus:ring-2 focus:ring-[#5E9EA8] focus:border-transparent outline-none transition-all duration-200"
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-xl p-3 text-sm sm:text-base focus:ring-2 focus:ring-[#5E9EA8] focus:border-transparent outline-none transition-all duration-200"
            />
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-xl p-3 text-sm sm:text-base focus:ring-2 focus:ring-[#5E9EA8] focus:border-transparent outline-none transition-all duration-200"
            />
            
            <select
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-xl p-3 text-sm sm:text-base focus:ring-2 focus:ring-[#5E9EA8] focus:border-transparent outline-none transition-all duration-200"
            >
              <option value="">Select Program You Need Help With</option>
              <option value="SNAP">SNAP (Food Stamps)</option>
              <option value="Medicaid">Medicaid</option>
              <option value="Cash Assistance">Cash Assistance</option>
              <option value="WIC">WIC Program</option>
              <option value="Denial Appeal">Denial Appeal</option>
              <option value="Multiple Programs">Multiple Programs</option>
              <option value="Not Sure">Not Sure - Need Guidance</option>
            </select>

            <textarea
              id="message"
              rows="4"
              name="message"
              placeholder="Tell us about your situation or any questions you have..."
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl p-3 text-sm sm:text-base focus:ring-2 focus:ring-[#5E9EA8] focus:border-transparent outline-none transition-all duration-200"
            ></textarea>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              disabled={formStatus.submitting}
              className={`w-full bg-gradient-to-r from-[#5E9EA8] to-[#4A8D99] text-white font-semibold py-3 sm:py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 text-sm sm:text-base ${
                formStatus.submitting ? "opacity-80 cursor-not-allowed" : ""
              }`}
            >
              {formStatus.submitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 
                      5.291A7.962 7.962 0 014 12H0c0 
                      3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Get Free Consultation
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 sm:gap-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {[
              {
                icon: Phone,
                title: "Call Us Now",
                text: "+1 (718) 757-6928",
                link: "tel:+17187576928",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                text: "Message us directly",
                link: "https://wa.me/17187576928",
              },
              {
                icon: Mail,
                title: "Email Us",
                text: "EmpowerZoneServices@gmail.com",
                link: "mailto:EmpowerZoneServices@gmail.com",
              },
              {
                icon: Clock,
                title: "Working Hours",
                text: "Mon–Fri: 9AM–6PM EST",
                link: null,
              },
              {
                icon: Users,
                title: "Service Area",
                text: "Serving New York Families",
                link: null,
              },
              {
                icon: Shield,
                title: "Confidential",
                text: "100% Private & Secure",
                link: null,
              },
            ].map((info, i) => (
              <motion.a
                key={i}
                href={info.link || "#"}
                target={info.link ? "_blank" : "_self"}
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={`flex items-center gap-3 sm:gap-4 bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-md border border-gray-100 transition-all duration-300 ${
                  info.link ? "hover:shadow-lg" : "cursor-default"
                } group`}
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#5E9EA8]/10 rounded-full">
                  <info.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#5E9EA8] group-hover:text-[#4A8D99] transition-colors duration-300" />
                </div>
                <div className="text-left max-w-[300px] break-all">
                  {" "}
                  {/* Adjust as needed */}
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1 ">
                    {info.text}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Why Choose Us Card */}
          <div className="bg-[#5E9EA8]/5 rounded-xl p-6 border border-[#5E9EA8]/20">
            <h3 className="font-semibold text-gray-800 mb-3">Why Choose Us?</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#5E9EA8] rounded-full"></div>
                No upfront fees - pay only when approved
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#5E9EA8] rounded-full"></div>
                98% success rate with applications
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#5E9EA8] rounded-full"></div>
                Bilingual support (English & Spanish)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#5E9EA8] rounded-full"></div>
                Authorized representation with agencies
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;