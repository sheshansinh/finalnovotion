"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NovotionNavbar from "@/components/Navbar";
import NovotionFooter from "@/components/Footer";

const RefundPolicyPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15, staggerChildren: 0.1 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-gray-100">
      {/* Navbar */}
      <NovotionNavbar />

      {/* Main Section */}
      <div className="flex-1 flex items-center justify-center py-20 relative overflow-hidden">
        {/* Background subtle animation */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-700 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants}
          className="relative z-10 container mx-auto px-6 md:px-10 max-w-4xl text-center md:text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-400"
          >
            Cancellation & Refund Policy
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto md:mx-0 mb-10"
          ></motion.div>

          <motion.div
            variants={itemVariants}
            className="text-blue-100 text-base sm:text-lg leading-relaxed space-y-10"
          >
            <section>
              <h2 className="text-xl font-semibold text-cyan-300 mb-3">
                1. No Refund Policy
              </h2>
              <ul className="list-disc list-inside space-y-2 text-blue-100/90">
                <li>
                  All fees paid to <strong>Novotion</strong> are non-refundable once services have been initiated.
                </li>
                <li>
                  The Client acknowledges that there is no refund or reimbursement under any circumstances, regardless of employment status, after services have commenced.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-cyan-300 mb-3">
                2. Employment Guarantee Disclaimer
              </h2>
              <ul className="list-disc list-inside space-y-2 text-blue-100/90">
                <li>Novotion does not guarantee job placement or employment.</li>
                <li>
                  Success depends on the Client’s effort, commitment, and third-party hiring decisions, which are beyond Novotion’s control.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-cyan-300 mb-3">
                3. Service Interruption & Reinstatement
              </h2>
              <ul className="list-disc list-inside space-y-2 text-blue-100/90">
                <li>
                  If employment is interrupted due to unforeseen circumstances, Novotion will reinstate services without charging the remaining service fees.
                </li>
                <li>
                  Once the Client secures new employment, full fees as per the Agreement will become due.
                </li>
              </ul>
            </section>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <NovotionFooter />
    </div>
  );
};

export default RefundPolicyPage;
