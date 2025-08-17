"use client";
import { useEffect, useState } from "react";
import Image1 from "../Learning AI/images/image1.jpg";
import Image2 from "../Learning AI/images/image2.jpg";
import Image3 from "../Learning AI/images/image3.jpg";
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const slides = [
    {
      title: "Elite Workforce Solutions",
      subtitle: "Partnering with Saudi Arabia's Leading Corporations",
      description:
        "We connect top-tier companies with skilled professionals across industries, ensuring seamless workforce integration and operational excellence.",
      image: Image1,
      stats: { number: "500+", label: "Corporate Partners" },
    },
    {
      title: "Healthcare Excellence",
      subtitle: "Specialized Medical Staffing Solutions",
      description:
        "Providing qualified healthcare professionals to hospitals and medical facilities across the Kingdom, maintaining the highest standards of patient care.",
      image: Image2,
      stats: { number: "10,000+", label: "Healthcare Professionals" },
    },
    {
      title: "Industrial Expertise",
      subtitle: "Powering Saudi Vision 2030",
      description:
        "Supporting mega projects and industrial developments with skilled technicians, engineers, and specialized workforce solutions.",
      image: Image3,
      stats: { number: "50+", label: "Major Projects" },
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      // Swipe left - go to next slide
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
    if (isRightSwipe) {
      // Swipe right - go to previous slide
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  // Industry icons as simple SVGs
  const IndustryIcon = ({ type }) => {
    const icons = {
      healthcare: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM4 6h5v2h2V6h1V4H4v2zm0 4h5v2h2v-2h1V8H4v2zm0 4h5v2h2v-2h1v-2H4v2z" />
        </svg>
      ),
      construction: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.783 15.172l2.121-2.121 5.996 5.996-2.121 2.121zM17.5 10c1.381 0 2.5-1.119 2.5-2.5S18.881 5 17.5 5 15 6.119 15 7.5s1.119 2.5 2.5 2.5zM8.5 12c1.381 0 2.5-1.119 2.5-2.5S9.881 7 8.5 7 6 8.119 6 9.5 7.119 12 8.5 12z" />
        </svg>
      ),
      technology: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z" />
        </svg>
      ),
    };
    return icons[type] || icons.construction;
  };

  return (
    <section
      className="relative h-auto md:h-screen  overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images with Overlay */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "/placeholder-kz82p.png";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-purple-400">
                  <div className="w-12 h-0.5 bg-purple-400"></div>
                  <span className="text-sm font-medium tracking-wider uppercase">
                    {slides[currentSlide].subtitle}
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up">
                  {slides[currentSlide].title}
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl animate-fade-in-up">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8 animate-fade-in-up">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">
                    {slides[currentSlide].stats.number}
                  </div>
                  <div className="text-sm text-gray-400">
                    {slides[currentSlide].stats.label}
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">15+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Started Today
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Content - Industry Icons */}
            <div className="flex flex-col space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "healthcare",
                    title: "Healthcare",
                    desc: "Medical Professionals",
                  },
                  {
                    icon: "construction",
                    title: "Construction",
                    desc: "Skilled Workers",
                  },
                  {
                    icon: "technology",
                    title: "Technology",
                    desc: "IT Specialists",
                  },
                  {
                    icon: "construction",
                    title: "Industrial",
                    desc: "Technical Experts",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="text-purple-400 mb-3">
                      <IndustryIcon type={item.icon} />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className=" absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-purple-400 w-8"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
        }
        className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  );
};

export default HeroSection;
