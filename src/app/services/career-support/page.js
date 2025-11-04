'use client';

import NovotionFooter from '@/components/Footer';
import NovotionNavbar from '@/components/Navbar';
import React, { useState, useEffect, useRef } from 'react';

export const BRAND_COLORS = {
  dark: {
    bg: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
    text: {
      primary: 'text-white',
      secondary: 'text-blue-100'
    },
    accent: 'bg-blue-400'
  },
  light: {
    bg: 'bg-white',
    text: {
      primary: 'text-gray-900', 
      secondary: 'text-gray-600'
    },
    accent: 'bg-blue-800'
  }
}

const CountUp = ({ end, duration = 2000, suffix = '', visible }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (visible && !hasAnimated) {
      setHasAnimated(true);
      let startTime = null;
      const startValue = 0;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * (end - startValue) + startValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [visible, end, duration, hasAnimated]);

  return <span>{count}{suffix}</span>;
};

const StatCard = ({ number, suffix, label, visible, delay, dark = false }) => (
  <div 
    className={`${dark ? 'bg-white/10 backdrop-blur-md border-white/20' : 'bg-slate-900/5 border-gray-200'} px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-500 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className={`text-2xl sm:text-3xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
      <CountUp end={number} suffix={suffix} visible={visible} />
    </div>
    <div className={`text-xs sm:text-sm ${dark ? 'text-blue-200' : 'text-gray-600'}`}>{label}</div>
  </div>
);

const CareerSupportServices = () => {
  const [isVisible, setIsVisible] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRefs = useRef({});

  const services = [
    {
      title: 'Professional Marketing & Profile Positioning',
      description: 'We craft compelling professional narratives and proactively market your brand across exclusive vendor networks and client channels.',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Precision-Matched Submissions',
      description: 'Advanced tools and deep market expertise to find perfect matches for your skills, experience, and career goals.',
      icon: '🎯',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Seamless Interview & Feedback Management',
      description: 'Complete communication management with pre-interview briefings and detailed feedback coordination.',
      icon: '💬',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Contract Negotiation & Onboarding Support',
      description: 'Advocate for your best terms and manage all onboarding paperwork for smooth project starts.',
      icon: '📝',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const processSteps = [
    {
      phase: 'Phase 1',
      title: 'Professional Onboarding & Profiling',
      description: 'Deep dive into your technical skills, project history, and career goals. Optimize your resume, LinkedIn, and professional profile.',
      icon: '👤'
    },
    {
      phase: 'Phase 2',
      title: 'Active Marketing & Requirement Matching',
      description: '24/7 scanning of live U.S. client requirements and targeted marketing campaigns across our vendor and client network.',
      icon: '🔍'
    },
    {
      phase: 'Phase 3',
      title: 'Submission, Interviews & Feedback',
      description: 'Manage complete submission process, coordinate interviews, provide preparation, and gather detailed feedback.',
      icon: '🤝'
    },
    {
      phase: 'Phase 4',
      title: 'Placement & Post-Placement Support',
      description: 'Manage negotiations and onboarding, with ongoing support through the project and proactive next-deployment planning.',
      icon: '🎉'
    }
  ];

  const technologies = [
    {
      category: 'Programming & Development',
      skills: ['Java', '.NET', 'Python', 'C++', 'Node.js', 'React', 'Angular'],
      icon: '💻'
    },
    {
      category: 'Cloud Technologies',
      skills: ['AWS', 'Azure', 'Google Cloud (GCP)'],
      icon: '☁️'
    },
    {
      category: 'Data & Analytics',
      skills: ['Data Science', 'Big Data', 'SQL', 'Power BI', 'Snowflake'],
      icon: '📊'
    },
    {
      category: 'ERP & CRM Systems',
      skills: ['SAP', 'Salesforce', 'Oracle'],
      icon: '🏢'
    },
    {
      category: 'Cybersecurity & Infrastructure',
      skills: ['Network Engineering', 'DevOps', 'System Administration'],
      icon: '🔒'
    },
    {
      category: 'QA & Automation',
      skills: ['Selenium', 'API Testing', 'Manual & Automation QA'],
      icon: '🧪'
    },
    {
      category: 'Design & UI/UX',
      skills: ['Figma', 'Adobe XD', 'Product Design', 'Wireframing'],
      icon: '🎨'
    }
  ];

  const faqs = [
    {
      question: 'What are Career Support Services?',
      answer: 'Think of it as having a personal marketing agent. Our service is designed to market available IT professionals (on "bench") to client companies for contract roles in the U.S. market. Instead of you waiting for projects, our team actively markets your profile, finds matching requirements, coordinates interviews, and helps you secure assignments quickly, reducing downtime.'
    },
    {
      question: 'Which market do you serve for this service?',
      answer: 'Our Career Support services operate exclusively in the United States. We work with consulting firms, vendors, and direct clients across all major tech hubs. Our India-based offshore team provides 24/7 support to ensure continuous marketing and faster submissions within the U.S. market.'
    },
    {
      question: 'What types of professionals do you work with?',
      answer: 'We specialize in IT professionals across all major technologies, including Java, .NET, Python, Cloud (AWS, Azure), Data Science, DevOps, SAP, Salesforce, and QA. Our recruiters understand these technical skills deeply, which leads to better requirement matching and more successful placements.'
    },
    {
      question: 'How fast can I get placed?',
      answer: 'While placement speed varies based on your specific skill set and current market demand, most professionals in our program secure interviews within 1-2 weeks. Our goal is to close placements within 2-4 weeks of active marketing, leveraging our structured process and strong vendor network to minimize your bench time.'
    },
    {
      question: 'What contract types do you support?',
      answer: 'We are flexible and support the models most common in the U.S. market, including Corp-to-Corp (C2C), W2, and 1099, depending on professional and client preferences. We guide both sides through the compliance and coordination for each.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  useEffect(() => {
    const observers = {};
    
    Object.keys(sectionRefs.current).forEach(key => {
      if (sectionRefs.current[key]) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.1 }
        );
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  const setRef = (key) => (el) => {
    sectionRefs.current[key] = el;
  };

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <NovotionNavbar/>
      <section 
        ref={setRef('hero')}
        className={`relative flex items-center justify-center overflow-hidden ${BRAND_COLORS.dark.bg}`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`text-center transform transition-all duration-1000 ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-6 mt-14">
              <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200 text-sm font-semibold tracking-wider uppercase animate-pulse">
                CAREER SUPPORT SERVICES & RECRUITMENT FACILITATION
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Stop Waiting. <span className="text-blue-400">Start Connecting.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              We are the U.S. IT market's premier career partner. We actively market your skills, connect you with top-tier projects, and manage your next career move.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Schedule Your Consultation
              </button>
            </div>
           
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section ref={setRef('challenge')} className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className={`w-full lg:w-[40%] relative transform transition-all duration-1000 delay-200 ${isVisible.challenge ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-800 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <Image 
                    src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2960&auto=format&fit=crop" 
                    alt="Career Challenge"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                </div>
              </div>
            </div>

            <div className={`w-full lg:w-[60%] transform transition-all duration-1000 delay-400 ${isVisible.challenge ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="lg:pl-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  THE CHALLENGE: FROM <span className="text-blue-800">"ON THE BENCH"</span> TO "IN-DEMAND"
                </h2>
                
                <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                  <p>
                    For a skilled IT professional, being "on the bench" isn't a vacation. It's a period of uncertainty. 
                    For a consulting firm, it's a drain on revenue and resources. The U.S. IT market is fast-paced, 
                    and every day not on a project is a missed opportunity.
                  </p>
                  
                  <div className="relative pl-6 border-l-4 border-blue-500 bg-blue-50/50 rounded-r-2xl p-6">
                    <p className="font-semibold text-blue-900 mb-2">This is where Novotion's Career Support Services come in.</p>
                    <p>
                      We are not a passive job board or a simple resume-forwarding service. We are a proactive 
                      marketing and placement partner dedicated exclusively to the U.S. IT market.
                    </p>
                  </div>
                  
                  <p>
                    We act as your strategic agent. Our job is to connect your unique expertise with our vast, 
                    established network of clients and vendors. From polishing your professional brand and 
                    marketing your profile to coordinating interviews and negotiating contracts, we handle the 
                    entire process. We turn your downtime into your next great opportunity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={setRef('services')} className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 sm:mb-20 transform transition-all duration-1000 ${isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              OUR CAREER SUPPORT SERVICES: YOUR TALENT, OUR STRATEGY
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach is strategic, personal, and built for the speed of the U.S. tech market. We 
              function as a high-performance extension of your team, relentlessly focused on one goal: 
              placing top talent in the right projects, faster.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 ${
                  isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative z-10">
                  <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-300">
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="group relative bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
                      <div className="relative z-10">
                        <div className="text-3xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-300">
                          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={setRef('process')} className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 sm:mb-20 transform transition-all duration-1000 ${isVisible.process ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              OUR PROCESS: YOUR PATH FROM BENCH TO BILLABLE
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach designed to minimize your bench time and maximize your placement success.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-blue-800 h-full"></div>
            
            <div className="space-y-8 sm:space-y-12">
              {processSteps.map((step, index) => (
                <div 
                  key={step.phase}
                  ref={setRef(`process-item-${index}`)}
                  className={`relative flex items-start sm:items-center transform transition-all duration-1000 ${
                    isVisible[`process-item-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-8 h-8 bg-white border-4 border-blue-600 rounded-full z-20 flex items-center justify-center shadow-lg">
                    <span className="text-xs font-bold text-blue-800">{index + 1}</span>
                  </div>

                  <div className={`ml-12 sm:ml-0 sm:w-1/2 ${
                    index % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left sm:ml-auto'
                  }`}>
                    <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3">{step.icon}</span>
                        <div className="bg-blue-800 text-white px-4 py-1 rounded-full text-sm font-bold">
                          {step.phase}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section ref={setRef('technologies')} className={`py-16 sm:py-20 lg:py-24 ${BRAND_COLORS.dark.bg}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 sm:mb-20 transform transition-all duration-1000 ${isVisible.technologies ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              TECHNOLOGIES and SKILLS WE COVER: WE SPEAK YOUR LANGUAGE
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              The U.S. IT market is diverse, and so is our expertise. We have specialized recruiters who 
              understand the nuances of virtually every tech stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {technologies.map((tech, index) => (
              <div
                key={tech.category}
                className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 transform transition-all duration-500 hover:scale-105 hover:bg-white/15 ${
                  isVisible.technologies ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative z-10">
                  <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    {tech.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="inline-block bg-white/20 backdrop-blur-sm text-blue-100 px-3 py-1 rounded-full text-sm border border-white/30 hover:bg-white/30 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={setRef('faq')} className={`py-16 sm:py-20 lg:py-24 bg-white`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 sm:mb-20 transform transition-all duration-1000 ${isVisible.faq ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to the most common questions about our Career Support Services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-slate-50 rounded-2xl border border-gray-200 overflow-hidden transform transition-all duration-500 ${
                  isVisible.faq ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button 
                  className="w-full text-left p-6 sm:p-8 flex justify-between items-center hover:bg-slate-100 transition-colors duration-300"
                  onClick={() => setIsVisible(prev => ({...prev, [`faq-${index}`]: !prev[`faq-${index}`]}))}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg 
                    className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 flex-shrink-0 ${isVisible[`faq-${index}`] ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`px-6 sm:px-8 transition-all duration-300 overflow-hidden ${
                  isVisible[`faq-${index}`] ? 'pb-6 sm:pb-8 max-h-96' : 'max-h-0'
                }`}>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={setRef('cta')} className={`py-16 sm:py-20 lg:py-24 ${BRAND_COLORS.dark.bg}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Find Your Next Project?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              Whether you're an individual IT professional or a consulting firm managing a team, 
              Novotion provides the strategy, network, and support to maximize your placements and 
              profitability. Let's connect and build a custom Career Support solution for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Schedule Your Free Consultation
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold border border-white/20 backdrop-blur-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Request Service Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      <NovotionFooter/>
    </div>
  );
};

export default CareerSupportServices;