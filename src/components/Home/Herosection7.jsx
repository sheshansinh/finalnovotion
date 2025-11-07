'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const NovotionHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalSlides = 3;

  const slides = [
    {
      title: "Elevate Your Talent",
      subtitle: "Strategic Recruitment",
      description: "AI-powered talent acquisition meets human expertise. Connect with exceptional professionals across global markets.",
      buttonText: "Explore Solutions",
      buttonLink: "/services",
    },
    {
      title: "Global Talent Gateway", 
      subtitle: "Borderless Excellence",
      description: "Seamlessly access premium talent pools across UK, USA, and emerging markets with our multi-region operational support.",
      buttonText: "Go Global",
      buttonLink: "/about",
    },
    {
      title: "Future-Ready Teams",
      subtitle: "Strategic Workforce", 
      description: "Build resilient, high-performing teams with our comprehensive recruitment process outsourcing and talent development ecosystem.",
      buttonText: "Start Building",
      buttonLink: "/hire",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px),
                             linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="max-w-2xl">
              
              {/* Subtitle */}
              <motion.div
                key={`subtitle-${currentSlide}`}
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-1 h-8 bg-gray-300" />
                <span className="text-sm font-medium tracking-widest text-gray-500 uppercase">
                  {currentSlideData.subtitle}
                </span>
              </motion.div>

              {/* Title */}
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`title-${currentSlide}`}
                  className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 leading-tight mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.7 }}
                >
                  {currentSlideData.title}
                </motion.h1>
              </AnimatePresence>

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${currentSlide}`}
                  className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  {currentSlideData.description}
                </motion.p>
              </AnimatePresence>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Link 
                  href={currentSlideData.buttonLink}
                  className="group relative px-8 py-4 bg-gray-900 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:bg-gray-800 hover:shadow-lg"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {currentSlideData.buttonText}
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                
                <button className="group px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-lg transition-all duration-300 hover:border-gray-400 hover:bg-gray-50 hover:shadow-sm">
                  <span className="flex items-center gap-3">
                    View Case Studies
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="flex flex-wrap gap-8 pt-8 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {[
                  { number: '500+', label: 'Global Clients' },
                  { number: '10K+', label: 'Professionals Placed' },
                  { number: '98%', label: 'Client Satisfaction' }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <div className="text-2xl font-light text-gray-900">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-500 mt-1 font-light tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Interactive Visual Element */}
            <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
              <motion.div 
                className="relative w-full h-full max-w-md"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                {/* Main Floating Nodes */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{ 
                    rotateY: isHovered ? 180 : 0,
                    scale: isHovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                  {/* Central Node */}
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full shadow-2xl flex items-center justify-center cursor-pointer"
                    animate={{
                      boxShadow: [
                        "0 0 0 0px rgba(0,0,0,0.1)",
                        "0 0 0 20px rgba(0,0,0,0.05)",
                        "0 0 0 0px rgba(0,0,0,0.1)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div
                      className="w-3 h-3 bg-white rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Orbiting Nodes */}
                  {[0, 1, 2].map((index) => (
                    <motion.div
                      key={index}
                      className="absolute w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                      animate={{
                        x: Math.cos(index * (2 * Math.PI / 3)) * 120,
                        y: Math.sin(index * (2 * Math.PI / 3)) * 120,
                        scale: currentSlide === index ? 1.2 : 1,
                        borderColor: currentSlide === index ? "#000" : "#d1d5db",
                      }}
                      whileHover={{ 
                        scale: 1.3,
                        backgroundColor: "#f8fafc",
                        borderColor: "#000"
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-gray-600 rounded-full"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: index * 0.5 
                        }}
                      />
                    </motion.div>
                  ))}

                  {/* Connection Lines */}
                  <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    {[0, 1, 2].map((index) => (
                      <motion.line
                        key={index}
                        x1="50%"
                        y1="50%"
                        x2={`${50 + Math.cos(index * (2 * Math.PI / 3)) * 60}%`}
                        y2={`${50 + Math.sin(index * (2 * Math.PI / 3)) * 60}%`}
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-gray-300"
                        animate={{ 
                          opacity: [0.3, 0.7, 0.3],
                          strokeDasharray: ["5,5", "20,5", "5,5"]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      />
                    ))}
                  </svg>
                </motion.div>

                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-gray-400 rounded-full"
                    animate={{
                      x: [0, Math.random() * 100 - 50, 0],
                      y: [0, Math.random() * 100 - 50, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                    style={{
                      left: `${40 + Math.random() * 20}%`,
                      top: `${30 + Math.random() * 40}%`,
                    }}
                  />
                ))}

                {/* Interactive Tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        Explore Talent Connections
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-6 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200">
          
          {/* Slide Dots */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-500 rounded-full cursor-pointer ${
                  index === currentSlide
                    ? 'w-8 bg-gray-900'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                } h-2`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-1">
            <button
              onClick={prevSlide}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all duration-300"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide Counter */}
          <div className="text-sm text-gray-500 font-light">
            <span className="text-gray-900">0{currentSlide + 1}</span>
            <span className="mx-1">/</span>
            <span>0{totalSlides}</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Right Side */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
        <motion.div
          className="flex flex-col items-center gap-2 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-xs font-light tracking-wider uppercase rotate-90 origin-center translate-y-8">
            Scroll
          </span>
          <motion.div
            className="w-px h-16 bg-gray-300"
            animate={{ 
              height: [16, 32, 16],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default NovotionHero;