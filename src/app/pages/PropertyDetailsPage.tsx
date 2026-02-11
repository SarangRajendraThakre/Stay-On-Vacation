import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link, useSearchParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { properties } from '../../data/properties';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Star, MapPin, Wifi, Coffee, Waves, Car, Check, X,
  ChevronRight, Calendar, Users, Bed, Hotel
} from 'lucide-react';
import { Dialog, DialogContent } from '../components/ui/dialog';
import { GoogleMapComponent } from '../components/map/GoogleMapComponent';

export function PropertyDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const property = properties.find(p => p.id === id);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [showGallery, setShowGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const isPhotosView = searchParams.get('view') === 'photos';

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isPhotosView]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property not found</h1>
          <Button onClick={() => navigate('/search')}>Back to Search</Button>
        </div>
      </div>
    );
  }

  const amenityIcons: Record<string, any> = {
    'Free Wi-Fi': Wifi,
    'Breakfast included': Coffee,
    'Swimming Pool': Waves,
    'Parking': Car,
  };

  const handleBooking = () => {
    if (selectedRoom) {
      navigate(`/checkout?propertyId=${property.id}&roomId=${selectedRoom}`);
    }
  };

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Amazing stay! The room was spacious and clean. Staff was very helpful.',
    },
    {
      id: 2,
      name: 'Mike Chen',
      rating: 4,
      date: '1 month ago',
      comment: 'Great location and facilities. Would definitely recommend.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to={`/search?destination=${property.city}`} className="hover:text-blue-600">
              Hotels in {property.city}
            </Link>
            <ChevronRight className="h-4 w-4" />
            {isPhotosView ? (
              <>
                <Link to={`/property/${id}`} className="hover:text-blue-600">
                  {property.name}
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-gray-900 dark:text-white">Photos</span>
              </>
            ) : (
              <span className="text-gray-900 dark:text-white">{property.name}</span>
            )}
          </div>
        </div>
      </div>

      {isPhotosView ? (
        /* Full Photo Grid View */
        <div className="container mx-auto px-4 py-6 flex-1">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Photos of {property.name}</h1>
            <p className="text-gray-600 dark:text-gray-400">See all {property.images.length} photos</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {property.images.map((image, index) => (
              <div
                key={index}
                className="aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group relative"
                onClick={() => { setGalleryIndex(index); setShowGallery(true); }}
              >
                <ImageWithFallback
                  src={image}
                  alt={`${property.name} ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button onClick={() => navigate(`/property/${id}`)} variant="outline">
              Back to Property Details
            </Button>
          </div>
        </div>
      ) : (
        /* Regular Property Details View */
        <>
          {/* Image Gallery Preview */}
          <div className="bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4 py-6">
              <div className="grid grid-cols-4 gap-2 h-96">
                <div
                  className="col-span-2 row-span-2 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => { setGalleryIndex(0); setShowGallery(true); }}
                >
                  <ImageWithFallback
                    src={property.images[0]}
                    alt={property.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                {property.images.slice(1, 5).map((image, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => { setGalleryIndex(index + 1); setShowGallery(true); }}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${property.name} ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setSearchParams({ view: 'photos' })}
              >
                View all photos
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-4 py-6 flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Property Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Property Header */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <h1 className="text-3xl font-bold mb-3">{property.name}</h1>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex">
                      {[...Array(property.starRating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded">
                        <span className="font-bold">{property.guestRating}</span>
                        <Star className="h-4 w-4 fill-white" />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        ({property.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                    <MapPin className="h-5 w-5" />
                    <span>{property.address}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {property.tags.map((tag) => (
                      <Badge key={tag} className="bg-green-600 text-white">
                        <Check className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Quick Highlights */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <div className="flex flex-wrap gap-6">
                    {property.amenities.slice(0, 6).map((amenity) => {
                      const Icon = amenityIcons[amenity] || Check;
                      return (
                        <div key={amenity} className="flex items-center gap-2">
                          <Icon className="h-5 w-5 text-blue-600" />
                          <span>{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Tabs Section */}
                <Tabs defaultValue="overview" className="bg-white dark:bg-gray-800 rounded-lg">
                  <TabsList className="w-full justify-start border-b">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="rooms">Rooms</TabsTrigger>
                    <TabsTrigger value="amenities">Amenities</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    <TabsTrigger value="location">Location</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="p-6">
                    <h3 className="text-xl font-bold mb-4">About the Property</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {property.description}
                    </p>
                  </TabsContent>

                  <TabsContent value="rooms" className="p-6">
                    <h3 className="text-xl font-bold mb-4">Available Rooms</h3>
                    <div className="space-y-4">
                      {property.rooms.map((room) => (
                        <div
                          key={room.id}
                          className={`border rounded-lg p-4 ${selectedRoom === room.id
                            ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                            : 'border-gray-200 dark:border-gray-700'
                            }`}
                        >
                          <div className="flex gap-4">
                            <div className="w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                              <ImageWithFallback
                                src={room.image}
                                alt={room.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-lg mb-2">{room.name}</h4>
                              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                                <div className="flex items-center gap-1">
                                  <Bed className="h-4 w-4" />
                                  <span>{room.bedType}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="h-4 w-4" />
                                  <span>Max {room.occupancy} guests</span>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-2 mb-3">
                                {room.inclusions.map((inclusion) => (
                                  <span key={inclusion} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                                    ✓ {inclusion}
                                  </span>
                                ))}
                              </div>
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="text-2xl font-bold">
                                    ₹{room.price.toLocaleString()}
                                  </div>
                                  <div className="text-xs text-gray-600 dark:text-gray-400">per night</div>
                                </div>
                                <Button
                                  onClick={() => setSelectedRoom(room.id)}
                                  variant={selectedRoom === room.id ? 'default' : 'outline'}
                                >
                                  {selectedRoom === room.id ? 'Selected' : 'Select Room'}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="amenities" className="p-6">
                    <h3 className="text-xl font-bold mb-4">All Amenities</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {property.amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-600" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="reviews" className="p-6">
                    <h3 className="text-xl font-bold mb-4">Guest Reviews</h3>
                    <div className="space-y-4">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-bold">{review.name}</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{review.date}</span>
                          </div>
                          <div className="flex mb-2">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="location" className="p-6">
                    <h3 className="text-xl font-bold mb-4">Location</h3>
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden mb-4 relative z-0">
                      <GoogleMapComponent
                        properties={[property]}
                        selectedProperty={property.id}
                        onSelectProperty={() => { }}
                      />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{property.address}</p>
                    {property.distanceFromCenter && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        {property.distanceFromCenter}km from city center
                      </p>
                    )}
                  </TabsContent>
                </Tabs>

                {/* House Rules */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">House Rules</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">Check-in</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">{property.policies.checkIn}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">Check-out</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">{property.policies.checkOut}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Hotel className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">Cancellation</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">{property.policies.cancellation}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Booking Card */}
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 sticky top-24 border-2 border-blue-600">
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2 mb-1">
                      {property.originalPrice && !selectedRoom && (
                        <span className="text-lg text-gray-500 line-through">
                          ₹{property.originalPrice.toLocaleString()}
                        </span>
                      )}
                      <span className="text-3xl font-bold">
                        ₹{(selectedRoom
                          ? (property.rooms.find(r => r.id === selectedRoom)?.price || property.price)
                          : property.price
                        ).toLocaleString()}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">per night</span>
                    {property.discount && !selectedRoom && (
                      <Badge className="bg-green-600 text-white mt-2">
                        Save {property.discount}%
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Base price × 1 night</span>
                      <span>₹{(selectedRoom
                        ? (property.rooms.find(r => r.id === selectedRoom)?.price || property.price)
                        : property.price
                      ).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Taxes & fees</span>
                      <span>₹{Math.round((selectedRoom
                        ? (property.rooms.find(r => r.id === selectedRoom)?.price || property.price)
                        : property.price
                      ) * 0.1).toLocaleString()}</span>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-3 flex justify-between font-bold">
                      <span>Total</span>
                      <span>₹{Math.round((selectedRoom
                        ? (property.rooms.find(r => r.id === selectedRoom)?.price || property.price)
                        : property.price
                      ) * 1.1).toLocaleString()}</span>
                    </div>
                  </div>

                  {selectedRoom ? (
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-3"
                      onClick={handleBooking}
                    >
                      Book Now
                    </Button>
                  ) : (
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-3"
                      onClick={() => {
                        const roomsSection = document.querySelector('[value="rooms"]');
                        if (roomsSection) {
                          roomsSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Select Room to Book
                    </Button>
                  )}

                  <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                    <p>✓ Secure payment encryption</p>
                    <p>✓ {property.policies.cancellation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Gallery Dialog */}
      <Dialog open={showGallery} onOpenChange={setShowGallery}>
        <DialogContent className="max-w-4xl">
          <div className="relative">
            <ImageWithFallback
              src={property.images[galleryIndex]}
              alt={`${property.name} ${galleryIndex + 1}`}
              className="w-full h-[600px] object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setGalleryIndex(index)}
                  className={`w-2 h-2 rounded-full ${index === galleryIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
