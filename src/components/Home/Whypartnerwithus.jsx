"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import NovotionButton from "../ui/NovotionButton";

const WhyPartnerWithNovotion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const intervalRef = useRef(null);

  const features = [
    {
      title: "Strategic Multi-Region Operations",
      description: "Hubs in the UK, USA, and India ensure efficient service delivery and cost-effective 24/7 support with deep knowledge of UK & USA employment laws, markets, and cultures.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 md:h-8 md:w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "e-Verified & Compliance-Focused",
      description: "e-Verified status ensures full legal and employment compliance while following GDPR and international data protection standards.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 md:h-8 md:w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "24/7 Multilingual Support",
      description: "Round-the-clock assistance across global time zones with India-based offshore team ensuring continuous recruitment operations and quick response for urgent roles.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 md:h-8 md:w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Cost-Effective Excellence",
      description: "Premium recruitment at competitive pricing with transparent fees and flexible engagement options. Offshore support lowers costs without compromising quality.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 md:h-8 md:w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
    },
    {
      title: "Experienced Industry Specialists",
      description: "Experts across 15+ industries with deep IT and staffing knowledge, strong grasp of technologies and contract models, skilled in both permanent and contract placements.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 md:h-8 md:w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Proven Track Record",
      description: "500+ clients and 10,000+ successful placements with thousands of contract roles filled maintaining 85%+ retention rate.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 md:h-8 md:w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Scalable & Flexible Solutions",
      description: "Services tailored to both short-term needs and long-term goals with capacity to manage single hires or full offshore teams for permanent and contract staffing.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 md:h-8 md:w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
    },
    {
      title: "Data Security Priority",
      description: "Advanced security protocols and strict confidentiality with secure handling of all client and professional data and protected compliance documentation.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 md:h-8 md:w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
  ];

  const loopedFeatures = [...features, ...features];

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (!isDragging) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % features.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isDragging, features.length]);

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    const offset = info.offset.y;
    const cardHeight = 112.5;
    const draggedCards = Math.round(offset / cardHeight);
    const newIndex = activeIndex - draggedCards;
    setActiveIndex(Math.max(0, Math.min(features.length - 1, newIndex)));
  };

  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-400 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative z-10">
        {/* Main Grid Container for a Two-Column Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Left Column: Header and CTA */}
          <div className="w-full m-auto flex-col justify-center align-middle lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-black">
                Why Organizations and Professionals Choose Novotion
              </span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-4">
              Building trust in the recruitment and IT staffing industry requires more than 
              promises—it demands consistent delivery, transparent communication, and genuine 
              investment in client success.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-4">
              Since 2021, we've cultivated a reputation for reliability, professionalism, and 
              results-driven service.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              With operational centers strategically positioned in the UK, USA, and India, we serve 
              clients in UK and USA markets with the support of our offshore team, ensuring 24/7 
              service capability and cost-effective delivery.
            </p>

        

            <NovotionButton href="/contect" variant="outline" className="flex align-middle justify-center">
              Partner With Us
            </NovotionButton>
          </div>

          {/* Right Column: Vertical Slider */}
          <div className="w-full lg:w-1/2 relative overflow-hidden h-[450px] md:h-[550px] lg:h-[450px] rounded-3xl p-4">
            <motion.div
              className="flex flex-col h-full cursor-grab active:cursor-grabbing"
              drag="y"
              dragConstraints={{
                top: -(features.length * 112.5 - 450),
                bottom: 0,
              }}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              animate={{ y: `-${activeIndex * 25}%` }}
              transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
            >
              {loopedFeatures.map((feature, index) => (
                <div key={index} className="flex-shrink-0 w-full h-1/4 p-2">
                  <div className="bg-gradient-to-br from-blue-800 via-blue-700 to-black rounded-2xl shadow-2xl overflow-hidden h-full flex items-center">
                    <div className="p-4 md:p-6">
                      <div className="flex items-center gap-2 md:gap-4">
                        {/* Icon Section */}
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <div className="text-white">{feature.icon}</div>
                          </div>
                        </div>
                        {/* Content Section */}
                        <div className="flex-1">
                          <h3 className="text-base md:text-lg font-bold text-white mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-xs md:text-sm text-blue-100 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPartnerWithNovotion;