// // src/app/about/page.js
// 'use client';
// import { useRef, useEffect, useState } from 'react';
// import Link from 'next/link';
// import {
//   CheckCircle,
//   Heart,
//   Lightbulb,
//   Target,
//   TrendingUp,
//   Users,
//   Star,
//   Award,
//   Globe,
//   Rocket,
//   ChevronRight,
//   Quote,
//   Zap,
//   Shield,
//   Clock,
//   Calendar
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// // Enhanced Card components
// const Card = ({ children, className = "", delay = 0, ...props }) => (
//   <div
//     className={`rounded-xl md:rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm text-card-foreground shadow-sm hover:shadow-lg md:hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] md:hover:scale-105 hover:border-blue-100 ${className}`}
//     style={{
//       animationDelay: `${delay}ms`,
//       animation: 'fadeInUp 0.6s ease-out forwards'
//     }}
//     {...props}
//   >
//     {children}
//   </div>
// );

// const CardContent = ({ children, className = "", ...props }) => (
//   <div className={`p-4 sm:p-6 md:p-8 ${className}`} {...props}>
//     {children}
//   </div>
// );

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const coreValues = [
//     {
//       icon: Heart,
//       title: 'Integrity',
//       description: 'We operate with unwavering honesty, transparency, and respect. No exceptions.',
//       gradient: 'from-red-500 to-pink-500'
//     },
//     {
//       icon: Target,
//       title: 'Excellence',
//       description: 'We aim for the highest standard in every service we deliver, from a single resume to a full RPO implementation.',
//       gradient: 'from-blue-500 to-cyan-500'
//     },
//     {
//       icon: Shield,
//       title: 'Commitment',
//       description: 'We are personally invested in the success of our clients and candidates. Your goals become our goals.',
//       gradient: 'from-green-500 to-emerald-500'
//     },
//     {
//       icon: Lightbulb,
//       title: 'Innovation',
//       description: 'We are constantly evolving, adopting smarter, more human-centric methods and technologies to stay ahead.',
//       gradient: 'from-yellow-500 to-orange-500'
//     },
//     {
//       icon: TrendingUp,
//       title: 'Empowerment',
//       description: 'We equip professionals with the tools, training, and confidence to achieve their career aspirations.',
//       gradient: 'from-purple-500 to-indigo-500'
//     },
//     {
//       icon: Globe,
//       title: 'Global Excellence',
//       description: 'Bridging talent across UK, USA, and India with localized expertise and global standards.',
//       gradient: 'from-cyan-500 to-blue-500'
//     },
//   ];

//   const testimonials = [
//     {
//       name: 'Phani Datta Pabisetty',
//       title: 'QA Analyst, Ampup',
//       text: "Novotion's help was a game-changer. Their trainer didn't just prep me; they refined my entire approach to QA testing. I had an offer from Ampup within weeks. What really stood out was the post-placement support.",
//       rating: 5,
//       company: 'Ampup'
//     },
//     {
//       name: 'Shajahan Shaik',
//       title: 'Full Stack Developer, Amazon Audible',
//       text: 'From the first resume edit to the final interview rounds, Novotion was with me. My consultant and trainer were relentless, working with me to sharpen my coding and problem-solving skills. I landed my dream job at Amazon Audible.',
//       rating: 5,
//       company: 'Amazon'
//     },
//     {
//       name: 'Dixit Gupta Garlapati',
//       title: 'DevOps Engineer, Meta',
//       text: 'Novotion has real industry experts. They connected me with a trainer who understood exactly what companies like Meta look for in a DevOps Engineer. I owe a huge part of my success to their team.',
//       rating: 5,
//       company: 'Meta'
//     }
//   ];

//   const milestones = [
//     { year: '2021', title: 'Founded', description: 'Started with vision to transform recruitment' },
//     { year: '2022', title: '100+ Placements', description: 'Crossed 100 successful placements' },
//     { year: '2023', title: 'Global Expansion', description: 'Expanded to UK and USA markets' },
//     { year: '2024', title: '500+ Clients', description: 'Served 500+ organizations worldwide' },
//     { year: '2025', title: '10K+ Professionals', description: 'Placed 10,000+ professionals' },
//   ];

//   useEffect(() => {
//     setIsVisible(true);

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-fadeInUp');
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const elements = document.querySelectorAll('.animate-on-scroll');
//     elements.forEach(el => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       <Header />

//       {/* Enhanced Hero Section - Mobile First */}
//       <section className="relative min-h-[80vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pt-20">
//         {/* Animated Background */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
//           <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500 rounded-full blur-2xl sm:blur-3xl opacity-20 animate-pulse"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-500 rounded-full blur-2xl sm:blur-3xl opacity-20 animate-pulse delay-1000"></div>
//         </div>

//         <div className="relative container mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
//           <div className={`transform transition-all duration-1000 ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}>
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8">
//               <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
//               <span className="text-white/90 text-xs sm:text-sm font-medium">
//                 Trusted by 500+ Organizations Worldwide
//               </span>
//             </div>

//             <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
//               <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
//                 Our Story
//               </span>
//               <br />
//               <span className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                 People, Potential, Partnership
//               </span>
//             </h1>

//             <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed px-4">
//               At its core, recruitment is a deeply human endeavor. It's about connecting ambition with opportunity, and vision with the precise talent that can bring it to life.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8">
//               <Link href="/contact#contact-form" className="w-full sm:w-auto">
//                 <Button
//                   size="lg"
//                   className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl hover:shadow-xl sm:hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
//                 >
//                   <span className="flex items-center gap-2 text-base sm:text-lg font-semibold">
//                     Connect With Us
//                     <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
//                   </span>
//                 </Button>
//               </Link>

//               <Link href="#values" className="w-full sm:w-auto">
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl hover:shadow-lg sm:hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
//                 >
//                   <span className="flex items-center gap-2 text-base sm:text-lg font-semibold">
//                     Our Values
//                     <Heart className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
//                   </span>
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision Enhanced - Mobile First */}
//       <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"></div>
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
//               {/* Mission */}
//               <div className="space-y-6 sm:space-y-8 animate-on-scroll">
//                 <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider">
//                   <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                   Our Mission
//                 </div>

//                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                   Redefining
//                   <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Recruitment Excellence</span>
//                 </h2>

//                 <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed">
//                   <p className="text-base sm:text-lg">
//                     We are a specialized Recruitment Process Outsourcing (RPO) and Career Support Services company, but we see ourselves as something more: we are architects of opportunity.
//                   </p>
//                   <p className="text-base sm:text-lg">
//                     For our organizational clients in the UK and USA, we build the high-performing teams that drive sustainable growth. For the skilled professionals we support, we pave the way for long-term career success.
//                   </p>
//                   <p className="text-base sm:text-lg">
//                     Founded in 2021, Novotion operates with a global footprint—with strategic centers in India, the USA, and the UK. This structure allows us to blend deep local market expertise with the 24/7 operational power of a global team.
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-4 pt-4">
//                   <div className="flex -space-x-2">
//                     {[1, 2, 3, 4].map((i) => (
//                       <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-2 border-white"></div>
//                     ))}
//                   </div>
//                   <div className="text-sm text-gray-600">
//                     <div className="font-semibold">50+ Team Members</div>
//                     <div className="text-xs sm:text-sm">Across 3 continents</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Vision & Stats */}
//               <div className="space-y-6 sm:space-y-8 animate-on-scroll">
//                 <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
//                   <CardContent className="space-y-4">
//                     <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
//                       <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
//                     </div>
//                     <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Vision</h3>
//                     <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
//                       To be the most trusted partner in career and talent development, known not just for our results, but for our integrity and our unwavering commitment to the success of every client and candidate.
//                     </p>
//                   </CardContent>
//                 </Card>

//                 {/* Quick Stats */}
//                 <div className="grid grid-cols-2 gap-3 sm:gap-4">
//                   <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center">
//                     <div className="text-xl sm:text-2xl font-bold">500+</div>
//                     <div className="text-blue-100 text-xs sm:text-sm">Clients Served</div>
//                   </div>
//                   <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center">
//                     <div className="text-xl sm:text-2xl font-bold">10K+</div>
//                     <div className="text-purple-100 text-xs sm:text-sm">Professionals Placed</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Journey Timeline - Mobile First */}
//       <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 rounded-full blur-2xl sm:blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
//         <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-200 rounded-full blur-2xl sm:blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

//         <div className="container mx-auto px-4 sm:px-6 relative">
//           <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
//             <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
//               <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//               Our Journey
//             </div>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
//               Building Excellence
//               <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Since 2021</span>
//             </h2>
//           </div>

//           {/* Timeline - Mobile Stack, Desktop Side-by-side */}
//           <div className="max-w-4xl mx-auto">
//             <div className="relative">
//               {/* Timeline line - Hidden on mobile, visible on md+ */}
//               <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>

//               {milestones.map((milestone, index) => (
//                 <div
//                   key={index}
//                   className={`relative mb-8 sm:mb-12 ${
//                     index % 2 === 0 ? 'md:flex md:flex-row' : 'md:flex md:flex-row-reverse'
//                   }`}
//                 >
//                   {/* Content */}
//                   <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-6 lg:pr-12' : 'md:pl-6 lg:pl-12'}`}>
//                     <Card delay={index * 200} className="hover:shadow-lg sm:hover:shadow-xl border-blue-100 mb-4 md:mb-0">
//                       <CardContent className="p-4 sm:p-6">
//                         <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
//                         <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
//                         <p className="text-gray-600 text-sm sm:text-base">{milestone.description}</p>
//                       </CardContent>
//                     </Card>
//                   </div>

