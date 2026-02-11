import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PropertyCard } from '../components/PropertyCard';
import { SearchBar, SearchData } from '../components/SearchBar';
import { properties } from '../../data/properties';
import { Slider } from '../components/ui/slider';
import { Checkbox } from '../components/ui/checkbox';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';
import { Filter, Map, List } from 'lucide-react';

export function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const destination = searchParams.get('destination') || '';
  const typeParam = searchParams.get('type');

  // Filter states
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  // Initialize selectedTypes from URL param
  useEffect(() => {
    if (typeParam) {
      const types = typeParam.split(',').filter(t => propertyTypes.includes(t));
      setSelectedTypes(types);
    } else {
      setSelectedTypes([]);
    }
  }, [typeParam]);
  const [selectedStars, setSelectedStars] = useState<number[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  const propertyTypes = ['hotel', 'villa', 'resort', 'apartment', 'homestay', 'hostel'];
  const stars = [5, 4, 3];
  const ratings = [
    { label: 'Excellent (4.5+)', value: '4.5' },
    { label: 'Very Good (4+)', value: '4' },
    { label: 'Good (3+)', value: '3' },
  ];
  const amenities = [
    'Free Wi-Fi',
    'Breakfast included',
    'Swimming Pool',
    'Parking',
    'Free cancellation',
    'Gym'
  ];

  // Filter properties
  let filteredProperties = properties.filter(property => {
    const matchesDestination = !destination ||
      property.city.toLowerCase().includes(destination.toLowerCase()) ||
      property.area.toLowerCase().includes(destination.toLowerCase());

    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];

    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(property.type);

    const matchesStars = selectedStars.length === 0 || selectedStars.includes(property.starRating);

    const matchesRating = selectedRatings.length === 0 ||
      selectedRatings.some(rating => property.guestRating >= parseFloat(rating));

    const matchesAmenities = selectedAmenities.length === 0 ||
      selectedAmenities.every(amenity => property.amenities.includes(amenity));

    return matchesDestination && matchesPrice && matchesType && matchesStars && matchesRating && matchesAmenities;
  });

  // Sort properties
  filteredProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.guestRating - a.guestRating;
      default:
        return b.reviewCount - a.reviewCount;
    }
  });

  const handleSearch = (data: SearchData) => {
    navigate(`/search?destination=${data.destination}`);
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const toggleStar = (star: number) => {
    setSelectedStars(prev =>
      prev.includes(star) ? prev.filter(s => s !== star) : [...prev, star]
    );
  };

  const toggleRating = (rating: string) => {
    setSelectedRatings(prev =>
      prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
    );
  };

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities(prev =>
      prev.includes(amenity) ? prev.filter(a => a !== amenity) : [...prev, amenity]
    );
  };

  const clearFilters = () => {
    setPriceRange([0, 20000]);
    setSelectedTypes([]);
    setSelectedStars([]);
    setSelectedRatings([]);
    setSelectedAmenities([]);
  };

  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-bold mb-3">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={20000}
          step={500}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>₹{priceRange[0].toLocaleString()}</span>
          <span>₹{priceRange[1].toLocaleString()}</span>
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-3">Property Type</h3>
        <div className="space-y-2">
          {propertyTypes.map((type) => (
            <div key={type} className="flex items-center gap-2">
              <Checkbox
                checked={selectedTypes.includes(type)}
                onCheckedChange={() => toggleType(type)}
              />
              <label className="text-sm capitalize cursor-pointer" onClick={() => toggleType(type)}>
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-3">Star Rating</h3>
        <div className="space-y-2">
          {stars.map((star) => (
            <div key={star} className="flex items-center gap-2">
              <Checkbox
                checked={selectedStars.includes(star)}
                onCheckedChange={() => toggleStar(star)}
              />
              <label className="text-sm cursor-pointer" onClick={() => toggleStar(star)}>
                {star} Star{star > 1 ? 's' : ''}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-3">Guest Rating</h3>
        <div className="space-y-2">
          {ratings.map((rating) => (
            <div key={rating.value} className="flex items-center gap-2">
              <Checkbox
                checked={selectedRatings.includes(rating.value)}
                onCheckedChange={() => toggleRating(rating.value)}
              />
              <label className="text-sm cursor-pointer" onClick={() => toggleRating(rating.value)}>
                {rating.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-3">Amenities</h3>
        <div className="space-y-2">
          {amenities.map((amenity) => (
            <div key={amenity} className="flex items-center gap-2">
              <Checkbox
                checked={selectedAmenities.includes(amenity)}
                onCheckedChange={() => toggleAmenity(amenity)}
              />
              <label className="text-sm cursor-pointer" onClick={() => toggleAmenity(amenity)}>
                {amenity}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Button variant="outline" onClick={clearFilters} className="w-full">
        Clear All Filters
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />

      {/* Search Summary Bar */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-16 z-40">
        <div className="container mx-auto px-4 py-2 md:py-4">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 flex-1">
        <div className="flex gap-6">
          {/* Desktop Filter Panel */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 sticky top-36 max-h-[calc(100vh-10rem)] overflow-y-auto">
              <FilterPanel />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold">
                  {filteredProperties.length} properties found
                  {destination && ` in ${destination}`}
                </h2>
              </div>

              <div className="flex items-center gap-3">
                {/* Mobile Filter Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80 overflow-y-auto">
                    <div className="mt-6">
                      <FilterPanel />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* View Toggle */}
                <div className="flex gap-2">
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'map' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => navigate('/map-view')}
                  >
                    <Map className="h-4 w-4" />
                  </Button>
                </div>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Popularity</SelectItem>
                    <SelectItem value="price-low">Price (Low to High)</SelectItem>
                    <SelectItem value="price-high">Price (High to Low)</SelectItem>
                    <SelectItem value="rating">Guest Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Property Listings */}
            <div className="space-y-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  No properties found matching your criteria
                </p>
                <Button onClick={clearFilters} className="mt-4">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
