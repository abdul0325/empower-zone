import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Heart,
  Shield,
  Users,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/services", label: "Why Choose Us" },
    { href: "/about", label: "Success Stories" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    { label: "SNAP (Food Stamps)", description: "Maximum nutrition benefits" },
    { label: "Cash Assistance", description: "Financial help for expenses" },
    { label: "Medicaid", description: "Healthcare coverage" },
    { label: "WIC Program", description: "Women, infants & children" },
    {
      label: "Application Assistance",
      description: "Full support from start to finish",
    },
    { label: "Denial Appeals", description: "Fight for your benefits" },
  ];

  const contactInfo = [
    { icon: Phone, label: "+1 (718) 757-6928", href: "tel:+17187576928" },
    {
      icon: MessageCircle,
      label: "WhatsApp Chat",
      href: "https://wa.me/17187576928",
    },
    {
      icon: Mail,
      label: "EmpowerZoneServices@gmail.com",
      href: "mailto:EmpowerZoneServices@gmail.com",
    },
    { icon: MapPin, label: "Serving New York Families", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#ADD9CE] to-[#3D7C88] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <Link
              to="/"
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Al Khaldi Law Firm Logo"
                  className="w-20 h-15 object-contain transform group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
                />
              </div>
            </Link>

            <p className="text-white/90 leading-relaxed text-sm">
              We help New York families navigate government benefit programs
              with ease. No stress, no endless forms, no waiting on hold. Your
              benefits made simple.
            </p>

            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
              <Heart className="w-5 h-5 text-[#C4E3E8]" />
              <span className="text-white text-sm font-medium">
                500+ Families Helped
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/20 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="group flex items-center space-x-2 text-white/80 hover:text-[#C4E3E8] transition-colors duration-300 text-sm"
                  >
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/20 pb-2">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-white/80 hover:text-[#C4E3E8] transition-colors duration-300"
                >
                  <div className="text-sm font-medium">{service.label}</div>
                  <div className="text-xs text-white/60">
                    {service.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/20 pb-2">
              Contact Us
            </h3>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="group flex items-center space-x-3 text-white/80 hover:text-[#C4E3E8] transition-colors duration-300 text-sm"
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 group-hover:border-[#C4E3E8]/50 transition-all duration-300 flex-shrink-0">
                    <contact.icon className="w-4 h-4" />
                  </div>
                  <span>{contact.label}</span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-white font-semibold mb-3 text-sm">
                Follow Us
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 hover:border-[#C4E3E8] hover:bg-[#C4E3E8]/20 text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Get Benefit Updates
                </h3>
                <p className="text-white/80 text-sm">
                  Subscribe for important program changes, deadline reminders,
                  and benefit tips.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-[#C4E3E8] focus:outline-none transition-colors duration-300 text-sm"
                />
                <button className="bg-[#C4E3E8] text-[#3D7C88] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-white/70 text-xs">
              <p>
                © 2024 Empower Zone. All rights reserved. Your Benefits. Your
                Rights. Your Advocate.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-6 text-center">
              <div>
                <div className="text-md font-bold text-[#C4E3E8]">98%</div>
                <div className="text-xs text-white/70">Success Rate</div>
              </div>
              <div>
                <div className="text-md font-bold text-[#C4E3E8]">500+</div>
                <div className="text-xs text-white/70">Families Helped</div>
              </div>
              <div>
                <div className="text-md font-bold text-[#C4E3E8]">$2M+</div>
                <div className="text-xs text-white/70">Benefits Secured</div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-4 text-white/70 text-xs">
              <Link
                to="/privacy-policy"
                className="hover:text-[#C4E3E8] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="hover:text-[#C4E3E8] transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/accessibility"
                className="hover:text-[#C4E3E8] transition-colors duration-300"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C4E3E8] via-[#5E9EA8] to-[#C4E3E8]"></div>
    </footer>
  );
};

export default Footer;