//                   {/* Timeline dot - Hidden on mobile, visible on md+ */}
//                   <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-white border-4 border-blue-500 rounded-full z-10"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Core Values - Mobile First */}
//       <section id="values" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
//             <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
//               <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//               Our Foundation
//             </div>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
//               Core Values That
//               <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Drive Us</span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
//               These aren't just words on a wall; they are the principles that guide every decision, every partnership, and every placement we make.
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
//             {coreValues.map((value, index) => (
//               <Card key={index} delay={index * 100} className="group text-center hover:shadow-lg sm:hover:shadow-xl border-transparent hover:border-blue-100">
//                 <CardContent className="space-y-4">
//                   <div className="relative inline-flex">
//                     <div className={`h-12 w-12 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
//                       <value.icon className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
//                     </div>
//                     <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full border-2 border-white flex items-center justify-center">
//                       <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"></div>
//                     </div>
//                   </div>

//                   <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
//                     {value.title}
//                   </h3>

//                   <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
//                     {value.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Why Choose Novotion - Mobile First */}
//       <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
//                 Why Choose
//                 <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Novotion?</span>
//               </h2>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
//               {/* Left Content */}
//               <div className="space-y-6 sm:space-y-8 animate-on-scroll">
//                 {[
//                   {
//                     icon: Users,
//                     title: "Guidance That's Personal",
//                     description: "You're not a number on a spreadsheet. You get dedicated consultants who know your name, understand your industry, and are invested in your specific goals."
//                   },
//                   {
//                     icon: Award,
//                     title: "Expertise That's Deep",
//                     description: "Our teams are specialized across 15+ industries and countless job functions. We speak your language and understand the nuances of your market."
//                   },
//                   {
//                     icon: Shield,
//                     title: "A Process That's Transparent",
//                     description: "We believe in complete visibility. You'll receive measurable outcomes and clear communication at every step of the process."
//                   },
//                   {
//                     icon: Clock,
//                     title: "Support That's End-to-End",
//                     description: "From the first resume draft to long-term post-placement support, we are your partners for the entire journey."
//                   },
//                   {
//                     icon: Globe,
//                     title: "A Team That's Always On",
//                     description: "Our global reach and 24/7 support model mean we are working for you around the clock, ensuring no opportunity is missed."
//                   }
//                 ].map((item, index) => (
//                   <div key={index} className="flex gap-3 sm:gap-4 group hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300">
//                     <div className="flex-shrink-0">
//                       <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
//                         <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
//                         {item.title}
//                       </h3>
//                       <p className="text-gray-600 text-sm sm:text-base">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Right Content - Visual Element */}
//               <div className="relative animate-on-scroll">
//                 <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white text-center shadow-xl sm:shadow-2xl">
//                   <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">85%+</div>
//                   <div className="text-lg sm:text-xl font-semibold mb-2">Placement Success Rate</div>
//                   <p className="text-blue-100 text-sm sm:text-base">
//                     Consistently delivering exceptional results for both organizations and professionals
//                   </p>

//                   {/* Stats Grid */}
//                   <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
//                     <div className="bg-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 backdrop-blur-sm">
//                       <div className="text-xl sm:text-2xl font-bold">15+</div>
//                       <div className="text-blue-100 text-xs sm:text-sm">Industries</div>
//                     </div>
//                     <div className="bg-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 backdrop-blur-sm">
//                       <div className="text-xl sm:text-2xl font-bold">24/7</div>
//                       <div className="text-blue-100 text-xs sm:text-sm">Support</div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating Elements */}
//                 <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
//                 <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-cyan-400 rounded-full blur-xl opacity-20 animate-pulse delay-1000"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Testimonials - Mobile First */}
//       <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
//             <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
//               <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//               Success Stories
//             </div>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
//               What Our Clients
//               <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Say</span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Real stories from real professionals who found success with Novotion
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
//             {testimonials.map((testimonial, index) => (
//               <Card key={index} delay={index * 200} className="group hover:shadow-lg sm:hover:shadow-xl border-blue-50">
//                 <CardContent className="space-y-4 sm:space-y-6">
//                   {/* Quote Icon */}
//                   <div className="text-blue-100">
//                     <Quote className="h-6 w-6 sm:h-8 sm:w-8" />
//                   </div>

//                   {/* Rating */}
//                   <div className="flex gap-1">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
//                     ))}
//                   </div>

//                   {/* Testimonial Text */}
//                   <p className="text-gray-600 leading-relaxed italic text-sm sm:text-base">
//                     "{testimonial.text}"
//                   </p>

//                   {/* Author */}
//                   <div className="pt-3 sm:pt-4 border-t border-gray-100">
//                     <p className="font-semibold text-gray-900 text-base sm:text-lg">{testimonial.name}</p>
//                     <p className="text-gray-600 text-sm sm:text-base">{testimonial.title}</p>
//                     <div className="flex items-center gap-2 mt-2">
//                       <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
//                         <span className="text-white text-xs font-bold">
//                           {testimonial.company.charAt(0)}
//                         </span>
//                       </div>
//                       <span className="text-gray-500 text-xs sm:text-sm">{testimonial.company}</span>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* CTA Section */}
//           <div className="text-center mt-12 sm:mt-16 animate-on-scroll">
//             <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white max-w-4xl mx-auto">
//               <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Ready to Write Your Success Story?</h3>
//               <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
//                 Join thousands of professionals and organizations who have transformed their careers and talent strategies with Novotion.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
//                 <Link href="/contact#contact-form" className="w-full sm:w-auto">
//                   <Button
//                     size="lg"
//                     className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl hover:shadow-xl sm:hover:shadow-3xl transform hover:scale-105 transition-all duration-300 font-semibold text-sm sm:text-base"
//                   >
//                     Start Your Journey
//                   </Button>
//                 </Link>
//                 <Link href="/services" className="w-full sm:w-auto">
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="border-2 border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl hover:shadow-lg sm:hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold text-sm sm:text-base"
//                   >
//                     Explore Services
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />

//       {/* Global Styles for Animations */}
//       <style jsx global>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-on-scroll {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all 0.6s ease-out;
//         }

//         .animate-fadeInUp {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default About;

// // src/app/about/page.js
// 'use client';
// import { useRef, useEffect, useState } from 'react';
// import Link from 'next/link';
// import {
//   CheckCircle,
//   Heart,
//   Lightbulb,
//   Target,
//   TrendingUp,
//   Users,
//   Star,
//   Award,
//   Globe,
//   Rocket,
//   ChevronRight,
//   Quote,
//   Zap,
//   Shield,
//   Clock,
//   Calendar
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// // Enhanced Card components
// const Card = ({ children, className = "", delay = 0, ...props }) => (
//   <div
//     className={`rounded-xl md:rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm text-card-foreground shadow-sm hover:shadow-lg md:hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] md:hover:scale-105 hover:border-novotion-primary ${className}`}
//     style={{
//       animationDelay: `${delay}ms`,
//       animation: 'fadeInUp 0.6s ease-out forwards'
//     }}
//     {...props}
//   >
//     {children}
//   </div>
// );

// const CardContent = ({ children, className = "", ...props }) => (
//   <div className={`p-4 sm:p-6 md:p-8 ${className}`} {...props}>
//     {children}
//   </div>
// );

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const coreValues = [
//     {
//       icon: Heart,
//       title: 'Integrity',
//       description: 'We operate with unwavering honesty, transparency, and respect. No exceptions.',
//       color: 'primary'
//     },
//     {
//       icon: Target,
//       title: 'Excellence',
//       description: 'We aim for the highest standard in every service we deliver, from a single resume to a full RPO implementation.',
//       color: 'primary'
//     },
//     {
//       icon: Shield,
//       title: 'Commitment',
//       description: 'We are personally invested in the success of our clients and candidates. Your goals become our goals.',
//       color: 'primary'
//     },
//     {
//       icon: Lightbulb,
//       title: 'Innovation',
//       description: 'We are constantly evolving, adopting smarter, more human-centric methods and technologies to stay ahead.',
//       color: 'primary'
//     },
//     {
//       icon: TrendingUp,
//       title: 'Empowerment',
//       description: 'We equip professionals with the tools, training, and confidence to achieve their career aspirations.',
//       color: 'primary'
//     },
//     {
//       icon: Globe,
//       title: 'Global Excellence',
//       description: 'Bridging talent across UK, USA, and India with localized expertise and global standards.',
//       color: 'primary'
//     },
//   ];

//   const testimonials = [
//     {
//       name: 'Phani Datta Pabisetty',
//       title: 'QA Analyst, Ampup',
//       text: "Novotion's help was a game-changer. Their trainer didn't just prep me; they refined my entire approach to QA testing. I had an offer from Ampup within weeks. What really stood out was the post-placement support.",
//       rating: 5,
//       company: 'Ampup'
//     },
//     {
//       name: 'Shajahan Shaik',
//       title: 'Full Stack Developer, Amazon Audible',
//       text: 'From the first resume edit to the final interview rounds, Novotion was with me. My consultant and trainer were relentless, working with me to sharpen my coding and problem-solving skills. I landed my dream job at Amazon Audible.',
//       rating: 5,
//       company: 'Amazon'
//     },
//     {
//       name: 'Dixit Gupta Garlapati',
//       title: 'DevOps Engineer, Meta',
//       text: 'Novotion has real industry experts. They connected me with a trainer who understood exactly what companies like Meta look for in a DevOps Engineer. I owe a huge part of my success to their team.',
//       rating: 5,
//       company: 'Meta'
//     }
//   ];

//   const milestones = [
//     { year: '2021', title: 'Founded', description: 'Started with vision to transform recruitment' },
//     { year: '2022', title: '100+ Placements', description: 'Crossed 100 successful placements' },
//     { year: '2023', title: 'Global Expansion', description: 'Expanded to UK and USA markets' },
//     { year: '2024', title: '500+ Clients', description: 'Served 500+ organizations worldwide' },
//     { year: '2025', title: '10K+ Professionals', description: 'Placed 10,000+ professionals' },
//   ];

//   useEffect(() => {
//     setIsVisible(true);

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-fadeInUp');
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const elements = document.querySelectorAll('.animate-on-scroll');
//     elements.forEach(el => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen" style={{ backgroundColor: 'rgba(21,108,219,0.04)' }}>
//       <Header />

//       {/* Enhanced Hero Section - Mobile First */}
//       <section className="relative min-h-[80vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
//         {/* Animated Background - replaced gradients with primary tints */}
//         <div className="absolute inset-0" style={{ backgroundColor: 'rgba(21,108,219,0.04)' }}></div>
//         <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 rounded-full opacity-20 animate-pulse" style={{ backgroundColor: 'rgba(21,108,219,0.12)' }}></div>
//         <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full opacity-20 animate-pulse delay-1000" style={{ backgroundColor: 'rgba(21,108,219,0.12)' }}></div>

//         <div className="relative container mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
//           <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8">
//               <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
//               <span className="text-white/90 text-xs sm:text-sm font-medium">
//                 Trusted by 500+ Organizations Worldwide
//               </span>
//             </div>

//             <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
//               <span style={{ color: '#156CDB' }}>
//                 Our Story
//               </span>
//               <br />
//               <span className="text-lg sm:text-xl md:text-2xl" style={{ color: '#156CDB', opacity: 0.9 }}>
//                 People, Potential, Partnership
//               </span>
//             </h1>

//             <p className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed px-4" style={{ color: 'rgba(0,0,0,0.7)' }}>
//               At its core, recruitment is a deeply human endeavor. It's about connecting ambition with opportunity, and vision with the precise talent that can bring it to life.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8">
//               <Link href="/contact#contact-form" className="w-full sm:w-auto">
//                 <Button
//                   size="lg"
//                   className="group text-white w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl hover:shadow-xl sm:hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
//                   style={{ backgroundColor: '#156CDB' }}
//                 >
//                   <span className="flex items-center gap-2 text-base sm:text-lg font-semibold">
//                     Connect With Us
//                     <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
//                   </span>
//                 </Button>
//               </Link>

//               <Link href="#values" className="w-full sm:w-auto">
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="group bg-white/10 backdrop-blur-sm text-black w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl hover:shadow-lg sm:hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
//                   style={{ borderColor: 'rgba(21,108,219,0.15)' }}
//                 >
//                   <span className="flex items-center gap-2 text-base sm:text-lg font-semibold">
//                     Our Values
//                     <Heart className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
//                   </span>
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision Enhanced - Mobile First */}
//       <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: '#156CDB' }}></div>
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
//               {/* Mission */}
//               <div className="space-y-6 sm:space-y-8 animate-on-scroll">
//                 <div className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider">
//                   <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#156CDB' }}></div>
//                   Our Mission
//                 </div>

