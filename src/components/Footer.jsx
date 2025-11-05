"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const NovotionFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

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
    console.log("Subscribing:", email);
    setEmail("");
  };

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
    services: [
      { label: "RPO Services", href: "/services/rpo" },
      { label: "Career Support", href: "/services/career-support" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cancellation & Refund", href: "/cancellation-and-refund" },
    ],
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "info@novotion.com",
      href: "mailto:info@novotion.com"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Address",
      value: "UK | USA | India",
      href: "#"
    }
  ];

  const socialLinks = [
    
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      href: "https://www.linkedin.com/company/novotion-services/?originalSubdomain=in",
    },
    
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      href: "https://www.instagram.com/novotioninc_/?hl=en",
    },
  ];

  return (
    <footer
      id="footer-container"
      className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Section - Takes full width on mobile */}
          <div
            className={`lg:col-span-4 transform transition-all duration-700 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <Link href="/" className="inline-block group mb-4 md:mb-6">
              <img
                src="/logo/cropped-novotion_01-e1738178048480 (1).png"
                alt="Novotion"
                width={160}
                height={36}
                className="w-40 md:w-44 lg:w-48 h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-gray-400 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              Novotion, established in 2021, provides specialized recruitment
              solutions across the UK and USA, supported by an India-based
              offshore team. We offer end-to-end Recruitment Process Outsourcing
              and Career Support Services for IT professionals.
            </p>

            {/* Contact Info - Mobile Optimized */}
            <div className="space-y-2 md:space-y-3 mb-6">
              <h3 className="text-white font-semibold text-base md:text-lg mb-3">Contact Us</h3>
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <div className="flex-shrink-0 mt-0.5 text-blue-400 group-hover:text-blue-300">
                    {contact.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500">{contact.label}</p>
                    <p className="text-sm md:text-base break-words">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

          </div>

          {/* Links Section - Better mobile grid */}
          <div className="md:col-span-1 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {Object.keys(footerLinks).map((sectionKey, index) => (
              <div
                key={sectionKey}
                className={`transform transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <h3 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">
                  {sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {footerLinks[sectionKey].map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright, Social, Powered By */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          
          {/* Mobile: Stacked layout */}
          <div className="flex flex-col space-y-4 md:hidden">
            {/* Social Links */}
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-center text-xs text-gray-500">
              &copy; 2025 Novotion. All rights reserved.
            </p>

            {/* Powered By */}
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <span>Powered by</span>
              <img
                src="/logo/GIPL_Vertical Logo.png"
                alt="Novotion"
                className="h-4 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Tablet & Desktop: Three-column layout */}
          <div className="hidden md:grid md:grid-cols-3 md:items-center md:gap-4">
            {/* Left: Copyright */}
            <p className="text-sm text-gray-500 text-left">
              &copy; 2025 Novotion Inc. All rights reserved.
            </p>

            {/* Center: Social Links */}
            <div className="flex justify-center gap-5 lg:gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Right: Powered By */}
            <div className="flex items-center justify-end gap-2 text-sm text-gray-500">
              <span>Powered by</span>
              <img
                src="/logo/GIPL_Vertical Logo.png"
                alt="Novotion"
                className="h-20 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default NovotionFooter;