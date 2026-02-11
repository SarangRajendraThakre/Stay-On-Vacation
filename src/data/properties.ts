export interface Property {
  id: string;
  name: string;
  type: 'hotel' | 'villa' | 'resort' | 'apartment' | 'homestay' | 'hostel';
  city: string;
  area: string;
  country: string;
  address: string;
  latitude: number;
  longitude: number;
  starRating: number;
  guestRating: number;
  reviewCount: number;
  images: string[];
  description: string;
  amenities: string[];
  price: number;
  originalPrice?: number;
  discount?: number;
  distanceFromCenter?: number;
  tags: string[];
  rooms: Room[];
  policies: {
    checkIn: string;
    checkOut: string;
    cancellation: string;
  };
  featured?: boolean;
}

export interface Room {
  id: string;
  name: string;
  bedType: string;
  occupancy: number;
  price: number;
  inclusions: string[];
  image: string;
}

export const properties: Property[] = [
  {
    id: '1',
    name: 'The Grand Palace Hotel',
    type: 'hotel',
    city: 'Pune',
    area: 'Hinjewadi',
    country: 'India',
    address: 'Rajiv Gandhi Infotech Park, Hinjewadi, Pune',
    latitude: 18.5912,
    longitude: 73.7389,
    starRating: 5,
    guestRating: 4.8,
    reviewCount: 342,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Experience luxury at its finest with world-class amenities, stunning architecture, and exceptional service.',
    amenities: ['Free Wi-Fi', 'Swimming Pool', 'Gym', 'Spa', 'Restaurant', 'Bar', 'Parking', 'Room Service'],
    price: 4500,
    originalPrice: 6000,
    discount: 25,
    distanceFromCenter: 12,
    tags: ['Best Seller', 'Couple Friendly', 'Free Cancellation'],
    featured: true,
    rooms: [
      {
        id: 'r1',
        name: 'Deluxe Room',
        bedType: 'King Bed',
        occupancy: 2,
        price: 4500,
        inclusions: ['Breakfast', 'Free Cancellation', 'Wi-Fi'],
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'r2',
        name: 'Executive Suite',
        bedType: 'King Bed + Sofa',
        occupancy: 3,
        price: 7500,
        inclusions: ['Breakfast', 'Free Cancellation', 'Wi-Fi', 'Airport Transfer'],
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80'
      }
    ],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 24 hours before check-in'
    }
  },
  {
    id: '2',
    name: 'Seaside Villa Resort',
    type: 'villa',
    city: 'Goa',
    area: 'Calangute',
    country: 'India',
    address: 'Calangute Beach Road, North Goa',
    latitude: 15.5437,
    longitude: 73.7538,
    starRating: 4,
    guestRating: 4.6,
    reviewCount: 189,
    images: [
      'https://imgs.search.brave.com/JvGToU2aCUsGuXSXJp0hW50ztYAZxrSHbiVyB5fA7KA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWFz/aWRlZmwuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzAx/L1NlYXNpZGUyOS00/LTkxNHg1NjAuanBn',
      'https://images.unsplash.com/photo-1572331165267-854da2b00dc1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Beachfront luxury villa with private pool, perfect for families and groups seeking privacy and comfort.',
    amenities: ['Private Pool', 'Beach Access', 'Free Wi-Fi', 'Kitchen', 'BBQ', 'Parking', 'Garden'],
    price: 12000,
    originalPrice: 15000,
    discount: 20,
    distanceFromCenter: 5,
    tags: ['Couple Friendly', 'Free Cancellation', 'Pay at Property'],
    featured: true,
    rooms: [
      {
        id: 'r3',
        name: '3 Bedroom Villa',
        bedType: '3 King Beds',
        occupancy: 6,
        price: 12000,
        inclusions: ['Free Cancellation', 'Wi-Fi', 'Private Pool'],
        image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80'
      }
    ],
    policies: {
      checkIn: '3:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 48 hours before check-in'
    }
  },
  {
    id: '3',
    name: 'Mountain View Resort',
    type: 'resort',
    city: 'Manali',
    area: 'Old Manali',
    country: 'India',
    address: 'Circuit House Road, Old Manali',
    latitude: 32.2396,
    longitude: 77.1887,
    starRating: 4,
    guestRating: 4.5,
    reviewCount: 267,
    images: [
      'https://images.unsplash.com/photo-1571770095004-6b61b1cf3088?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Nestled in the Himalayas, offering breathtaking mountain views and adventure activities.',
    amenities: ['Free Wi-Fi', 'Restaurant', 'Parking', 'Fireplace', 'Adventure Sports', 'Spa'],
    price: 3500,
    distanceFromCenter: 3,
    tags: ['Top Rated', 'Free Cancellation'],
    rooms: [
      {
        id: 'r4',
        name: 'Mountain View Room',
        bedType: 'Queen Bed',
        occupancy: 2,
        price: 3500,
        inclusions: ['Breakfast', 'Wi-Fi'],
        image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80'
      }
    ],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 24 hours before check-in'
    }
  },
  {
    id: '4',
    name: 'City Center Hotel',
    type: 'hotel',
    city: 'Mumbai',
    area: 'Andheri',
    country: 'India',
    address: 'Andheri West, Mumbai',
    latitude: 19.1136,
    longitude: 72.8697,
    starRating: 3,
    guestRating: 4.2,
    reviewCount: 456,
    images: [
      'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Conveniently located in the heart of Mumbai with easy access to business districts and shopping areas.',
    amenities: ['Free Wi-Fi', 'Restaurant', 'Parking', 'Business Center', 'Gym'],
    price: 2800,
    distanceFromCenter: 1,
    tags: ['Best Location', 'Free Cancellation'],
    rooms: [
      {
        id: 'r5',
        name: 'Standard Room',
        bedType: 'Double Bed',
        occupancy: 2,
        price: 2800,
        inclusions: ['Breakfast', 'Wi-Fi'],
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'r5_deluxe',
        name: 'Deluxe Room',
        bedType: 'King Bed',
        occupancy: 2,
        price: 3500,
        inclusions: ['Breakfast', 'Wi-Fi', 'City View'],
        image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'r5_suite',
        name: 'Executive Suite',
        bedType: 'King Bed + Sofa',
        occupancy: 3,
        price: 5000,
        inclusions: ['Breakfast', 'Wi-Fi', 'Lounge Access', 'Airport Transfer'],
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80'
      }
    ],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 12 hours before check-in'
    }
  },
  {
    id: '5',
    name: 'Heritage Homestay',
    type: 'homestay',
    city: 'Jaipur',
    area: 'Pink City',
    country: 'India',
    address: 'MI Road, Jaipur',
    latitude: 26.9124,
    longitude: 75.7873,
    starRating: 3,
    guestRating: 4.7,
    reviewCount: 134,
    images: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1621243804936-775306a8f2e3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Experience authentic Rajasthani hospitality in a beautifully restored heritage property.',
    amenities: ['Free Wi-Fi', 'Traditional Meals', 'Parking', 'Cultural Programs', 'Garden'],
    price: 2200,
    distanceFromCenter: 2,
    tags: ['Couple Friendly', 'Unique Stay'],
    rooms: [
      {
        id: 'r6',
        name: 'Heritage Room',
        bedType: 'King Bed',
        occupancy: 2,
        price: 2200,
        inclusions: ['Breakfast', 'Wi-Fi', 'Cultural Tour'],
        image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=800&q=80'
      }
    ],
    policies: {
      checkIn: '1:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 24 hours before check-in'
    }
  },
  {
    id: '6',
    name: 'Luxury Beach Resort',
    type: 'resort',
    city: 'Goa',
    area: 'Baga Beach',
    country: 'India',
    address: 'Baga Beach Road, North Goa',
    latitude: 15.5559,
    longitude: 73.7516,
    starRating: 5,
    guestRating: 4.9,
    reviewCount: 521,
    images: [
      'https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Premier beachfront resort offering world-class amenities and unforgettable experiences.',
    amenities: ['Private Beach', 'Infinity Pool', 'Spa', 'Multiple Restaurants', 'Water Sports', 'Free Wi-Fi', 'Gym'],
    price: 8500,
    originalPrice: 11000,
    discount: 23,
    distanceFromCenter: 6,
    tags: ['Best Seller', 'Couple Friendly', 'Luxury'],
    featured: true,
    rooms: [
      {
        id: 'r7',
        name: 'Ocean View Suite',
        bedType: 'King Bed',
        occupancy: 2,
        price: 8500,
        inclusions: ['All Meals', 'Spa Credit', 'Water Sports', 'Free Cancellation'],
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
      }
    ],
    policies: {
      checkIn: '3:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 48 hours before check-in'
    }
  },
  {
    id: '7',
    name: 'Business Hotel Pune',
    type: 'hotel',
    city: 'Pune',
    area: 'Shivaji Nagar',
    country: 'India',
    address: 'FC Road, Shivaji Nagar, Pune',
    latitude: 18.5304,
    longitude: 73.8442,
    starRating: 4,
    guestRating: 4.3,
    reviewCount: 298,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517502886367-e6f63f51951c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Modern business hotel with excellent conference facilities and central location.',
    amenities: ['Free Wi-Fi', 'Business Center', 'Conference Rooms', 'Restaurant', 'Gym', 'Parking'],
    price: 3200,
    distanceFromCenter: 3,
    tags: ['Business Friendly', 'Free Cancellation'],
    rooms: [
      {
        id: 'r8',
        name: 'Business Room',
        bedType: 'Queen Bed',
        occupancy: 2,
        price: 3200,
        inclusions: ['Breakfast', 'Wi-Fi', 'Work Desk'],
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80'
      }
    ],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 24 hours before check-in'
    }
  },
  {
    id: '8',
    name: 'Cozy Apartment Stay',
    type: 'apartment',
    city: 'Bangalore',
    area: 'Koramangala',
    country: 'India',
    address: '5th Block, Koramangala, Bangalore',
    latitude: 12.9352,
    longitude: 77.6245,
    starRating: 3,
    guestRating: 4.4,
    reviewCount: 187,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Fully furnished serviced apartment in the heart of Bangalore\'s tech hub.',
    amenities: ['Kitchen', 'Free Wi-Fi', 'Washing Machine', 'Parking', 'Smart TV'],
    price: 2500,
    distanceFromCenter: 5,
    tags: ['Self Catering', 'Long Stay Friendly'],
    rooms: [
      {
        id: 'r9',
        name: '2 BHK Apartment',
        bedType: '2 Queen Beds',
        occupancy: 4,
        price: 2500,
        inclusions: ['Wi-Fi', 'Kitchen', 'Parking'],
        image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80'
      }
    ],
    policies: {
      checkIn: '12:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 48 hours before check-in'
    }
  },
  {
    id: '9',
    name: 'Backpacker\'s Haven Hostel',
    type: 'hostel',
    city: 'Goa',
    area: 'Anjuna',
    country: 'India',
    address: 'Anjuna Beach Road, North Goa',
    latitude: 15.5733,
    longitude: 73.7410,
    starRating: 2,
    guestRating: 4.5,
    reviewCount: 420,
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520277739336-7bf67edfa768?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A vibrant and social hostel for travelers from around the world. Close to the beach and party spots.',
    amenities: ['Free Wi-Fi', 'Common Room', 'Kitchen', 'Lockers', 'Bar'],
    price: 800,
    distanceFromCenter: 1,
    tags: ['Budget Friendly', 'Social Atmosphere', 'Backpackers'],
    rooms: [
      {
        id: 'r10',
        name: 'Dorm Bed in Mixed Dorm',
        bedType: 'Bunk Bed',
        occupancy: 1,
        price: 800,
        inclusions: ['Wi-Fi', 'Locker'],
        image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80'
      }
    ],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 24 hours before check-in'
    }
  }
];

export const popularDestinations = [
  { id: 'd1', name: 'Goa', country: 'India', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80', startingPrice: 2200 },
  { id: 'd2', name: 'Manali', country: 'India', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80', startingPrice: 3500 },
  { id: 'd3', name: 'Jaipur', country: 'India', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80', startingPrice: 2200 },
  { id: 'd4', name: 'Mumbai', country: 'India', image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80', startingPrice: 2800 },
  { id: 'd5', name: 'Pune', country: 'India', image: 'https://imgs.search.brave.com/DT0nigpogkopB9fZac1osGzvSzpQ9-zHkSj6jfspFMU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MzAyNTM4MDM4MDYt/NjdjZmVhOWQ2MjM0/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1qQjhmR1Jo/WjJSMWMyaGxkR2ds/TWpCbllXNXdZWFJw/ZkdWdWZEQjhmREI4/Zkh3dw', startingPrice: 3200 },
  { id: 'd6', name: 'Bangalore', country: 'India', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80', startingPrice: 2500 },
];

export const topDeals = properties.filter(p => p.discount && p.discount > 0);
