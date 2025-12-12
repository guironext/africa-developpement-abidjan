'use client';

import { motion } from 'framer-motion';
import { Home, TrendingUp, Shield, Users, Handshake, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

const servicesData = {
  fr: [
    {
      icon: Home,
      title: 'Achat & Vente',
      description: 'Accompagnement complet dans vos transactions immobilières avec expertise et transparence.',
      color: 'from-[#1a4d3e] to-[#2d7a5f]',
    },
    {
      icon: TrendingUp,
      title: 'Investissement',
      description: 'Conseils stratégiques pour maximiser vos rendements immobiliers en Afrique.',
      color: 'from-[#2d7a5f] to-[#1a4d3e]',
    },
    {
      icon: Shield,
      title: 'Gestion de Patrimoine',
      description: 'Services de gestion professionnelle pour votre portefeuille immobilier.',
      color: 'from-[#1a4d3e] to-[#2d7a5f]',
    },
    {
      icon: Users,
      title: 'Consultation',
      description: 'Expertise et conseils personnalisés pour vos projets immobiliers.',
      color: 'from-[#2d7a5f] to-[#1a4d3e]',
    },
    {
      icon: Handshake,
      title: 'Location',
      description: 'Gestion complète de vos biens en location avec suivi professionnel.',
      color: 'from-[#1a4d3e] to-[#2d7a5f]',
    },
    {
      icon: MapPin,
      title: 'Évaluation',
      description: 'Expertise et évaluation précise de vos biens immobiliers.',
      color: 'from-[#2d7a5f] to-[#1a4d3e]',
    },
  ],
  en: [
    {
      icon: Home,
      title: 'Buy & Sell',
      description: 'Complete support in your real estate transactions with expertise and transparency.',
      color: 'from-[#1a4d3e] to-[#2d7a5f]',
    },
    {
      icon: TrendingUp,
      title: 'Investment',
      description: 'Strategic advice to maximize your real estate returns in Africa.',
      color: 'from-[#2d7a5f] to-[#1a4d3e]',
    },
    {
      icon: Shield,
      title: 'Wealth Management',
      description: 'Professional management services for your real estate portfolio.',
      color: 'from-[#1a4d3e] to-[#2d7a5f]',
    },
    {
      icon: Users,
      title: 'Consultation',
      description: 'Expertise and personalized advice for your real estate projects.',
      color: 'from-[#2d7a5f] to-[#1a4d3e]',
    },
    {
      icon: Handshake,
      title: 'Rental',
      description: 'Complete management of your rental properties with professional follow-up.',
      color: 'from-[#1a4d3e] to-[#2d7a5f]',
    },
    {
      icon: MapPin,
      title: 'Valuation',
      description: 'Expertise and accurate valuation of your real estate properties.',
      color: 'from-[#2d7a5f] to-[#1a4d3e]',
    },
  ],
};

const translations = {
  fr: {
    title: 'Solutions Complètes',
    subtitle: 'Des solutions complètes pour tous vos besoins immobiliers en Afrique',
    learnMore: 'En savoir plus',
  },
  en: {
    title: 'Complete Solutions',
    subtitle: 'Complete solutions for all your real estate needs in Africa',
    learnMore: 'Learn more',
  },
};

export default function ServicesSection() {
  const { language } = useLanguage();
  const services = servicesData[language];
  const t = translations[language];
  return (
    <section id="services" className="py-24 md:py-32 flex flex-col items-center gap-y-14 bg-transparent relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(26,77,62,0.05),transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 flex flex-col items-center justify-center mt-24 md:mt-32 gap-y-10"
        >
         
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-400"
            style={{ marginBottom: '50px', marginTop: '50px' }}
          >
            {t.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center leading-relaxed px-4 mb-10"
            style={{ marginBottom: '50px' }}
          >
            {t.subtitle}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative w-full max-w-sm"
            >
              {/* Card */}
              <div className={`relative bg-linear-to-br ${service.color} p-8 md:p-10 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-white/10 overflow-hidden`}>
                {/* Decorative Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300"
                >
                  <service.icon size={32} className="text-[#d4af37] relative z-10" strokeWidth={2} />
                </motion.div>
                
                {/* Content */}
                <div className="relative z-10" style={{ padding: '10px' }}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#d4af37] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-100 leading-relaxed text-base md:text-lg mb-6 opacity-90">
                    {service.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="flex items-center text-[#d4af37] font-semibold text-sm md:text-base group-hover:gap-2 transition-all duration-300"
                  >
                    <span>{t.learnMore}</span>
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#d4af37]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        
        <div style={{ height: '20px', marginBottom: '10px' }} ></div>
      </div>
    </section>
  );
}

