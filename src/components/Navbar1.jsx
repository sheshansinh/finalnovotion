"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import NovotionButton from "@/components/ui/NovotionButton";

const NovotionNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About Us", href: "/about" },
    {
      id: "services",
      label: "Services",
      submenu: [
        { label: "Recruitment Process Outsourcing", href: "/services/rpo" },
        {
          label: "Career Support Services & Recruitment Facilitation",
          href: "/services/career-support",
        },
      ],
    },
    { id: "blog", label: "Blog", href: "/blog" },
    { id: "career", label: "Career", href: "/career" },
  ];

  // ✅ Scroll background effect - always show white background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200"
          : "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ✅ Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo/novotion_01.png"
              alt="Novotion Logo"
              width={150}
              height={32}
              className="rounded-lg"
            />
          </Link>

          {/* ✅ Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.submenu &&
                  link.submenu.some((sub) => pathname.startsWith(sub.href)));

              return (
                <div
                  key={link.id}
                  className="relative"
                  onMouseEnter={() => link.submenu && setIsServicesOpen(true)}
                  onMouseLeave={() => link.submenu && setIsServicesOpen(false)}
                >
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`relative px-6 py-3 rounded-xl transition-all duration-300 group font-medium text-sm flex items-center space-x-1 ${
                          isActive 
                            ? "text-blue-600 bg-blue-50" 
                            : "text-gray-800 hover:bg-gray-100"
                        }`}
                      >
                        <span>{link.label}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>

                        {/* ✅ Active underline */}
                        <span
                          className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
                            isActive
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        ></span>
                      </button>

                      {/* ✅ Dropdown */}
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                          {link.submenu.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`block px-6 py-3 text-gray-800 hover:bg-gray-50 transition-all duration-200 ${
                                pathname === item.href
                                  ? "bg-blue-50 text-blue-600 font-semibold"
                                  : ""
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative px-6 py-3 rounded-xl transition-all duration-300 group font-medium text-sm ${
                        isActive 
                          ? "text-blue-600 bg-blue-50" 
                          : "text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      ></span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* ✅ Desktop CTA */}
          <div className="hidden lg:block">
            <NovotionButton href="/contact" variant="primary">
              Contact Us
            </NovotionButton>
          </div>

          {/* ✅ Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 group"
          >
            <div className="relative flex flex-col items-center justify-center w-full h-full space-y-1.5">
              <span
                className={`block w-6 h-0.5 transform transition-all duration-300 bg-gray-800 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 transition-all duration-300 bg-gray-800 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 transform transition-all duration-300 bg-gray-800 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <div
          className={`absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 transform transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="px-6 py-8 space-y-3">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.submenu &&
                  link.submenu.some((sub) => pathname.startsWith(sub.href)));

              return (
                <div key={link.id}>
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`w-full px-6 py-4 rounded-xl text-gray-800 font-medium text-lg flex items-center justify-between border border-gray-200 hover:bg-gray-50 ${
                          isActive ? "bg-blue-50 text-blue-600" : ""
                        }`}
                      >
                        <span>{link.label}</span>
                        <svg
                          className={`w-5 h-5 transition-transform duration-300 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {isServicesOpen && (
                        <div className="ml-4 space-y-2">
                          {link.submenu.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`block px-6 py-3 rounded-xl text-gray-700 text-base border border-gray-200 hover:bg-gray-50 transition-all ${
                                pathname === item.href
                                  ? "bg-blue-50 text-blue-600"
                                  : ""
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-6 py-4 rounded-xl text-gray-800 font-medium text-lg border border-gray-200 hover:bg-gray-50 ${
                        isActive ? "bg-blue-50 text-blue-600" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              );
            })}

            {/* ✅ Mobile CTA */}
            <div className="pt-6">
              <NovotionButton href="/contact" variant="primary">
                Contact Us
              </NovotionButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NovotionNavbar;