//                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                   Redefining
//                   <span style={{ color: '#156CDB' }}> Recruitment Excellence</span>
//                 </h2>

//                 <div className="space-y-4 sm:space-y-6 leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
//                   <p className="text-base sm:text-lg">
//                     We are a specialized Recruitment Process Outsourcing (RPO) and Career Support Services company, but we see ourselves as something more: we are architects of opportunity.
//                   </p>
//                   <p className="text-base sm:text-lg">
//                     For our organizational clients in the UK and USA, we build the high-performing teams that drive sustainable growth. For the skilled professionals we support, we pave the way for long-term career success.
//                   </p>
//                   <p className="text-base sm:text-lg">
//                     Founded in 2021, Novotion operates with a global footprint—with strategic centers in India, the USA, and the UK. This structure allows us to blend deep local market expertise with the 24/7 operational power of a global team.
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-4 pt-4">
//                   <div className="flex -space-x-2">
//                     {[1, 2, 3, 4].map((i) => (
//                       <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white" style={{ backgroundColor: '#156CDB' }}></div>
//                     ))}
//                   </div>
//                   <div className="text-sm" style={{ color: 'rgba(0,0,0,0.75)' }}>
//                     <div className="font-semibold">50+ Team Members</div>
//                     <div className="text-xs sm:text-sm">Across 3 continents</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Vision & Stats */}
//               <div className="space-y-6 sm:space-y-8 animate-on-scroll">
//                 <Card className="border-novotion-primary mb-4">
//                   <CardContent className="space-y-4">
//                     <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl flex items-center justify-center" style={{ backgroundColor: '#156CDB' }}>
//                       <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
//                     </div>
//                     <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Vision</h3>
//                     <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
//                       To be the most trusted partner in career and talent development, known not just for our results, but for our integrity and our unwavering commitment to the success of every client and candidate.
//                     </p>
//                   </CardContent>
//                 </Card>

//                 {/* Quick Stats */}
//                 <div className="grid grid-cols-2 gap-3 sm:gap-4">
//                   <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center" style={{ backgroundColor: '#156CDB' }}>
//                     <div className="text-xl sm:text-2xl font-bold">500+</div>
//                     <div className="text-xs sm:text-sm">Clients Served</div>
//                   </div>
//                   <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center" style={{ backgroundColor: '#156CDB' }}>
//                     <div className="text-xl sm:text-2xl font-bold">10K+</div>
//                     <div className="text-xs sm:text-sm">Professionals Placed</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Journey Timeline - Mobile First */}
//       <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden" style={{ backgroundColor: 'rgba(21,108,219,0.03)' }}>
//         <div className="container mx-auto px-4 sm:px-6 relative">
//           <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
//             <div className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider mb-4">
//               <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#156CDB' }}></div>
//               Our Journey
//             </div>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
//               Building Excellence
//               <span style={{ color: '#156CDB' }}> Since 2021</span>
//             </h2>
//           </div>

//           {/* Timeline - Mobile Stack, Desktop Side-by-side */}
//           <div className="max-w-4xl mx-auto">
//             <div className="relative">
//               {/* Timeline line - Hidden on mobile, visible on md+ */}
//               <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full" style={{ backgroundColor: '#156CDB' }}></div>

//               {milestones.map((milestone, index) => (
//                 <div
//                   key={index}
//                   className={`relative mb-8 sm:mb-12 ${index % 2 === 0 ? 'md:flex md:flex-row' : 'md:flex md:flex-row-reverse'}`}
//                 >
//                   {/* Content */}
//                   <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-6 lg:pr-12' : 'md:pl-6 lg:pl-12'}`}>
//                     <Card delay={index * 200} className="hover:shadow-lg sm:hover:shadow-xl border-novotion-primary mb-4 md:mb-0">
//                       <CardContent className="p-4 sm:p-6">
//                         <div className="text-xl sm:text-2xl font-bold" style={{ color: '#156CDB' }}>{milestone.year}</div>
//                         <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
//                         <p className="text-gray-600 text-sm sm:text-base">{milestone.description}</p>
//                       </CardContent>
//                     </Card>
//                   </div>

//                   {/* Timeline dot - Hidden on mobile, visible on md+ */}
//                   <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full z-10" style={{ border: '4px solid #156CDB' }}></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Core Values - Mobile First */}
//       <section id="values" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
//             <div className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider mb-4">
//               <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#156CDB' }}></div>
//               Our Foundation
//             </div>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
//               Core Values That
//               <span style={{ color: '#156CDB' }}> Drive Us</span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
//               These aren't just words on a wall; they are the principles that guide every decision, every partnership, and every placement we make.
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
//             {coreValues.map((value, index) => (
//               <Card key={index} delay={index * 100} className="group text-center hover:shadow-lg sm:hover:shadow-xl border-transparent hover:border-novotion-primary">
//                 <CardContent className="space-y-4">
//                   <div className="relative inline-flex">
//                     <div className={`h-12 w-12 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 shadow-lg`} style={{ backgroundColor: '#156CDB' }}>
//                       <value.icon className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
//                     </div>
//                     <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full border-2 border-white flex items-center justify-center">
//                       <div className="w-1.5 h-1.5 sm:w-2 sm:h-2" style={{ backgroundColor: '#f6b21a' }}></div>
//                     </div>
//                   </div>

//                   <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
//                     {value.title}
//                   </h3>

//                   <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
//                     {value.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Why Choose Novotion - Mobile First */}
//       <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden" style={{ backgroundColor: 'rgba(21,108,219,0.03)' }}>
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
//                 Why Choose
//                 <span style={{ color: '#156CDB' }}> Novotion?</span>
//               </h2>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
//               {/* Left Content */}
//               <div className="space-y-6 sm:space-y-8 animate-on-scroll">
//                 {[
//                   {
//                     icon: Users,
//                     title: "Guidance That's Personal",
//                     description: "You're not a number on a spreadsheet. You get dedicated consultants who know your name, understand your industry, and are invested in your specific goals."
//                   },
//                   {
//                     icon: Award,
//                     title: "Expertise That's Deep",
//                     description: "Our teams are specialized across 15+ industries and countless job functions. We speak your language and understand the nuances of your market."
//                   },
//                   {
//                     icon: Shield,
//                     title: "A Process That's Transparent",
//                     description: "We believe in complete visibility. You'll receive measurable outcomes and clear communication at every step of the process."
//                   },
//                   {
//                     icon: Clock,
//                     title: "Support That's End-to-End",
//                     description: "From the first resume draft to long-term post-placement support, we are your partners for the entire journey."
//                   },
//                   {
//                     icon: Globe,
//                     title: "A Team That's Always On",
//                     description: "Our global reach and 24/7 support model mean we are working for you around the clock, ensuring no opportunity is missed."
//                   }
//                 ].map((item, index) => (
//                   <div key={index} className="flex gap-3 sm:gap-4 group hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300">
//                     <div className="flex-shrink-0">
//                       <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#156CDB' }}>
//                         <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 group-hover:text-novotion-primary transition-colors" style={{ color: '#0f57b8' }}>
//                         {item.title}
//                       </h3>
//                       <p className="text-gray-600 text-sm sm:text-base">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Right Content - Visual Element */}
//               <div className="relative animate-on-scroll">
//                 <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white text-center shadow-xl sm:shadow-2xl" style={{ backgroundColor: '#156CDB' }}>
//                   <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">85%+</div>
//                   <div className="text-lg sm:text-xl font-semibold mb-2">Placement Success Rate</div>
//                   <p className="text-blue-100 text-sm sm:text-base" style={{ color: 'rgba(255,255,255,0.9)' }}>
//                     Consistently delivering exceptional results for both organizations and professionals
//                   </p>

