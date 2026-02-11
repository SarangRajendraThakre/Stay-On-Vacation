import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SearchBar, SearchData } from '../components/SearchBar';
import { PropertyCard } from '../components/PropertyCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { popularDestinations, topDeals } from '../../data/properties';
import { Shield, Award, DollarSign, Headphones, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { motion } from 'motion/react';

const heroImages = [
  'https://images.pexels.com/photos/33315262/pexels-photo-33315262.jpeg',
  'https://images.pexels.com/photos/1488291/pexels-photo-1488291.png',
  'https://images.pexels.com/photos/35598817/pexels-photo-35598817.jpeg'
];

export function HomePage() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (data: SearchData) => {
    console.log('Search data:', data);
    navigate(`/search?destination=${data.destination}`);
  };

  const features = [
    {
      icon: Shield,
      title: 'Secure payments',
      description: 'Encrypted and trusted payment gateways'
    },
    {
      icon: Award,
      title: 'Verified stays',
      description: 'Quality-checked hotels and villas'
    },
    {
      icon: DollarSign,
      title: 'Best prices',
      description: 'Transparent pricing with no hidden fees'
    },
    {
      icon: Headphones,
      title: '24/7 support',
      description: 'Help whenever you need it'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header transparent />

      {/* Hero Section with Auto-changing Background */}
      <section className="relative h-[450px] overflow-hidden">
        {/* Background Images with Crossfade */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <ImageWithFallback
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/60" />
          </div>
        ))}

        {/* Search Bar Overlay */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
              Find Your Perfect Stay
            </h1>
            <SearchBar onSearch={handleSearch} />
          </motion.div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Popular destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations.map((destination) => (
              <motion.div
                key={destination.id}
                whileHover={{ scale: 1.02 }}
                className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => navigate(`/search?destination=${destination.name}`)}
              >
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                  <p className="text-sm mb-2">{destination.country}</p>
                  <p className="text-sm opacity-90">
                    From ₹{destination.startingPrice.toLocaleString()} per night
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Top Deals This Week */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Top deals this week</h2>
            <Button variant="outline" onClick={() => navigate('/deals')}>
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topDeals.slice(0, 3).map((property) => (
              <PropertyCard key={property.id} property={property} horizontal={false} />
            ))}
          </div>
        </div>
      </section>


      {/* Why Book With Us */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why book with us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
