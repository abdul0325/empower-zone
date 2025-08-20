import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setScrolled(currentScrollPos > 50);

            if (currentScrollPos < 10) {
                setVisible(true);
            } else if (currentScrollPos < prevScrollPos) {
                setVisible(true);
            } else if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
                setVisible(false);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/services", label: "Services" },
        { href: "/contact", label: "Contact" }
    ];

    const MenuIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
    );

    const XIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    );

    const PhoneIcon = () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
    );

    return (
        <>
            <nav className={`absolute top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out transform ${
                visible ? 'translate-y-0' : '-translate-y-full'
            }`}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className={`transition-all duration-500 rounded-xl ${
                        scrolled
                            ? "bg-white/95 backdrop-blur-lg shadow-lg border border-[#5E9EA8]/20"
                            : "bg-gradient-to-r from-[#ADD9CE] to-[#ADD9CE] backdrop-blur-sm border border-[#5E9EA8]/30"
                    } px-6 py-3`}>
                        <div className="flex justify-between items-center">
                            {/* Logo */}
                               <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
                                <div className="relative">
                                    <img
                                        src="/logo.png"
                                        alt="Al Khaldi Law Firm Logo"
                                        className="w-20 h-15 object-contain transform group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
                                    />
                                </div>
                                </Link>

                            {/* Desktop Navigation */}
                            <div className="hidden lg:flex items-center space-x-1">
                                {navLinks.map((link, index) => (
                                    <div key={index} className="relative group">
                                        <Link
                                            to={link.href}
                                            className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                                                scrolled
                                                    ? "text-black hover:bg-[#C4E3E8]/20"
                                                    : "text-black hover:bg-white/10"
                                            }`}
                                        >
                                            {link.label}
                                            <div className="absolute inset-x-2 bottom-0 h-0.5 bg-[#C4E3E8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            {/* CTA & Mobile Menu */}
                            <div className="flex items-center space-x-3">
                                <a 
                                    href="tel:+17187576928" 
                                    className="hidden md:flex items-center space-x-2 bg-white text-[#5E9EA8] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg"
                                >
                                    <PhoneIcon />
                                    <span>Call Now</span>
                                </a>

                                {/* Mobile Menu Button */}
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                                        scrolled
                                            ? "text-[#3D7C88] hover:bg-[#C4E3E8]/20"
                                            : "text-white hover:bg-white/10"
                                    }`}
                                >
                                    {isOpen ? <XIcon /> : <MenuIcon />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}>
                    <div className="bg-white/95 backdrop-blur-xl border-t border-[#5E9EA8]/20 mx-4 mt-2 rounded-xl shadow-xl">
                        <div className="p-6 space-y-1">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.href}
                                    className="block px-4 py-3 text-[#3D7C88] hover:text-[#5E9EA8] hover:bg-[#C4E3E8]/20 rounded-lg text-sm font-medium transition-all duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <a 
                                href="tel:+17187576928" 
                                className="w-full flex items-center justify-center space-x-2 bg-[#5E9EA8] text-white px-4 py-3 rounded-lg text-sm font-medium mt-4 shadow-lg"
                            >
                                <PhoneIcon />
                                <span>Call Now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
