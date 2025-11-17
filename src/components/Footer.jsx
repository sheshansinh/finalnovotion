"use client";

import React, { useState, useEffect } from "react";
// Removed import Link from "next/link"; 
import { Send, Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react'; // Using lucide-react for cleaner icons

// Function to safely show a non-blocking message instead of using alert()
const showMessage = (message) => {
    console.log(message);
    // In a production app, you would use a Toast/Snackbar component here.
};

const NovotionFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Intersection Observer for animation visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById("footer-container");
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    // Mock subscription logic
    setTimeout(() => {
      showMessage(`Thank Tyou for subscribing, ${email}!`);
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contect" }, // Added Contact Us link
    ],
    services: [
      { label: "RPO Services", href: "/services/rpo" },
      { label: "Career Support", href: "/services/career-support" },
      // Added links to utilize the space fully
   
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cancellation & Refund", href: "/cancellation-and-refund" },
    ],
  };

  // 1. Immediate Contact Info (Email and Phone) - MOVED TO RIGHT SIDE
  const immediateContact = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "info@novotionservices.com",
      href: "mailto:info@novotionservices.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 786 652 3950",
      href: "tel:+17866523950",
    },
  ];

  // 2. Office Locations - STAYING ON LEFT SIDE
  const officeLocations = [
    {
      label: "USA Office",
      value: "7345 W, Sand Lake RD, STE 210 Orlando, FL 32819",
      href: "https://www.google.com/maps/place/7345+W+Sand+Lake+Rd,+Orlando,+FL+32819,+USA/@28.4508988,-81.4825085,17z/data=!3m1!4b1!4m6!3m5!1s0x88e77f8cdcae4e5b:0x36b85d1a8f629306!8m2!3d28.4508988!4d-81.4825085!16s%2Fg%2F11lf3twcjq?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      label: "India Office",
      value: "FOURTH FLOOR,STREEBO HOUSE,NR DAV SCHOOL,OFF S.G. HIGHWAY,DAV International School,MAKARBA,Ahmedabad District: Ahmedabad,Gujarat 380051",
      href: "https://www.google.com/maps/place/Streebo+House/@22.9937284,72.50161,17z/data=!3m1!4b1!4m6!3m5!1s0x395e9ac2f7b9ff45:0x6780bb57e87d072c!8m2!3d22.9937284!4d72.50161!16s%2Fg%2F1hc4r7_jm?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/company/novotion-services/?originalSubdomain=in",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/novotioninc_/?hl=en",
    },
  ];

  return (
    <footer
      id="footer-container"
      className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden"
    >
      {/* Background gradient animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Main Grid: 4-column (Brand/Office) + 8-column (Links/Contact/Newsletter) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Column 1 (lg:col-span-4): Brand, Description, and Office Addresses (Addresses stay here) */}
          <div
            className={`lg:col-span-4 transform transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Logo - using <a> tag */}
            <a href="/" className="inline-block group mb-4 md:mb-6">
              <img
                // Placeholder image for consistency; use your actual logo path here
                src="/logo/cropped-novotion_01-e1738178048480 (1).png"
                alt="Novotion"
                width={180}
                height={40}
                className="w-40 md:w-44 lg:w-48 h-auto transition-transform duration-300 group-hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/180x40/1f2937/FFFFFF?text=NOVOTION"; }}
              />
            </a>

            <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base max-w-md">
              Novotion, established in 2021, provides specialized recruitment
              solutions across the UK and USA, supported by an India-based
              offshore team. We offer end-to-end Recruitment Process Outsourcing
              and Career Support Services for IT professionals.
            </p>

            {/* Office Locations - STAYS HERE */}
            <div className="space-y-4">
                <h3 className="text-white font-semibold text-base md:text-lg mb-4">
                  Office Locations
                </h3>
                {officeLocations.map((office, index) => (
                    <a
                        key={index}
                        href={office.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                    >
                        <div className="flex-shrink-0 mt-1 text-blue-400 group-hover:text-blue-300">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                            <p className="text-xs text-gray-500">{office.label}</p>
                            <p className="text-sm md:text-base break-words font-medium">
                                {office.value}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
          </div>

          {/* Column 2 (lg:col-span-8): Links and Contact/Newsletter */}
          <div className="md:col-span-1 lg:col-span-8">
            {/* Inner Grid: 3 Link Columns + 1 Contact/Newsletter Column (total 4 columns for full utilization) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-0">
              
              {/* Link Columns (Company, Services, Legal) */}
              {Object.keys(footerLinks).map((sectionKey, index) => (
                <div
                  key={sectionKey}
                  className={`transform transition-all duration-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <h3 className="text-white font-bold mb-4 text-base md:text-lg">
                    {sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks[sectionKey].map((link) => (
                      <li key={link.label}>
                        {/* Using <a> tag */}
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base block hover:pl-1"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* 4th Column: Immediate Contact (Email/Phone) and Newsletter (Fills the last column space) */}
              <div
                className={`col-span-2 sm:col-span-1 transform transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                {/* Immediate Contact (Email/Phone) - MOVED HERE */}
                <h3 className="text-white font-bold mb-4 text-base md:text-lg">
                  Get In Touch
                </h3>
                <div className="space-y-4 mb-8">
                    {immediateContact.map((contact, index) => (
                        <a
                            key={index}
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                        >
                            <div className="flex-shrink-0 text-blue-400 group-hover:text-blue-300">
                                {contact.icon}
                            </div>
                            <p className="text-sm md:text-base break-words font-medium">
                                {contact.value}
                            </p>
                        </a>
                    ))}
                </div>

              
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Perfectly Aligned and Balanced */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:grid md:grid-cols-3 md:items-center md:justify-between md:gap-4 text-center md:text-left">
            
            {/* Copyright */}
            <p className="text-sm text-gray-500 order-3 md:order-1 mt-4 md:mt-0">
              &copy; 2025 Novotion Services LLP. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6 order-2 md:order-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-transform duration-300 transform hover:scale-125"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Powered By */}
            <div className="flex items-center justify-center md:justify-end gap-2 text-sm text-gray-500 order-1 md:order-3">
              <span className="text-gray-400">Powered by</span>
              <a href="https://gohilinfotech.com/" target="_blank" rel="noopener noreferrer">
                {/* Fallback/Placeholder for the GIPL Logo */}
                <img
                  src="/logo/GIPL_Vertical Logo.png"
                  alt="Gohil Infotech"
                  className="h-20 opacity-70 hover:opacity-100 transition-opacity"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x32/1f2937/9CA3AF?text=GIPL"; }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NovotionFooter;