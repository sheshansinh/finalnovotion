// // components/Home/Herosection.jsx
// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// // Minimal 3D Card Component
// const MinimalCard3D = ({ children, className = '' }) => {
//   const [rotate, setRotate] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const cardRef = useRef(null);

//   const handleMouseMove = (e) => {
//     if (!cardRef.current) return;
    
//     const card = cardRef.current;
//     const rect = card.getBoundingClientRect();
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;
//     const mouseX = e.clientX - centerX;
//     const mouseY = e.clientY - centerY;
    
//     const rotateY = (mouseX / (rect.width / 2)) * 2;
//     const rotateX = (mouseY / (rect.height / 2)) * -2;
    
//     setRotate({ x: rotateX, y: rotateY });
//   };

//   const handleMouseEnter = () => {
//     setIsHovering(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovering(false);
//     setRotate({ x: 0, y: 0 });
//   };

//   return (
//     <motion.div
//       ref={cardRef}
//       className={`relative ${className}`}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       animate={{
//         rotateX: rotate.x,
//         rotateY: rotate.y,
//         scale: isHovering ? 1.02 : 1,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 300,
//         damping: 20,
//       }}
//       style={{
//         transformStyle: "preserve-3d",
//       }}
//     >
//       <div 
//         className="relative bg-white rounded-2xl border border-gray-200 p-8 h-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300"
//         style={{
//           transform: 'translateZ(20px)',
//         }}
//       >
//         {children}
//       </div>
//     </motion.div>
//   );
// };

// const NovotionHero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const containerRef = useRef(null);
//   const totalSlides = 3;

//   const slides = [
//     {
//       title: "Transform Your Workforce",
//       subtitle: "Elite Recruitment Solutions",
//       description: "Connect with exceptional talent across UK & USA markets through our AI-powered recruitment platform. Where innovation meets human expertise.",
//       buttonText: "Discover Excellence",
//       buttonLink: "/services",
//       image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3",
//       accentColor: "from-gray-800 to-gray-600",
//       icon: (
//         <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//         </svg>
//       )
//     },
//     {
//       title: "Global Talent Gateway",
//       subtitle: "Borderless Recruitment", 
//       description: "Break geographical barriers with our multi-region operational support. Access premium talent pools across UK, USA, and emerging markets.",
//       buttonText: "Expand Globally",
//       buttonLink: "/about",
//       image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
//       accentColor: "from-gray-800 to-gray-600",
//       icon: (
//         <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       )
//     },
//     {
//       title: "Future-Ready Teams", 
//       subtitle: "Strategic Workforce Planning",
//       description: "Build resilient, innovative teams with our comprehensive recruitment process outsourcing and career support ecosystem.",
//       buttonText: "Build Tomorrow",
//       buttonLink: "/hire",
//       image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
//       accentColor: "from-gray-800 to-gray-600",
//       icon: (
//         <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//         </svg>
//       )
//     }
//   ];

//   const nextSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     }
//   };

//   const prevSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//     }
//   };

//   const goToSlide = (index) => {
//     if (!isAnimating && index !== currentSlide) {
//       setIsAnimating(true);
//       setCurrentSlide(index);
//     }
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => setIsAnimating(false), 800);
//     return () => clearTimeout(timer);
//   }, [currentSlide]);

//   useEffect(() => {
//     const autoPlay = setInterval(() => nextSlide(), 6000);
//     return () => clearInterval(autoPlay);
//   }, [currentSlide]);

//   const currentSlideData = slides[currentSlide];

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full h-screen overflow-hidden bg-white text-gray-900 select-none"
//     >
//       {/* Clean Background Layers */}
//       <div className="absolute inset-0 z-0">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
//               index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
//             }`}
//           >
//             <Image
//               src={slide.image}
//               alt={`Hero background ${index + 1}`}
//               fill
//               className="object-cover"
//               priority={index === 0}
//               sizes="100vw"
//             />
//             <div className="absolute inset-0 bg-white/90"></div>
//           </div>
//         ))}
//       </div>

