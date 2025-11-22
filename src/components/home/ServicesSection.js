// // src/components/home/ServicesSection.js
// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// import { 
//   ArrowRight, 
//   CheckCircle, 
//   Building,
//   Briefcase,
//   Users
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const ServicesSection = () => {
//   const [activeTab, setActiveTab] = useState('rpo');

//   const services = {
//     rpo: {
//       title: 'RPO Solutions',
//       subtitle: 'For Organizations',
//       description: 'Complete recruitment outsourcing for UK & USA businesses',
//       icon: Building,
//       color: 'blue',
//       features: [
//         'End-to-End Recruitment',
//         'Talent Sourcing',
//         'Cost Optimization',
//         'Scalable Operations'
//       ],
//       stats: '500+ Clients • 40% Cost Save',
//       gradient: 'from-blue-500 to-blue-600'
//     },
//     career: {
//       title: 'Career Support',
//       subtitle: 'For Professionals',
//       description: 'USA market placement for IT professionals',
//       icon: Briefcase,
//       color: 'green',
//       features: [
//         'Job Placement',
//         'Interview Support',
//         'Contract Negotiation',
//         'Career Guidance'
//       ],
//       stats: '10K+ Placed • 85% Success',
//       gradient: 'from-green-500 to-green-600'
//     }
//   };

//   const currentService = services[activeTab];

//   return (
//     <section className="py-12 md:py-20 bg-white relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
//         <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-green-50 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 relative">
//         {/* Header */}
//         <div className="text-center mb-8 md:mb-12">
//           <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full bg-blue-100 text-blue-600 text-xs md:text-sm font-medium mb-3 md:mb-4">
//             Our Services
//           </div>
//           <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
//             Strategic Talent Solutions
//             <span className="block text-gradient">For Your Success</span>
//           </h2>
//           <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
//             Specialized services designed for both organizations and IT professionals
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="flex justify-center mb-6 md:mb-8">
//           <div className="bg-gray-100 rounded-xl p-1 md:p-2 inline-flex">
//             {Object.entries(services).map(([key, service]) => (
//               <button
//                 key={key}
//                 onClick={() => setActiveTab(key)}
//                 className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-xs md:text-sm transition-all duration-300 flex items-center gap-1 md:gap-2 ${
//                   activeTab === key
//                     ? `bg-white text-${service.color}-600 shadow-md`
//                     : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 <service.icon className="h-3 w-3 md:h-4 md:w-4" />
//                 {service.subtitle}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Main Content Card */}
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
//             <div className="grid md:grid-cols-12 gap-4 md:gap-6 items-start">
//               {/* Icon and Header */}
//               <div className="md:col-span-2 flex justify-center md:justify-start">
//                 <div className={`h-12 w-12 md:h-16 md:w-16 rounded-xl md:rounded-2xl bg-gradient-to-r ${currentService.gradient} flex items-center justify-center shadow-lg`}>
//                   <currentService.icon className="h-5 w-5 md:h-8 md:w-8 text-white" />
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="md:col-span-10">
//                 <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 md:gap-4 mb-4 md:mb-6">
//                   <div className="text-center md:text-left">
//                     <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
//                       {currentService.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm md:text-lg mb-2 md:mb-3">
//                       {currentService.description}
//                     </p>
//                     <div className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full bg-gray-100 text-gray-700 text-xs md:text-sm font-medium">
//                       {currentService.stats}
//                     </div>
//                   </div>
                  
//                   <Link href={`/services/${activeTab}`} className="mt-3 md:mt-0 flex justify-center md:justify-start">
//                     <Button className={`bg-gradient-to-r ${currentService.gradient} hover:shadow-lg text-white px-4 py-2 md:px-6 md:py-2 font-medium group transition-all duration-300 text-xs md:text-sm`}>
//                       Explore Service
//                       <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
//                     </Button>
//                   </Link>
//                 </div>

//                 {/* Features Grid */}
//                 <div className="grid sm:grid-cols-2 gap-2 md:gap-3">
//                   {currentService.features.map((feature, index) => (
//                     <div 
//                       key={index}
//                       className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors duration-200"
//                     >
//                       <div className={`h-5 w-5 md:h-6 md:w-6 rounded-full bg-${currentService.color}-100 flex items-center justify-center flex-shrink-0`}>
//                         <CheckCircle className={`h-2.5 w-2.5 md:h-3 md:w-3 text-${currentService.color}-600`} />
//                       </div>
//                       <span className="text-gray-700 font-medium text-xs md:text-sm">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

// // src/components/home/ServicesSection.js
// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// import { 
//   ArrowRight, 
//   CheckCircle, 
//   Building,
//   Briefcase,
//   Users
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const ServicesSection = () => {
//   const [activeTab, setActiveTab] = useState('rpo');

//   const services = {
//     rpo: {
//       title: 'RPO Solutions',
//       subtitle: 'For Organizations',
//       description: 'Complete recruitment outsourcing for UK & USA businesses',
//       icon: Building,
//       color: 'primary',
//       features: [
//         'End-to-End Recruitment',
//         'Talent Sourcing',
//         'Cost Optimization',
//         'Scalable Operations'
//       ],
//       stats: '500+ Clients • 40% Cost Save'
//     },
//     career: {
//       title: 'Career Support',
//       subtitle: 'For Professionals',
//       description: 'USA market placement for IT professionals',
//       icon: Briefcase,
//       color: 'primary',
//       features: [
//         'Job Placement',
//         'Interview Support',
//         'Contract Negotiation',
//         'Career Guidance'
//       ],
//       stats: '10K+ Placed • 85% Success'
//     }
//   };

//   const currentService = services[activeTab];

//   return (
//     <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-primary/10 rounded-full blur-xl"></div>
//         <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-secondary/10 rounded-full blur-xl"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 relative">
        
//         {/* Header */}
//         <div className="text-center mb-8 md:mb-12">
//           <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
//             Our Services
//           </div>

//           <h2 className="text-2xl md:4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             Strategic Talent Solutions
//             <span className="block text-primary">For Your Success</span>
//           </h2>

//           <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
//             Specialized services designed for both organizations and IT professionals
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="flex justify-center mb-8">
//           <div className="bg-gray-100 rounded-xl p-2 inline-flex">
//             {Object.entries(services).map(([key, service]) => (
//               <button
//                 key={key}
//                 onClick={() => setActiveTab(key)}
//                 className={`px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2 transition-all duration-300
//                   ${activeTab === key 
//                     ? 'bg-white text-primary shadow-md'
//                     : 'text-gray-600 hover:text-gray-900'
//                   }`}
//               >
//                 <service.icon className="h-4 w-4" />
//                 {service.subtitle}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Main Content Card */}
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
            
//             <div className="grid md:grid-cols-12 gap-6 items-start">

//               {/* ICON PANEL */}
//               <div className="md:col-span-2 flex justify-center md:justify-start">
//                 <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center shadow-md">
//                   <currentService.icon className="h-8 w-8 text-white" />
//                 </div>
//               </div>

//               {/* CONTENT */}
//               <div className="md:col-span-10">
                
//                 {/* Title + Description + CTA */}
//                 <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                       {currentService.title}
//                     </h3>

//                     <p className="text-gray-600 text-lg mb-3">
//                       {currentService.description}
//                     </p>

//                     <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
//                       {currentService.stats}
//                     </div>
//                   </div>

//                   <Link href={`/services/${activeTab}`}>
//                     <Button className="btn-primary px-6 py-2 rounded-xl font-medium flex items-center gap-2">
//                       Explore Service
//                       <ArrowRight className="h-4 w-4" />
//                     </Button>
//                   </Link>
//                 </div>

//                 {/* Feature List */}
//                 <div className="grid sm:grid-cols-2 gap-3">
//                   {currentService.features.map((feature, index) => (
//                     <div 
//                       key={index}
//                       className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-primary/40 transition-colors"
//                     >
//                       <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
//                         <CheckCircle className="h-3 w-3 text-primary" />
//                       </div>
//                       <span className="text-gray-700 font-medium text-sm">
//                         {feature}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

// // src/components/home/ServicesSection.js
// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// import { 
//   ArrowRight, 
//   CheckCircle, 
//   Building,
//   Briefcase,
//   Users,
//   DollarSign,
//   Clock,
//   Target,
//   Zap
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const ServicesSection = () => {
//   const [activeTab, setActiveTab] = useState('rpo');

//   const services = {
//     rpo: {
//       title: 'RPO Services',
//       subtitle: 'For Organizations',
//       description: 'Struggling with costly recruitment cycles and time-consuming hiring processes? Our Recruitment Process Outsourcing solutions turn talent acquisition from a headache into your competitive advantage.',
//       icon: Building,
//       color: 'primary',
//       features: [
//         'Reduce recruitment costs by 30-60%',
//         'Access specialized talent acquisition across 15+ industries',
//         'Scale your hiring process up or down instantly',
//         'Get 24/7 global recruitment support'
//       ],
//       stats: '500+ Clients • 40% Faster Hiring',
//       ctaText: 'Learn More About RPO',
//       ctaLink: '/services/rpo'
//     },
//     career: {
//       title: 'Career Support Services',
//       subtitle: 'For IT Professionals',
//       description: 'On the bench? Between projects? We\'ve got your back. Our Career Support Services team actively markets your profile to our extensive network of U.S. clients and vendors.',
//       icon: Briefcase,
//       color: 'primary',
//       features: [
//         'Dramatically reduce bench time with targeted IT staffing solutions',
//         'Access thousands of live U.S. contract opportunities',
//         'Get expert interview preparation and technical coaching',
//         'Receive ongoing post-placement support and career guidance'
//       ],
//       stats: '10K+ Placed • 85% Success Rate',
//       ctaText: 'Explore Career Support',
//       ctaLink: '/services/career-support'
//     }
//   };

//   const currentService = services[activeTab];

//   return (
//     <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-primary/10 rounded-full blur-xl"></div>
//         <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-secondary/10 rounded-full blur-xl"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 relative">
        
//         {/* Header */}
//         <div className="text-center mb-8 md:mb-12">
//           <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
//             Our Services
//           </div>

//           <h2 className="text-2xl md:4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             Strategic Solutions
//             <span className="block text-primary">For Your Success</span>
//           </h2>

//           <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
//             Comprehensive recruitment services designed for both organizations and IT professionals
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="flex justify-center mb-8">
//           <div className="bg-gray-100 rounded-xl p-2 inline-flex">
//             {Object.entries(services).map(([key, service]) => (
//               <button
//                 key={key}
//                 onClick={() => setActiveTab(key)}
//                 className={`px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2 transition-all duration-300
//                   ${activeTab === key 
//                     ? 'bg-white text-primary shadow-md'
//                     : 'text-gray-600 hover:text-gray-900'
//                   }`}
//               >
//                 <service.icon className="h-4 w-4" />
//                 {service.subtitle}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Main Content Card */}
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
            
//             <div className="grid md:grid-cols-12 gap-6 items-start">

//               {/* ICON PANEL */}
//               <div className="md:col-span-2 flex justify-center md:justify-start">
//                 <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center shadow-md">
//                   <currentService.icon className="h-8 w-8 text-white" />
//                 </div>
//               </div>

//               {/* CONTENT */}
//               <div className="md:col-span-10">
                
//                 {/* Title + Description + CTA */}
//                 <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                       {currentService.title}
//                     </h3>

//                     <p className="text-gray-600 text-lg mb-3">
//                       {currentService.description}
//                     </p>

//                     <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
//                       {currentService.stats}
//                     </div>
//                   </div>

//                   <Link href={currentService.ctaLink}>
//                     <Button className="btn-primary px-6 py-2 rounded-xl font-medium flex items-center gap-2">
//                       {currentService.ctaText}
//                       <ArrowRight className="h-4 w-4" />
//                     </Button>
//                   </Link>
//                 </div>

//                 {/* Feature List */}
//                 <div className="grid sm:grid-cols-2 gap-3">
//                   {currentService.features.map((feature, index) => (
//                     <div 
//                       key={index}
//                       className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-primary/40 transition-colors"
//                     >
//                       <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
//                         <CheckCircle className="h-3 w-3 text-primary" />
//                       </div>
//                       <span className="text-gray-700 font-medium text-sm">
//                         {feature}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

// src/components/home/ServicesSection.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle, 
  Building,
  Briefcase,
  Users,
  DollarSign,
  Clock,
  Target,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('rpo');

  const services = {
    rpo: {
      title: 'RPO Services',
      subtitle: 'For Organizations',
      description: 'Simplify hiring and cut costs with our end-to-end recruitment process outsourcing. We act as an extension of your HR team managing everything from workforce planning to onboarding so you can stay focused on growth. ',
      // longDescription: 'We become an extension of your HR team managing everything from strategic workforce planning to candidate onboarding so you can focus on growing your business.',
      icon: Building,
      color: 'primary',
      features: [
        'Reduce recruitment costs by 30-60%',
        'Access specialized talent acquisition across 15+ industries',
        'Scale your hiring process up or down instantly',
        'Get 24/7 global recruitment support'
      ],
      stats: '500+ Clients • 40% Faster Hiring',
      ctaText: 'Learn More About RPO',
      ctaLink: '/services/rpo'
    },
    career: {
      title: 'Career Support Services',
      subtitle: 'For IT Professionals',
      description: "Between projects or transitioning roles? We help you land your next IT contract faster by promoting your profile to our extensive U.S. client and vendor network",
      // longDescription: 'Our Career Support Services team proactively promotes your profile to our broad network of U.S. clients and vendors, helping you secure your next IT contract faster through proven talent marketing and placement strategies.  ',
      icon: Briefcase,
      color: 'primary',
      features: [
        'Dramatically reduce bench time with targeted IT staffing solutions',
        'Access thousands of live U.S. contract opportunities',
        'Get expert interview preparation and technical coaching',
        'Receive ongoing post-placement support and career guidance'
      ],
      stats: '10K+ Placed • 85% Success Rate',
      ctaText: 'Explore Career Support',
      ctaLink: '/services/career-support'
    }
  };

  const currentService = services[activeTab];

  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-secondary/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
            Our Services
          </div>

          <h2 className="text-2xl md:4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Two Specialized Service Lines,
            <span className="block text-primary mt-3">One Unified Mission</span>
          </h2>

          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive recruitment services designed for both organizations and IT professionals
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-xl p-2 inline-flex">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2 transition-all duration-300
                  ${activeTab === key 
                    ? 'bg-white text-primary shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                <service.icon className="h-4 w-4" />
                {service.subtitle}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md transition duration-300">
            
            <div className="grid md:grid-cols-12 gap-6 items-start">

              {/* ICON PANEL */}
              <div className="md:col-span-2 flex justify-center md:justify-start">
                <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center shadow-md">
                  <currentService.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* CONTENT */}
              <div className="md:col-span-10">
                
                {/* Title + Description + CTA */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {currentService.title}
                    </h3>

                    <p className="text-gray-600 mb-3">
                      {currentService.description}
                    </p>

                    {currentService.longDescription && (
                      <p className="text-gray-600 mb-3">
                        {currentService.longDescription}
                      </p>
                    )}

                    <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                      {currentService.stats}
                    </div>
                  </div>

                  <Link href={currentService.ctaLink}>
                    <Button className="btn-primary px-6 py-2 rounded-xl font-medium flex items-center gap-2 whitespace-nowrap">
                      {currentService.ctaText}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                {/* Feature List */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {currentService.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-primary/40 transition-colors"
                    >
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;