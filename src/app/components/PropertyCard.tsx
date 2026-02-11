import { Star, MapPin, Wifi, Coffee, Waves, Car } from 'lucide-react';
import { Property } from '../../data/properties';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
  horizontal?: boolean;
}

const amenityIcons: Record<string, any> = {
  'Free Wi-Fi': Wifi,
  'Breakfast included': Coffee,
  'Swimming Pool': Waves,
  'Parking': Car,
};

export function PropertyCard({ property, horizontal = true }: PropertyCardProps) {
  const savings = property.originalPrice ? property.originalPrice - property.price : 0;

  if (horizontal) {
    return (
      <Link to={`/property/${property.id}`}>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer group">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="relative w-full md:w-80 h-64 flex-shrink-0">
              <ImageWithFallback
                src={property.images[0]}
                alt={property.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {property.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="absolute top-3 left-3 bg-blue-600 text-white"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Property Details */}
            <div className="flex-1 p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {property.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(property.starRating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {property.starRating} Star {property.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1 bg-blue-600 text-white px-2 py-1 rounded">
                      <span className="font-bold">{property.guestRating}</span>
                      <Star className="h-3 w-3 fill-white" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      ({property.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{property.area}, {property.city}</span>
                    {property.distanceFromCenter && (
                      <span className="text-sm">• {property.distanceFromCenter}km from center</span>
                    )}
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    {property.amenities.slice(0, 4).map((amenity) => {
                      const Icon = amenityIcons[amenity] || Wifi;
                      return (
                        <div key={amenity} className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                          <Icon className="h-4 w-4" />
                          <span>{amenity}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Trust Messages */}
                  <div className="flex flex-wrap gap-2">
                    {property.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="ml-6 text-right">
                  {property.originalPrice && (
                    <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                      ₹{property.originalPrice.toLocaleString()}
                    </div>
                  )}
                  <div className="text-3xl font-bold mb-1">
                    ₹{property.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">per night</div>
                  {savings > 0 && (
                    <Badge className="bg-green-600 text-white mb-3">
                      Save ₹{savings.toLocaleString()}
                    </Badge>
                  )}
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">+ taxes & fees</div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Vertical Card
  return (
    <Link to={`/property/${property.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer group">
        <div className="relative h-48">
          <ImageWithFallback
            src={property.images[0]}
            alt={property.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {property.discount && (
            <Badge className="absolute top-3 right-3 bg-red-600 text-white">
              {property.discount}% OFF
            </Badge>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bold mb-2 group-hover:text-blue-600 transition-colors">
            {property.name}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {property.city}, {property.country}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1 bg-blue-600 text-white px-2 py-1 rounded text-sm">
              <span className="font-bold">{property.guestRating}</span>
              <Star className="h-3 w-3 fill-white" />
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400">
              ({property.reviewCount} reviews)
            </span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              {property.originalPrice && (
                <div className="text-sm text-gray-500 line-through">
                  ₹{property.originalPrice.toLocaleString()}
                </div>
              )}
              <div className="text-2xl font-bold">
                ₹{property.price.toLocaleString()}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">per night</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
