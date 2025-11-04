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

const NovotionRPO = () => {
  const [isVisible, setIsVisible] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRefs = useRef({});

  const services = [
    {
      title: 'End-to-End RPO',
      description: 'Full-service hiring department managing the entire recruitment lifecycle from workforce planning to onboarding.',
      icon: '🔄',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Offshore Recruitment Support',
      description: '24/7 cost-effective extension of your team with dedicated offshore recruiters in India.',
      icon: '🌍',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Talent Sourcing & Headhunting',
      description: 'Surgical approach to finding passive, high-demand candidates and niche technical experts.',
      icon: '🎯',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'CV Formatting & Presentation',
      description: 'Professional candidate presentation to dramatically increase interview conversion rates.',
      icon: '📄',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const benefits = [
    {
      title: 'Predictable Costs, Deeper Savings',
      description: 'Transparent pricing model that typically cuts recruitment spending by 30-60% compared to traditional agencies.',
      icon: '💰'
    },
    {
      title: 'Scalability on Demand',
      description: 'Instantly scale hiring efforts up or down without the pain of hiring or firing internal recruiters.',
      icon: '📈'
    },
    {
      title: 'Access to Specialized Expertise',
      description: 'Immediate access to sourcing specialists, compliance experts, and advanced AI-powered tools.',
      icon: '⚡'
    },
    {
      title: 'Reclaim Strategic Focus',
      description: 'Your leaders focus on building culture and talent development while we handle the hiring.',
      icon: '🎯'
    }
  ];

  const implementationSteps = [
    {
      phase: 'Phase 1',
      title: 'Discovery & Planning',
      description: 'Deep dive into your culture, goals, and pain points to define success metrics and build implementation roadmap.',
      icon: '🔍'
    },
    {
      phase: 'Phase 2',
      title: 'Team Deployment & Integration',
      description: 'Assemble dedicated team and immerse them in your brand, systems, and processes.',
      icon: '🤝'
    },
    {
      phase: 'Phase 3',
      title: 'Operational Launch',
      description: 'Start active sourcing, establish reporting, and begin formal intake meetings with hiring managers.',
      icon: '🚀'
    },
    {
      phase: 'Phase 4',
      title: 'Optimization & Scaling',
      description: 'Continuous monitoring, feedback collection, and process refinement to scale with your business.',
      icon: '📊'
    }
  ];

  const faqs = [
    {
      question: 'What markets do you specialize in?',
      answer: 'Our RPO services are focused exclusively on the UK and USA markets. Our deep expertise in these two regions, supported by our India-based offshore center, allows us to provide specialized, compliant, and cost-effective service.'
    },
    {
      question: 'How do you maintain quality with an offshore team from India?',
      answer: 'Our offshore teams are full-time, highly trained Novotion employees. They undergo comprehensive training on your brand and processes, with structured quality assurance framework and multi-level reviews.'
    },
    {
      question: 'What if we already have an in-house recruitment team?',
      answer: 'Perfect. We offer flexible "Hybrid Models" where we can handle high-volume or specialized roles while your team focuses on executive hires, or simply supercharge your existing team\'s sourcing power.'
    },
    {
      question: 'How is RPO different from using a staffing agency?',
      answer: 'It\'s the difference between a transactional vendor and a strategic partner. Agencies fill one job at a time for high fees. As your RPO partner, we manage your entire process for predictable, lower costs and drive your long-term talent strategy.'
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
  }



  return (



    <div className="bg-white overflow-x-hidden">
          <NovotionNavbar/>

      {/* Hero Section */}
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
                RECRUITMENT PROCESS OUTSOURCING
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Hiring Goals, <span className="text-blue-400">Accelerated.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Strategic RPO for the UK & USA. We build the high-performance teams you need, while you focus on building your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Schedule Your RPO Consultation
              </button>
            </div>
            
          </div>
        </div>
      </section>

      {/* What is RPO Section */}
      <section ref={setRef('whatIsRPO')} className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className={`w-full lg:w-[40%] relative transform transition-all duration-1000 delay-200 ${isVisible.whatIsRPO ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-800 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <Image 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" 
                    alt="Recruitment Process"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                </div>
              </div>
            </div>

            <div className={`w-full lg:w-[60%] transform transition-all duration-1000 delay-400 ${isVisible.whatIsRPO ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="lg:pl-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  From <span className="text-blue-800">Cost Center</span> to Strategic Asset
                </h2>
                
                <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                  <p>
                    Let's be honest: for many growing companies, traditional recruitment is a bottleneck. It's reactive, expensive, and pulls your key leaders away from their core mission. You're stuck in a cycle of paying high agency fees for one-off hires, with no long-term strategy.
                  </p>
                  
                  <div className="relative pl-6 border-l-4 border-blue-500 bg-blue-50/50 rounded-r-2xl p-6">
                    <p className="font-semibold text-blue-900 mb-2">Recruitment Process Outsourcing (RPO) is the strategic shift that breaks this cycle.</p>
                    <p>
                      RPO isn't just "outsourcing" your hiring. It's embedding a dedicated team of recruitment experts directly into your organization. We become a seamless extension of your Talent Acquisition team. We learn your culture, adopt your brand, and manage your entire hiring process—from sourcing and screening to offers and onboarding—with a focus on driving your long-term business goals.
                    </p>
                  </div>
                  
                  <p>
                    At Novotion, we combine on-the-ground expertise in the UK and USA with a powerful 24/7 offshore support engine in India. This "best-of-both-worlds" model delivers scalability, cost-efficiency, and a continuous pipeline of high-quality talent, all without the overhead of a large in-house team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why RPO Section */}
      <section ref={setRef('whyRPO')} className={`py-16 sm:py-20 lg:py-24 ${BRAND_COLORS.dark.bg}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 sm:mb-20 transform transition-all duration-1000 ${isVisible.whyRPO ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why RPO is a Strategic Imperative
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Transform your recruitment from a cost center into a competitive advantage with our strategic RPO solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 transform transition-all duration-500 hover:scale-105 hover:bg-white/15 ${
                  isVisible.whyRPO ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative z-10">
                  <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={setRef('services')} className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 sm:mb-20 transform transition-all duration-1000 ${isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Our RPO Services: Your Solution, Your Way
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A one-size-fits-all approach doesn't work. At Novotion, our RPO services are modular, allowing you to build the precise solution you need.
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

      {/* Implementation Process */}
      <section ref={setRef('implementation')} className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 sm:mb-20 transform transition-all duration-1000 ${isVisible.implementation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Our Implementation: A Blueprint for Success
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just flip a switch. We build a partnership through a deliberate, transparent process.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-blue-800 h-full"></div>
            
            <div className="space-y-8 sm:space-y-12">
              {implementationSteps.map((step, index) => (
                <div 
                  key={step.phase}
                  ref={setRef(`implementation-item-${index}`)}
                  className={`relative flex items-start sm:items-center transform transition-all duration-1000 ${
                    isVisible[`implementation-item-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
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

      {/* FAQ Section */}
      <section ref={setRef('faq')} className={`py-16 sm:py-20 lg:py-24 ${BRAND_COLORS.dark.bg}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 sm:mb-20 transform transition-all duration-1000 ${isVisible.faq ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Get answers to the most common questions about our RPO services and implementation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden transform transition-all duration-500 ${
                  isVisible.faq ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button 
                  className="w-full text-left p-6 sm:p-8 flex justify-between items-center hover:bg-white/5 transition-colors duration-300"
                  onClick={() => setIsVisible(prev => ({...prev, [`faq-${index}`]: !prev[`faq-${index}`]}))}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white pr-4">
                    {faq.question}
                  </h3>
                  <svg 
                    className={`w-6 h-6 text-blue-300 transform transition-transform duration-300 flex-shrink-0 ${isVisible[`faq-${index}`] ? 'rotate-180' : ''}`} 
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
                  <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
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
              Ready to Build a Better Hiring Engine?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              If your organization in the UK or USA is facing hiring delays, high agency fees, or the challenge of scaling, RPO could be the strategic shift you need.
            </p>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              The first step is a simple, no-obligation conversation. We want to hear about your challenges and goals. We're not here to sell you a service; we're here to see if we can provide a solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Schedule Your Free RPO Consultation
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold border border-white/20 backdrop-blur-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Request RPO Information Package
              </button>
            </div>
          </div>
        </div>
      </section>
      <NovotionFooter/>
    </div>

  );
};
export default NovotionRPO;