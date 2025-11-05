"use client";

import { useState, useEffect, useRef } from "react";
import NovotionButton from "@/components/ui/NovotionButton";

const carouselData = [
  {
    title: "Recruitment Process Outsourcing",
    text: "Streamline hiring, reduce time-to-hire, and access top talent for organizations in the UK and USA markets.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Career Support Services & Recruitment Facilitation",
    text: "Connect IT professionals with contract-based technology opportunities in the exclusive USA market.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2069&q=80",
  },
];

const getZindex = (array, index) =>
  array.map((_, i) =>
    index === i ? array.length : array.length - Math.abs(index - i)
  );

const CarouselSection = () => {
  const [active, setActive] = useState(0);
  const progressRef = useRef(0);
  const carouselRef = useRef(null);
  const autoSlideRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const diffX = useRef(0);

  // ✅ Auto Slide Every 4s
  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % carouselData.length);
    }, 4000);
    return () => clearInterval(autoSlideRef.current);
  }, []);

  // ✅ Manual Transition Update
  useEffect(() => {
    const items = carouselRef.current?.querySelectorAll(".carousel-item");
    if (!items) return;
    const zIndex = getZindex(Array.from(items), active);
    items.forEach((item, index) => {
      item.style.setProperty("--zIndex", zIndex[index]);
      item.style.setProperty("--active", (index - active) / items.length);
    });
  }, [active]);

  // ✅ Mouse & Touch Controls
  const handleDragStart = (x) => {
    isDragging.current = true;
    startX.current = x;
    clearInterval(autoSlideRef.current);
  };

  const handleDragMove = (x) => {
    if (!isDragging.current) return;
    diffX.current = x - startX.current;
  };

  const handleDragEnd = () => {
    if (!isDragging.current) return;
    if (diffX.current > 50) {
      // swipe right
      setActive((prev) =>
        prev === 0 ? carouselData.length - 1 : prev - 1
      );
    } else if (diffX.current < -50) {
      // swipe left
      setActive((prev) => (prev + 1) % carouselData.length);
    }
    diffX.current = 0;
    isDragging.current = false;
    autoSlideRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % carouselData.length);
    }, 4000);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen overflow-hidden font-sans text-white bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Left Content Section */}
        <div className="flex-1 flex flex-col justify-center items-center p-6 text-center lg:text-left order-2 lg:order-1">
          <div className="w-full max-w-2xl mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-white">
              Two Distinct Service Lines,
              <br className="hidden sm:inline" />
              One Unified Mission
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-blue-200 opacity-90 mb-8 leading-relaxed">
              At Novotion, we operate through two specialized divisions tailored
              to distinct talent needs. Our Recruitment Process Outsourcing
              division supports organizations in the UK and USA in streamlining
              hiring and accessing top talent. Meanwhile, our Career Support
              Services division connects IT professionals with contract-based
              technology opportunities in the USA.
            </p>
            <NovotionButton href="/contect" variant="primary">
              Partner With Us
            </NovotionButton>
          </div>
        </div>

        {/* Right Carousel Section */}
        <div
          className="flex-1 relative z-10 overflow-hidden flex flex-col justify-center items-center order-1 lg:order-2 py-8"
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
          ref={carouselRef}
        >
          <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh] max-w-2xl mx-auto">
            {carouselData.map((item, index) => (
              <div
                key={index}
                className="carousel-item absolute top-1/2 left-1/2 rounded-xl shadow-2xl bg-black overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{
                  "--items": carouselData.length,
                  "--active": 0,
                  "--width-mobile": "clamp(180px, 70vw, 240px)",
                  "--width-desktop": "clamp(240px, 45vw, 340px)",
                  "--height-mobile": "clamp(220px, 50vh, 300px)",
                  "--height-desktop": "clamp(280px, 60vh, 420px)",
                  "--x-mobile": "calc(var(--active) * 180%)",
                  "--x-desktop": "calc(var(--active) * 230%)",
                  "--y-mobile": "calc(var(--active) * 20%)",
                  "--y-desktop": "calc(var(--active) * 30%)",
                  "--rot-mobile": "calc(var(--active) * 8deg)",
                  "--rot-desktop": "calc(var(--active) * 12deg)",
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
                  className="carousel-box relative z-10 w-full h-full transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ opacity: "var(--opacity)" }}
                >
                  <div className="absolute z-20 inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>

                  <div className="absolute z-30 bottom-10 left-4 right-4">
                    <h3 className="text-white text-base sm:text-lg md:text-xl font-bold leading-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-blue-100 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {item.text}
                    </p>
                  </div>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Description */}
          <div className="lg:hidden w-full max-w-xs mx-auto px-4 mt-4 text-center">
            <h3 className="text-white text-base sm:text-lg font-bold leading-tight mb-2">
              {carouselData[active].title}
            </h3>
            <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">
              {carouselData[active].text}
            </p>
          </div>

          {/* Mobile Indicators */}
          <div className="lg:hidden flex justify-center space-x-2 mt-3">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === active ? "bg-blue-400 w-5" : "bg-blue-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Fix Styles */}
      <style jsx>{`
        @media (min-width: 1024px) {
          .carousel-item {
            width: var(--width-desktop) !important;
            height: var(--height-desktop) !important;
            --x: var(--x-desktop) !important;
            --y: var(--y-desktop) !important;
            --rot: var(--rot-desktop) !important;
          }
        }

        @media (max-width: 1024px) and (min-width: 640px) {
          .carousel-item {
            transform: translate(-50%, -50%) translate(var(--x), var(--y))
              rotate(var(--rot)) scale(0.9);
            --x-mobile: calc(var(--active) * 160%);
          }
        }

        @media (max-width: 640px) {
          .carousel-item {
            transform: translate(-50%, -50%) translate(var(--x), var(--y))
              rotate(var(--rot)) scale(0.85);
            --x-mobile: calc(var(--active) * 200%);
          }
        }
      `}</style>
    </>
  );
};

export default CarouselSection;
