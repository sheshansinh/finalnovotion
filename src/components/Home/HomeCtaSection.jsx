'use client';

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NovotionButton from '../ui/NovotionButton';

const NovotionCta = () => {
  const textControls = useAnimation();
  const imageControls = useAnimation();

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Lower threshold for mobile
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Lower threshold for mobile
  });

  React.useEffect(() => {
    if (textInView) {
      textControls.start("visible");
    }
  }, [textControls, textInView]);

  React.useEffect(() => {
    if (imageInView) {
      imageControls.start("visible");
    }
  }, [imageControls, imageInView]);

  const textVariants = {
    hidden: { opacity: 0, y: 30 }, // Changed from x to y for mobile
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        staggerChildren: 0.1, // Faster stagger for mobile
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 }, // Smaller movement for mobile
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
      }
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 }, // Changed from x to y for mobile
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <div className="w-full bg-white text-gray-900 overflow-hidden relative py-8 md:py-12 lg:py-16">
      {/* Background patterns - optimized for mobile */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div 
          className="absolute top-10 left-5 w-40 h-40 md:w-80 md:h-80 bg-blue-500 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div 
          className="absolute bottom-10 right-5 w-40 h-40 md:w-80 md:h-80 bg-cyan-400 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Mobile-first: Image first, then content */}
        <div className="flex flex-col items-center space-y-6 md:space-y-8 lg:flex-row-reverse lg:space-y-0 lg:space-x-12 lg:space-x-reverse">

          {/* Image Section - Appears first on mobile */}
          <motion.div
            ref={imageRef}
            initial="hidden"
            animate={imageControls}
            variants={imageVariants}
            className="w-full flex justify-center lg:flex-1 lg:justify-start order-1 lg:order-2"
          >
            <img
              src="/image/Gemini_Generated_Image_88iugl88iugl88iu-removebg-preview.png" 
              alt="Novotion Recruitment Solutions"
              className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </motion.div>

          {/* Text Content - Appears second on mobile */}
          <motion.div
            ref={textRef}
            initial="hidden"
            animate={textControls}
            variants={textVariants}
            className="w-full text-center lg:text-left lg:flex-1 order-2 lg:order-1"
          >
            {/* Headline - Mobile optimized sizing */}
            <motion.h2 
              variants={itemVariants}
              className="text-xl leading-tight sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-3 md:mb-4"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-black">
                Ready to Transform Your Recruitment Strategy or Advance Your IT Career?
              </span>
            </motion.h2>

            {/* Decorative line */}
            <motion.div 
              variants={itemVariants}
              className="h-1 w-12 md:w-16 lg:w-20 bg-gradient-to-r from-blue-800 to-black rounded-full mx-auto lg:mx-0 mb-3 md:mb-4 lg:mb-6"
            ></motion.div>

            {/* First paragraph - Mobile optimized text */}
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-3 md:mb-4 lg:mb-6"
            >
              Whether you represent an organization in the UK or USA seeking to optimize hiring 
              operations, scale recruitment capacity, or access specialized talent pools—or you're 
              an IT professional in the USA market pursuing your next contract opportunity, seeking 
              project placements, or looking for expert support in marketing your technical skills.
            </motion.p>

            {/* Second paragraph */}
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6 lg:mb-8"
            >
              Novotion is positioned to support your objectives with proven methodologies, 
              dedicated expertise, and genuine commitment to your success. Our teams across 
              the UK, USA, and India are ready to begin conversations about your specific needs, 
              challenges, and goals.
            </motion.p>

            {/* CTA Buttons - Mobile first stacking */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col space-y-3 sm:space-y-4 md:flex-row md:space-y-0 md:space-x-4 lg:space-x-6 justify-center lg:justify-start"
            >
              
              {/* For IT Professionals Button - Full width on mobile */}
              <NovotionButton href="/contect" variant="outline">
              Partner With Us
            </NovotionButton>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default NovotionCta;