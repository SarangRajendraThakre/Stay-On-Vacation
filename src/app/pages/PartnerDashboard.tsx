import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { 
  Hotel, Home, DollarSign, Calendar, Star, Settings, LogOut, 
  TrendingUp, Users, BedDouble, Plus, Menu
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export function PartnerDashboard() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: 'Total Bookings', value: '156', icon: Calendar, color: 'bg-blue-600' },
    { label: 'Total Revenue', value: '₹12.5L', icon: DollarSign, color: 'bg-green-600' },
    { label: 'Occupancy Rate', value: '78%', icon: TrendingUp, color: 'bg-purple-600' },
    { label: 'Avg Rating', value: '4.7', icon: Star, color: 'bg-yellow-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-6 hidden lg:block">
        <div className="flex items-center gap-2 mb-8">
          <Hotel className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold">Partner Portal</span>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Home className="h-5 w-5" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab('properties')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'properties' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Hotel className="h-5 w-5" />
            <span>My Properties</span>
          </button>
          <button
            onClick={() => setActiveTab('rooms')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'rooms' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <BedDouble className="h-5 w-5" />
            <span>Rooms</span>
          </button>
          <button
            onClick={() => setActiveTab('bookings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'bookings' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Calendar className="h-5 w-5" />
            <span>Bookings</span>
          </button>
          <button
            onClick={() => setActiveTab('earnings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'earnings' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <DollarSign className="h-5 w-5" />
            <span>Earnings</span>
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'reviews' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Star className="h-5 w-5" />
            <span>Reviews</span>
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'settings' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </button>
        </nav>

        <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
          <Button variant="ghost" onClick={() => navigate('/')} className="w-full justify-start">
            <LogOut className="h-5 w-5 mr-3" />
            Exit Dashboard
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Partner Dashboard</h1>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === 'light' ? '🌙' : '☀️'}
              </Button>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={index} className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.label}</p>
                          <p className="text-3xl font-bold">{stat.value}</p>
                        </div>
                        <div className={`${stat.color} p-3 rounded-lg`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Recent Bookings */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Recent Bookings</h2>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div>
                        <p className="font-medium">Booking #BK00{i}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">2 nights • 2 guests</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">₹8,500</p>
                        <p className="text-sm text-green-600">Confirmed</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'properties' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">My Properties</h2>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Property
                </Button>
              </div>

              <Card className="p-6">
                <h3 className="font-bold mb-4">Property List</h3>
                <p className="text-gray-600 dark:text-gray-400">No properties added yet. Click "Add New Property" to get started.</p>
              </Card>
            </div>
          )}

          {activeTab === 'rooms' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Room Management</h2>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Room
                </Button>
              </div>

              <Card className="p-6">
                <h3 className="font-bold mb-4">Room Inventory</h3>
                <p className="text-gray-600 dark:text-gray-400">Add a property first to manage rooms.</p>
              </Card>
            </div>
          )}

          {activeTab === 'bookings' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Bookings</h2>
              
              <Tabs defaultValue="upcoming">
                <TabsList>
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="checkedin">Checked In</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>

                <TabsContent value="upcoming" className="mt-6">
                  <Card className="p-6">
                    <p className="text-gray-600 dark:text-gray-400">No upcoming bookings</p>
                  </Card>
                </TabsContent>

                <TabsContent value="checkedin" className="mt-6">
                  <Card className="p-6">
                    <p className="text-gray-600 dark:text-gray-400">No checked-in guests</p>
                  </Card>
                </TabsContent>

                <TabsContent value="completed" className="mt-6">
                  <Card className="p-6">
                    <p className="text-gray-600 dark:text-gray-400">No completed bookings</p>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {activeTab === 'earnings' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Earnings & Payouts</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Earnings</p>
                  <p className="text-3xl font-bold">₹12,50,000</p>
                </Card>
                <Card className="p-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Pending Payout</p>
                  <p className="text-3xl font-bold">₹45,000</p>
                </Card>
                <Card className="p-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Last Payout</p>
                  <p className="text-3xl font-bold">₹1,20,000</p>
                </Card>
              </div>

              <Card className="p-6">
                <h3 className="font-bold mb-4">Payout History</h3>
                <p className="text-gray-600 dark:text-gray-400">No payout history available</p>
              </Card>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Reviews & Ratings</h2>

              <Card className="p-6">
                <div className="text-center py-8">
                  <div className="text-5xl font-bold mb-2">4.7</div>
                  <div className="flex justify-center mb-2">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">Based on 48 reviews</p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-4">Recent Reviews</h3>
                <p className="text-gray-600 dark:text-gray-400">No reviews yet</p>
              </Card>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Settings</h2>

              <Card className="p-6">
                <h3 className="font-bold mb-4">Partner Profile</h3>
                <div className="space-y-4 max-w-2xl">
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your Company Name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="partner@example.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+91 98765 43210" className="mt-1" />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
                </div>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
