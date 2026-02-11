export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  profileImage?: string;
  country: string;
  createdAt: string;
  preferences: {
    language: string;
    currency: string;
    emailNotifications: boolean;
    smsNotifications: boolean;
    promotionalEmails: boolean;
  };
  savedCards: SavedCard[];
}

export interface SavedCard {
  id: string;
  cardType: 'Visa' | 'Mastercard' | 'Amex' | 'Discover';
  last4Digits: string;
  expiryMonth: string;
  expiryYear: string;
  cardholderName: string;
}

export const currentUser: User = {
  id: 'u001',
  name: 'Sarang Thakre',
  email: 'john.doe@example.com',
  phone: '+91 98765 43210',
  country: 'India',
  createdAt: '2024-01-15',
  preferences: {
    language: 'English',
    currency: 'INR',
    emailNotifications: true,
    smsNotifications: true,
    promotionalEmails: false,
  },
  savedCards: [
    {
      id: 'c001',
      cardType: 'Visa',
      last4Digits: '4242',
      expiryMonth: '12',
      expiryYear: '2028',
      cardholderName: 'Sarang Thakre',
    },
    {
      id: 'c002',
      cardType: 'Mastercard',
      last4Digits: '5555',
      expiryMonth: '06',
      expiryYear: '2027',
      cardholderName: 'Sarang Thakre',
    },
  ],
};

// Partner Data
export interface Partner {
  id: string;
  name: string;
  email: string;
  phone: string;
  companyName: string;
  status: 'active' | 'pending' | 'suspended';
  propertyCount: number;
  totalBookings: number;
  totalRevenue: number;
  joinedDate: string;
  verificationStatus: 'verified' | 'pending' | 'rejected';
}

export const partners: Partner[] = [
  {
    id: 'p001',
    name: 'Raj Kumar',
    email: 'raj.kumar@grandpalace.com',
    phone: '+91 98765 11111',
    companyName: 'Grand Palace Hotels Pvt Ltd',
    status: 'active',
    propertyCount: 3,
    totalBookings: 1234,
    totalRevenue: 5600000,
    joinedDate: '2023-06-15',
    verificationStatus: 'verified',
  },
  {
    id: 'p002',
    name: 'Priya Sharma',
    email: 'priya@seasidevilla.com',
    phone: '+91 98765 22222',
    companyName: 'Seaside Villa Resorts',
    status: 'active',
    propertyCount: 2,
    totalBookings: 567,
    totalRevenue: 3400000,
    joinedDate: '2023-08-20',
    verificationStatus: 'verified',
  },
  {
    id: 'p003',
    name: 'Amit Patel',
    email: 'amit@mountainview.com',
    phone: '+91 98765 33333',
    companyName: 'Mountain View Resorts',
    status: 'pending',
    propertyCount: 1,
    totalBookings: 0,
    totalRevenue: 0,
    joinedDate: '2026-02-01',
    verificationStatus: 'pending',
  },
];