//       {/* Subtle Grid Pattern */}
//       <div className="absolute inset-0 z-5 opacity-10">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `linear-gradient(#e5e5e5 1px, transparent 1px),
//                             linear-gradient(90deg, #e5e5e5 1px, transparent 1px)`,
//           backgroundSize: '50px 50px',
//         }}></div>
//       </div>

//       {/* Main Content Container */}
//       <div className="relative z-20 h-full flex items-center justify-center">
//         <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full">
            
//             {/* Left Content */}
//             <div className="space-y-8 lg:space-y-10 text-center lg:text-left">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="space-y-6"
//               >
//                 {/* Minimal Badge */}
//                 <div
//                   className={`inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-300 transform transition-all duration-700 ${
//                     isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
//                   }`}
//                   style={{ transitionDelay: '100ms' }}
//                 >
//                   <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentSlideData.accentColor} mr-3`}></div>
//                   <span className="text-sm md:text-base font-medium text-gray-600 tracking-wide">
//                     {currentSlideData.subtitle}
//                   </span>
//                 </div>

//                 {/* Clean Title */}
//                 <h1
//                   className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transform transition-all duration-700 ${
//                     isAnimating ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'
//                   }`}
//                   style={{ transitionDelay: '200ms' }}
//                 >
//                   <span className="text-gray-900">
//                     {currentSlideData.title.split(' ').slice(0, 2).join(' ')}
//                   </span>
//                   <br />
//                   <span className="text-gray-700">
//                     {currentSlideData.title.split(' ').slice(2).join(' ')}
//                   </span>
//                 </h1>

//                 {/* Description */}
//                 <p
//                   className={`text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 transform transition-all duration-700 ${
//                     isAnimating ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'
//                   }`}
//                   style={{ transitionDelay: '300ms' }}
//                 >
//                   {currentSlideData.description}
//                 </p>
//               </motion.div>

//               {/* Clean CTA Buttons */}
//               <div
//                 className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transform transition-all duration-700 ${
//                     isAnimating ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'
//                   }`}
//                   style={{ transitionDelay: '400ms' }}
//                 >
//                 <Link 
//                   href={currentSlideData.buttonLink}
//                   className="group relative px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
//                 >
//                   <span className="relative z-10 flex items-center gap-2">
//                     {currentSlideData.buttonText}
//                     <motion.span
//                       initial={{ x: 0 }}
//                       whileHover={{ x: 5 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       →
//                     </motion.span>
//                   </span>
//                   <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//                 </Link>
                
//                 <button className="group relative px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:border-gray-400 hover:bg-gray-50">
//                   <span className="relative z-10">Watch Demo</span>
//                 </button>
//               </div>

//               {/* Minimal Stats */}
//               <div
//                 className={`flex flex-wrap gap-6 lg:gap-8 justify-center lg:justify-start pt-6 border-t border-gray-200 transform transition-all duration-700 ${
//                   isAnimating ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'
//                 }`}
//                 style={{ transitionDelay: '500ms' }}
//               >
//                 {[
//                   { number: '500+', label: 'Organizations' },
//                   { number: '10K+', label: 'Professionals' },
//                   { number: '98%', label: 'Success Rate' }
//                 ].map((stat, index) => (
//                   <div key={stat.label} className="text-center lg:text-left">
//                     <div className="text-2xl md:text-3xl font-bold text-gray-900">
//                       {stat.number}
//                     </div>
//                     <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Visual with Minimal 3D */}
//             <div className="hidden lg:flex items-center justify-center">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="w-full max-w-md"
//               >
//                 <MinimalCard3D className="aspect-square">
//                   <div className="text-center space-y-6">
//                     {/* Icon */}
//                     <motion.div 
//                       className="w-16 h-16 mx-auto bg-gray-900 rounded-xl flex items-center justify-center"
//                       whileHover={{ 
//                         scale: 1.05,
//                         transition: { type: "spring", stiffness: 400, damping: 10 }
//                       }}
//                     >
//                       {currentSlideData.icon}
//                     </motion.div>

