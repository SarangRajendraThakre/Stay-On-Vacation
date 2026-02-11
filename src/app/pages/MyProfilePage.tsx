import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { currentUser } from '../../data/users';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Switch } from '../components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { User, CreditCard, Settings, Bell, Shield, LogOut, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

export function MyProfilePage() {
  const [user, setUser] = useState(currentUser);

  const handleSave = () => {
    toast.success('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-2">My Profile</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Manage your account details and preferences
        </p>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="profile">
              <User className="h-4 w-4 mr-2" />
              Profile Details
            </TabsTrigger>
            <TabsTrigger value="payment">
              <CreditCard className="h-4 w-4 mr-2" />
              Payment Methods
            </TabsTrigger>
            <TabsTrigger value="preferences">
              <Settings className="h-4 w-4 mr-2" />
              Preferences
            </TabsTrigger>
            <TabsTrigger value="security">
              <Shield className="h-4 w-4 mr-2" />
              Security
            </TabsTrigger>
          </TabsList>

          {/* Profile Details */}
          <TabsContent value="profile">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl">
              <h2 className="text-xl font-bold mb-6">Personal Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={user.phone}
                    onChange={(e) => setUser({ ...user, phone: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    value={user.country}
                    onChange={(e) => setUser({ ...user, country: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                  Save Changes
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Payment Methods */}
          <TabsContent value="payment">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl">
              <h2 className="text-xl font-bold mb-6">Saved Cards</h2>
              <div className="space-y-4">
                {user.savedCards.map((card) => (
                  <div key={card.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">
                        {card.cardType}
                      </div>
                      <div>
                        <div className="font-medium">•••• {card.last4Digits}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Expires {card.expiryMonth}/{card.expiryYear}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  Add New Card
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Preferences */}
          <TabsContent value="preferences">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl">
              <h2 className="text-xl font-bold mb-6">Preferences & Notifications</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-4">Regional Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="language">Language</Label>
                      <select 
                        id="language"
                        value={user.preferences.language}
                        onChange={(e) => setUser({
                          ...user,
                          preferences: { ...user.preferences, language: e.target.value }
                        })}
                        className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                      >
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Spanish</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="currency">Currency</Label>
                      <select 
                        id="currency"
                        value={user.preferences.currency}
                        onChange={(e) => setUser({
                          ...user,
                          preferences: { ...user.preferences, currency: e.target.value }
                        })}
                        className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                      >
                        <option>INR</option>
                        <option>USD</option>
                        <option>EUR</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-4">Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Email Notifications</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Receive booking confirmations and updates
                        </div>
                      </div>
                      <Switch
                        checked={user.preferences.emailNotifications}
                        onCheckedChange={(checked) => setUser({
                          ...user,
                          preferences: { ...user.preferences, emailNotifications: checked }
                        })}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">SMS Notifications</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Get text messages for important updates
                        </div>
                      </div>
                      <Switch
                        checked={user.preferences.smsNotifications}
                        onCheckedChange={(checked) => setUser({
                          ...user,
                          preferences: { ...user.preferences, smsNotifications: checked }
                        })}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Promotional Emails</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Receive deals and special offers
                        </div>
                      </div>
                      <Switch
                        checked={user.preferences.promotionalEmails}
                        onCheckedChange={(checked) => setUser({
                          ...user,
                          preferences: { ...user.preferences, promotionalEmails: checked }
                        })}
                      />
                    </div>
                  </div>
                </div>

                <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                  Save Preferences
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Security */}
          <TabsContent value="security">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl">
              <h2 className="text-xl font-bold mb-6">Security Settings</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-4">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" className="mt-1" />
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Update Password
                    </Button>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium mb-4">Account Actions</h3>
                  <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                    <LogOut className="h-4 w-4 mr-2" />
                    Log Out
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
