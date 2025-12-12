'use client';

import { motion } from 'framer-motion';
import { Bed, Bath, Square, MapPin, ArrowRight, Heart, Images } from 'lucide-react';
import { useState } from 'react';
import ImageSlideshowDialog from './ImageSlideshowDialog';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  picIn?: {
    image: string;
  }[];
}

interface PropertyCardProps {
  property: Property;
  index: number;
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const { language } = useLanguage();
  
  const hasImages = property.picIn && property.picIn.length > 0;

  // Translations
  const translations = {
    fr: {
      gallery: 'Galerie',
      propertyTypes: {
        'Appartement': 'Appartement',
        'Maison': 'Maison',
        'Villa': 'Villa',
        'Duplex': 'Duplex',
        'Penthouse': 'Penthouse',
        'Studio': 'Studio',
        'Loft': 'Loft',
        'Immeuble': 'Immeuble',
        'Building': 'Immeuble',
        'House': 'Maison',
      },
    },
    en: {
      gallery: 'Gallery',
      propertyTypes: {
        'Appartement': 'Apartment',
        'Maison': 'House',
        'Villa': 'Villa',
        'Duplex': 'Duplex',
        'Penthouse': 'Penthouse',
        'Studio': 'Studio',
        'Loft': 'Loft',
        'Immeuble': 'Building',
        'Building': 'Building',
        'House': 'House',
      },
    },
  };

  const t = translations[language];
  
  // Translate property type
  const translatedType = t.propertyTypes[property.type as keyof typeof t.propertyTypes] || property.type;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -12 }}
      className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group w-full max-w-sm mx-auto border border-gray-100 "
    >
      {/* Image Section */}
      <div className="relative h-80 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${property.image})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2), transparent)' }} />
        
        {/* Type Badge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="absolute top-5 left-5 text-[#1a4d3e] rounded-full text-sm font-bold shadow-lg backdrop-blur-sm"
          style={{ background: 'linear-gradient(to right, #d4af37, #f4d03f)', padding: '8px 16px' }}
        >
          {translatedType}
        </motion.div>

        {/* Favorite Button */}
        <motion.button
          onClick={() => setIsFavorite(!isFavorite)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-5 right-5 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <Heart
            size={20}
            className={`transition-colors ${
              isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-600'
            }`}
          />
        </motion.button>

        {/* Hover Arrow Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-5 right-5 bg-[#d4af37] p-3 rounded-full shadow-lg"
        >
          <ArrowRight className="text-[#1a4d3e] w-5 h-5" />
        </motion.div>
      </div>

      {/* Content Section */}
      <div style={{ padding: '32px' }}>
        {/* Title and Location */}
        <div className="mb-5">
          <h3 className="text-xl md:text-2xl font-bold text-[#1a4d3e] group-hover:text-[#2d7a5f] transition-colors mb-3 line-clamp-2">
            {property.title}
          </h3>
          <div className="flex items-center text-gray-600">
            <MapPin size={18} className="mr-2 text-[#1a4d3e] shrink-0" />
            <span className="text-sm md:text-base">{property.location}</span>
          </div>
        </div>

        {/* Property Features */}
        <div className="flex items-center justify-between mb-6 pb-6 border-b-2 border-gray-100">
          <div className="flex items-center gap-6 text-gray-700">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
            >
              <Bed size={18} className="text-[#1a4d3e]" />
              <span className="text-sm font-semibold">{property.bedrooms}</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
            >
              <Bath size={18} className="text-[#1a4d3e]" />
              <span className="text-sm font-semibold">{property.bathrooms}</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
            >
              <Square size={18} className="text-[#1a4d3e]" />
              <span className="text-sm font-semibold">{property.area}m²</span>
            </motion.div>
          </div>
          <div className="flex items-center gap-2">
           
            {hasImages && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSlideshowOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-[#bb5c18] text-white rounded-lg hover:bg-[#eabf83] transition-colors shadow-md"
                aria-label="View images"
                style={{ cursor: 'pointer', transition: 'all 0.3s ease', padding: '10px' }}
              >
                <Images size={18} />
                <span className="text-sm font-medium">{t.gallery}</span>
              </motion.button>
            )}
          </div>
        </div>
      </div>

      {/* Image Slideshow Dialog */}
      {hasImages && property.picIn && (
        <ImageSlideshowDialog
          images={property.picIn}
          isOpen={isSlideshowOpen}
          onClose={() => setIsSlideshowOpen(false)}
          initialIndex={0}
        />
      )}
    </motion.div>
  );
}