//                     {/* Text Content */}
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Excellence</h3>
//                       <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
//                         Premium talent solutions with seamless cross-border execution and support
//                       </p>
//                     </div>

//                     {/* Minimal Dots */}
//                     <div className="flex justify-center space-x-1">
//                       {[0, 1, 2].map((index) => (
//                         <motion.div
//                           key={index}
//                           className="w-1 h-1 rounded-full bg-gray-400"
//                           animate={{ 
//                             scale: [1, 1.2, 1],
//                             opacity: [0.6, 1, 0.6]
//                           }}
//                           transition={{
//                             duration: 1.5,
//                             repeat: Infinity,
//                             delay: index * 0.2,
//                             ease: "easeInOut"
//                           }}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </MinimalCard3D>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Clean Navigation Dots */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`transition-all duration-300 rounded-full cursor-pointer ${
//               index === currentSlide
//                 ? 'w-6 h-1.5 bg-gray-900'
//                 : 'w-1.5 h-1.5 bg-gray-400 hover:bg-gray-600'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Minimal Side Navigation */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm border border-gray-300 text-gray-700 hover:bg-white hover:shadow-md transition-all duration-300"
//         aria-label="Previous slide"
//       >
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm border border-gray-300 text-gray-700 hover:bg-white hover:shadow-md transition-all duration-300"
//         aria-label="Next slide"
//       >
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default NovotionHero;


// ----------------------------------------

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NovotionHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Color palette
  const colors = {
    primary: '#2563eb',      // blue-600
    primaryLight: '#3b82f6', // blue-500
    accent: '#7c3aed',       // violet-600
    neutral: '#1f2937',      // gray-800
    light: '#6b7280',        // gray-500
    background: '#f8fafc'    // slate-50
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute top-1/4 -left-10 w-96 h-96 bg-blue-100 rounded-full opacity-60 blur-3xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-1/3 -right-10 w-80 h-80 bg-violet-100 rounded-full opacity-40 blur-3xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          transition={{ delay: 4 }}
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-100 rounded-full opacity-30 blur-2xl"
        />

        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #1f2937 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 h-screen flex items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Enhanced Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/60 shadow-sm mb-10 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-gray-700 tracking-wide">
                Elite Global Recruitment
              </span>
            </div>
            <div className="w-px h-4 bg-gray-300" />
            <div className="text-xs text-gray-500 font-medium">Since 2018</div>
          </motion.div>

          {/* Enhanced Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-gray-900">
              Transform
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-700 bg-clip-text text-transparent">
              Your Workforce
            </span>
          </motion.h1>

          {/* Enhanced Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            Connect with exceptional talent across global markets through our AI-powered 
            <span className="font-medium text-gray-700"> recruitment platform</span>. Where innovation meets human expertise.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
          >
            <Link
              href="/hire"
              className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                Hire Elite Talent
                <motion.svg 
                  className="w-5 h-5"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </span>
              <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="/services"
              className="group px-10 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl bg-white/60 backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:bg-white hover:shadow-lg transform hover:scale-105"
            >
              <span className="flex items-center gap-3">
                Explore Services
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-gray-200/60"
          >
            {[
              { number: '500+', label: 'Global Organizations', color: 'from-blue-600 to-blue-500' },
              { number: '10K+', label: 'Professionals Placed', color: 'from-violet-600 to-violet-500' },
              { number: '98%', label: 'Client Satisfaction', color: 'from-cyan-600 to-cyan-500' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center group cursor-default">
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 font-medium tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-3 text-gray-400"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gradient-to-b from-blue-500 to-violet-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute top-20 right-20 hidden xl:block"
      >
        <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60 shadow-lg" />
      </motion.div>

      <motion.div
        variants={floatVariants}
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-40 left-20 hidden lg:block"
      >
        <div className="w-2 h-2 bg-violet-400 rounded-full opacity-40 shadow-lg" />
      </motion.div>
    </div>
  );
};

export default NovotionHero;