//                   {/* Stats Grid */}
//                   <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
//                     <div className="rounded-xl sm:rounded-2xl p-3 sm:p-4" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}>
//                       <div className="text-xl sm:text-2xl font-bold">15+</div>
//                       <div className="text-xs sm:text-sm">Industries</div>
//                     </div>
//                     <div className="rounded-xl sm:rounded-2xl p-3 sm:p-4" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}>
//                       <div className="text-xl sm:text-2xl font-bold">24/7</div>
//                       <div className="text-xs sm:text-sm">Support</div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating Elements */}
//                 <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 rounded-full opacity-20 animate-pulse" style={{ backgroundColor: '#f6b21a' }}></div>
//                 <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 rounded-full opacity-20 animate-pulse delay-1000" style={{ backgroundColor: 'rgba(21,108,219,0.12)' }}></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Testimonials - Mobile First */}
//       <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
//             <div className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider mb-4">
//               <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#156CDB' }}></div>
//               Success Stories
//             </div>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
//               What Our Clients
//               <span style={{ color: '#156CDB' }}> Say</span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Real stories from real professionals who found success with Novotion
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
//             {testimonials.map((testimonial, index) => (
//               <Card key={index} delay={index * 200} className="group hover:shadow-lg sm:hover:shadow-xl border-novotion-primary">
//                 <CardContent className="space-y-4 sm:space-y-6">
//                   {/* Quote Icon */}
//                   <div style={{ color: 'rgba(21,108,219,0.08)' }}>
//                     <Quote className="h-6 w-6 sm:h-8 sm:w-8" />
//                   </div>

//                   {/* Rating */}
//                   <div className="flex gap-1">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
//                     ))}
//                   </div>

//                   {/* Testimonial Text */}
//                   <p className="text-gray-600 leading-relaxed italic text-sm sm:text-base">
//                     "{testimonial.text}"
//                   </p>

//                   {/* Author */}
//                   <div className="pt-3 sm:pt-4 border-t border-gray-100">
//                     <p className="font-semibold text-gray-900 text-base sm:text-lg">{testimonial.name}</p>
//                     <p className="text-gray-600 text-sm sm:text-base">{testimonial.title}</p>
//                     <div className="flex items-center gap-2 mt-2">
//                       <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#156CDB' }}>
//                         <span className="text-white text-xs font-bold">
//                           {testimonial.company.charAt(0)}
//                         </span>
//                       </div>
//                       <span className="text-gray-500 text-xs sm:text-sm">{testimonial.company}</span>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* CTA Section */}
//           <div className="text-center mt-12 sm:mt-16 animate-on-scroll">
//             <div className="rounded-2xl p-6 sm:p-8 md:p-12 text-white max-w-4xl mx-auto" style={{ backgroundColor: '#156CDB' }}>
//               <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Ready to Write Your Success Story?</h3>
//               <p className="text-white text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
//                 Join thousands of professionals and organizations who have transformed their careers and talent strategies with Novotion.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
//                 <Link href="/contact#contact-form" className="w-full sm:w-auto">
//                   <Button
//                     size="lg"
//                     className="text-blue-700 w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl hover:shadow-xl sm:hover:shadow-3xl transform hover:scale-105 transition-all duration-300 font-semibold text-sm sm:text-base"
//                     style={{ backgroundColor: 'white' }}
//                   >
//                     Start Your Journey
//                   </Button>
//                 </Link>
//                 <Link href="/services" className="w-full sm:w-auto">
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="border-2 text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl hover:shadow-lg sm:hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold text-sm sm:text-base"
//                     style={{ borderColor: 'rgba(255,255,255,0.12)' }}
//                   >
//                     Explore Services
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />

//       {/* Global Styles for Animations */}
//       <style jsx global>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-on-scroll {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all 0.6s ease-out;
//         }

//         .animate-fadeInUp {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default About;

// // src/app/about/page.js
// 'use client';
// import { useRef, useEffect, useState } from 'react';
// import Link from 'next/link';
// import {
//   CheckCircle,
//   Heart,
//   Lightbulb,
//   Target,
//   TrendingUp,
//   Users,
//   Star,
//   Award,
//   Globe,
//   Rocket,
//   ChevronRight,
//   Quote,
//   Zap,
//   Shield,
//   Clock,
//   Calendar,
//   Sparkles
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// // Enhanced Card components
// const Card = ({ children, className = "", delay = 0, ...props }) => (
//   <div
//     className={`rounded-lg sm:rounded-xl border border-gray-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}
//     {...props}
//   >
//     {children}
//   </div>
// );

