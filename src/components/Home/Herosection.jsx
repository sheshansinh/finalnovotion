'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NovotionHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [mouseStart, setMouseStart] = useState(null);
  const [mouseEnd, setMouseEnd] = useState(null);
  const containerRef = useRef(null);
  const totalSlides = 3;

  const minSwipeDistance = 50;

  // ✅ Slides data with unique links
  const slides = [
    {
      title: "STRATEGIC RECRUITMENT SOLUTIONS",
      subtitle: "Empowering Businesses Across UK & USA Markets",
      description:
        "Strategic Recruitment Solutions & IT Career Support Services delivering offshore support for organizations seeking recruitment excellence.",
      buttonText: "Explore Our Services",
      buttonLink: "/services/rpo",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop"
    },
    {
      title: "24/7 MULTILINGUAL SUPPORT",
      subtitle: "Career Support Services & IT Placement Excellence",
      description:
        "Connecting skilled IT professionals with contract opportunities across the USA market through dedicated marketing, vendor coordination, and comprehensive placement support.",
      buttonText: "Explore Career Support Services",
      buttonLink: "/services/career-support",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop"
    },
    {
      title: "INDUSTRY-LEADING STANDARDS",
      subtitle: "Strategic Multi-Region Operations",
      description:
        "Deep knowledge of UK & USA employment laws, markets, and cultures. Hubs in the UK, USA, and India ensure efficient service delivery and cost-effective 24/7 support.",
      buttonText: "Learn About Our Approach",
      buttonLink: "/about",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop"
    }
  ];

  // 👉 Touch swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextSlide();
    else if (isRightSwipe) prevSlide();
  };

  // 👉 Mouse swipe
  const onMouseDown = (e) => {
    setMouseEnd(null);
    setMouseStart(e.clientX);
  };

  const onMouseMove = (e) => {
    if (mouseStart !== null) setMouseEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!mouseStart || !mouseEnd) return;
    const distance = mouseStart - mouseEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextSlide();
    else if (isRightSwipe) prevSlide();

    setMouseStart(null);
    setMouseEnd(null);
  };

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 700);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // 👉 Auto slide every 5 seconds
  useEffect(() => {
    const autoPlay = setInterval(nextSlide, 5000);
    return () => clearInterval(autoPlay);
  }, [currentSlide]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gray-950 text-white select-none"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 z-0 transition-opacity duration-700">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide.image}
            alt={`Slide ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            priority={index === 0}
          />
        ))}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Slide Content */}
      <div className="relative h-full z-20 flex items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="max-w-4xl mx-auto text-center md:text-left">
                <p
                  className={`text-blue-300 font-semibold text-sm md:text-base tracking-wider uppercase transition-all duration-700 ${
                    index === currentSlide
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: '100ms' }}
                >
                  {slide.subtitle}
                </p>

                <h1
                  className={`text-3xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-700 ${
                    index === currentSlide
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  {slide.title}
                </h1>

                <p
                  className={`text-base md:text-lg text-gray-200 leading-relaxed mt-4 transition-all duration-700 ${
                    index === currentSlide
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: '300ms' }}
                >
                  {slide.description}
                </p>

                {/* ✅ Smart link (internal or external) */}
                <div className="mt-8">
                  {slide.buttonLink.startsWith('http') ? (
                    <a
                      href={slide.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HeroButton
                        active={index === currentSlide}
                        text={slide.buttonText}
                      />
                    </a>
                  ) : (
                    <Link href={slide.buttonLink}>
                      <HeroButton
                        active={index === currentSlide}
                        text={slide.buttonText}
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2 md:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              index === currentSlide
                ? 'w-8 md:w-12 h-2 bg-white'
                : 'w-2 h-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <SwipeHint />
    </div>
  );
};

// ✅ Reusable Hero Button
const HeroButton = ({ text, active }) => (
  <button
    className={`group relative px-6 py-3 md:px-8 md:py-4 bg-white text-blue-900 font-semibold rounded-lg text-base md:text-lg overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
      active ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
    }`}
    style={{ transitionDelay: '400ms' }}
  >
    <span className="relative">{text}</span>
    <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      {text} →
    </span>
  </button>
);

// Optional Swipe Hint
const SwipeHint = () => {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 3000);
    const handleInteraction = () => setShowHint(false);
    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('mousedown', handleInteraction);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('mousedown', handleInteraction);
    };
  }, []);

  if (!showHint) return null;

  return (
    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white text-sm opacity-70 animate-pulse">
      Swipe or drag to navigate →
    </div>
  );
};

export default NovotionHero;
