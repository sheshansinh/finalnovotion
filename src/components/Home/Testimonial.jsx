'use client';

import { useState, useEffect, useRef } from 'react';

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const wrapRef = useRef(null);
  const autoSlideRef = useRef(null);

  const testimonials = [
    {
      name: "Phani Datta Pabisetty",
      role: "QA Analyst, Ampup",
      testimonial: "Novotion's help was a game-changer. Their trainer didn't just prep me; they refined my entire approach to QA testing. I had an offer from Ampup within weeks. What really stood out was the post-placement support—they actually checked in and guided me after I started.",
      rating: 5,
      date: "2 weeks ago",
      thumbImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Abhinav Dasari",
      role: "Electrical Engineer, UPS",
      testimonial: "The Novotion team didn't just rebuild my resume; they helped me see how to position my electrical engineering skills for the roles I really wanted. The interview coaching was focused and practical. I'm now at UPS, and I know their guidance was what made the difference.",
      rating: 5,
      date: "1 month ago",
      thumbImage: "https://images.unsplash.com/photo-1581094794325-bf55348dfa8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Anvith Goud Durki",
      role: "Network Engineer, Sarasota County Government",
      testimonial: "I had strong technical skills but was struggling to even get noticed. Novotion's team got to work, optimized my LinkedIn profile, and ran customized interview sessions that built my confidence. I secured my role with Sarasota County Government shortly after. Their personal attention is what sets them apart.",
      rating: 5,
      date: "2 months ago",
      thumbImage: "https://images.unsplash.com/photo-1560415751-3e3c75a350d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dixit Gupta Garlapati",
      role: "DevOps Engineer, Meta",
      testimonial: "Novotion has real industry experts. They connected me with a trainer who understood exactly what companies like Meta look for in a DevOps Engineer. We dove deep into CI/CD and cloud concepts, which was critical in my interviews. I owe a huge part of my success to their team.",
      rating: 5,
      date: "3 months ago",
      thumbImage: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Shajahan Shaik",
      role: "Full Stack Developer, Amazon Audible",
      testimonial: "From the first resume edit to the final, advanced interview rounds, Novotion was with me. My consultant and trainer were relentless, working with me to sharpen my coding and problem-solving skills. The result? I landed my dream job as a Full Stack Developer at Amazon Audible.",
      rating: 5,
      date: "3 months ago",
      thumbImage: "https://images.unsplash.com/photo-1551135049-8a33b42738b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Nitesh Battu",
      role: "Electrical Engineer, Honeywell",
      testimonial: "I was stuck in a cycle of rejections before I found Novotion. They were honest about what needed to change. They refined my resume and put me through targeted technical mock interviews that felt like the real thing. It gave me the confidence I was missing. Now, I'm part of the engineering team at Honeywell.",
      rating: 5,
      date: "4 months ago",
      thumbImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Nikhitha Anugu",
      role: "Design Engineer, TekWissen",
      testimonial: "The team at Novotion genuinely treated me like family. My consultant guided me through every single step, from finding the right openings to helping me prepare for salary negotiation. The mock interviews were so realistic and incredibly effective. I'm now a Design Engineer at TekWissen!",
      rating: 5,
      date: "4 months ago",
      thumbImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    // {
    //   name: "Pravallika Yarragudi",
    //   role: "Sr. DFT Verification Engineer, Lightmatter",
    //   testimonial: "Novotion's tailored approach made all the difference. They understood my niche technical field. Their resume and LinkedIn optimization immediately helped me land more interviews. I'm now at Lightmatter in a role that is a perfect fit for my career goals.",
    //   rating: 5,
    //   date: "5 months ago",
    //   thumbImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    // },
    {
      name: "Naveen Kumar Mandadi",
      role: "SOC Analyst, Fivesky",
      testimonial: "The Novotion team truly understands the cybersecurity domain. They connected me with a personal technical trainer who strengthened my SIEM and SOC fundamentals, moving me from theory to practical application. Within a month, I joined Fivesky. Their support and mentoring are excellent.",
      rating: 5,
      date: "5 months ago",
      thumbImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Nagasai Mirthivada",
      role: "Network Admin, Sierra Digital Inc",
      testimonial: "Novotion helped me shape my professional journey. It wasn't just a placement service. From the resume revamp to their continuous follow-ups, they provided genuine career assistance. Their after-placement guidance made settling into my new role so much easier. I highly recommend them.",
      rating: 5,
      date: "6 months ago",
      thumbImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused) return;

    autoSlideRef.current = setInterval(() => {
      setCurrent(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [testimonials.length, isPaused]);

  // Handle card centering and swipe on mobile
  useEffect(() => {
    if (trackRef.current) {
      centerCard(current);
    }
  }, [current]);

  const centerCard = (index) => {
    if (!trackRef.current || !wrapRef.current) return;

    const cards = trackRef.current.children;
    if (!cards[index]) return;

    const card = cards[index];
    const cardLeft = card.offsetLeft;
    const cardWidth = card.clientWidth;
    const containerWidth = wrapRef.current.clientWidth;
    
    wrapRef.current.scrollTo({
      left: cardLeft - (containerWidth / 2 - cardWidth / 2),
      behavior: "smooth"
    });
  };

  const go = (step) => {
    const newIndex = current + step;
    if (newIndex >= 0 && newIndex < testimonials.length) {
      setCurrent(newIndex);
    } else if (newIndex < 0) {
      setCurrent(testimonials.length - 1);
    } else {
      setCurrent(0);
    }
    
    // Reset auto-slide timer on manual navigation
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
  };

  const activate = (index) => {
    if (index === current) return;
    setCurrent(index);
    
    // Reset auto-slide timer on manual navigation
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Touch swipe functionality for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left - next
      go(1);
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right - previous
      go(-1);
    }
  };

  // Render star rating
  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section 
      className="bg-gradient-to-br from-gray-50 to-white mb-10 mt-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of professionals who transformed their careers with Novotion
          </p>
        </div>
      </div>

      {/* Slider Container */}
      <div className="max-w-7xl mx-auto">
        <div 
          ref={wrapRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth touch-pan-x"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            ref={trackRef}
            className="flex gap-6 items-start justify-start scroll-smooth snap-x snap-mandatory py-4"
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`
                  flex-shrink-0 transition-all duration-500 ease-out snap-center
                  w-[300px] sm:w-[350px] md:w-[400px]
                  ${index === current ? 'opacity-100 scale-105' : 'opacity-60 scale-95 hover:opacity-80'}
                `}
                onClick={() => activate(index)}
              >
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Header with Image and Rating */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img 
                        className="w-12 h-12 rounded-full object-cover shadow-sm"
                        src={testimonial.thumbImage} 
                        alt={testimonial.name}
                        loading="lazy"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-xs text-gray-500 mb-1">Verified</div>
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {testimonial.testimonial}
                  </p>

                  {/* Footer */}
                  <div className="flex justify-between items-center text-sm text-gray-500 mt-4 pt-3 border-t">
                    <span>{testimonial.date}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-8">
          <div className="flex space-x-2">
            <button
              onClick={() => go(-1)}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 active:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => go(1)}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 active:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => activate(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === current ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;