// const CardContent = ({ children, className = "", ...props }) => (
//   <div className={`p-4 sm:p-6 ${className}`} {...props}>
//     {children}
//   </div>
// );

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const coreValues = [
//     {
//       icon: Heart,
//       title: 'Integrity',
//       description: 'We operate with unwavering honesty, transparency, and respect. No exceptions.',
//       color: 'primary'
//     },
//     {
//       icon: Target,
//       title: 'Excellence',
//       description: 'We aim for the highest standard in every service we deliver, from a single resume to a full RPO implementation.',
//       color: 'primary'
//     },
//     {
//       icon: Shield,
//       title: 'Commitment',
//       description: 'We are personally invested in the success of our clients and candidates. Your goals become our goals.',
//       color: 'primary'
//     },
//     {
//       icon: Lightbulb,
//       title: 'Innovation',
//       description: 'We are constantly evolving, adopting smarter, more human-centric methods and technologies to stay ahead.',
//       color: 'primary'
//     },
//     {
//       icon: TrendingUp,
//       title: 'Empowerment',
//       description: 'We equip professionals with the tools, training, and confidence to achieve their career aspirations.',
//       color: 'primary'
//     },
//     {
//       icon: Globe,
//       title: 'Global Excellence',
//       description: 'Bridging talent across UK, USA, and India with localized expertise and global standards.',
//       color: 'primary'
//     },
//   ];

//   const testimonials = [
//     {
//       name: 'Phani Datta Pabisetty',
//       title: 'QA Analyst, Ampup',
//       text: "Novotion's help was a game-changer. Their trainer didn't just prep me; they refined my entire approach to QA testing. I had an offer from Ampup within weeks. What really stood out was the post-placement support.",
//       rating: 5,
//       company: 'Ampup'
//     },
//     {
//       name: 'Shajahan Shaik',
//       title: 'Full Stack Developer, Amazon Audible',
//       text: 'From the first resume edit to the final interview rounds, Novotion was with me. My consultant and trainer were relentless, working with me to sharpen my coding and problem-solving skills. I landed my dream job at Amazon Audible.',
//       rating: 5,
//       company: 'Amazon'
//     },
//     {
//       name: 'Dixit Gupta Garlapati',
//       title: 'DevOps Engineer, Meta',
//       text: 'Novotion has real industry experts. They connected me with a trainer who understood exactly what companies like Meta look for in a DevOps Engineer. I owe a huge part of my success to their team.',
//       rating: 5,
//       company: 'Meta'
//     }
//   ];

//   const milestones = [
//     { year: '2021', title: 'Founded', description: 'Started with vision to transform recruitment' },
//     { year: '2022', title: '100+ Placements', description: 'Crossed 100 successful placements' },
//     { year: '2023', title: 'Global Expansion', description: 'Expanded to UK and USA markets' },
//     { year: '2024', title: '500+ Clients', description: 'Served 500+ organizations worldwide' },
//     { year: '2025', title: '10K+ Professionals', description: 'Placed 10,000+ professionals' },
//   ];

//   useEffect(() => {
//     setIsVisible(true);

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-in');
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const elements = document.querySelectorAll('.animate-on-scroll');
//     elements.forEach(el => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
//       <Header />

//       {/* Enhanced Hero Section - Consistent with Other Pages */}
//       <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pt-16 md:pt-20">

//         {/* Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
//           <div className="absolute top-1/2 left-1/2 w-32 h-32 md:w-64 md:h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
//         </div>

//         <div className="relative container mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-6">
//           <div className="space-y-4 sm:space-y-6">

//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-4 py-2 mb-4 sm:mb-6 shadow-2xl">
//               <div className="flex items-center gap-1">
//                 <Sparkles className="h-4 w-4 text-yellow-400" />
//                 <span className="text-white/90 text-xs font-semibold tracking-wide">
//                   Our Story
//                 </span>
//               </div>
//               <div className="w-1 h-1 bg-white/40 rounded-full"></div>
//               <div className="flex items-center gap-1">
//                 <Rocket className="h-3 w-3 text-cyan-400" />
//                 <span className="text-white/70 text-xs">
//                   Since 2021
//                 </span>
//               </div>
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
//               <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
//                 About Novotion
//               </span>
//             </h1>

//             {/* Subtitle */}
//             <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto px-4">
//               At its core, recruitment is a deeply human endeavor. It's about connecting ambition with opportunity, and vision with the precise talent that can bring it to life.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
//               <Link href="/contact#contact-form" className="w-full sm:w-auto">
//                 <Button
//                   size="lg"
//                   className="group bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm sm:text-base"
//                 >
//                   Connect With Us
//                   <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </Link>

//               <Link href="#values" className="w-full sm:w-auto">
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all text-sm sm:text-base"
//                 >
//                   Our Values
//                   <Heart className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision Enhanced */}
//       <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
//               {/* Mission */}
//               <div className="space-y-6 animate-on-scroll">
//                 <div className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider text-blue-600">
//                   <div className="w-2 h-2 rounded-full bg-blue-600"></div>
//                   Our Mission
//                 </div>

//                 <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
//                   Redefining
//                   <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Recruitment Excellence</span>
//                 </h2>

//                 <div className="space-y-4 leading-relaxed text-gray-600">
//                   <p className="text-sm sm:text-base">
//                     We are a specialized Recruitment Process Outsourcing (RPO) and Career Support Services company, but we see ourselves as something more: we are architects of opportunity.
//                   </p>
//                   <p className="text-sm sm:text-base">
//                     For our organizational clients in the UK and USA, we build the high-performing teams that drive sustainable growth. For the skilled professionals we support, we pave the way for long-term career success.
//                   </p>
//                   <p className="text-sm sm:text-base">
//                     Founded in 2021, Novotion operates with a global footprint—with strategic centers in India, the USA, and the UK. This structure allows us to blend deep local market expertise with the 24/7 operational power of a global team.
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-4 pt-4">
//                   <div className="flex -space-x-2">
//                     {[1, 2, 3, 4].map((i) => (
//                       <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-blue-600"></div>
//                     ))}
//                   </div>
//                   <div className="text-sm text-gray-600">
//                     <div className="font-semibold">50+ Team Members</div>
//                     <div className="text-xs sm:text-sm">Across 3 continents</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Vision & Stats */}
//               <div className="space-y-6 animate-on-scroll">
//                 <Card className="hover-lift border-l-4 border-l-blue-600 bg-gradient-to-br from-white to-blue-50/50">
//                   <CardContent className="space-y-4">
//                     <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-blue-100 flex items-center justify-center">
//                       <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
//                     </div>
//                     <h3 className="text-lg sm:text-xl font-bold text-gray-900">Our Vision</h3>
//                     <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
//                       To be the most trusted partner in career and talent development, known not just for our results, but for our integrity and our unwavering commitment to the success of every client and candidate.
//                     </p>
//                   </CardContent>
//                 </Card>

//                 {/* Quick Stats */}
//                 <div className="grid grid-cols-2 gap-3 sm:gap-4">
//                   <div className="rounded-xl p-4 sm:p-6 text-white text-center bg-gradient-to-r from-blue-600 to-cyan-600">
//                     <div className="text-xl sm:text-2xl font-bold">500+</div>
//                     <div className="text-xs sm:text-sm">Clients Served</div>
//                   </div>
//                   <div className="rounded-xl p-4 sm:p-6 text-white text-center bg-gradient-to-r from-blue-600 to-cyan-600">
//                     <div className="text-xl sm:text-2xl font-bold">10K+</div>
//                     <div className="text-xs sm:text-sm">Professionals Placed</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Journey Timeline */}
//       <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50/50 to-blue-50/50">
//         <div className="container mx-auto px-4 sm:px-6 relative">
//           <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
//             <div className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider text-blue-600 mb-4">
//               <div className="w-2 h-2 rounded-full bg-blue-600"></div>
//               Our Journey
//             </div>
//             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Building Excellence
//               <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Since 2021</span>
//             </h2>
//           </div>

//           {/* Timeline */}
//           <div className="max-w-4xl mx-auto">
//             <div className="relative">
//               {/* Timeline line */}
//               <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full bg-blue-600"></div>

//               {milestones.map((milestone, index) => (
//                 <div
//                   key={index}
//                   className={`relative mb-8 ${index % 2 === 0 ? 'md:flex md:flex-row' : 'md:flex md:flex-row-reverse'}`}
//                 >
//                   {/* Content */}
//                   <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-6' : 'md:pl-6'}`}>
//                     <Card className="hover-lift border-l-4 border-l-blue-600 bg-white/60 backdrop-blur-sm">
//                       <CardContent className="p-4 sm:p-6">
//                         <div className="text-lg sm:text-xl font-bold text-blue-600">{milestone.year}</div>
//                         <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
//                         <p className="text-gray-600 text-sm sm:text-base">{milestone.description}</p>
//                       </CardContent>
//                     </Card>
//                   </div>

//                   {/* Timeline dot */}
//                   <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full z-10 border-4 border-blue-600"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Core Values */}
//       <section id="values" className="py-12 sm:py-16 md:py-20 bg-white">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
//             <div className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider text-blue-600 mb-4">
//               <div className="w-2 h-2 rounded-full bg-blue-600"></div>
//               Our Foundation
//             </div>
//             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Core Values That
//               <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Drive Us</span>
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto px-4">
//               These aren't just words on a wall; they are the principles that guide every decision, every partnership, and every placement we make.
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
//             {coreValues.map((value, index) => (
//               <Card key={index} className="hover-lift group border-l-4 border-l-blue-600 bg-gradient-to-br from-white to-blue-50/50">
//                 <CardContent className="text-center space-y-4">
//                   <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-blue-100 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
//                     <value.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
//                   </div>

//                   <h3 className="text-lg sm:text-xl font-bold text-gray-900">
//                     {value.title}
//                   </h3>

//                   <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
//                     {value.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Why Choose Novotion */}
//       <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50/50 to-blue-50/50">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
//               <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//                 Why Choose
//                 <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Novotion?</span>
//               </h2>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
//               {/* Left Content */}
//               <div className="space-y-6 animate-on-scroll">
//                 {[
//                   {
//                     icon: Users,
//                     title: "Guidance That's Personal",
//                     description: "You're not a number on a spreadsheet. You get dedicated consultants who know your name, understand your industry, and are invested in your specific goals."
//                   },
//                   {
//                     icon: Award,
//                     title: "Expertise That's Deep",
//                     description: "Our teams are specialized across 15+ industries and countless job functions. We speak your language and understand the nuances of your market."
//                   },
//                   {
//                     icon: Shield,
//                     title: "A Process That's Transparent",
//                     description: "We believe in complete visibility. You'll receive measurable outcomes and clear communication at every step of the process."
//                   },
//                   {
//                     icon: Clock,
//                     title: "Support That's End-to-End",
//                     description: "From the first resume draft to long-term post-placement support, we are your partners for the entire journey."
//                   },
//                   {
//                     icon: Globe,
//                     title: "A Team That's Always On",
//                     description: "Our global reach and 24/7 support model mean we are working for you around the clock, ensuring no opportunity is missed."
//                   }
//                 ].map((item, index) => (
//                   <div key={index} className="flex gap-3 group hover:scale-[1.02] transition-transform duration-300">
//                     <div className="flex-shrink-0">
//                       <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                         <item.icon className="h-5 w-5 text-blue-600" />
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900">
//                         {item.title}
//                       </h3>
//                       <p className="text-gray-600 text-sm sm:text-base">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Right Content - Visual Element */}
//               <div className="relative animate-on-scroll">
//                 <div className="rounded-xl p-6 sm:p-8 text-white text-center shadow-xl bg-gradient-to-r from-blue-600 to-cyan-600">
//                   <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">85%+</div>
//                   <div className="text-base sm:text-lg font-semibold mb-2">Placement Success Rate</div>
//                   <p className="text-blue-100 text-sm sm:text-base">
//                     Consistently delivering exceptional results for both organizations and professionals
//                   </p>

//                   {/* Stats Grid */}
//                   <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6">
//                     <div className="rounded-xl p-3 sm:p-4 bg-white/10">
//                       <div className="text-lg sm:text-xl font-bold">15+</div>
//                       <div className="text-xs sm:text-sm">Industries</div>
//                     </div>
//                     <div className="rounded-xl p-3 sm:p-4 bg-white/10">
//                       <div className="text-lg sm:text-xl font-bold">24/7</div>
//                       <div className="text-xs sm:text-sm">Support</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Testimonials */}
//       <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-white">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
//             <div className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider text-blue-600 mb-4">
//               <div className="w-2 h-2 rounded-full bg-blue-600"></div>
//               Success Stories
//             </div>
//             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               What Our Clients
//               <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Say</span>
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base">
//               Real stories from real professionals who found success with Novotion
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
//             {testimonials.map((testimonial, index) => (
//               <Card key={index} className="hover-lift border-l-4 border-l-blue-600 bg-gradient-to-br from-white to-blue-50/50">
//                 <CardContent className="space-y-4">
//                   {/* Quote Icon */}
//                   <div className="text-blue-100">
//                     <Quote className="h-6 w-6" />
//                   </div>

//                   {/* Rating */}
//                   <div className="flex gap-1">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
//                     ))}
//                   </div>

//                   {/* Testimonial Text */}
//                   <p className="text-gray-600 leading-relaxed italic text-sm sm:text-base">
//                     "{testimonial.text}"
//                   </p>

//                   {/* Author */}
//                   <div className="pt-3 border-t border-gray-100">
//                     <p className="font-semibold text-gray-900 text-base">{testimonial.name}</p>
//                     <p className="text-gray-600 text-sm sm:text-base">{testimonial.title}</p>
//                     <div className="flex items-center gap-2 mt-2">
//                       <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 flex items-center justify-center">
//                         <span className="text-white text-xs font-bold">
//                           {testimonial.company.charAt(0)}
//                         </span>
//                       </div>
//                       <span className="text-gray-500 text-xs sm:text-sm">{testimonial.company}</span>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* CTA Section */}
//           <div className="text-center mt-8 sm:mt-12 animate-on-scroll">
//             <div className="rounded-xl p-6 sm:p-8 text-white max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-cyan-600">
//               <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Write Your Success Story?</h3>
//               <p className="text-white text-sm sm:text-base mb-6 max-w-2xl mx-auto">
//                 Join thousands of professionals and organizations who have transformed their careers and talent strategies with Novotion.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-3 justify-center">
//                 <Link href="/contact#contact-form" className="w-full sm:w-auto">
//                   <Button
//                     size="lg"
//                     className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all font-semibold text-sm sm:text-base"
//                   >
//                     Start Your Journey
//                   </Button>
//                 </Link>
//                 <Link href="/services" className="w-full sm:w-auto">
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="border-2 border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all font-semibold text-sm sm:text-base"
//                   >
//                     Explore Services
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />

//       {/* Global Styles */}
//       <style jsx global>{`
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.3; }
//           50% { opacity: 0.5; }
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow 4s infinite;
//         }

//         .animate-on-scroll {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all 0.6s ease-out;
//         }

//         .animate-on-scroll.animate-in {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .hover-lift {
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .hover-lift:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default About;

// // src/app/about/page.js
// "use client";
// import { useRef, useEffect, useState } from "react";
// import Link from "next/link";
// import {
//   CheckCircle,
//   Heart,
//   Lightbulb,
//   Target,
//   TrendingUp,
//   Users,
//   Star,
//   Award,
//   Globe,
//   Rocket,
//   ChevronRight,
//   Quote,
//   Zap,
//   Shield,
//   Clock,
//   Calendar,
//   Sparkles,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// // Enhanced Card components
// const Card = ({ children, className = "", delay = 0, ...props }) => (
//   <div
//     className={`rounded-lg sm:rounded-xl border border-gray-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}
//     {...props}
//   >
//     {children}
//   </div>
// );

