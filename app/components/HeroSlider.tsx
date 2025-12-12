'use client';

import { useState, useEffect, useRef, startTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Search, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/app/contexts/LanguageContext';

const slides = {
  fr: [
    {
      id: 1,
      title: 'Nous concretisons votre Rêve Immobilier en Afrique',
      subtitle: 'Découvrez des propriétés d\'exception',
      description: 'Des villas de luxe aux appartements modernes, trouvez la propriété parfaite',
      cta: 'Explorer les Propriétés',
    },
    {
      id: 2,
      title: 'Faites des Investissements Immobiliers Intelligents',
      subtitle: 'Croissance et Opportunités',
      description: 'Investissez dans l\'immobilier africain avec des rendements exceptionnels',
      cta: 'En Savoir Plus',
    },
    {
      id: 3,
      title: 'Expertise et Confiance dans le Marché Immobilier Africain',
      subtitle: 'Votre Partenaire Immobilier',
      description: 'Plus de 10 ans d\'expérience dans le marché immobilier africain',
      cta: 'Nous Contacter',
    },
  ],
  en: [
    {
      id: 1,
      title: 'We Make Your Real Estate Dream in Africa Come True',
      subtitle: 'Discover Exceptional Properties',
      description: 'From luxury villas to modern apartments, find the perfect property',
      cta: 'Explore Properties',
    },
    {
      id: 2,
      title: 'Make Smart Real Estate Investments',
      subtitle: 'Growth and Opportunities',
      description: 'Invest in African real estate with exceptional returns',
      cta: 'Learn More',
    },
    {
      id: 3,
      title: 'Expertise and Trust in the African Real Estate Market',
      subtitle: 'Your Real Estate Partner',
      description: 'Over 10 years of experience in the African real estate market',
      cta: 'Contact Us',
    },
  ],
};

const translations = {
  fr: {
    searchPlaceholder: 'Rechercher une propriété...',
    selectCity: 'Sélectionner Ville',
    searchButton: 'Rechercher',
    cities: {
      casablanca: 'Casablanca',
      dakar: 'Dakar',
      abidjan: 'Abidjan',
      lagos: 'Lagos',
    },
  },
  en: {
    searchPlaceholder: 'Search for a property...',
    selectCity: 'Select City',
    searchButton: 'Search',
    cities: {
      casablanca: 'Casablanca',
      dakar: 'Dakar',
      abidjan: 'Abidjan',
      lagos: 'Lagos',
    },
  },
};

export default function HeroSlider() {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const prevLanguageRef = useRef(language);

  const currentSlides = slides[language];
  const t = translations[language];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setCurrentSlide((prev) => (prev + 1) % currentSlides.length);
      }
    }, 6000);

    return () => clearInterval(timer);
  }, [isAnimating, currentSlides.length]);

  // Reset to first slide when language changes
  useEffect(() => {
    if (prevLanguageRef.current !== language) {
      prevLanguageRef.current = language;
      startTransition(() => {
        setCurrentSlide(0);
      });
    }
  }, [language]);

  const goToSlide = (index: number) => {
    if (index === currentSlide || isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % currentSlides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + currentSlides.length) % currentSlides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden mb-20 md:mb-24">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-r from-[#1a4d3e]/60 via-[#1a4d3e]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center">
          <AnimatePresence mode="wait" key={language}>
            <motion.div
              key={`${language}-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl text-white text-center px-4 sm:px-6"
            >
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight px-2"
              >
                {currentSlides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg md:text-xl font-semibold text-[#d4af37] mb-6 px-2"
              >
                {currentSlides[currentSlide].subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg md:text-xl mb-10 text-gray-100 leading-relaxed px-2"
              >
                {currentSlides[currentSlide].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center items-center mt-2.5 px-2"
                style={{ padding: '10px' }}
              >
                <Button
                  type="button"
                  className="relative flex bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 md:px-16 py-6 md:py-8 rounded-xl text-base md:text-lg transition-all duration-300 w-full max-w-md items-center justify-center gap-2"
                >
                  <span className="relative z-10">
                    {currentSlides[currentSlide].cta}
                  </span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {currentSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-[#d4af37]'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
