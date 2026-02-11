import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { properties } from '../../data/properties';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Shield, CreditCard, Smartphone, Building2, Check } from 'lucide-react';
import { toast } from 'sonner';

export function CheckoutPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const propertyId = searchParams.get('propertyId');
  const roomId = searchParams.get('roomId');

  const property = properties.find(p => p.id === propertyId);
  const room = property?.rooms.find(r => r.id === roomId);

  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  if (!property || !room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Invalid booking</h1>
          <Button onClick={() => navigate('/search')}>Back to Search</Button>
        </div>
      </div>
    );
  }

  const nights = 1;
  const basePrice = room.price * nights;
  const taxes = Math.round(basePrice * 0.1);
  const serviceFee = Math.round(basePrice * 0.05);
  const totalAmount = basePrice + taxes + serviceFee;

  const handleBooking = () => {
    if (!guestName || !guestEmail || !guestPhone) {
      toast.error('Please fill in all guest details');
      return;
    }
    
    toast.success('Booking confirmed! Redirecting...');
    setTimeout(() => {
      navigate('/my-trips');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />

      {/* Progress Indicator */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                1
              </div>
              <span className="font-medium">Details</span>
            </div>
            <div className="h-0.5 w-16 bg-gray-300 dark:bg-gray-600" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                2
              </div>
              <span className="font-medium">Payment</span>
            </div>
            <div className="h-0.5 w-16 bg-gray-300 dark:bg-gray-600" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400 flex items-center justify-center">
                3
              </div>
              <span className="text-gray-600 dark:text-gray-400">Confirmation</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Guest Contact Details */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Guest Contact Details</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Enter your full name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Mobile Number *</Label>
                  <div className="flex gap-2 mt-1">
                    <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700">
                      <option>+91</option>
                      <option>+1</option>
                      <option>+44</option>
                    </select>
                    <Input
                      id="phone"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="Enter mobile number"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
              
              <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="card">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Card
                  </TabsTrigger>
                  <TabsTrigger value="upi">
                    <Smartphone className="h-4 w-4 mr-2" />
                    UPI
                  </TabsTrigger>
                  <TabsTrigger value="netbanking">
                    <Building2 className="h-4 w-4 mr-2" />
                    Net Banking
                  </TabsTrigger>
                  <TabsTrigger value="wallet">
                    Wallet
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="card" className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="mt-1"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        type="password"
                        maxLength={3}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardName">Cardholder Name</Label>
                    <Input
                      id="cardName"
                      placeholder="Name on card"
                      className="mt-1"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="upi" className="space-y-4">
                  <div>
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input
                      id="upiId"
                      placeholder="yourname@upi"
                      className="mt-1"
                    />
                  </div>
                  <Button variant="outline" className="w-full">
                    Verify UPI ID
                  </Button>
                </TabsContent>

                <TabsContent value="netbanking" className="space-y-4">
                  <div>
                    <Label htmlFor="bank">Select Bank</Label>
                    <select 
                      id="bank"
                      className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                    >
                      <option>State Bank of India</option>
                      <option>HDFC Bank</option>
                      <option>ICICI Bank</option>
                      <option>Axis Bank</option>
                    </select>
                  </div>
                </TabsContent>

                <TabsContent value="wallet" className="space-y-4">
                  <RadioGroup defaultValue="paytm">
                    <div className="flex items-center space-x-2 border rounded-lg p-3">
                      <RadioGroupItem value="paytm" id="paytm" />
                      <Label htmlFor="paytm" className="flex-1 cursor-pointer">Paytm</Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-3">
                      <RadioGroupItem value="phonepe" id="phonepe" />
                      <Label htmlFor="phonepe" className="flex-1 cursor-pointer">PhonePe</Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-3">
                      <RadioGroupItem value="googlepay" id="googlepay" />
                      <Label htmlFor="googlepay" className="flex-1 cursor-pointer">Google Pay</Label>
                    </div>
                  </RadioGroup>
                </TabsContent>
              </Tabs>
            </div>

            {/* Trust Section */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
                <h3 className="font-bold">Your booking is secure</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Secure payment encryption</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>{property.policies.cancellation}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Booking Summary</h2>
              
              <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-bold">{property.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{property.area}, {property.city}</p>
              </div>

              <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Check-in</span>
                  <span>Feb 15, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Check-out</span>
                  <span>Feb 16, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Nights</span>
                  <span>{nights}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Guests</span>
                  <span>2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Room</span>
                  <span>{room.name}</span>
                </div>
              </div>

              <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Base room rate (₹{room.price.toLocaleString()} × {nights})</span>
                  <span>₹{basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes & fees</span>
                  <span>₹{taxes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service fees</span>
                  <span>₹{serviceFee.toLocaleString()}</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Total Amount</span>
                  <span className="text-2xl font-bold text-blue-600">
                    ₹{totalAmount.toLocaleString()}
                  </span>
                </div>
              </div>

              <Button 
                onClick={handleBooking}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg"
              >
                Confirm & Pay
              </Button>

              <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                By confirming, you agree to our terms and conditions
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