// const CardContent = ({ children, className = "", ...props }) => (
//   <div className={`p-4 sm:p-6 ${className}`} {...props}>
//     {children}
//   </div>
// );

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const coreValues = [
//     {
//       icon: Shield,
//       title: "Integrity",
//       description:
//         "We operate our recruitment solutions with unwavering honesty, transparency, and respect. No exceptions in our hiring process. No shortcuts in talent acquisition.",
//       color: "primary",
//     },
//     {
//       icon: Award,
//       title: "Excellence",
//       description:
//         "We aim for the highest standard in every recruitment service we deliver - from a single resume optimization to a full RPO implementation.",
//       color: "primary",
//     },
//     {
//       icon: Heart,
//       title: "Commitment",
//       description:
//         "We are personally invested in your career success and hiring goals. Your talent acquisition objectives become our objectives. Your wins in recruitment are our wins.",
//       color: "primary",
//     },
//     {
//       icon: Lightbulb,
//       title: "Innovation",
//       description:
//         "We constantly evolve our recruitment process outsourcing, adopting smarter, more human-centric hiring methods and technologies to stay ahead.",
//       color: "primary",
//     },
//     {
//       icon: TrendingUp,
//       title: "Empowerment",
//       description:
//         "We equip professionals with the tools, career training, and confidence they need through our career support services to achieve their aspirations.",
//       color: "primary",
//     },
//     {
//       icon: Globe,
//       title: "Global Excellence",
//       description:
//         "Bridging talent acquisition across the UK & USA with localized recruitment expertise and global RPO standards.",
//       color: "primary",
//     },
//   ];

//   const testimonials = [
//     {
//       name: "Hiring Manager, Ampup ",
//       title: "",
//       text: "Novation transformed our hiring experience. Their strategic interview preparation and candidate support helped us secure the right talent quickly. What impressed us most was their continued support even after placement.",
//       rating: 5,
//       company: "Ampup",
//     },
//     {
//       name: "Shajahan Shaik",
//       title: "Full Stack Developer, Amazon Audible",
//       text: "From the first resume edit to the final interview rounds, Novotion's career coaching was with me. My consultant and trainer worked relentlessly, sharpening my coding skills through their interview preparation program. I landed my dream job at Amazon Audible.",
//       rating: 5,
//       company: "Amazon",
//     },
//     {
//       name: "Hiring Manager, Meta ",
//       title: "",
//       text: "Novotion brings true industry expertise to talent acquisition. Their team quickly understood our hiring expectations and delivered candidates who were exceptionally well-prepared. Their recruitment support made a measurable impact.",
//       rating: 5,
//       company: "Meta",
//     },
//   ];

//   const milestones = [
//     {
//       year: "2021",
//       title: "The Beginning",
//       description:
//         "Started with a vision to transform recruitment solutions - making talent acquisition more human, more strategic, and more impactful through innovative RPO services.",
//     },
//     {
//       year: "2022",
//       title: "Momentum Builds",
//       description:
//         "Crossed 100 successful placements and established our reputation for quality recruitment process outsourcing and reliable career support services.",
//     },
//     {
//       year: "2023",
//       title: "Going Global",
//       description:
//         "Expanded recruitment solutions to UK and USA markets, bringing our client-first RPO approach and talent acquisition expertise to international audiences.",
//     },
//     {
//       year: "2024",
//       title: "Scaling Impact",
//       description:
//         "Served 500+ organizations worldwide with recruitment process outsourcing and placed thousands of professionals through comprehensive career support services.",
//     },
//     {
//       year: "2025",
//       title: "Onward & Upward",
//       description:
//         "Placed over 10,000+ professionals with our career support programs and continue to redefine excellence in recruitment and talent acquisition.",
//     },
//   ];

//   useEffect(() => {
//     setIsVisible(true);

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("animate-in");
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const elements = document.querySelectorAll(".animate-on-scroll");
//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
//       <Header />

//       {/* Enhanced Hero Section - Consistent with Other Pages */}
//       <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pt-16 md:pt-20">
//         {/* Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
//           <div className="absolute top-1/2 left-1/2 w-32 h-32 md:w-64 md:h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
//         </div>

//         <div className="relative container mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-6">
//           <div className="space-y-4 sm:space-y-6">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-4 py-2 mb-4 sm:mb-6 shadow-2xl">
//               <div className="flex items-center gap-1">
//                 {/* <Sparkles className="h-4 w-4 text-yellow-400" /> */}
//                 <span className="text-white/90 text-xs font-semibold tracking-wide">
//                   Our Story
//                 </span>
//               </div>
//               {/* <div className="w-1 h-1 bg-white/40 rounded-full"></div> */}
//               {/* <div className="flex items-center gap-1">
//                 <Rocket className="h-3 w-3 text-cyan-400" />
//                 <span className="text-white/70 text-xs">
//                   Since 2021
//                 </span>
//               </div> */}
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
//               <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
//                 People, Potential, Partnership
//               </span>
//             </h1>

//             {/* Subtitle */}
//             <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto px-4">
//               We are Novotion - architects of opportunity and masters of talent
//               acquisition.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
//               <Link href="/contact#contact-form" className="w-full sm:w-auto">
//                 <Button
//                   size="lg"
//                   className="group bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm sm:text-base"
//                 >
//                   Partner With Us
//                   <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </Link>

//               {/* <Link
//                 href="/services/career-support"
//                 className="w-full sm:w-auto"
//               >
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all text-sm sm:text-base"
//                 >
//                   Start Your Career Journey
//                   <TrendingUp className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
//                 </Button>
//               </Link> */}
//               <Link
//                 href="/services/career-support"
//                 className="w-full sm:w-auto"
//               >
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all text-sm sm:text-base"
//                 >
//                   Start Your Career Journey
//                   <TrendingUp className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision Enhanced */}
//       <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
//               {/* Introduction */}
//               <div className="space-y-6 animate-on-scroll">
//                 <div className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider text-blue-600">
//                   <div className="w-2 h-2 rounded-full bg-blue-600"></div>
//                   Who We Are
//                 </div>

//                 <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
//                   We are Novotion - a specialized Recruitment Process
//                   Outsourcing (RPO) and Career Support Services company.
//                 </h2>

//                 <div className="space-y-4 leading-relaxed text-gray-600">
//                   <p className="text-sm sm:text-base">
//                     But we see ourselves as something more: we are architects of
//                     opportunity and masters of talent acquisition.
//                   </p>
//                   <p className="text-sm sm:text-base">
//                     For businesses in the UK and USA, we build high-performing
//                     teams through strategic recruitment solutions that drive
//                     sustainable growth. For skilled professionals worldwide, our
//                     career support services pave the way for long-term success.
//                   </p>
//                   <p className="text-sm sm:text-base">
//                     Founded in 2021, Novotion operates with a truly global
//                     recruitment footprint. With strategic centers in India and
//                     the USA, and strengthened operational capabilities across
//                     the UK, we blend deep local market expertise with the power
//                     of 24/7 workforce management operations.
//                   </p>
//                   {/* <p className="text-sm sm:text-base font-semibold text-blue-600">
//                     The result? Faster talent acquisition. Better matches through our RPO services. Lasting partnerships in recruitment.
//                   </p> */}
//                 </div>

//                 <div className="flex items-center gap-4 pt-4">
//                   <div className="flex -space-x-2">
//                     {[1, 2, 3, 4].map((i) => (
//                       <div
//                         key={i}
//                         className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-blue-600"
//                       ></div>
//                     ))}
//                   </div>
//                   <div className="text-sm text-gray-600">
//                     <div className="font-semibold">50+ Team Members</div>
//                     <div className="text-xs sm:text-sm">
//                       Across global locations
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Mission & Stats */}
//               <div className="space-y-6 animate-on-scroll">
//                 <Card className="hover-lift border-l-4 border-l-blue-600 bg-gradient-to-br from-white to-blue-50/50">
//                   <CardContent className="space-y-4">
//                     <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-blue-100 flex items-center justify-center">
//                       <Target className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
//                     </div>
//                     <h3 className="text-lg sm:text-xl font-bold text-gray-900">
//                       Our Mission
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
//                       Our Mission is to be the most reliable partner in career
//                       growth and talent acquisition recognized not only for our
//                       RPO excellence, but for our integrity and our steadfast
//                       dedication to the success of every client and candidate we
//                       support.
//                     </p>
//                   </CardContent>
//                 </Card>

//                 {/* Quick Stats */}
//                 <div className="grid grid-cols-2 gap-3 sm:gap-4">
//                   <div className="rounded-xl p-4 sm:p-6 text-white text-center bg-gradient-to-r from-blue-600 to-cyan-600">
//                     <div className="text-xl sm:text-2xl font-bold">500+</div>
//                     <div className="text-xs sm:text-sm">Clients Served</div>
//                   </div>
//                   <div className="rounded-xl p-4 sm:p-6 text-white text-center bg-gradient-to-r from-blue-600 to-cyan-600">
//                     <div className="text-xl sm:text-2xl font-bold">10K+</div>
//                     <div className="text-xs sm:text-sm">
//                       Professionals Placed
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Journey Timeline */}
//       <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50/50 to-blue-50/50">
//         <div className="container mx-auto px-4 sm:px-6 relative">
//           <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
//             <div className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider text-blue-600 mb-4">
//               <div className="w-2 h-2 rounded-full bg-blue-600"></div>
//               Our Journey
//             </div>
//             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Building Excellence
//               <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//                 {" "}
//                 Through Innovation
//               </span>
//             </h2>
//           </div>

//           {/* Timeline */}
//           <div className="max-w-4xl mx-auto">
//             <div className="relative">
//               {/* Timeline line */}
//               <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full bg-blue-600"></div>

