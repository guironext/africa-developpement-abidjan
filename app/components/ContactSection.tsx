'use client';

import { motion } from 'framer-motion';
import { Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function ContactSection() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Translations
  const translations = {
    fr: {
      title: 'Contactez-Nous',
      description: 'Nous sommes là pour répondre à toutes vos questions et vous accompagner dans vos projets immobiliers',
      sendMessage: 'Envoyez-nous un message',
      fullName: 'Nom Complet',
      fullNamePlaceholder: 'Votre nom complet',
      email: 'Email',
      emailPlaceholder: 'votre@email.com',
      phone: 'Téléphone',
      phonePlaceholder: '+212 6XX XXX XXX',
      message: 'Message',
      messagePlaceholder: 'Votre message...',
      sendButton: 'Envoyer le Message',
    },
    en: {
      title: 'Contact Us',
      description: 'We are here to answer all your questions and support you in your real estate projects',
      sendMessage: 'Send us a message',
      fullName: 'Full Name',
      fullNamePlaceholder: 'Your full name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      phone: 'Phone',
      phonePlaceholder: '+212 6XX XXX XXX',
      message: 'Message',
      messagePlaceholder: 'Your message...',
      sendButton: 'Send Message',
    },
  };

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const cardImages = [
    '/card/6.png',
    '/card/7.png',
    '/card/8.png',
    '/card/4.png',
    '/card/5.png',
  ];

  return (
    <section id="contact" className="py-24 md:py-32 flex flex-col items-center gap-y-14 bg-transparent">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(26,77,62,0.08),transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-400 mb-6"
            style={{  marginTop: '50px' }}
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300  mx-auto leading-relaxed"
            style={{ marginBottom: '20px', marginTop: '20px' }}
          >
            {t.description}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 w-full"
          >
            {/* Card Images Column */}
            <div className="grid grid-cols-1  gap-6 items-center">
              {cardImages.map((imagePath, index) => (
                <motion.div
                  key={imagePath}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10"
                  
                >
                  <div className="relative w-full aspect-4/3">
                    <Image
                      src={imagePath}
                      alt={`Card ${index + 4}`}
                      fill
                      className="object-fill"
                      sizes=" 100vw, 100%"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="relative bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl w-full overflow-hidden"
            style={{ padding: '20px' }}
          >
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1a4d3e] rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex gap-3 mb-6 justify-center items-center">
                <div className="p-3 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/30">
                  <MessageSquare className="text-[#d4af37]" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">{t.sendMessage}</h3>
              </div>

              <div style={{ padding: '10px' }}>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-200 mb-2">
                  {t.fullName}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all backdrop-blur-sm"
                  placeholder={t.fullNamePlaceholder}
                  style={{ padding: '10px' }}
                  required
                />
              </div>

              <div style={{ padding: '10px' }}>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-200 mb-2">
                  {t.email}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all backdrop-blur-sm"
                  placeholder={t.emailPlaceholder}
                  style={{ padding: '10px' }}
                  required
                />
              </div>

              <div style={{ padding: '10px' }}>
                <label htmlFor="phone" className="block text-lg font-semibold text-gray-200 mb-2">
                  {t.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all backdrop-blur-sm"
                  placeholder={t.phonePlaceholder}
                  style={{ padding: '10px' }}
                  required
                />
              </div>

              <div style={{ padding: '10px' }}>
                <label htmlFor="message" className="block text-lg font-semibold text-gray-200 mb-2">
                  {t.message}
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all resize-none backdrop-blur-sm"
                  placeholder={t.messagePlaceholder}
                  style={{ padding: '10px' }}
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-linear-to-r from-[#1a4d3e] to-[#2d7a5f] hover:from-[#2d7a5f] hover:to-[#1a4d3e] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl group"
                style={{ padding: '10px' }}
              >
                <span>{t.sendButton}</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

