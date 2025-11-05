'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Users, TrendingUp, Heart, DollarSign, BookOpen, Coffee, Globe, ChevronRight, MapPin, Clock, Award, Zap, Smile, Target } from 'lucide-react';
import NovotionButton from '@/components/ui/NovotionButton';

const BRAND_COLORS = {
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
};

// Animated Counter Component
const AnimatedCounter = ({ target, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = target / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const NovotionCareers = () => {
  const [isVisible, setIsVisible] = useState({});
  
  // Static data - no backend dependencies
  const coreValues = [
    {
      id: 1,
      title: 'Collaborative Excellence',
      description: 'We believe in the power of teamwork and mutual success',
      icon_class: 'Users',
      color_class: 'from-blue-500 to-blue-700'
    },
    {
      id: 2,
      title: 'Continuous Growth',
      description: 'Always learning, always improving, always evolving',
      icon_class: 'TrendingUp',
      color_class: 'from-green-500 to-green-700'
    },
    {
      id: 3,
      title: 'Client First',
      description: 'Our success is measured by our clients success',
      icon_class: 'Heart',
      color_class: 'from-red-500 to-red-700'
    },
    {
      id: 4,
      title: 'Global Mindset',
      description: 'Thinking globally while acting locally',
      icon_class: 'Globe',
      color_class: 'from-purple-500 to-purple-700'
    },
    {
      id: 5,
      title: 'Professional Excellence',
      description: 'Setting the highest standards in everything we do',
      icon_class: 'Briefcase',
      color_class: 'from-orange-500 to-orange-700'
    },
    {
      id: 6,
      title: 'Innovation Driven',
      description: 'Pushing boundaries and embracing change',
      icon_class: 'Zap',
      color_class: 'from-yellow-500 to-yellow-600'
    }
  ];

  const benefits = [
    {
      id: 1,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages',
      icon_class: 'DollarSign'
    },
    {
      id: 2,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
      icon_class: 'Heart'
    },
    {
      id: 3,
      title: 'Learning & Development',
      description: 'Continuous training and skill enhancement',
      icon_class: 'BookOpen'
    },
    {
      id: 4,
      title: 'Work-Life Balance',
      description: 'Flexible hours and remote work options',
      icon_class: 'Coffee'
    },
    {
      id: 5,
      title: 'Global Opportunities',
      description: 'Work with international teams and clients',
      icon_class: 'Globe'
    },
    {
      id: 6,
      title: 'Career Growth',
      description: 'Clear paths for advancement and promotion',
      icon_class: 'TrendingUp'
    },
    {
      id: 7,
      title: 'Team Culture',
      description: 'Collaborative and supportive work environment',
      icon_class: 'Users'
    },
    {
      id: 8,
      title: 'Modern Tools',
      description: 'Latest technology and resources provided',
      icon_class: 'Briefcase'
    }
  ];

  const galleryImages = [
    {
      id: 1,
      image_url: '/api/placeholder/400/300',
      caption: 'Team Collaboration Sessions'
    },
    {
      id: 2,
      image_url: '/api/placeholder/400/300',
      caption: 'Modern Workspace Environment'
    },
    {
      id: 3,
      image_url: '/api/placeholder/400/300',
      caption: 'Training & Development Programs'
    },
    {
      id: 4,
      image_url: '/api/placeholder/400/300',
      caption: 'Team Building Activities'
    },
    {
      id: 5,
      image_url: '/api/placeholder/400/300',
      caption: 'Global Team Meetings'
    },
    {
      id: 6,
      image_url: '/api/placeholder/400/300',
      caption: 'Innovation Workshops'
    }
  ];

  const teamDepartments = [
    {
      title: 'Customer Success',
      description: 'Delivering exceptional client experiences',
      icon: <Users className="w-8 h-8" />,
      count: '50+',
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Operations',
      description: 'Ensuring seamless service delivery',
      icon: <Target className="w-8 h-8" />,
      count: '75+',
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'Technology',
      description: 'Building innovative solutions',
      icon: <Zap className="w-8 h-8" />,
      count: '30+',
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Business Development',
      description: 'Driving growth and partnerships',
      icon: <TrendingUp className="w-8 h-8" />,
      count: '25+',
      color: 'from-orange-500 to-orange-700'
    }
  ];

  const hiringSteps = [
    { step: 1, title: 'Apply', description: 'Submit your application through our career portal', icon: '📝' },
    { step: 2, title: 'Review', description: 'Our team reviews your profile and experience', icon: '👀' },
    { step: 3, title: 'Interview', description: 'Meet our team through video or in-person interviews', icon: '💬' },
    { step: 4, title: 'Offer', description: 'Welcome to the Novotion family!', icon: '🎉' }
  ];

  const sectionRefs = useRef({});

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

  const scrollToContact = () => {
    sectionRefs.current.contact?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section ref={setRef('hero')} className={`relative flex items-center justify-center overflow-hidden ${BRAND_COLORS.dark.bg}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:py-32">
          <div className={`text-center transform transition-all duration-1000 ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200 text-sm font-semibold tracking-wider uppercase animate-pulse">
                Join Our Growing Team
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Build Your Future <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                With Novotion
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Where talent meets opportunity. Join 500+ global professionals shaping the future of business process outsourcing across UK, USA, and India markets.
            </p> 
          </div>
        </div>
      </section>

      {/* About Working Section */}
      <section ref={setRef('about')} className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-6xl mx-auto transform transition-all duration-1000 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Why Build Your Career at <span className="text-blue-800">Novotion?</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                At Novotion, we don't just offer jobs—we build careers. Since 2021, we've been creating an environment where talent thrives, innovation flourishes, and every team member contributes to our global success story.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {teamDepartments.map((dept, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${dept.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}>
                    {dept.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{dept.description}</p>
                  <div className="text-2xl font-bold text-blue-800">{dept.count}</div>
                  <div className="text-xs text-gray-500">Team Members</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="bg-white rounded-xl p-4 transform hover:scale-105 transition-all duration-300 shadow-lg text-center">
                <div className="text-2xl font-bold text-blue-800 mb-1">
                  <AnimatedCounter target={500} suffix="+" />
                </div>
                <div className="text-sm text-gray-600">Global Clients</div>
              </div>
              <div className="bg-white rounded-xl p-4 transform hover:scale-105 transition-all duration-300 shadow-lg text-center">
                <div className="text-2xl font-bold text-blue-800 mb-1">
                  <AnimatedCounter target={3} />
                </div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="bg-white rounded-xl p-4 transform hover:scale-105 transition-all duration-300 shadow-lg text-center">
                <div className="text-2xl font-bold text-blue-800 mb-1">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Operations</div>
              </div>
              <div className="bg-white rounded-xl p-4 transform hover:scale-105 transition-all duration-300 shadow-lg text-center">
                <div className="text-2xl font-bold text-blue-800 mb-1">
                  <AnimatedCounter target={180} suffix="+" />
                </div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section ref={setRef('values')} className={`py-16 ${BRAND_COLORS.dark.bg}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible.values ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Culture & Values
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              The principles that make Novotion a great place to work and grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <div key={value.id} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform transition-all duration-500 hover:scale-105 hover:bg-white/15 hover:shadow-2xl">
                <div className="text-white mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <div className={`w-14 h-14 bg-gradient-to-r ${value.color_class} rounded-2xl flex items-center justify-center shadow-lg`}>
                    {value.icon_class === 'Users' && <Users className="w-7 h-7" />}
                    {value.icon_class === 'TrendingUp' && <TrendingUp className="w-7 h-7" />}
                    {value.icon_class === 'Heart' && <Heart className="w-7 h-7" />}
                    {value.icon_class === 'Globe' && <Globe className="w-7 h-7" />}
                    {value.icon_class === 'Briefcase' && <Briefcase className="w-7 h-7" />}
                    {value.icon_class === 'Zap' && <Zap className="w-7 h-7" />}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-blue-100 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={setRef('benefits')} className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible.benefits ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Amazing <span className="text-blue-800">Benefits</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We invest in your success, well-being, and professional growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-800 rounded-2xl flex items-center justify-center mb-4 text-white transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                  {benefit.icon_class === 'DollarSign' && <DollarSign className="w-6 h-6" />}
                  {benefit.icon_class === 'Heart' && <Heart className="w-6 h-6" />}
                  {benefit.icon_class === 'BookOpen' && <BookOpen className="w-6 h-6" />}
                  {benefit.icon_class === 'Coffee' && <Coffee className="w-6 h-6" />}
                  {benefit.icon_class === 'Globe' && <Globe className="w-6 h-6" />}
                  {benefit.icon_class === 'TrendingUp' && <TrendingUp className="w-6 h-6" />}
                  {benefit.icon_class === 'Users' && <Users className="w-6 h-6" />}
                  {benefit.icon_class === 'Briefcase' && <Briefcase className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section ref={setRef('global')} className={`py-16 ${BRAND_COLORS.dark.bg}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible.global ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Global Reach, Local Impact
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Serving clients worldwide with teams across three continents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">United Kingdom</h3>
              <p className="text-blue-100">Strategic client partnerships and business development</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">United States</h3>
              <p className="text-blue-100">Technology innovation and market leadership</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">India</h3>
              <p className="text-blue-100">24/7 operational excellence and talent hub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section ref={setRef('process')} className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible.process ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Simple & Transparent <span className="text-blue-800">Hiring Process</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your journey to joining our team is straightforward and respectful of your time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {hiringSteps.map((step) => (
              <div key={step.step} className="relative transform transition-all duration-1000">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-100 text-center h-full">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section ref={setRef('contact')} className={`py-16 ${BRAND_COLORS.dark.bg}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              We're always looking for talented, passionate individuals who want to make a difference. 
              Even if you don't see a specific role that matches your skills, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <NovotionButton href="/contect" variant="primary">
              Get Started Today
            </NovotionButton>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default NovotionCareers;