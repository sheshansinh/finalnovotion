"use client";

import { useState, useEffect, useRef } from "react";

const carouselData = [
  {
    title: "Recruitment Process Outsourcing",
    text: "Streamline hiring, reduce time-to-hire, and access top talent for organizations in the UK and USA markets.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Career Support Services & Recruitment Facilitation",
    text: "Connect IT professionals with contract-based technology opportunities in the exclusive USA market.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
];

const getZindex = (array, index) =>
  array.map((_, i) =>
    index === i ? array.length : array.length - Math.abs(index - i)
  );

const CarouselSection = () => {
  const [active, setActive] = useState(0);
  const progressRef = useRef(50);
  const startXRef = useRef(0);
  const isDownRef = useRef(false);
  const carouselRef = useRef(null);
  const autoSlideRef = useRef(null);

  // Auto slide functionality
  useEffect(() => {
    const autoSlide = () => {
      progressRef.current += 100 / (carouselData.length - 1);
      if (progressRef.current >= 100) {
        progressRef.current = 0;
      }
      const items = carouselRef.current?.querySelectorAll(".carousel-item");
      if (!items) return;
      
      const newActive = Math.floor((progressRef.current / 100) * (items.length - 1));
      setActive(newActive);
      
      const zIndex = getZindex(Array.from(items), newActive);
      items.forEach((item, index) => {
        item.style.setProperty("--zIndex", zIndex[index]);
        item.style.setProperty("--active", (index - newActive) / items.length);
      });
    };

    autoSlideRef.current = setInterval(autoSlide, 3000);

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, []);

  // Pause auto-slide on hover/touch
  const pauseAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
  };

  const resumeAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    autoSlideRef.current = setInterval(() => {
      progressRef.current += 100 / (carouselData.length - 1);
      if (progressRef.current >= 100) {
        progressRef.current = 0;
      }
      const items = carouselRef.current?.querySelectorAll(".carousel-item");
      if (!items) return;
      
      const newActive = Math.floor((progressRef.current / 100) * (items.length - 1));
      setActive(newActive);
      
      const zIndex = getZindex(Array.from(items), newActive);
      items.forEach((item, index) => {
        item.style.setProperty("--zIndex", zIndex[index]);
        item.style.setProperty("--active", (index - newActive) / items.length);
      });
    }, 3000);
  };

  useEffect(() => {
    const items = carouselRef.current?.querySelectorAll(".carousel-item");
    const cursors = document.querySelectorAll(".cursor");

    if (!items) return;

    const displayItems = () => {
      const zIndex = getZindex(Array.from(items), active);
      items.forEach((item, index) => {
        item.style.setProperty("--zIndex", zIndex[index]);
        item.style.setProperty("--active", (index - active) / items.length);
      });
    };

    const animate = () => {
      progressRef.current = Math.max(0, Math.min(progressRef.current, 100));
      setActive(Math.floor((progressRef.current / 100) * (items.length - 1)));
      displayItems();
    };

    const handleWheel = (e) => {
      e.preventDefault();
      pauseAutoSlide();
      const wheelProgress = e.deltaY * 0.3;
      progressRef.current += wheelProgress;
      animate();
      setTimeout(resumeAutoSlide, 3000);
    };

    const handleMouseMove = (e) => {
      cursors.forEach((cursor) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
      
      if (!isDownRef.current) return;
      
      const x = e.clientX;
      const deltaX = startXRef.current - x;
      const progressChange = deltaX * 0.8;
      
      progressRef.current += progressChange;
      startXRef.current = x;
      animate();
    };

    const handleTouchMove = (e) => {
      if (!isDownRef.current) return;
      
      const x = e.touches[0].clientX;
      const deltaX = startXRef.current - x;
      const progressChange = deltaX * 1.2;
      
      progressRef.current += progressChange;
      startXRef.current = x;
      animate();
      
      e.preventDefault();
    };

    const handleMouseDown = (e) => {
      pauseAutoSlide();
      isDownRef.current = true;
      startXRef.current = e.clientX;
    };

    const handleTouchStart = (e) => {
      pauseAutoSlide();
      isDownRef.current = true;
      startXRef.current = e.touches[0].clientX;
    };

    const handleMouseUp = () => {
      isDownRef.current = false;
      setTimeout(resumeAutoSlide, 2000);
    };

    const handleTouchEnd = () => {
      isDownRef.current = false;
      setTimeout(resumeAutoSlide, 2000);
    };

    const handleItemClick = (index) => {
      pauseAutoSlide();
      progressRef.current = (index / (items.length - 1)) * 100;
      animate();
      setTimeout(resumeAutoSlide, 3000);
    };

    // Initialize
    animate();

    const carouselElement = carouselRef.current;
    if (carouselElement) {
      // Mouse events
      carouselElement.addEventListener("wheel", handleWheel, { passive: false });
      carouselElement.addEventListener("mousedown", handleMouseDown);
      carouselElement.addEventListener("mousemove", handleMouseMove);
      carouselElement.addEventListener("mouseup", handleMouseUp);
      carouselElement.addEventListener("mouseleave", handleMouseUp);
      
      // Touch events
      carouselElement.addEventListener("touchstart", handleTouchStart, { passive: false });
      carouselElement.addEventListener("touchmove", handleTouchMove, { passive: false });
      carouselElement.addEventListener("touchend", handleTouchEnd);

      // Item click events
      items.forEach((item, index) => {
        item.addEventListener("click", () => handleItemClick(index));
      });

      // Pause/resume on hover
      carouselElement.addEventListener("mouseenter", pauseAutoSlide);
      carouselElement.addEventListener("mouseleave", resumeAutoSlide);
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("wheel", handleWheel);
        carouselElement.removeEventListener("mousedown", handleMouseDown);
        carouselElement.removeEventListener("mousemove", handleMouseMove);
        carouselElement.removeEventListener("mouseup", handleMouseUp);
        carouselElement.removeEventListener("mouseleave", handleMouseUp);
        carouselElement.removeEventListener("touchstart", handleTouchStart);
        carouselElement.removeEventListener("touchmove", handleTouchMove);
        carouselElement.removeEventListener("touchend", handleTouchEnd);
        carouselElement.removeEventListener("mouseenter", pauseAutoSlide);
        carouselElement.removeEventListener("mouseleave", resumeAutoSlide);
      }
    };
  }, [active]);

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen overflow-hidden font-sans text-white bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Left Content Section */}
        <div className="flex-1 flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 xl:p-16 text-center lg:text-left order-2 lg:order-1">
          <div className="w-full px-6 mb-4 sm:mb-6 lg:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 text-white">
              Two Distinct Service Lines,
              <br className="hidden sm:inline" />
              One Unified Mission
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-blue-200 opacity-90 mb-6 sm:mb-8 leading-relaxed">
              At Novotion, we operate through two specialized divisions tailored to distinct talent needs. Our Recruitment Process Outsourcing division supports organizations in the UK and USA in streamlining hiring, reducing time-to-hire, and accessing top talent. Meanwhile, our Career Support Services & Recruitment Facilitation division, focused exclusively on the USA market, connects IT professionals with contract-based technology opportunities. This dual approach enables deep expertise in both corporate recruitment and IT staffing, delivering precise matches, stronger partnerships, and long-term success for clients and professionals alike.
            </p>
            <a
              href="#"
              className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-blue-400 rounded-lg text-blue-400 font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              View More Success Stories
            </a>
          </div>
        </div>

        {/* Right Carousel Section */}
        <div className="flex-1 relative z-10 overflow-hidden flex flex-col justify-center items-center order-1 lg:order-2 py-4 sm:py-6 lg:py-8">
          {/* Carousel Container */}
          <div
            className="relative w-full h-[35vh] xs:h-[38vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] xl:h-[65vh] max-w-2xl mx-auto"
            ref={carouselRef}
          >
            {carouselData.map((item, index) => (
              <div
                className="carousel-item absolute top-1/2 left-1/2 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-2xl bg-black overflow-hidden transition-transform duration-800 ease-[cubic-bezier(0,0.02,0,1)] cursor-pointer mobile-carousel-item"
                key={index}
                style={{
                  "--items": carouselData.length,
                  "--active": 0,
                  // Much closer cards
                  "--width-mobile": "clamp(160px, 55vw, 200px)",
                  "--width-desktop": "clamp(200px, 70vw, 280px)",
                  "--height-mobile": "clamp(200px, 45vh, 250px)",
                  "--height-desktop": "clamp(250px, 60vh, 400px)",
                  "--x-mobile": "calc(var(--active) * 120%)",
                  "--x-desktop": "calc(var(--active) * 150%)",
                  "--y-mobile": "calc(var(--active) * 40%)",
                  "--y-desktop": "calc(var(--active) * 50%)",
                  "--rot-mobile": "calc(var(--active) * 20deg)",
                  "--rot-desktop": "calc(var(--active) * 30deg)",
                  width: "var(--width-mobile)",
                  height: "var(--height-mobile)",
                  "--x": "var(--x-mobile)",
                  "--y": "var(--y-mobile)",
                  "--rot": "var(--rot-mobile)",
                  "--opacity": "calc(var(--zIndex) / var(--items) * 3 - 2)",
                  transform:
                    "translate(-50%, -50%) translate(var(--x), var(--y)) rotate(var(--rot))",
                  zIndex: `var(--zIndex)`,
                }}
              >
                <div
                  className="carousel-box relative z-10 w-full h-full transition-opacity duration-800 ease-[cubic-bezier(0,0.02,0,1)]"
                  style={{ opacity: "var(--opacity)" }}
                >
                  {/* Gradient Overlays */}
                  <div className="absolute z-20 inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 lg:to-black/70"></div>

                  {/* Number Badge - Desktop Only */}
                  <div className="hidden lg:block absolute z-30 top-3 sm:top-4 left-3 sm:left-5 text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-400 drop-shadow-lg">
                    {`0${index + 1}`}
                  </div>

                  {/* Title & Description - Desktop Only */}
                  <div className="hidden lg:block">
                    <div className="absolute z-30 bottom-14 sm:bottom-16 left-3 sm:left-5 right-3 sm:right-5">
                      <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight drop-shadow-lg line-clamp-2">
                        {item.title}
                      </h3>
                    </div>

                    <div className="absolute z-30 bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5">
                      <p className="text-blue-100 text-xs sm:text-sm leading-relaxed drop-shadow-md line-clamp-2">
                        {item.text}
                      </p>
                    </div>
                  </div>

                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Content Below Card */}
          <div className="lg:hidden w-full max-w-xs mx-auto px-4 mt-3 sm:mt-4 text-center">
            <div className="">
              <h3 className="text-white text-base sm:text-lg font-bold leading-tight mb-2">
                {carouselData[active].title}
              </h3>
              <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">
                {carouselData[active].text}
              </p>
            </div>
          </div>

          {/* Mobile Indicators */}
          <div className="lg:hidden flex justify-center space-x-1.5 mt-3 sm:mt-4">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  pauseAutoSlide();
                  progressRef.current = (index / (carouselData.length - 1)) * 100;
                  const items = carouselRef.current?.querySelectorAll(".carousel-item");
                  if (!items) return;
                  
                  const newActive = Math.floor((progressRef.current / 100) * (items.length - 1));
                  setActive(newActive);
                  
                  const zIndex = getZindex(Array.from(items), newActive);
                  items.forEach((item, i) => {
                    item.style.setProperty("--zIndex", zIndex[i]);
                    item.style.setProperty("--active", (i - newActive) / items.length);
                  });
                  setTimeout(resumeAutoSlide, 3000);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === active ? 'bg-blue-400 w-4' : 'bg-blue-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom Cursors - Desktop Only */}
      <div className="cursor fixed z-50 w-10 h-10 rounded-full border-2 border-blue-400 -translate-x-1/2 -translate-y-1/2 transition-transform duration-[850ms] ease-[cubic-bezier(0,0.02,0,1)] hidden lg:block pointer-events-none opacity-60"></div>
      <div className="cursor cursor2 fixed z-50 w-1 h-1 rounded-full bg-blue-400 -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ease-[cubic-bezier(0,0.02,0,1)] hidden lg:block pointer-events-none"></div>

      {/* Add CSS for responsive behavior */}
      <style jsx>{`
        /* Desktop styles */
        @media (min-width: 1024px) {
          .mobile-carousel-item {
            width: var(--width-desktop) !important;
            height: var(--height-desktop) !important;
            --x: var(--x-desktop) !important;
            --y: var(--y-desktop) !important;
            --rot: var(--rot-desktop) !important;
          }
        }
        
        /* Mobile scaling */
        @media (max-width: 1024px) {
          .carousel-item {
            transform: translate(-50%, -50%) translate(var(--x), var(--y)) rotate(var(--rot)) scale(0.9);
          }
        }
        
        @media (max-width: 640px) {
          .carousel-item {
            transform: translate(-50%, -50%) translate(var(--x), var(--y)) rotate(var(--rot)) scale(0.85);
          }
        }
      `}</style>
    </>
  );
};

export default CarouselSection;