//               {milestones.map((milestone, index) => (
//                 <div
//                   key={index}
//                   className={`relative mb-8 ${
//                     index % 2 === 0
//                       ? "md:flex md:flex-row"
//                       : "md:flex md:flex-row-reverse"
//                   }`}
//                 >
//                   {/* Content */}
//                   <div
//                     className={`w-full md:w-1/2 ${
//                       index % 2 === 0 ? "md:pr-6" : "md:pl-6"
//                     }`}
//                   >
//                     <Card className="hover-lift border-l-4 border-l-blue-600 bg-white/60 backdrop-blur-sm">
//                       <CardContent className="p-4 sm:p-6">
//                         <div className="text-lg sm:text-xl font-bold text-blue-600">
//                           {milestone.year}
//                         </div>
//                         <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
//                           {milestone.title}
//                         </h3>
//                         <p className="text-gray-600 text-sm sm:text-base">
//                           {milestone.description}
//                         </p>
//                       </CardContent>
//                     </Card>
//                   </div>

//                   {/* Timeline dot */}
//                   <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full z-10 border-4 border-blue-600"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Core Values */}
//       <section id="values" className="py-12 sm:py-16 md:py-20 bg-white">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
//             <div className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider text-blue-600 mb-4">
//               <div className="w-2 h-2 rounded-full bg-blue-600"></div>
//               Our Foundation
//             </div>
//             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Core Values That
//               <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//                 {" "}
//                 Drive Us
//               </span>
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto px-4">
//               These aren't just words—they're the principles that guide every
//               recruitment decision, every RPO partnership, and every talent
//               placement we make.
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
//             {coreValues.map((value, index) => (
//               <Card
//                 key={index}
//                 className="hover-lift group border-l-4 border-l-blue-600 bg-gradient-to-br from-white to-blue-50/50"
//               >
//                 <CardContent className="text-center space-y-4">
//                   <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-blue-100 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
//                     <value.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
//                   </div>

//                   <h3 className="text-lg sm:text-xl font-bold text-gray-900">
//                     {value.title}
//                   </h3>

//                   <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
//                     {value.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced What Sets Us Apart */}
//       <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50/50 to-blue-50/50">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
//               <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//                 What Sets
//                 <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//                   {" "}
//                   Novotion Apart?
//                 </span>
//               </h2>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
//               {/* Left Content */}
//               <div className="space-y-6 animate-on-scroll">
//                 {[
//                   // {
//                   //   icon: Globe,
//                   //   title: "Global Presence, Local Expertise",
//                   //   description: "Bridging talent acquisition across the UK, USA, and India with localized recruitment expertise and global RPO standards."
//                   // },
//                   // {
//                   //   icon: Users,
//                   //   title: "You're Not Just a Number",
//                   //   description: "You get dedicated recruitment consultants who know your name, understand your industry's hiring process, and are genuinely invested in your specific talent acquisition goals."
//                   // },
//                   {
//                     icon: Award,
//                     title: "Industry Specialization",
//                     description:
//                       "Our recruitment solutions teams are specialized across 15+ industries and countless job functions. We speak your language and understand the nuances of your workforce management needs.",
//                   },
//                   {
//                     icon: Zap,
//                     title: "Complete Transparency",
//                     description:
//                       "We believe in full visibility in our recruitment process outsourcing. You'll receive measurable talent acquisition outcomes, clear communication, and honest hiring updates at every step.",
//                   },
//                   {
//                     icon: Shield,
//                     title: "End-to-End Partnership",
//                     description:
//                       "From the first conversation about RPO services to long-term post-placement support, we are your partners for the entire recruitment journey.",
//                   },
//                   {
//                     icon: Clock,
//                     title: "24/7 Support",
//                     description:
//                       "Our global reach and round-the-clock recruitment support model mean our talent acquisition team is always working for you - ensuring no career opportunity is missed.",
//                   },
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex gap-3 group hover:scale-[1.02] transition-transform duration-300"
//                   >
//                     <div className="flex-shrink-0">
//                       <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                         <item.icon className="h-5 w-5 text-blue-600" />
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900">
//                         {item.title}
//                       </h3>
//                       <p className="text-gray-600 text-sm sm:text-base">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Right Content - Visual Element */}
//               <div className="relative animate-on-scroll">
//                 <div className="rounded-xl p-6 sm:p-8 text-white text-center shadow-xl bg-gradient-to-r from-blue-600 to-cyan-600">
//                   <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
//                     85%+
//                   </div>
//                   <div className="text-base sm:text-lg font-semibold mb-2">
//                     Placement Success Rate
//                   </div>
//                   <p className="text-blue-100 text-sm sm:text-base">
//                     Consistently delivering exceptional recruitment process
//                     outsourcing outcomes for both organizations and
//                     professionals through proven talent acquisition strategies.
//                   </p>

//                   {/* Stats Grid */}
//                   <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6">
//                     <div className="rounded-xl p-3 sm:p-4 bg-white/10">
//                       <div className="text-lg sm:text-xl font-bold">15+</div>
//                       <div className="text-xs sm:text-sm">Industries</div>
//                     </div>
//                     <div className="rounded-xl p-3 sm:p-4 bg-white/10">
//                       <div className="text-lg sm:text-xl font-bold">24/7</div>
//                       <div className="text-xs sm:text-sm">Support</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Testimonials */}
//       <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-white">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
//             <div className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider text-blue-600 mb-4">
//               <div className="w-2 h-2 rounded-full bg-blue-600"></div>
//               Success Stories
//             </div>
//             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Why Our Clients and Candidates
//               <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//                 {" "}
//                 Trust Us
//               </span>
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base">
//               Real stories from real professionals who found their dream roles
//               with Novotion's career support services.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
//             {testimonials.map((testimonial, index) => (
//               <Card
//                 key={index}
//                 className="hover-lift border-l-4 border-l-blue-600 bg-gradient-to-br from-white to-blue-50/50"
//               >
//                 <CardContent className="space-y-4">
//                   {/* Quote Icon */}
//                   <div className="text-blue-100">
//                     <Quote className="h-6 w-6" />
//                   </div>

//                   {/* Rating */}
//                   <div className="flex gap-1">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current"
//                       />
//                     ))}
//                   </div>

//                   {/* Testimonial Text */}
//                   <p className="text-gray-600 leading-relaxed italic text-sm sm:text-base">
//                     "{testimonial.text}"
//                   </p>

//                   {/* Author */}
//                   <div className="pt-3 border-t border-gray-100">
//                     <p className="font-semibold text-gray-900 text-base">
//                       {testimonial.name}
//                     </p>
//                     <p className="text-gray-600 text-sm sm:text-base">
//                       {testimonial.title}
//                     </p>
//                     <div className="flex items-center gap-2 mt-2">
//                       <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 flex items-center justify-center">
//                         <span className="text-white text-xs font-bold">
//                           {testimonial.company.charAt(0)}
//                         </span>
//                       </div>
//                       <span className="text-gray-500 text-xs sm:text-sm">
//                         {testimonial.company}
//                       </span>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* CTA Section */}
//           <div className="text-center mt-8 sm:mt-12 animate-on-scroll">
//             <div className="rounded-xl p-6 sm:p-8 text-white max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-cyan-600">
//               <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
//                 Ready to Experience the Novotion Difference?
//               </h3>
//               <p className="text-white text-sm sm:text-base mb-6 max-w-2xl mx-auto">
//                 Whether you're ready to transform your hiring process through
//                 recruitment process outsourcing or take your career to the next
//                 level with our career support services, we're here to help.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-3 justify-center">
//                 <Link href="/contact#contact-form" className="w-full sm:w-auto">
//                   <Button
//                     size="lg"
//                     className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all font-semibold text-sm sm:text-base"
//                   >
//                     Partner With Us
//                   </Button>
//                 </Link>
//                 <Link
//                   href="/services/career-support"
//                   className="w-full sm:w-auto"
//                 >
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className=" group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all text-sm sm:text-base"
//                   >
//                     Start Your Career Journey
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />

//       {/* Global Styles */}
//       <style jsx global>{`
//         @keyframes pulse-slow {
//           0%,
//           100% {
//             opacity: 0.3;
//           }
//           50% {
//             opacity: 0.5;
//           }
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow 4s infinite;
//         }

//         .animate-on-scroll {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all 0.6s ease-out;
//         }

//         .animate-on-scroll.animate-in {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .hover-lift {
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .hover-lift:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default About;

// src/app/about/page.js
"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  Heart,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
  Star,
  Award,
  Globe,
  Rocket,
  ChevronRight,
  Quote,
  Zap,
  Shield,
  Clock,
  Calendar,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Enhanced Card components
