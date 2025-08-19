import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com"; // ✅ Import EmailJS
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "44F19eKvZXO5ilpy8"
      );

      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: "Failed to send message. Please try again.",
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
          Contact <span className="text-[#A7CFC5]">Us</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3 sm:mt-4 text-base sm:text-lg">
          Have questions or want to discuss a project? Reach out—we're here to
          help.
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
            <Send className="w-5 h-5 sm:w-6 sm:h-6 text-[#A4CBC2] group-hover:text-[#A58F67] transition-colors duration-300" />
            Send Us a Message
          </h2>

          {formStatus.submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4"
            >
              ✅ Thank you! Your message has been sent successfully. We'll get
              back to you soon.
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
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-xl p-3 text-sm sm:text-base focus:ring-2 focus:ring-[#A4CBC2] focus:border-transparent outline-none transition-all duration-200"
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-xl p-3 text-sm sm:text-base focus:ring-2 focus:ring-[#A4CBC2] focus:border-transparent outline-none transition-all duration-200"
            />
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-xl p-3 text-sm sm:text-base focus:ring-2 focus:ring-[#A4CBC2] focus:border-transparent outline-none transition-all duration-200"
            />
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-xl p-3 text-sm sm:text-base focus:ring-2 focus:ring-[#A4CBC2] focus:border-transparent outline-none transition-all duration-200"
            />
            <textarea
              id="message"
              rows="4"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-xl p-3 text-sm sm:text-base focus:ring-2 focus:ring-[#A4CBC2] focus:border-transparent outline-none transition-all duration-200"
            ></textarea>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              disabled={formStatus.submitting}
              className={`w-full bg-gradient-to-r from-[#A4CBC2] to-[#7AA898] text-white font-semibold py-3 sm:py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 text-sm sm:text-base ${
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
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 group-hover:text-[#A58F67]" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Right Side Info (unchanged) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 sm:gap-8"
        >
          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {[
              {
                icon: MapPin,
                title: "Our Location",
                text: "Bahawalpur, Punjab, Pakistan",
                link: "https://maps.google.com/?q=Bahawalpur,Punjab,Pakistan",
              },
              {
                icon: Mail,
                title: "Email Us",
                text: "empowerzoneservices@gmail.com",
                link: "mailto:contact@yourcompany.com",
              },
              {
                icon: Phone,
                title: "Call Us",
                text: "+1 (718) 757-6928",
                link: "tel:+923001234567",
              },
              {
                icon: Clock,
                title: "Working Hours",
                text: "Mon–Fri:9AM–6PM",
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
                  info.link ? "hover:shadow-lg" : "cursor-default "
                } group`}
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#A4CBC2]/10 rounded-full">
                  <info.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#A4CBC2] group-hover:text-[#A58F67] transition-colors duration-300" />
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

          {/* Google Map */}
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-gray-200">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.4454802545156!2d71.67828987538242!3d29.39560277526056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b9d6db04a3d6b%3A0x5a0dff7df1b91a7e!2sBahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1692891234567!5m2!1sen!2s"
              width="100%"
              height="200"
              className="sm:h-[250px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center sm:items-start gap-4">
            <h3 className="text-gray-700 font-medium text-sm sm:text-base">
              Connect with us
            </h3>
            <div className="flex gap-4">
              {[
                {
                  icon: Twitter,
                  url: "https://twitter.com/yourcompany",
                  label: "Twitter",
                },
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/company/yourcompany",
                  label: "LinkedIn",
                },
                {
                  icon: Github,
                  url: "https://github.com/yourcompany",
                  label: "GitHub",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="p-2.5 sm:p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-[#A58F67]/10 transition-all duration-300 group"
                  aria-label={`Visit our ${social.label} profile`}
                >
                  <social.icon
                    size={18}
                    className="sm:w-5 sm:h-5 group-hover:text-[#A58F67] transition-colors duration-300"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
