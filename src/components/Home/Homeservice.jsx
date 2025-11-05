'use client';

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const NovotionServices = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 18,
        duration: 0.8,
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  };

  const ServiceList = ({ services, delayStart = 0.4 }) => (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
      {services.map((service, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: delayStart + index * 0.1 }}
          className="flex items-start text-xs sm:text-sm text-gray-600"
        >
          <svg
            className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          {service}
        </motion.li>
      ))}
    </ul>
  );

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Floating Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-48 sm:w-64 h-48 sm:h-64 bg-blue-100 rounded-full blur-3xl opacity-20"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-100 rounded-full blur-3xl opacity-20"
          animate={floatingAnimation}
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-6 lg:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-3">
            Our{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-cyan-600">
              Specialized Services
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-800 to-cyan-600 rounded-full mx-auto mb-5"></div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tailored solutions for businesses and professionals across global
            markets. Leverage our expertise to transform your talent acquisition
            and career growth strategies.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 max-w-11xl mx-auto"
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            className="group relative bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-blue-100"
          >
            <motion.div
              className="absolute -top-5 -right-5 w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"
              animate={floatingAnimation}
            >
              🌍
            </motion.div>

            <div className="relative z-10">
              <div className="mb-5">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white text-xl shadow-md mb-4">
                  💼
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                  Recruitment Process Outsourcing
                </h3>
              </div>

              <p className="text-sm sm:text-base text-gray-600 mb-5">
                Comprehensive recruitment solutions for businesses in UK and USA
                markets seeking to optimize talent acquisition and reduce costs.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                  Key Services Preview:
                </h4>
                <ServiceList
                  services={[
                    'End-to-End Recruitment Management',
                    'Offshore Recruitment Support',
                    'Talent Sourcing & Headhunting',
                    'CV Formatting & Candidate Preparation',
                    'Lead Generation & Marketing Support',
                  ]}
                />
              </div>

              <Link href="/services/rpo" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full relative px-5 py-2.5 bg-blue-800 text-white font-semibold rounded-lg text-sm sm:text-base shadow-md overflow-hidden group cursor-pointer"
                >
                  <span className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
                    Explore RPO Services
                  </span>
                  <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore RPO Services →
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            className="group relative bg-gradient-to-br from-white to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-cyan-100"
          >
            <motion.div
              className="absolute -top-5 -right-5 w-20 h-20 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white text-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"
              animate={floatingAnimation}
              style={{ animationDelay: '1s' }}
            >
              💻
            </motion.div>

            <div className="relative z-10">
              <div className="mb-5">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl shadow-md mb-4">
                  🚀
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                  Career Support & Recruitment Facilitation
                </h3>
              </div>

              <p className="text-sm sm:text-base text-gray-600 mb-5">
                Specialized support for USA-based tech professionals, connecting
                them with contract roles and providing full onboarding support.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                  Key Services Preview:
                </h4>
                <ServiceList
                  services={[
                    'Professional Marketing & Placement',
                    'Requirement Matching',
                    'Interview Coordination',
                    'Contract Negotiation Support',
                    'Onboarding & Project Start Support',
                  ]}
                  delayStart={0.6}
                />
              </div>

              <Link href="/services/career-support" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full relative px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg text-sm sm:text-base shadow-md overflow-hidden group cursor-pointer"
                >
                  <span className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
                    Explore Career Support Services
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore Services →
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NovotionServices;