const Card = ({ children, className = "", delay = 0, ...props }) => (
  <div
    className={`rounded-lg sm:rounded-xl border border-gray-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-4 sm:p-6 ${className}`} {...props}>
    {children}
  </div>
);

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We operate our recruitment solutions with unwavering honesty, transparency, and respect. No exceptions in our hiring process. No shortcuts in talent acquisition.",
      color: "primary",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We aim for the highest standard in every recruitment service we deliver - from a single resume optimization to a full RPO implementation.",
      color: "primary",
    },
    {
      icon: Heart,
      title: "Commitment",
      description:
        "We are personally invested in your career success and hiring goals. Your talent acquisition objectives become our objectives. Your wins in recruitment are our wins.",
      color: "primary",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly evolve our recruitment process outsourcing, adopting smarter, more human-centric hiring methods and technologies to stay ahead.",
      color: "primary",
    },
    {
      icon: TrendingUp,
      title: "Empowerment",
      description:
        "We equip professionals with the tools, career training, and confidence they need through our career support services to achieve their aspirations.",
      color: "primary",
    },
    {
      icon: Globe,
      title: "Global Excellence",
      description:
        "Bridging talent acquisition across the UK & USA with localized recruitment expertise and global RPO standards.",
      color: "primary",
    },
  ];

  const testimonials = [
    {
      name: "Hiring Manager, Ampup ",
      title: "",
      text: "Novation transformed our hiring experience. Their strategic interview preparation and candidate support helped us secure the right talent quickly. What impressed us most was their continued support even after placement.",
      rating: 5,
      company: "Ampup",
    },
    {
      name: "Shajahan Shaik",
      title: "Full Stack Developer, Amazon Audible",
      text: "From the first resume edit to the final interview rounds, Novotion's career coaching was with me. My consultant and trainer worked relentlessly, sharpening my coding skills through their interview preparation program. I landed my dream job at Amazon Audible.",
      rating: 5,
      company: "Amazon",
    },
    {
      name: "Hiring Manager, Meta ",
      title: "",
      text: "Novotion brings true industry expertise to talent acquisition. Their team quickly understood our hiring expectations and delivered candidates who were exceptionally well-prepared. Their recruitment support made a measurable impact.",
      rating: 5,
      company: "Meta",
    },
  ];

  const milestones = [
    {
      year: "2021",
      title: "The Beginning",
      description:
        "Started with a vision to transform recruitment solutions - making talent acquisition more human, more strategic, and more impactful through innovative RPO services.",
    },
    {
      year: "2022",
      title: "Momentum Builds",
      description:
        "Crossed 100 successful placements and established our reputation for quality recruitment process outsourcing and reliable career support services.",
    },
    {
      year: "2023",
      title: "Going Global",
      description:
        "Expanded recruitment solutions to UK and USA markets, bringing our client-first RPO approach and talent acquisition expertise to international audiences.",
    },
    {
      year: "2024",
      title: "Scaling Impact",
      description:
        "Served 500+ organizations worldwide with recruitment process outsourcing and placed thousands of professionals through comprehensive career support services.",
    },
    {
      year: "2025",
      title: "Onward & Upward",
      description:
        "Placed over 10,000+ professionals with our career support programs and continue to redefine excellence in recruitment and talent acquisition.",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
      <Header />

      {/* Enhanced Hero Section - Fixed Spacing */}
      <section className="relative min-h-[80vh] sm:min-h-[70vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pt-24 md:pt-24">
        {/* Background Elements - Mobile Optimized */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-28 h-28 sm:w-40 sm:h-40 md:w-80 md:h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 sm:w-32 sm:h-32 md:w-64 md:h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 text-center">
          <div className="space-y-8 sm:space-y-10 md:space-y-12 py-8 sm:py-4">
            
            {/* Badge - With proper spacing */}
            <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-4 py-3 mb-4 sm:mb-6 md:mb-8 shadow-2xl">
              <div className="flex items-center gap-2">
                <span className="text-white/90 text-sm font-semibold tracking-wide">
                  Our Story
                </span>
              </div>
            </div>

            {/* Main Heading - With proper spacing */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight px-2">
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  People, Potential, Partnership
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto px-2 sm:px-4">
                We are Novotion - architects of opportunity and masters of talent
                acquisition.
              </p>
            </div>

            {/* CTA Buttons - With proper spacing */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 sm:pt-6 md:pt-8">
              <Link href="/contact#contact-form" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white px-6 sm:px-8 py-4 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto text-base sm:text-base font-semibold"
                >
                  Partner With Us
                  <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link
                href="/services/career-support"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-4 sm:py-4 rounded-lg transition-all w-full sm:w-auto text-base sm:text-base font-semibold"
                >
                  Start Your Career Journey
                  <TrendingUp className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Enhanced */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
              {/* Introduction */}
              <div className="space-y-6 animate-on-scroll">
                <div className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider text-blue-600">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  Who We Are
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  We are Novotion - a specialized Recruitment Process
                  Outsourcing (RPO) and Career Support Services company.
                </h2>

                <div className="space-y-4 leading-relaxed text-gray-600">
                  <p className="text-sm sm:text-base">
                    But we see ourselves as something more: we are architects of
                    opportunity and masters of talent acquisition.
                  </p>
                  <p className="text-sm sm:text-base">
                    For businesses in the UK and USA, we build high-performing
                    teams through strategic recruitment solutions that drive
                    sustainable growth. For skilled professionals worldwide, our
                    career support services pave the way for long-term success.
                  </p>
                  <p className="text-sm sm:text-base">
                    Founded in 2021, Novotion operates with a truly global
                    recruitment footprint. With strategic centers in India and
                    the USA, and strengthened operational capabilities across
                    the UK, we blend deep local market expertise with the power
                    of 24/7 workforce management operations.
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-blue-600"
                      ></div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="font-semibold">50+ Team Members</div>
                    <div className="text-xs sm:text-sm">
                      Across global locations
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission & Stats */}
              <div className="space-y-6 animate-on-scroll">
                <Card className="hover-lift border-l-4 border-l-blue-600 bg-gradient-to-br from-white to-blue-50/50">
                  <CardContent className="space-y-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Target className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      Our Mission
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Our Mission is to be the most reliable partner in career
                      growth and talent acquisition recognized not only for our
                      RPO excellence, but for our integrity and our steadfast
                      dedication to the success of every client and candidate we
                      support.
                    </p>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="rounded-xl p-4 sm:p-6 text-white text-center bg-gradient-to-r from-blue-600 to-cyan-600">
                    <div className="text-xl sm:text-2xl font-bold">500+</div>
                    <div className="text-xs sm:text-sm">Clients Served</div>
                  </div>
                  <div className="rounded-xl p-4 sm:p-6 text-white text-center bg-gradient-to-r from-blue-600 to-cyan-600">
                    <div className="text-xl sm:text-2xl font-bold">10K+</div>
                    <div className="text-xs sm:text-sm">
                      Professionals Placed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Journey Timeline */}
      <section id="our-journey" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50/50 to-blue-50/50">
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
            <div className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider text-blue-600 mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              Our Journey
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Building Excellence
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}
                Through Innovation
              </span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full bg-blue-600"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative mb-8 ${
                    index % 2 === 0
                      ? "md:flex md:flex-row"
                      : "md:flex md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-6" : "md:pl-6"
                    }`}
                  >
                    <Card className="hover-lift border-l-4 border-l-blue-600 bg-white/60 backdrop-blur-sm">
                      <CardContent className="p-4 sm:p-6">
                        <div className="text-lg sm:text-xl font-bold text-blue-600">
                          {milestone.year}
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full z-10 border-4 border-blue-600"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Core Values */}
      <section id="values" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
            <div className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider text-blue-600 mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              Our Core Value
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Core Values That
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}
                Drive Us
              </span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto px-4">
              These aren't just words—they're the principles that guide every
              recruitment decision, every RPO partnership, and every talent
              placement we make.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="hover-lift group border-l-4 border-l-blue-600 bg-gradient-to-br from-white to-blue-50/50"
              >
                <CardContent className="text-center space-y-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-blue-100 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <value.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced What Sets Us Apart */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50/50 to-blue-50/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What Sets
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {" "}
                  Novotion Apart?
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 animate-on-scroll">
                {[
                  {
                    icon: Award,
                    title: "Industry Specialization",
                    description:
                      "Our recruitment solutions teams are specialized across 15+ industries and countless job functions. We speak your language and understand the nuances of your workforce management needs.",
                  },
                  {
                    icon: Zap,
                    title: "Complete Transparency",
                    description:
                      "We believe in full visibility in our recruitment process outsourcing. You'll receive measurable talent acquisition outcomes, clear communication, and honest hiring updates at every step.",
                  },
                  {
                    icon: Shield,
                    title: "End-to-End Partnership",
                    description:
                      "From the first conversation about RPO services to long-term post-placement support, we are your partners for the entire recruitment journey.",
                  },
                  {
                    icon: Clock,
                    title: "24/7 Support",
                    description:
                      "Our global reach and round-the-clock recruitment support model mean our talent acquisition team is always working for you - ensuring no career opportunity is missed.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-3 group hover:scale-[1.02] transition-transform duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Content - Visual Element */}
              <div className="relative animate-on-scroll">
                <div className="rounded-xl p-6 sm:p-8 text-white text-center shadow-xl bg-gradient-to-r from-blue-600 to-cyan-600">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                    85%+
                  </div>
                  <div className="text-base sm:text-lg font-semibold mb-2">
                    Placement Success Rate
                  </div>
                  <p className="text-blue-100 text-sm sm:text-base">
                    Consistently delivering exceptional recruitment process
                    outsourcing outcomes for both organizations and
                    professionals through proven talent acquisition strategies.
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6">
                    <div className="rounded-xl p-3 sm:p-4 bg-white/10">
                      <div className="text-lg sm:text-xl font-bold">15+</div>
                      <div className="text-xs sm:text-sm">Industries</div>
                    </div>
                    <div className="rounded-xl p-3 sm:p-4 bg-white/10">
                      <div className="text-lg sm:text-xl font-bold">24/7</div>
                      <div className="text-xs sm:text-sm">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
            <div className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider text-blue-600 mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              Success Stories
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Our Clients and Candidates
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}
                Trust Us
              </span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Real stories from real professionals who found their dream roles
              with Novotion's career support services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover-lift border-l-4 border-l-blue-600 bg-gradient-to-br from-white to-blue-50/50"
              >
                <CardContent className="space-y-4">
                  {/* Quote Icon */}
                  <div className="text-blue-100">
                    <Quote className="h-6 w-6" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 leading-relaxed italic text-sm sm:text-base">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="pt-3 border-t border-gray-100">
                    <p className="font-semibold text-gray-900 text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {testimonial.title}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {testimonial.company.charAt(0)}
                        </span>
                      </div>
                      <span className="text-gray-500 text-xs sm:text-sm">
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8 sm:mt-12 animate-on-scroll">
            <div className="rounded-xl p-6 sm:p-8 text-white max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-cyan-600">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Ready to Experience the Novotion Difference?
              </h3>
              <p className="text-white text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Whether you're ready to transform your hiring process through
                recruitment process outsourcing or take your career to the next
                level with our career support services, we're here to help.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact#contact-form" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all font-semibold text-sm sm:text-base"
                  >
                    Partner With Us
                  </Button>
                </Link>
                <Link
                  href="/services/career-support"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-blue-600 px-4 sm:px-6 py-3 rounded-lg transition-all w-full sm:w-auto text-sm sm:text-base"
                  >
                    Start Your Career Journey
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s infinite;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default About;