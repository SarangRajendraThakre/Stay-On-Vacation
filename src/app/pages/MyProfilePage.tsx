import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { currentUser } from '../../data/users';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Switch } from '../components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { User, CreditCard, Settings, Shield, LogOut, Trash2, Camera, Bell, Mail, Smartphone, Globe, MapPin, ChevronRight, Menu } from 'lucide-react';
import { toast } from 'sonner';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';

export function MyProfilePage() {
  const [user, setUser] = useState(currentUser);
  const [activeTab, setActiveTab] = useState("profile");

  const handleSave = () => {
    toast.success('Profile updated successfully!');
  };

  const navItems = [
    { id: "profile", label: "Profile Details", icon: User },
    { id: "payment", label: "Payment Methods", icon: CreditCard },
    { id: "preferences", label: "Preferences", icon: Settings },
    { id: "security", label: "Security", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col font-sans transition-colors duration-300">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">


          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-72 shrink-0 space-y-6">
            {/* User Access Card */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 text-center">
              <div className="relative inline-block mb-4 group">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 mx-auto transition-transform hover:scale-105 duration-300">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                    <User className="h-10 w-10 text-gray-400" />
                  </div>
                </div>
                <button className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors" title="Change Avatar">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>

              <div className="mt-6 flex justify-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 animate-pulse">
                  Check-in Level 2
                </span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="flex flex-col">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`flex items-center gap-3 px-6 py-4 text-sm font-medium transition-all w-full text-left relative overflow-hidden group
                        ${isActive
                          ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 border-l-4 border-transparent'
                        }`}
                    >
                      <Icon className={`h-5 w-5 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300'} transition-colors`} />
                      {item.label}
                      {isActive && <ChevronRight className="ml-auto h-4 w-4 animate-in slide-in-from-left-2" />}
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg transform transition-all hover:shadow-xl">
              <h3 className="font-bold text-lg mb-2">Need Help?</h3>
              <p className="text-white/80 text-sm mb-4">Contact our support team for any issues with your bookings.</p>
              <Button variant="secondary" className="w-full bg-white text-purple-600 hover:bg-gray-100 border-none">
                Contact Support
              </Button>
            </div>
          </aside>

          {/* Content Area */}
          <div className="flex-1 min-w-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              {/* Mobile Tab List */}
              <TabsList className="md:hidden flex w-full overflow-x-auto no-scrollbar bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 rounded-none h-auto p-0 mb-6 sticky top-0 z-10">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <TabsTrigger
                      key={item.id}
                      value={item.id}
                      className="flex-1 flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none transition-all"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="text-[10px] font-medium">{item.label}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {/* Profile Details */}
              <TabsContent value="profile" className="space-y-6 mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Personal Information</h2>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">Update your personal details and public profile.</p>
                    </div>
                    {/* Mobile Profile Photo Update */}
                    <div className="md:hidden flex flex-col items-center gap-3">
                      <div className="relative group">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 transition-transform hover:scale-105 duration-300">
                          <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                            <User className="h-8 w-8 text-gray-400" />
                          </div>
                        </div>
                        <button className="absolute bottom-0 right-0 p-1.5 bg-blue-600 text-white rounded-full shadow-lg" title="Change Avatar">
                          <Camera className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Change Photo</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-medium">Full Name</Label>
                      <div className="relative group">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                        <Input
                          id="name"
                          value={user.name}
                          onChange={(e) => setUser({ ...user, name: e.target.value })}
                          className="pl-10 h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium">Email Address</Label>
                      <div className="relative group">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                        <Input
                          id="email"
                          type="email"
                          value={user.email}
                          onChange={(e) => setUser({ ...user, email: e.target.value })}
                          className="pl-10 h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300 font-medium">Phone Number</Label>
                      <div className="relative group">
                        <Smartphone className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                        <Input
                          id="phone"
                          value={user.phone}
                          onChange={(e) => setUser({ ...user, phone: e.target.value })}
                          className="pl-10 h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-gray-700 dark:text-gray-300 font-medium">Country/Region</Label>
                      <div className="relative group">
                        <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                        <Input
                          id="country"
                          value={user.country}
                          onChange={(e) => setUser({ ...user, country: e.target.value })}
                          className="pl-10 h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="address" className="text-gray-700 dark:text-gray-300 font-medium">Street Address</Label>
                      <div className="relative group">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                        <Input
                          id="address"
                          placeholder="123 Vacation St, City, Country"
                          className="pl-10 h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-end">
                    <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 px-8 py-2 h-10 transition-all hover:scale-105 active:scale-95">
                      Save Changes
                    </Button>
                  </div>
                </div>

              </TabsContent>

              {/* Payment Methods */}
              <TabsContent value="payment" className="space-y-6 mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Payment Methods</h2>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your saved cards and payment options.</p>
                    </div>
                    <Button variant="outline" className="gap-2 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20">
                      <CreditCard className="h-4 w-4" />
                      Add New Card
                    </Button>
                  </div>

                  <div className="grid gap-4">
                    {user.savedCards.map((card) => (
                      <div key={card.id} className="group border border-gray-200 dark:border-gray-700 rounded-xl p-5 flex items-center justify-between hover:border-blue-500 dark:hover:border-blue-500 transition-all bg-white dark:bg-gray-800 hover:shadow-md">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-10 bg-gradient-to-r from-gray-800 to-gray-900 rounded-md flex items-center justify-center text-white text-xs font-bold shadow-md transform group-hover:scale-110 transition-transform">
                            {card.cardType}
                          </div>
                          <div>
                            <div className="font-semibold text-lg text-gray-900 dark:text-white">•••• •••• •••• {card.last4Digits}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              Expires {card.expiryMonth}/{card.expiryYear}
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Preferences */}
              <TabsContent value="preferences" className="space-y-6 mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Global Preferences</h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-8">Customize your currency and language.</p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <Label htmlFor="language" className="text-base font-medium">Language</Label>
                      <select
                        id="language"
                        value={user.preferences.language}
                        onChange={(e) => setUser({
                          ...user,
                          preferences: { ...user.preferences, language: e.target.value }
                        })}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer hover:border-blue-400"
                      >
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Spanish</option>
                      </select>
                    </div>
                    <div className="space-y-4">
                      <Label htmlFor="currency" className="text-base font-medium">Currency</Label>
                      <select
                        id="currency"
                        value={user.preferences.currency}
                        onChange={(e) => setUser({
                          ...user,
                          preferences: { ...user.preferences, currency: e.target.value }
                        })}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer hover:border-blue-400"
                      >
                        <option>INR</option>
                        <option>USD</option>
                        <option>EUR</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Notifications</h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-8">Control what you want to hear from us.</p>

                  <div className="space-y-6">
                    {[
                      { id: 'email', label: 'Email Notifications', desc: 'Receive booking confirmations and updates', key: 'emailNotifications' },
                      { id: 'sms', label: 'SMS Notifications', desc: 'Get text messages for important updates', key: 'smsNotifications' },
                      { id: 'promo', label: 'Promotional Emails', desc: 'Receive deals and special offers', key: 'promotionalEmails' }
                    ].map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
                        <div className="flex items-start gap-4">
                          <div className="p-2.5 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400">
                            <Bell className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white">{item.label}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</div>
                          </div>
                        </div>
                        <Switch
                          checked={user.preferences[item.key as keyof typeof user.preferences] as boolean}
                          onCheckedChange={(checked) => setUser({
                            ...user,
                            preferences: { ...user.preferences, [item.key]: checked }
                          })}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Security */}
              <TabsContent value="security" className="space-y-6 mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Password & Security</h2>

                  <div className="space-y-5 max-w-lg">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 h-10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 h-10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 h-10" />
                    </div>
                    <div className="pt-4">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 px-6">
                        Update Password
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/30 p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-full text-red-600">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-red-700 dark:text-red-400 mb-2">Danger Zone</h2>
                      <p className="text-red-600/80 dark:text-red-400/80 mb-6 text-sm max-w-xl">
                        Permanently remove your account and all of its contents from the StayOnVacation platform. This action is not reversible, so please continue with caution.
                      </p>

                      <div className="flex flex-wrap gap-4">
                        <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 dark:border-red-900/50 dark:hover:bg-red-900/20">
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign Out
                        </Button>
                        <Button variant="destructive" className="bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20">
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
