'use client';

import { motion } from 'framer-motion';
import PropertyCard from './PropertyCard';
import { useLanguage } from '@/app/contexts/LanguageContext';

const properties = [
  {
    id: 1,
    title: 'Appartement Luxueux Centre-Ville',
    location: 'Abidjan, Côte d\'Ivoire',
    price: '85,000,000 XOF',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    type: 'Appartement',
    picIn:[],
  },
  {
    id: 2,
    title: 'Maison Familiale avec Jardin',
    location: 'Dakar, Sénégal',
    price: '120,000,000 XOF',
    image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&q=80',
    bedrooms: 5,
    bathrooms: 4,
    area: 280,
    type: 'Maison',
    picIn:[],
  },
  {
    id: 3,
    title: 'Duplex Élégant',
    location: 'Nairobi, Kenya',
    price: '45,000,000 KES',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    type: 'Duplex',
    picIn:[],
  },
  {
    id: 4,
    title: 'Villa de Prestige',
    location: 'Le Cap, Afrique du Sud',
    price: '8,500,000 ZAR',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
    bedrooms: 6,
    bathrooms: 5,
    area: 450,
    type: 'Villa',
    picIn:[],
  },
  {
    id: 5,
    title: 'Appartement Moderne',
    location: 'Accra, Ghana',
    price: '350,000 GHS',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
    type: 'Appartement',
    picIn:[],
  },
  {
    id: 6,
    title: 'Maison Traditionnelle Rénovée',
    location: 'Kigali, Rwanda',
    price: '180,000,000 RWF',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    bedrooms: 4,
    bathrooms: 3,
    area: 220,
    type: 'Maison',
    picIn:[],
  },
  {
    id: 7,
    title: 'Penthouse avec Vue Panoramique',
    location: 'Lagos, Nigeria',
    price: '3,500,000 NGN',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    bedrooms: 3,
    bathrooms: 3,
    area: 300,
    type: 'Penthouse',
    picIn:[],
  },
  {
    id: 8,
    title: 'Villa Contemporaine',
    location: 'Ouaga, Burkina Faso',
    price: '1,800,000 TND',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    type: 'Villa',
    picIn:[],
  },
  {
    id: 9,
    title: 'Studio Moderne',
    location: 'Casablanca, Maroc',
    price: '450,000 MAD',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    type: 'Studio',
    picIn:[],
  },
  {
    id: 10,
    title: 'Appartement avec Terrasse',
    location: 'Douala, Cameroun',
    price: '65,000,000 XAF',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    bedrooms: 3,
    bathrooms: 2,
    area: 140,
    type: 'Appartement',
    picIn:[],
  },
  {
    id: 11,
    title: 'Villa de Plage',
    location: 'Zanzibar, Tanzanie',
    price: '2,200,000 USD',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    bedrooms: 5,
    bathrooms: 4,
    area: 380,
    type: 'Villa',
    picIn:[],
  },
  {
    id: 12,
    title: 'Loft Industriel',
    location: 'Johannesburg, Afrique du Sud',
    price: '2,800,000 ZAR',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
    bedrooms: 2,
    bathrooms: 2,
    area: 160,
    type: 'Loft',
    picIn:[],
  },
];

const PropertiesSection = () => {
  const { language } = useLanguage();

  // Translations
  const translations = {
    fr: {
      title: 'Propriétés en Gérance',
      description: 'Découvrez nos propriétés en gérance à travers la Côte d\'Ivoire et l\'Afrique. Le nombre et la qualité des biens que nous gérons témoigne de la confiance que nos mandants placent en nous.',
    },
    en: {
      title: 'Managed Properties',
      description: 'Discover our managed properties across Côte d\'Ivoire and Africa. The number and quality of properties we manage reflects the trust our clients place in us.',
    },
  };

  const t = translations[language];

  return (
    <section className="py-24 md:py-32 flex flex-col items-center gap-y-14 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center gap-y-10">
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
          >
            {t.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-white max-w-3xl mx-auto leading-relaxed"
          >
            {t.description}
          </motion.p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        {/* CTA Section */}
       
      </div>
    </section>
  );
};

export default PropertiesSection;