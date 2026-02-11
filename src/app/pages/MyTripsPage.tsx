import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { userBookings } from '../../data/bookings';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Calendar, MapPin, Users, Bed, Download, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { generateInvoicePDF } from '../../utils/pdfGenerator';

export function MyTripsPage() {
  const navigate = useNavigate();
  const [selectedBooking, setSelectedBooking] = useState<string | null>(null);

  const upcomingBookings = userBookings.filter(b => b.status === 'upcoming');
  const completedBookings = userBookings.filter(b => b.status === 'completed');
  const cancelledBookings = userBookings.filter(b => b.status === 'cancelled');

  const booking = userBookings.find(b => b.id === selectedBooking);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-600 text-white';
      case 'completed':
        return 'bg-green-600 text-white';
      case 'cancelled':
        return 'bg-red-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  const BookingCard = ({ booking }: { booking: typeof userBookings[0] }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-64 h-48 md:h-auto flex-shrink-0">
          <ImageWithFallback
            src={booking.propertyImage}
            alt={booking.propertyName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold mb-1">{booking.propertyName}</h3>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <MapPin className="h-4 w-4" />
                <span>{booking.location}</span>
              </div>
            </div>
            <Badge className={getStatusColor(booking.status)}>
              {booking.status.toUpperCase()}
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-400" />
              <div>
                <div className="text-gray-600 dark:text-gray-400">Check-in</div>
                <div className="font-medium">{new Date(booking.checkIn).toLocaleDateString()}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-400" />
              <div>
                <div className="text-gray-600 dark:text-gray-400">Check-out</div>
                <div className="font-medium">{new Date(booking.checkOut).toLocaleDateString()}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Bed className="h-4 w-4 text-gray-400" />
              <div>
                <div className="text-gray-600 dark:text-gray-400">Room</div>
                <div className="font-medium">{booking.roomType}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gray-400" />
              <div>
                <div className="text-gray-600 dark:text-gray-400">Guests</div>
                <div className="font-medium">{booking.guests} guests, {booking.rooms} room</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Amount</div>
              <div className="text-2xl font-bold">₹{booking.totalAmount.toLocaleString()}</div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedBooking(booking.id)}
              >
                View Details
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => generateInvoicePDF(booking)}
              >
                <Download className="h-4 w-4 mr-2" />
                Invoice
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-8">My Trips</h1>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">
              All Trips ({userBookings.length})
            </TabsTrigger>
            <TabsTrigger value="upcoming">
              Upcoming ({upcomingBookings.length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completed ({completedBookings.length})
            </TabsTrigger>
            <TabsTrigger value="cancelled">
              Cancelled ({cancelledBookings.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {userBookings.length > 0 ? (
              userBookings.map(booking => (
                <BookingCard key={booking.id} booking={booking} />
              ))
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  No bookings found
                </p>
                <Button onClick={() => navigate('/search')}>
                  Start Booking
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4">
            {upcomingBookings.map(booking => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {completedBookings.map(booking => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </TabsContent>

          <TabsContent value="cancelled" className="space-y-4">
            {cancelledBookings.map(booking => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </TabsContent>
        </Tabs>
      </div>

      {/* Booking Details Modal */}
      <Dialog open={!!selectedBooking} onOpenChange={() => setSelectedBooking(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Booking Details</DialogTitle>
          </DialogHeader>
          {booking && (
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">{booking.propertyName}</h3>
                <p className="text-gray-600 dark:text-gray-400">{booking.location}</p>
                <Badge className={`${getStatusColor(booking.status)} mt-2`}>
                  {booking.status.toUpperCase()}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Check-in</div>
                  <div className="font-medium">{new Date(booking.checkIn).toLocaleDateString()}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Check-out</div>
                  <div className="font-medium">{new Date(booking.checkOut).toLocaleDateString()}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Nights</div>
                  <div className="font-medium">{booking.nights}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Guests</div>
                  <div className="font-medium">{booking.guests} guests</div>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-2">Guest Information</h4>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-600 dark:text-gray-400">Name:</span> {booking.guestName}</p>
                  <p><span className="text-gray-600 dark:text-gray-400">Email:</span> {booking.guestEmail}</p>
                  <p><span className="text-gray-600 dark:text-gray-400">Phone:</span> {booking.guestPhone}</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-2">Room Details</h4>
                <p className="text-sm">{booking.roomType}</p>
              </div>

              <div>
                <h4 className="font-bold mb-2">Amenities Included</h4>
                <div className="flex flex-wrap gap-2">
                  {booking.amenities.map(amenity => (
                    <span key={amenity} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="font-bold mb-2">Payment Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Total Amount</span>
                    <span className="font-medium">₹{booking.totalAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Amount Paid</span>
                    <span className="font-medium text-green-600">₹{booking.amountPaid.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Status</span>
                    <Badge variant={booking.paymentStatus === 'paid' ? 'default' : 'secondary'}>
                      {booking.paymentStatus.toUpperCase()}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <div className="text-sm font-medium mb-1">Booking Reference</div>
                <div className="text-lg font-bold">{booking.bookingReference}</div>
              </div>

              <div>
                <div className="text-sm font-medium mb-1">Cancellation Policy</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{booking.cancellationPolicy}</div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button variant="outline" className="flex-1" onClick={() => generateInvoicePDF(booking)}>
                  <Download className="h-4 w-4 mr-2" />
                  Download Invoice
                </Button>
                {booking.status === 'upcoming' && (
                  <Button variant="outline" className="flex-1 text-red-600 hover:text-red-700">
                    <X className="h-4 w-4 mr-2" />
                    Cancel Booking
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
