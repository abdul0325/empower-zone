import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Set scrolled state for styling
            setScrolled(currentScrollPos > 50);

            // Show navbar when at top or scrolling up, hide when scrolling down
            if (currentScrollPos < 10) {
                // Always show at top of page
                setVisible(true);
            } else if (currentScrollPos < prevScrollPos) {
                // Scrolling up - show navbar
                setVisible(true);
            } else if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
                // Scrolling down and past 100px - hide navbar
                setVisible(false);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services", },
        
        { href: "/blogs", label: "Blog" },
    ];

    const serviceCategories = [
        {
            title: "Corporates",
            description: "Legal services for businesses and corporations",
            href: "/services/corporate-services",
            slug: "corporate-services"
        },
        {
            title: "Government/Semi-government",
            description: "Legal support for government entities",
            href: "/services/government-services",
            slug: "government-services"
        },
        {
            title: "Individuals",
            description: "Personal legal services for individuals",
            href: "/services/individual-services",
            slug: "individual-services"
        }
    ];

    // SVG icons to replace lucide-react imports
    const MenuIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
    );

    const XIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    );

    const PhoneIcon = () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
    );

    const ChevronDownIcon = ({ isOpen }) => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );

    return (
        <>
            {/* Main Elegant Navbar */}
            <nav className={`fixed w-full z-50 transition-all duration-700 ease-in-out transform ${
                visible ? 'translate-y-0' : '-translate-y-full'
            }`}>
                <div className="max-w-6xl   mx-auto px-8 py-4">
                    <div className={`transition-all  duration-700 rounded-2xl ${
                        scrolled
                            ? "bg-white/90 backdrop-blur-lg shadow-lg text-black border border-[#c0b688]/10"
                            : "bg-gradient-to-br from-[#b7e9dc] to-[#99b9b2]  backdrop-blur-sm border  border-gray-300"
                    } px-6 py-3`}>
                        <div className="flex justify-between  items-center">

                            {/* Refined Logo */}
                            <a href="/" className="flex items-center space-x-3 group cursor-pointer">
                                <div className="relative">
                                    <img
                                        src="/logo2.png"
                                        alt="Al Khaldi Law Firm Logo"
                                        className="w-40 h-15 object-contain transform group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
                                    />
                                </div>
                       
                            </a>

                            {/* Elegant Desktop Navigation */}
                            <div className="hidden lg:flex items-center space-x-1">
                                {navLinks.map((link, index) => (
                                    <div key={index} className="relative group">
                                        {link.hasDropdown ? (
                                            <div
                                                className="relative"
                                                onMouseEnter={() => setServicesDropdownOpen(true)}
                                                onMouseLeave={() => setServicesDropdownOpen(false)}
                                            >
                                                <button
                                                    className={`flex items-center  space-x-1 px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 group ${
                                                        scrolled
                                                            ? "text-[#494c52] hover:text-[#9f8660] hover:bg-[#c0b688]/5"
                                                            : " hover:text-[#c0b688] hover:bg-white/5"
                                                    }`}
                                                    style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                                                >
                                                    <span className="text-white">{link.label}</span>
                                                    <ChevronDownIcon isOpen={servicesDropdownOpen} />
                                                </button>

                                                {/* Dropdown Menu */}
                                               

                                                <div className="absolute inset-x-2 bottom-0 h-0.5 bg-gradient-to-r from-[#9f8660] to-[#c0b688] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
                                            </div>
                                        ) : (
                                            <a
                                                href={link.href}
                                                className={`relative px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 group ${
                                                    scrolled
                                                        ? "text-white hover:text-[#9f8660] hover:bg-[#c0b688]/5"
                                                        : "text-black hover:text-[#c0b688] hover:bg-white/5"
                                                }`}
                                                style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                                            >
                                                {link.label}
                                                <div className="absolute inset-x-2 bottom-0 h-0.5 bg-gradient-to-r from-[#9f8660] to-[#c0b688] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Refined CTA & Mobile Menu */}
                            <div className="flex items-center space-x-3">
                                <a href="/contact" className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white px-5 py-2.5 rounded-xl text-sm font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
                                    <PhoneIcon />
                                    <span>Contact</span>
                                </a>

                                {/* Elegant Mobile Menu Button */}
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                                        scrolled
                                            ? "text-[#494c52] hover:bg-[#c0b688]/10"
                                            : "text-white hover:bg-white/10"
                                    }`}
                                >
                                    {isOpen ? <XIcon /> : <MenuIcon />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Refined Mobile Menu */}
                <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
                    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}>
                    <div className="bg-white/95 backdrop-blur-xl border-t border-[#c0b688]/20 mx-8 mt-2 rounded-2xl shadow-xl">
                        <div className="p-6 space-y-1">
                            {navLinks.map((link, index) => (
                                <div key={index}>
                                    {link.hasDropdown ? (
                                        <div>
                                            <button
                                                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                                                className="w-full flex items-center justify-between px-4 py-3 text-white hover:text-[#9f8660] hover:bg-[#c0b688]/5 rounded-xl text-sm font-medium transition-all duration-300 tracking-wide"
                                                style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                                            >
                                                <span>{link.label}</span>
                                                <ChevronDownIcon isOpen={servicesDropdownOpen} />
                                            </button>

                                            <div className={`overflow-hidden transition-all duration-300 ${
                                                servicesDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}>
                                                <div className="ml-4 mt-2 space-y-1">
                                                    {serviceCategories.map((service, serviceIndex) => (
                                                        <a
                                                            key={serviceIndex}
                                                            href={service.href}
                                                            className="block px-4 py-2 text-black hover:text-[#9f8660] hover:bg-[#c0b688]/5 rounded-lg text-sm transition-all duration-300"
                                                            onClick={() => setIsOpen(false)}
                                                            style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                                                        >
                                                            {service.title}
                                                        </a>
                                                    ))}
                                                    <a
                                                        href="/services"
                                                        className="block px-4 py-2 text-[#9f8660] hover:text-[#494c52] hover:bg-[#c0b688]/5 rounded-lg text-sm font-medium transition-all duration-300"
                                                        onClick={() => setIsOpen(false)}
                                                        style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                                                    >
                                                        View All Services
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="block px-4 py-3 text-[#494c52] hover:text-[#9f8660] hover:bg-[#c0b688]/5 rounded-xl text-sm font-medium transition-all duration-300 tracking-wide"
                                            onClick={() => setIsOpen(false)}
                                            style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                                        >
                                            {link.label}
                                        </a>
                                    )}
                                </div>
                            ))}
                            <a href="/contact" className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#9f8660] to-[#c0b688] text-white px-5 py-3 rounded-xl text-sm font-medium mt-4 shadow-lg" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
                                <PhoneIcon />
                                <span>Contact</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}