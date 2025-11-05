"use client";
import React from "react";
import Link from "next/link";

const NovotionButton = ({
  href = "#",
  children,
  variant = "primary", // "primary" or "outline"
  className = "",
}) => {
  const baseClasses =
    "group relative inline-block px-6 py-3 md:px-8 md:py-4 font-semibold rounded-lg text-sm md:text-base overflow-hidden transform transition-all duration-300 hover:scale-105";

  const variants = {
    primary: `
      bg-white text-blue-900 shadow-lg
      hover:shadow-2xl
    `,
    outline: `
      border border-blue-800 text-blue-800
      hover:text-white
    `,
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {/* Default text */}
      <span className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
        {children}
      </span>

      {/* Background hover animation */}
      {variant === "primary" ? (
        <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      ) : (
        <div className="absolute inset-0 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      )}

      {/* Hover text */}
      <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        {children} →
      </span>
    </Link>
  );
};

export default NovotionButton;
