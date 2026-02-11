export interface Booking {
  id: string;
  propertyId: string;
  propertyName: string;
  propertyImage: string;
  propertyType: 'hotel' | 'villa' | 'resort' | 'apartment' | 'homestay';
  location: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
  rooms: number;
  roomType: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  bookingDate: string;
  totalAmount: number;
  amountPaid: number;
  paymentStatus: 'paid' | 'partial' | 'pending';
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  bookingReference: string;
  cancellationPolicy: string;
  amenities: string[];
}

export const userBookings: Booking[] = [
  {
    id: 'b001',
    propertyId: '1',
    propertyName: 'The Grand Palace Hotel',
    propertyImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    propertyType: 'hotel',
    location: 'Hinjewadi, Pune',
    checkIn: '2026-02-15',
    checkOut: '2026-02-18',
    nights: 3,
    guests: 2,
    rooms: 1,
    roomType: 'Deluxe Room',
    status: 'upcoming',
    bookingDate: '2026-02-01',
    totalAmount: 14850,
    amountPaid: 14850,
    paymentStatus: 'paid',
    guestName: 'John Doe',
    guestEmail: 'john.doe@example.com',
    guestPhone: '+91 98765 43210',
    bookingReference: 'BK001GPH2026',
    cancellationPolicy: 'Free cancellation up to 24 hours before check-in',
    amenities: ['Free Wi-Fi', 'Breakfast', 'Swimming Pool', 'Gym']
  },
  {
    id: 'b002',
    propertyId: '2',
    propertyName: 'Seaside Villa Resort',
    propertyImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?auto=format&fit=crop&w=800&q=80',
    propertyType: 'villa',
    location: 'Calangute, Goa',
    checkIn: '2026-03-10',
    checkOut: '2026-03-15',
    nights: 5,
    guests: 4,
    rooms: 1,
    roomType: '3 Bedroom Villa',
    status: 'upcoming',
    bookingDate: '2026-02-05',
    totalAmount: 66000,
    amountPaid: 66000,
    paymentStatus: 'paid',
    guestName: 'John Doe',
    guestEmail: 'john.doe@example.com',
    guestPhone: '+91 98765 43210',
    bookingReference: 'BK002SVR2026',
    cancellationPolicy: 'Free cancellation up to 48 hours before check-in',
    amenities: ['Private Pool', 'Beach Access', 'Wi-Fi', 'Kitchen']
  },
  {
    id: 'b003',
    propertyId: '3',
    propertyName: 'Mountain View Resort',
    propertyImage: 'https://images.unsplash.com/photo-1571770095004-6b61b1cf3088?auto=format&fit=crop&w=800&q=80',
    propertyType: 'resort',
    location: 'Old Manali, Manali',
    checkIn: '2025-12-20',
    checkOut: '2025-12-25',
    nights: 5,
    guests: 2,
    rooms: 1,
    roomType: 'Mountain View Room',
    status: 'completed',
    bookingDate: '2025-12-01',
    totalAmount: 19250,
    amountPaid: 19250,
    paymentStatus: 'paid',
    guestName: 'John Doe',
    guestEmail: 'john.doe@example.com',
    guestPhone: '+91 98765 43210',
    bookingReference: 'BK003MVR2025',
    cancellationPolicy: 'Free cancellation up to 24 hours before check-in',
    amenities: ['Free Wi-Fi', 'Breakfast', 'Mountain View', 'Spa']
  },
  {
    id: 'b004',
    propertyId: '4',
    propertyName: 'City Center Hotel',
    propertyImage: 'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&w=800&q=80',
    propertyType: 'hotel',
    location: 'Andheri, Mumbai',
    checkIn: '2025-11-10',
    checkOut: '2025-11-12',
    nights: 2,
    guests: 1,
    rooms: 1,
    roomType: 'Standard Room',
    status: 'completed',
    bookingDate: '2025-11-01',
    totalAmount: 6160,
    amountPaid: 6160,
    paymentStatus: 'paid',
    guestName: 'John Doe',
    guestEmail: 'john.doe@example.com',
    guestPhone: '+91 98765 43210',
    bookingReference: 'BK004CCH2025',
    cancellationPolicy: 'Free cancellation up to 12 hours before check-in',
    amenities: ['Free Wi-Fi', 'Breakfast', 'Parking']
  },
  {
    id: 'b005',
    propertyId: '5',
    propertyName: 'Heritage Homestay',
    propertyImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    propertyType: 'homestay',
    location: 'Pink City, Jaipur',
    checkIn: '2025-10-05',
    checkOut: '2025-10-07',
    nights: 2,
    guests: 2,
    rooms: 1,
    roomType: 'Heritage Room',
    status: 'cancelled',
    bookingDate: '2025-09-20',
    totalAmount: 4840,
    amountPaid: 0,
    paymentStatus: 'pending',
    guestName: 'John Doe',
    guestEmail: 'john.doe@example.com',
    guestPhone: '+91 98765 43210',
    bookingReference: 'BK005HHS2025',
    cancellationPolicy: 'Free cancellation up to 24 hours before check-in',
    amenities: ['Free Wi-Fi', 'Traditional Meals', 'Cultural Tour']
  }
];
