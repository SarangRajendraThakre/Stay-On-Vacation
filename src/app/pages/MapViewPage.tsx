import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { properties } from '../../data/properties';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Star, MapPin, List, X } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { GoogleMapComponent } from '../components/map/GoogleMapComponent';

export function MapViewPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />

      <div className="flex-1 relative">
        {/* Map Area */}
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700">
          <GoogleMapComponent
            properties={properties}
            selectedProperty={null}
            onSelectProperty={(id) => navigate(`/property/${id}`)}
          />
        </div>

        {/* View Toggle Button */}
        <div className="absolute top-4 right-4 z-10">
          <Button onClick={() => navigate('/search')} className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <List className="h-4 w-4 mr-2" />
            View List
          </Button>
        </div>
      </div>

    </div>
  );
}
