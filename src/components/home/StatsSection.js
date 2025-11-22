// // src/components/home/StatsSection.js
// 'use client';
// import { useState, useEffect } from 'react';
// import { Building, Users, TrendingUp, Star } from 'lucide-react';

// const StatsSection = () => {
//   const [mounted, setMounted] = useState(false);
//   const [counted, setCounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
    
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && !counted) {
//             setCounted(true);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     const section = document.getElementById('stats-section');
//     if (section) observer.observe(section);

//     return () => observer.disconnect();
//   }, [counted]);

//   const stats = [
//     { 
//       value: '500+', 
//       label: 'Organizations Served', 
//       delay: '100',
//       icon: Building,
//       description: 'Trusted by businesses across UK and USA'
//     },
//     { 
//       value: '10,000+', 
//       label: 'Professionals Placed', 
//       delay: '200',
//       icon: Users,
//       description: 'Successful career placements and counting'
//     },
//     { 
//       value: '15+', 
//       label: 'Industry Verticals', 
//       delay: '300',
//       icon: TrendingUp,
//       description: 'Diverse industry expertise and knowledge'
//     },
//     { 
//       value: '85%+', 
//       label: 'Success Rate', 
//       delay: '400',
//       icon: Star,
//       description: 'Proven track record of excellence'
//     },
//   ];

//   if (!mounted) {
//     return (
//       <section id="stats-section" className="min-h-[40vh] md:min-h-[60vh] flex items-center bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white relative overflow-hidden py-8 md:py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center animate-pulse">
//                 <div className="h-12 md:h-16 bg-blue-500/30 rounded-lg mb-2 md:mb-3 mx-auto w-12 md:w-16"></div>
//                 <div className="h-6 md:h-8 bg-blue-500/30 rounded mb-1 md:mb-2"></div>
//                 <div className="h-3 md:h-4 bg-blue-500/30 rounded"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section id="stats-section" className="min-h-[40vh] md:min-h-[60vh] flex items-center bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white relative overflow-hidden py-8 md:py-12">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 to-blue-900/0"></div>
//         <div className="absolute top-10 right-10 w-24 h-24 md:w-40 md:h-40 bg-cyan-400/10 rounded-full mix-blend-soft-light filter blur-2xl animate-pulse"></div>
//         <div className="absolute bottom-10 left-10 w-24 h-24 md:w-40 md:h-40 bg-purple-400/10 rounded-full mix-blend-soft-light filter blur-2xl animate-pulse delay-1000"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 relative z-10">
//         <div className="text-center mb-8 md:mb-12">
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
//             Our Impact in
//             <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-1 md:mt-2">
//               Numbers
//             </span>
//           </h2>
//           <p className="text-blue-200 max-w-md mx-auto text-sm md:text-base">
//             Delivering measurable results through data-driven recruitment strategies
//           </p>
//         </div>

//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
//           {stats.map((stat, index) => (
//             <div 
//               key={index} 
//               className="text-center observe group"
//               style={{ animationDelay: `${stat.delay}ms` }}
//             >
//               <div className="relative inline-flex items-center justify-center mb-3 md:mb-4">
//                 <div className="absolute inset-0 bg-white/20 rounded-full scale-125 group-hover:scale-110 transition-transform duration-500"></div>
//                 <div className="relative bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3 group-hover:bg-white/20 transition-all duration-300">
//                   <stat.icon className="h-4 w-4 md:h-6 md:w-6 text-cyan-300" />
//                 </div>
//               </div>
//               <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
//                 {counted ? stat.value : '0'}
//               </div>
//               <div className="text-blue-200 font-medium text-xs md:text-sm mb-1 md:mb-2">{stat.label}</div>
//               <div className="text-blue-300/80 text-xs hidden md:block">{stat.description}</div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Trust Indicator */}
//         <div className="text-center mt-6 md:mt-8">
//           <div className="inline-flex items-center gap-1 md:gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full">
//             <div className="flex -space-x-1 md:-space-x-2">
//               {[1, 2, 3].map((item) => (
//                 <div key={item} className="w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">
//                   {item}
//                 </div>
//               ))}
//             </div>
//             <span className="text-blue-200 text-xs md:text-sm font-medium">Trusted by 500+ companies worldwide</span>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-5px); }
//         }
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default StatsSection;

// // src/components/home/StatsSection.js
// 'use client';
// import { useState, useEffect } from 'react';
// import { Building, Users, TrendingUp, Star } from 'lucide-react';

// const StatsSection = () => {
//   const [mounted, setMounted] = useState(false);
//   const [counted, setCounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
    
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && !counted) {
//             setCounted(true);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     const section = document.getElementById('stats-section');
//     if (section) observer.observe(section);

//     return () => observer.disconnect();
//   }, [counted]);

//   const stats = [
//     { 
//       value: '500+', 
//       label: 'Organizations Served', 
//       delay: '100',
//       icon: Building,
//       description: 'Trusted by businesses across UK and USA'
//     },
//     { 
//       value: '10,000+', 
//       label: 'Professionals Placed', 
//       delay: '200',
//       icon: Users,
//       description: 'Successful career placements and counting'
//     },
//     { 
//       value: '15+', 
//       label: 'Industry Verticals', 
//       delay: '300',
//       icon: TrendingUp,
//       description: 'Diverse industry expertise and knowledge'
//     },
//     { 
//       value: '85%+', 
//       label: 'Success Rate', 
//       delay: '400',
//       icon: Star,
//       description: 'Proven track record of excellence'
//     },
//   ];

//   if (!mounted) {
//     return (
//       <section id="stats-section" className="min-h-[40vh] md:min-h-[60vh] flex items-center bg-primary text-white relative overflow-hidden py-8 md:py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center animate-pulse">
//                 <div className="h-12 md:h-16 bg-white/20 rounded-lg mb-3 mx-auto w-12 md:w-16"></div>
//                 <div className="h-6 bg-white/20 rounded mb-2"></div>
//                 <div className="h-3 bg-white/20 rounded"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section 
//       id="stats-section" 
//       className="min-h-[40vh] md:min-h-[60vh] flex items-center bg-primary text-white relative overflow-hidden py-8 md:py-12"
//     >
//       {/* Background bubbles */}
//       <div className="absolute inset-0">
//         <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
//         <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
//         {/* Section Header */}
//         <div className="text-center mb-10">
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
//             Our Impact in
//             <span className="block text-secondary mt-1">
//               Numbers
//             </span>
//           </h2>
//           <p className="text-white/80 max-w-md mx-auto text-sm md:text-base">
//             Delivering measurable results through data-driven recruitment strategies
//           </p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
//           {stats.map((stat, index) => (
//             <div 
//               key={index} 
//               className="text-center observe group transition-all"
//               style={{ animationDelay: `${stat.delay}ms` }}
//             >
//               {/* Icon Bubble */}
//               <div className="relative inline-flex items-center justify-center mb-3">
//                 <div className="absolute inset-0 bg-white/10 rounded-full scale-125 transition-transform group-hover:scale-110"></div>
//                 <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-3 group-hover:bg-white/20 transition-all">
//                   <stat.icon className="h-6 w-6 text-secondary" />
//                 </div>
//               </div>

//               {/* Number */}
//               <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-white">
//                 {counted ? stat.value : '0'}
//               </div>

//               {/* Label */}
//               <div className="text-white/80 font-medium text-xs md:text-sm mb-1">
//                 {stat.label}
//               </div>

//               {/* Description */}
//               <div className="text-white/70 text-xs hidden md:block">
//                 {stat.description}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Trust Badge */}
//         <div className="text-center mt-8">
//           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
//             <div className="flex -space-x-2">
//               {[1, 2, 3].map((item) => (
//                 <div 
//                   key={item} 
//                   className="w-6 h-6 bg-secondary rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-gray-900"
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>
//             <span className="text-white/80 text-sm">Trusted by 500+ companies worldwide</span>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-5px); }
//         }
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default StatsSection;

// // src/components/home/StatsSection.js
// 'use client';
// import { useState, useEffect } from 'react';
// import { Building, Users, TrendingUp, MapPin } from 'lucide-react';

// const StatsSection = () => {
//   const [mounted, setMounted] = useState(false);
//   const [counted, setCounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
    
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && !counted) {
//             setCounted(true);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     const section = document.getElementById('stats-section');
//     if (section) observer.observe(section);

//     return () => observer.disconnect();
//   }, [counted]);

//   const stats = [
//     { 
//       value: '500+', 
//       label: 'Organizations Partnered', 
//       delay: '100',
//       icon: Building,
//       description: 'For RPO services since 2021'
//     },
//     { 
//       value: '10,000+', 
//       label: 'Professionals Placed', 
//       delay: '200',
//       icon: Users,
//       description: 'Through career support services'
//     },
//     { 
//       value: '15+', 
//       label: 'Industries Covered', 
//       delay: '300',
//       icon: TrendingUp,
//       description: 'With specialized talent acquisition'
//     },
//     { 
//       value: '3', 
//       label: 'Global Offices', 
//       delay: '400',
//       icon: MapPin,
//       description: 'India, USA, UK delivering solutions'
//     },
//   ];

//   if (!mounted) {
//     return (
//       <section id="stats-section" className="min-h-[40vh] md:min-h-[60vh] flex items-center bg-primary text-white relative overflow-hidden py-8 md:py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center animate-pulse">
//                 <div className="h-12 md:h-16 bg-white/20 rounded-lg mb-3 mx-auto w-12 md:w-16"></div>
//                 <div className="h-6 bg-white/20 rounded mb-2"></div>
//                 <div className="h-3 bg-white/20 rounded"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section 
//       id="stats-section" 
//       className="min-h-[40vh] md:min-h-[60vh] flex items-center bg-primary text-white relative overflow-hidden py-8 md:py-12"
//     >
//       {/* Background bubbles */}
//       <div className="absolute inset-0">
//         <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
//         <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
//         {/* Section Header */}
//         <div className="text-center mb-10">
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
//             Making a Difference
//             <span className="block text-secondary mt-1">
//               Since 2021
//             </span>
//           </h2>
//           <p className="text-white/80 max-w-md mx-auto text-sm md:text-base">
//             Our recruitment solutions have transformed talent acquisition for organizations and professionals worldwide
//           </p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
//           {stats.map((stat, index) => (
//             <div 
//               key={index} 
//               className="text-center observe group transition-all"
//               style={{ animationDelay: `${stat.delay}ms` }}
//             >
//               {/* Icon Bubble */}
//               <div className="relative inline-flex items-center justify-center mb-3">
//                 <div className="absolute inset-0 bg-white/10 rounded-full scale-125 transition-transform group-hover:scale-110"></div>
//                 <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-3 group-hover:bg-white/20 transition-all">
//                   <stat.icon className="h-6 w-6 text-secondary" />
//                 </div>
//               </div>

//               {/* Number */}
//               <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-white">
//                 {counted ? stat.value : '0'}
//               </div>

//               {/* Label */}
//               <div className="text-white/80 font-medium text-xs md:text-sm mb-1">
//                 {stat.label}
//               </div>

//               {/* Description */}
//               <div className="text-white/70 text-xs hidden md:block">
//                 {stat.description}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Trust Badge */}
//         <div className="text-center mt-8">
//           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
//             <div className="flex -space-x-2">
//               {[1, 2, 3].map((item) => (
//                 <div 
//                   key={item} 
//                   className="w-6 h-6 bg-secondary rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-gray-900"
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>
//             <span className="text-white/80 text-sm">Trusted by 500+ companies worldwide</span>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-5px); }
//         }
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default StatsSection;

// src/components/home/StatsSection.js
'use client';
import { useState, useEffect } from 'react';
import { Building, Users, TrendingUp, MapPin } from 'lucide-react';

const StatsSection = () => {
  const [mounted, setMounted] = useState(false);
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted) {
            setCounted(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('stats-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [counted]);

  const stats = [
    { 
      value: '500+', 
      label: 'Organizations Partnered', 
      delay: '100',
      icon: Building,
      description: 'For RPO services since 2021'
    },
    { 
      value: '5,000+', 
      label: 'Professionals Placed', 
      delay: '200',
      icon: Users,
      description: 'Through career support services'
    },
    { 
      value: '15+', 
      label: 'Industries Covered', 
      delay: '300',
      icon: TrendingUp,
      description: 'With specialized talent acquisition'
    },
    { 
      value: '2', 
      label: 'Global Offices', 
      delay: '400',
      icon: MapPin,
      description: 'India, USA delivering solutions'
    },
  ];

  if (!mounted) {
    return (
      <section id="stats-section" className="min-h-[40vh] md:min-h-[60vh] flex items-center bg-primary text-white relative overflow-hidden py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-pulse">
                <div className="h-12 md:h-16 bg-white/20 rounded-lg mb-3 mx-auto w-12 md:w-16"></div>
                <div className="h-6 bg-white/20 rounded mb-2"></div>
                <div className="h-3 bg-white/20 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="stats-section" 
      className="min-h-[40vh] md:min-h-[60vh] flex items-center bg-primary text-white relative overflow-hidden py-8 md:py-12"
    >
      {/* Background bubbles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Making a Difference
            <span className="block text-secondary mt-1">
              Since 2021
            </span>
          </h2>
          <p className="text-white/80 max-w-md mx-auto text-sm md:text-base">
            Our recruitment solutions have transformed talent acquisition for organizations and professionals worldwide
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center observe group transition-all"
              style={{ animationDelay: `${stat.delay}ms` }}
            >
              {/* Icon Bubble */}
              <div className="relative inline-flex items-center justify-center mb-3">
                <div className="absolute inset-0 bg-white/10 rounded-full scale-125 transition-transform group-hover:scale-110"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-3 group-hover:bg-white/20 transition-all">
                  <stat.icon className="h-6 w-6 text-secondary" />
                </div>
              </div>

              {/* Number */}
              <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-white">
                {counted ? stat.value : '0'}
              </div>

              {/* Label */}
              <div className="text-white/80 font-medium text-xs md:text-sm mb-1">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-white/70 text-xs hidden md:block">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((item) => (
                <div 
                  key={item} 
                  className="w-6 h-6 bg-secondary rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-gray-900"
                >
                  {item}
                </div>
              ))}
            </div>
            <span className="text-white/80 text-sm">Trusted by 500+ companies worldwide</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default StatsSection;