"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
      href: "#", // Changed from "/services" to "#" to prevent navigation
      submenu: [
        { label: "Recruitment Process Outsourcing", href: "/services/rpo" },
        {
          label: "Career Support Services & Recruitment Facilitation",
          href: "/services/career-support",
        },
      ],
    },
    { id: "blog", label: "Blog", href: "/blog" },
    { id: "career", label: "Career", href: "/careeer" },
  ];

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  // Handle services click for desktop
  const handleServicesClick = (e) => {
    e.preventDefault(); // Prevent navigation
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/logo/cropped-novotion_01-e1738178048480 (1).png"
                alt="Novotion"
                width={150}
                height={32}
                className="rounded-lg"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div
                  key={link.id}
                  className="relative services-dropdown"
                  onMouseEnter={() => link.submenu && setIsServicesOpen(true)}
                  onMouseLeave={() => link.submenu && setIsServicesOpen(false)}
                >
                  {link.submenu ? (
                    // Services dropdown - no navigation on main link
                    <div className="relative">
                      <button
                        onClick={handleServicesClick}
                        className={`relative px-6 py-3 rounded-xl transition-all duration-300 group font-medium text-sm flex items-center space-x-1 cursor-pointer ${
                          isScrolled
                            ? "text-gray-700 hover:bg-gray-100"
                            : "text-white hover:bg-white/10"
                        } ${
                          pathname.startsWith("/services/rpo") ||
                          pathname.startsWith("/services/career-support")
                            ? "bg-black/10"
                            : ""
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

                        {/* Animated underline */}
                        <span
                          className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
                            pathname.startsWith("/services/rpo") ||
                            pathname.startsWith("/services/career-support")
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        ></span>
                      </button>

                      {/* Services Dropdown Menu - appears on hover */}
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200 py-2">
                          {link.submenu.map((subItem, index) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block px-6 py-3 text-gray-700 hover:bg-gray-50 transition-all duration-200 ${
                                index === 0 ? "rounded-t-xl" : ""
                              } ${
                                index === link.submenu.length - 1
                                  ? "rounded-b-xl"
                                  : ""
                              } ${
                                pathname === subItem.href
                                  ? "bg-blue-50 text-blue-600"
                                  : ""
                              }`}
                            >
                              <div className="font-medium">{subItem.label}</div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // Regular link
                    <Link
                      href={link.href}
                      className={`relative px-6 py-3 rounded-xl transition-all duration-300 group font-medium text-sm ${
                        isScrolled
                          ? "text-gray-700 hover:bg-gray-100"
                          : "text-white hover:bg-white/10"
                      } ${pathname === link.href ? "bg-black/10" : ""}`}
                    >
                      {link.label}

                      {/* Animated underline */}
                      <span
                        className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
                          pathname === link.href
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      ></span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/contect">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transform transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 group"
            >
              <div className="relative flex flex-col items-center justify-center w-full h-full space-y-1.5">
                <span
                  className={`block w-6 h-0.5 transform transition-all duration-300 ${
                    isScrolled ? "bg-gray-900" : "bg-white"
                  } ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                ></span>
                <span
                  className={`block w-6 h-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-gray-900" : "bg-white"
                  } ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                  className={`block w-6 h-0.5 transform transition-all duration-300 ${
                    isScrolled ? "bg-gray-900" : "bg-white"
                  } ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute top-20 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-white/10 transform transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="px-6 py-8 space-y-2">
            {navLinks.map((link, index) => (
              <div key={link.id}>
                {link.submenu ? (
                  // Mobile Services dropdown - click to expand
                  <div className="space-y-2">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`w-full px-6 py-4 rounded-xl text-white font-medium text-lg transform transition-all duration-300 border border-white/10 hover:border-white/30 hover:bg-white/5 flex items-center justify-between ${
                        pathname.startsWith("/services/rpo") ||
                        pathname.startsWith("/services/career-support")
                          ? "bg-white/10 border-white/30"
                          : ""
                      } ${
                        isMobileMenuOpen
                          ? "translate-x-0 opacity-100"
                          : "translate-x-full opacity-0"
                      }`}
                      style={{
                        transitionDelay: isMobileMenuOpen
                          ? `${index * 100}ms`
                          : "0ms",
                      }}
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

                    {/* Mobile Submenu */}
                    {isServicesOpen && (
                      <div className="ml-4 space-y-2">
                        {link.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`block px-6 py-3 rounded-xl text-white/80 font-medium text-base transform transition-all duration-300 border border-white/5 hover:border-white/20 hover:bg-white/5 ${
                              pathname === subItem.href
                                ? "bg-white/10 border-white/20"
                                : ""
                            } ${
                              isMobileMenuOpen
                                ? "translate-x-0 opacity-100"
                                : "translate-x-full opacity-0"
                            }`}
                            style={{
                              transitionDelay: isMobileMenuOpen
                                ? `${index * 100 + subIndex * 50 + 100}ms`
                                : "0ms",
                            }}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm">{subItem.label}</span>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                className="opacity-50"
                              >
                                <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Regular mobile link
                  <Link
                    href={link.href}
                    className={`block px-6 py-4 rounded-xl text-white font-medium text-lg transform transition-all duration-300 border border-white/10 hover:border-white/30 hover:bg-white/5 ${
                      pathname === link.href
                        ? "bg-white/10 border-white/30"
                        : ""
                    } ${
                      isMobileMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-full opacity-0"
                    }`}
                    style={{
                      transitionDelay: isMobileMenuOpen
                        ? `${index * 100}ms`
                        : "0ms",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{link.label}</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="opacity-50"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  </Link>
                )}
              </div>
            ))}

            <div
              className={`pt-4 transform transition-all duration-500 ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <Link href="/contect" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transform transition-all duration-300">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NovotionNavbar;
