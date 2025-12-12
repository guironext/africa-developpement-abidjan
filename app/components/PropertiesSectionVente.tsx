'use client';

import { motion } from 'framer-motion';
import PropertyCard from './PropertyCard';
import { useLanguage } from '@/app/contexts/LanguageContext';

// Property data with translations
const propertiesData = {
  fr: [
    {
      id: 1,
      title: 'Immeuble Moderne de Luxe',
      location: 'Zone 4, Abidjan',
      price: '2,500,000 MAD',
      image: '/vente1.jpg',
      bedrooms: 4,
      bathrooms: 3,
      area: 350,
      type: 'Immeuble',
      picIn:[
      ]
    },
    {
      id: 2,
      title: 'Villa Moderne de Luxe',
      location: 'Abidjan, Côte d\'Ivoire',
      price: '2,500,000 MAD',
      image: '/vente2.jpg',
      bedrooms: 4,
      bathrooms: 3,
      area: 400,
      type: 'Villa',
      picIn:[
      ]
    },
    {
      id: 3,
      title: 'Villa Moderne de Luxe',
      location: 'Abidjan, Côte d\'Ivoire',
      price: '2,500,000 MAD',
      image: '/villa2/pic1.jpg',
      bedrooms: 4,
      bathrooms: 3,
      area: 400,
      type: 'Villa',
      picIn:[
        {
          image: '/villa2/pic1.jpg',
        },
        {
          image: '/villa2/pic2.jpg',
        },
        {
          image: '/villa2/pic3.jpg',
        },
        {
          image: '/villa2/pic4.jpg',
        },
        {
          image: '/villa2/pic5.jpg',
        },
        {
          image: '/villa2/pic6.jpg',
        },
        {
          image: '/villa2/pic7.jpg',
        },
        {
          image: '/villa2/pic8.jpg',
        },
        {
          image: '/villa2/pic9.jpg',
        },
        {
          image: '/villa2/pic10.jpg',
        },
        {
          image: '/villa2/pic11.jpg',
        },
        {
          image: '/villa2/pic12.jpg',
        },
        {
          image: '/villa2/pic13.jpg',
        },
        {
          image: '/villa2/pic14.jpg',
        },
        {
          image: '/villa2/pic15.jpg',
        },
        {
          image: '/villa2/pic16.jpg',
        },
        {
          image: '/villa2/pic17.jpg',
        },
        
      ]
    },
    {
      id: 4,
      title: 'Immeubles Modernes de Luxe',
      location: 'Zone 4, Abidjan',
      price: '2,500,000 MAD',
      image: '/imm.jpg',
      bedrooms: 4,
      bathrooms: 3,
      area: 350,
      type: 'Immeuble',
      picIn:[
      ]
    },
    {
      id: 5,
      title: 'Villa Élégante',
      location: 'Abidjan, Côte d\'Ivoire',
      price: '850,000 XOF',
      image: '/villa1/pic1.jpg',
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      type: 'Villa',
      picIn:[
        {
          image: '/villa1/pic1.jpg',
        },
        {
          image: '/villa1/pic2.jpg',
        },
        {
          image: '/villa1/pic3.jpg',
        },
        {
          image: '/villa1/pic4.jpg',
        },
        {
          image: '/villa1/pic5.jpg',
        },
        {
          image: '/villa1/pic6.jpg',
        },
        {
            image: '/villa1/pic7.jpg',
        },
        {
          image: '/villa1/pic8.jpg',
        },
        {
          image: '/villa1/pic9.jpg',
        },
        {
          image: '/villa1/pic10.jpg',
        },
        {
          image: '/villa1/pic11.jpg',
        },
      
      ]
    },
    {
      id: 6,
      title: 'Maison Familiale Spacieuse',
      location: 'Abidjan, Côte d\'Ivoire',
      price: '1,200,000 XOF',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      bedrooms: 5,
      bathrooms: 4,
      area: 280,
      type: 'Maison',
      picIn:[
      ]
    },
  ],
  en: [
    {
      id: 1,
      title: 'Modern Luxury Building',
      location: 'Zone 4, Abidjan',
      price: '2,500,000 MAD',
      image: '/vente1.jpg',
      bedrooms: 4,
      bathrooms: 3,
      area: 350,
      type: 'Building',
      picIn:[
      ]
    },
    {
      id: 2,
      title: 'Modern Luxury Villa',
      location: 'Abidjan, Ivory Coast',
      price: '2,500,000 MAD',
      image: '/vente2.jpg',
      bedrooms: 4,
      bathrooms: 3,
      area: 400,
      type: 'Villa',
      picIn:[
      ]
    },
    {
      id: 3,
      title: 'Modern Luxury Villa',
      location: 'Abidjan, Ivory Coast',
      price: '2,500,000 MAD',
      image: '/villa2/pic1.jpg',
      bedrooms: 4,
      bathrooms: 3,
      area: 400,
      type: 'Villa',
      picIn:[
        {
          image: '/villa2/pic1.jpg',
        },
        {
          image: '/villa2/pic2.jpg',
        },
        {
          image: '/villa2/pic3.jpg',
        },
        {
          image: '/villa2/pic4.jpg',
        },
        {
          image: '/villa2/pic5.jpg',
        },
        {
          image: '/villa2/pic6.jpg',
        },
        {
          image: '/villa2/pic7.jpg',
        },
        {
          image: '/villa2/pic8.jpg',
        },
        {
          image: '/villa2/pic9.jpg',
        },
        {
          image: '/villa2/pic10.jpg',
        },
        {
          image: '/villa2/pic11.jpg',
        },
        {
          image: '/villa2/pic12.jpg',
        },
        {
          image: '/villa2/pic13.jpg',
        },
        {
          image: '/villa2/pic14.jpg',
        },
        {
          image: '/villa2/pic15.jpg',
        },
        {
          image: '/villa2/pic16.jpg',
        },
        {
          image: '/villa2/pic17.jpg',
        },
        
      ]
    },
    {
      id: 4,
      title: 'Modern Luxury Buildings',
      location: 'Zone 4, Abidjan',
      price: '2,500,000 MAD',
      image: '/imm.jpg',
      bedrooms: 4,
      bathrooms: 3,
      area: 350,
      type: 'Building',
      picIn:[
      ]
    },
    {
      id: 5,
      title: 'Elegant Villa',
      location: 'Abidjan, Ivory Coast',
      price: '850,000 XOF',
      image: '/villa1/pic1.jpg',
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      type: 'Villa',
      picIn:[
        {
          image: '/villa1/pic1.jpg',
        },
        {
          image: '/villa1/pic2.jpg',
        },
        {
          image: '/villa1/pic3.jpg',
        },
        {
          image: '/villa1/pic4.jpg',
        },
        {
          image: '/villa1/pic5.jpg',
        },
        {
          image: '/villa1/pic6.jpg',
        },
        {
            image: '/villa1/pic7.jpg',
        },
        {
          image: '/villa1/pic8.jpg',
        },
        {
          image: '/villa1/pic9.jpg',
        },
        {
          image: '/villa1/pic10.jpg',
        },
        {
          image: '/villa1/pic11.jpg',
        },
      
      ]
    },
    {
      id: 6,
      title: 'Spacious Family Home',
      location: 'Abidjan, Ivory Coast',
      price: '1,200,000 XOF',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      bedrooms: 5,
      bathrooms: 4,
      area: 280,
      type: 'House',
      picIn:[
      ]
    },
  ],
};

const PropertiesSectionVente = () => {
  const { language } = useLanguage();

  // Translations
  const translations = {
    fr: {
      title: 'Propriétés en Vente',
      description: 'Découvrez nos propriétés d\'exception en vente à travers la Côte d\'Ivoire et l\'Afrique. Chaque bien a été soigneusement sélectionné pour sa qualité et son emplacement privilégié.',
    },
    en: {
      title: 'Properties for Sale',
      description: 'Discover our exceptional properties for sale across Ivory Coast and Africa. Each property has been carefully selected for its quality and prime location.',
    },
  };

  const t = translations[language];
  const properties = propertiesData[language];

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

export default PropertiesSectionVente;