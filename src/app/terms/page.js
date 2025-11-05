"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NovotionNavbar from "@/components/Navbar";
import NovotionFooter from "@/components/Footer";

const TermsAndConditionsPage = () => {
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

    <div>
    <div className="relative w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-gray-100 overflow-hidden py-20 flex items-center justify-center min-h-screen">
      <NovotionNavbar />

      {/* Soft animated background glow */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-700 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textVariants}
        className="relative z-10 container mx-auto px-6 md:px-10 max-w-5xl"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white"
        >
          Terms & Conditions
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mb-10"
        ></motion.div>

        <motion.div
          variants={itemVariants}
          className="text-gray-300 text-base sm:text-lg leading-relaxed space-y-10"
        >
          {/* SECTION 1 */}
          <section>
            <h2 className="text-xl font-semibold text-blue-400 mb-3">1. Services</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Novotion provides job-focused training, career attainment programs, and bonus content
                (guides, templates, etc.) depending on the chosen plan.
              </li>
              <li>The method of service delivery is determined solely by Novotion.</li>
            </ul>
          </section>

          {/* SECTION 2 */}
          <section>
            <h2 className="text-xl font-semibold text-blue-400 mb-3">2. Payments & Fees</h2>
            <p className="mb-3">
              Novotion offers multiple plans with defined Enrollment and Placement Fees. Placement fees are
              calculated on the Client’s gross annual salary (before taxes and deductions).
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400">Basic Plan</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Enrollment Fee: $2,500 (due at enrollment)</li>
                  <li>Placement Fee: 15% of gross salary</li>
                  <li>30% of the placement fee due upon offer letter</li>
                  <li>70% of the placement fee due post-placement (one-time)</li>
                  <li>Flexible Payment: 4 easy installments</li>
                  <li>
                    Includes: One-on-One Consultation, 10 curated interview opportunities, 2 complimentary
                    proxy interviews, resume optimization, LinkedIn review, weekly job market insights,
                    recruiter engagement, AI-driven profile marketing, and access to career resources.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-400">Standard Plan</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Enrollment Fee: $3,500 (due at enrollment)</li>
                  <li>Placement Fee: 12% of gross salary</li>
                  <li>30% due upon offer letter, 70% post-placement</li>
                  <li>Flexible Payment: 4 easy installments</li>
                  <li>
                    Includes: 15 interview opportunities, 2 proxy interviews, personalized resume rebuild,
                    mock interviews, recruiter network access, priority submissions, and AI profile marketing.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-400">Advanced Plan</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Enrollment Fee: $4,000 (due at enrollment)</li>
                  <li>Placement Fee: 12% of gross salary</li>
                  <li>Flexible Payment: 4 easy installments</li>
                  <li>
                    Includes: 18 interview opportunities, unlimited proxy interviews, intensive coaching,
                    real-time sessions, LinkedIn optimization, and AI-powered visibility.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-400">Premium Plan</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Enrollment Fee: $5,000 (due at enrollment)</li>
                  <li>Placement Fee: 10% of gross salary</li>
                  <li>Flexible Payment: 4 easy installments</li>
                  <li>
                    Includes: 22 interviews, unlimited proxy support, lifetime resume updates, 24/7 portal
                    access, direct hiring manager introductions, and VIP coaching.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-400">General Payment Conditions</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>All enrollment fees are non-refundable once services are initiated.</li>
                  <li>Payments must be made on time; delays may result in suspension or termination.</li>
                  <li>
                    Failure to pay may authorize Novotion to collect via ACH, Stripe, or wage garnishment
                    agreements.
                  </li>
                  <li>Disputes over payments will follow the Dispute Resolution clause.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section>
            <h2 className="text-xl font-semibold text-blue-400 mb-3">3. Client Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Clients must follow the training program and show reasonable effort.</li>
              <li>Defaulting on payments results in loss of access; re-entry requires re-enrollment.</li>
              <li>Clients agree to indemnify Novotion against any claims from their actions.</li>
            </ul>
          </section>

          {/* SECTION 4 */}
          <section>
            <h2 className="text-xl font-semibold text-blue-400 mb-3">4. Warranties & Liability</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Novotion makes no warranties regarding job placement or employment outcomes.</li>
              <li>Employment decisions are solely at the discretion of hiring companies.</li>
            </ul>
          </section>

          {/* SECTION 5 */}
          <section>
            <h2 className="text-xl font-semibold text-blue-400 mb-3">5. Dispute Resolution</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Disputes shall first be resolved through friendly negotiation.</li>
              <li>If unresolved, disputes proceed to mediation and binding arbitration in Delaware.</li>
            </ul>
          </section>

          {/* SECTION 6 */}
          <section>
            <h2 className="text-xl font-semibold text-blue-400 mb-3">6. Legal & Miscellaneous</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Governing law: State of Delaware.</li>
              <li>Novotion acts as an independent contractor, not an employer.</li>
              <li>Force Majeure applies to events beyond control (disasters, pandemics, strikes, etc.).</li>
              <li>If any clause is invalid, the rest remains enforceable.</li>
            </ul>
          </section>

          
        </motion.div>
      </motion.div>
    </div>

    <NovotionFooter />
    
    </div>
  );
};

export default TermsAndConditionsPage;
