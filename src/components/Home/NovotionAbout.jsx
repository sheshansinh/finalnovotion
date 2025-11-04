"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sliderImages = [
  "https://images.unsplash.com/photo-1581093588401-22d576a5b67a?q=80&w=2940&auto=format&fit=crop", // professionals collaboration
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop", // global offices
  "https://images.unsplash.com/photo-1598257006629-8c76e62d39ec?q=80&w=2940&auto=format&fit=crop", // tech meeting
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2940&auto=format&fit=crop", // teamwork
];

const NovotionAbout = () => {
  const textControls = useAnimation();
  const imageControls = useAnimation();

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderContainerRef = useRef(null);

  // animations trigger
  useEffect(() => {
    if (textInView) textControls.start("visible");
  }, [textInView]);

  useEffect(() => {
    if (imageInView) imageControls.start("visible");
  }, [imageInView]);

  // auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isDragging]);

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    const width = sliderContainerRef.current?.offsetWidth || 1;
    const dragDistance = info.offset.x / width;
    if (dragDistance < -0.2) {
      setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
    } else if (dragDistance > 0.2) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
      );
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };
  const imageVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <div className="mt-12 mb-12 light-section text-black relative w-full bg-white text-gray-900 overflow-hidden flex items-center justify-center">
      {/* background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* left: text */}
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={textControls}
          variants={textVariants}
          className="flex-1 text-center lg:text-left"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-black">
              Your Strategic RPO Partner Delivering Recruitment Excellence
              Across UK and USA Markets
            </span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="h-1 w-16 bg-gradient-to-r from-blue-800 to-black rounded-full mx-auto lg:mx-0 mb-6"
          ></motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-3 text-sm sm:text-base text-gray-600 max-5w-xl mx-auto lg:mx-0"
          >
            <p>
              Since 2021, Novotion has been redefining recruitment for
              organizations and IT professionals across the UK and USA.
            </p>
            <p>
              We specialize in two core areas:{" "}
              <strong>Recruitment Process Outsourcing</strong> for UK and USA
              businesses, and{" "}
              <strong>Career Support & Recruitment Facilitation</strong> for IT
              professionals in the USA.
            </p>
            <p>
              Unlike traditional staffing firms, we go beyond resume matching —
              understanding business goals, industry challenges, and talent
              strategies while helping professionals market their skills and
              secure contract roles.
            </p>
            <p>
              As an <strong>e-Verified company</strong> with strict data
              security standards, Novotion operates with transparency and
              measurable impact.
            </p>
            <p>
              With <strong>500+ clients</strong>,{" "}
              <strong>10,000+ placements</strong>, and presence across{" "}
              <strong>15+ industries</strong>, our India-based support team
              provides 24/7 recruitment operations for our global network.
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mt-6"
          >
            <a
              href="/about-us"
              className="group relative px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg text-sm sm:text-base md:text-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
                Learn About Our Approach
              </span>
              <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn About Our Approach →
              </span>
            </a>

            <a
              href="/services"
              className="group relative px-6 py-3 border border-blue-800 text-blue-800 font-semibold rounded-lg text-sm sm:text-base md:text-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              {/* Background transition */}
              <div className="absolute inset-0 bg-blue-800 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>

              {/* Default text */}
              <span className="relative z-10 block transition-opacity duration-300 group-hover:opacity-0">
                Explore Services
              </span>

              {/* Hover text */}
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                Explore Services →
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* right: image slider */}
        <motion.div
          ref={imageRef}
          initial="hidden"
          animate={imageControls}
          variants={imageVariants}
          className="flex-1 w-full max-w-md lg:max-w-lg"
        >
          <div
            ref={sliderContainerRef}
            className="relative w-full h-56 sm:h-64 md:h-80 lg:h-[420px] rounded-xl shadow-xl overflow-hidden"
            style={{ touchAction: "pan-y" }}
          >
            <motion.div
              className="flex cursor-grab active:cursor-grabbing h-full"
              drag="x"
              dragConstraints={{
                left:
                  -sliderImages.length *
                    (sliderContainerRef.current?.offsetWidth || 0) +
                  (sliderContainerRef.current?.offsetWidth || 0),
                right: 0,
              }}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              animate={{
                x:
                  -currentImageIndex *
                  (sliderContainerRef.current?.offsetWidth || 0),
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {sliderImages.map((src, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full h-full relative"
                >
                  <img
                    src={src}
                    alt={`Novotion team image ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/25"></div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* pagination dots */}
          <div className="flex justify-center mt-3 space-x-2">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-blue-800 w-5"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NovotionAbout;
