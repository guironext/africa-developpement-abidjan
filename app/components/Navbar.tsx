"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Building2, Info, Phone, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/contexts/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    // Client-side only: prevent hydration mismatch
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll(); // Check initial scroll position
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Translations
  const translations = {
    fr: {
      nav: {
        home: "Accueil",
        about: "À Propos",
        properties: "Propriétés",
        contact: "Contact",
        forSale: "A Vendre",
        language: "Langue",
        tagline: "Construction - Location & Gérance - Achat & Vente"
      }
    },
    en: {
      nav: {
        home: "Home",
        about: "About",
        properties: "Properties",
        contact: "Contact",
        forSale: "For Sale",
        language: "Language",
        tagline: "Construction - Rental & Management - Buy & Sell"
      }
    }
  };

  const t = translations[language];

  const navItems = [
    { name: t.nav.home, href: "#home", icon: Home },
    { name: t.nav.about, href: "#about", icon: Info },
    { name: t.nav.properties, href: "#properties", icon: Building2 },
    { name: t.nav.contact, href: "#contact", icon: Phone },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/45 backdrop-blur-md shadow-lg"
          : "bg-transparent/95 backdrop-blur-md"
      }`}
      suppressHydrationWarning
    >
      <div className="w-full mx-auto py-4 px-6 sm:px-8 lg:px-10">
        <div className="flex items-center w-full justify-between min-h-[96px]">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-12"
          >
            <Link href="#home" className="flex items-center space-x-4">
              <div className="relative w-20 h-20 md:w-24 md:h-28 lg:w-28 lg:h-32 shrink-0">
                <Image
                  src={isScrolled ? "/logo32.png" : "/logo33.png"}
                  alt="Solutions Africa Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col items-center justify-center">
              <span
                className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-[#1a4d3e]" : "text-white"
                }`}
              >
                Solutions of Africa Développement
              </span>
              <span className="text-sm text-orange-950 font-bold">
                {t.nav.tagline}
              </span>
                
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className={`font-medium transition-colors flex items-center gap-2 px-2 shrink-0 ${
                  isScrolled
                    ? "text-[#1a4d3e] hover:text-[#2d7a5f]"
                    : "text-white hover:text-gray-200"
                }`}
              >
                <item.icon size={18} />
                <span className="text-base lg:text-lg whitespace-nowrap">
                  {item.name}
                </span>
              </motion.a>
            ))}
            <div
              className={`flex items-center gap-2 border-l pl-4 ml-2 shrink-0 transition-colors duration-300 ${
                isScrolled ? "border-[#1a4d3e]/20" : "border-white/20"
              }`}
            >
              {/* Language Selector */}
              <div className="flex items-center gap-1.5 ml-2">
                <Globe 
                  size={18} 
                  className={`transition-colors duration-300 ${
                    isScrolled ? "text-[#1a4d3e]" : "text-white"
                  }`}
                />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as "fr" | "en")}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer appearance-none bg-transparent border ${
                    isScrolled
                      ? "text-[#1a4d3e] border-[#1a4d3e]/30 hover:border-[#1a4d3e] focus:border-[#1a4d3e] focus:outline-none focus:ring-2 focus:ring-[#1a4d3e]/20"
                      : "text-white border-white/30 hover:border-white/50 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                  }`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${isScrolled ? '%231a4d3e' : 'white'}' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.5rem center',
                    paddingRight: '2rem'
                  }}
                >
                  <option value="fr" className={isScrolled ? "text-[#1a4d3e] bg-white" : "text-[#1a4d3e] bg-white"}>FR</option>
                  <option value="en" className={isScrolled ? "text-[#1a4d3e] bg-white" : "text-[#1a4d3e] bg-white"}>Eng</option>
                </select>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  // Smooth scroll to #properties anchor
                  const target = document.querySelector('#properties');
                  if (target) {
                    const offset = 96; // navbar offset height
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap bg-orange-800 text-white shadow-md hover:bg-orange-900 mr-6 lg:mr-8`}
                style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', marginLeft: '1rem' }}
              >
                {t.nav.forSale}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-[#1a4d3e]" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-[#1a4d3e] font-medium hover:text-[#2d7a5f] transition-colors"
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </motion.a>
              ))}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <div className="flex items-center gap-2 mb-2 text-[#1a4d3e] font-medium">
                  <Globe size={18} />
                  <span>{t.nav.language}</span>
                </div>
                <select
                  value={language}
                  onChange={(e) => {
                    setLanguage(e.target.value as "fr" | "en");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 text-[#1a4d3e] border border-gray-300 bg-white hover:border-[#1a4d3e] focus:border-[#1a4d3e] focus:outline-none focus:ring-2 focus:ring-[#1a4d3e]/20 cursor-pointer appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%231a4d3e' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.75rem center',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option value="fr" className="text-[#1a4d3e] bg-white">FR</option>
                  <option value="en" className="text-[#1a4d3e] bg-white">Eng</option>
                </select>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full rounded-md text-sm font-medium transition-all duration-300 bg-amber-600 text-white shadow-md hover:bg-amber-800 mt-4"
                style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.75rem', paddingBottom: '0.75rem' }}
              >
                {t.nav.forSale}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
