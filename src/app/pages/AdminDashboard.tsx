import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { 
  Hotel, Users, DollarSign, TrendingUp, Settings, LogOut, 
  CheckCircle, XCircle, Clock, Menu, Shield
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { partners } from '../../data/users';

export function AdminDashboard() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: 'Total Bookings', value: '2,456', icon: Hotel, color: 'bg-blue-600' },
    { label: 'Active Partners', value: '48', icon: Users, color: 'bg-green-600' },
    { label: 'Total Revenue', value: '₹1.2Cr', icon: DollarSign, color: 'bg-purple-600' },
    { label: 'Growth', value: '+23%', icon: TrendingUp, color: 'bg-orange-600' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'verified':
        return 'bg-green-600';
      case 'pending':
        return 'bg-yellow-600';
      case 'suspended':
      case 'rejected':
        return 'bg-red-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-6 hidden lg:block">
        <div className="flex items-center gap-2 mb-8">
          <Shield className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold">Admin Portal</span>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <TrendingUp className="h-5 w-5" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab('partners')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'partners' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Users className="h-5 w-5" />
            <span>Partner Management</span>
          </button>
          <button
            onClick={() => setActiveTab('properties')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'properties' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Hotel className="h-5 w-5" />
            <span>Property Listings</span>
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'users' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Users className="h-5 w-5" />
            <span>User Management</span>
          </button>
          <button
            onClick={() => setActiveTab('bookings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'bookings' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Hotel className="h-5 w-5" />
            <span>Bookings</span>
          </button>
          <button
            onClick={() => setActiveTab('payments')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'payments' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <DollarSign className="h-5 w-5" />
            <span>Payments</span>
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
            <h1 className="text-2xl font-bold">Super Admin Dashboard</h1>
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

              {/* Pending Approvals */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Pending Approvals</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-yellow-600" />
                      <div>
                        <p className="font-medium">3 Partner Applications</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Awaiting verification</p>
                      </div>
                    </div>
                    <Button size="sm">Review</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">5 Property Listings</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Awaiting approval</p>
                      </div>
                    </div>
                    <Button size="sm">Review</Button>
                  </div>
                </div>
              </Card>

              {/* Recent Activity */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">New booking confirmed</p>
                      <p className="text-gray-600 dark:text-gray-400">Booking #BK2456 - 5 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Partner verified</p>
                      <p className="text-gray-600 dark:text-gray-400">Grand Palace Hotels - 1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Booking cancelled</p>
                      <p className="text-gray-600 dark:text-gray-400">Booking #BK2445 - 2 hours ago</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'partners' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Partner Management</h2>
                <Button className="bg-blue-600 hover:bg-blue-700">Add New Partner</Button>
              </div>

              <Card className="p-6">
                <h3 className="font-bold mb-4">All Partners</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4">Partner Name</th>
                        <th className="text-left py-3 px-4">Company</th>
                        <th className="text-left py-3 px-4">Properties</th>
                        <th className="text-left py-3 px-4">Status</th>
                        <th className="text-left py-3 px-4">Verification</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {partners.map((partner) => (
                        <tr key={partner.id} className="border-b border-gray-100 dark:border-gray-800">
                          <td className="py-3 px-4">{partner.name}</td>
                          <td className="py-3 px-4">{partner.companyName}</td>
                          <td className="py-3 px-4">{partner.propertyCount}</td>
                          <td className="py-3 px-4">
                            <Badge className={getStatusColor(partner.status)}>
                              {partner.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Badge className={getStatusColor(partner.verificationStatus)}>
                              {partner.verificationStatus}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Button size="sm" variant="outline">View</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'properties' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Property Listings</h2>

              <Tabs defaultValue="all">
                <TabsList>
                  <TabsTrigger value="all">All Properties</TabsTrigger>
                  <TabsTrigger value="pending">Pending Approval</TabsTrigger>
                  <TabsTrigger value="approved">Approved</TabsTrigger>
                  <TabsTrigger value="rejected">Rejected</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-6">
                  <Card className="p-6">
                    <p className="text-gray-600 dark:text-gray-400">All properties will be listed here</p>
                  </Card>
                </TabsContent>

                <TabsContent value="pending" className="mt-6">
                  <Card className="p-6">
                    <p className="text-gray-600 dark:text-gray-400">Properties pending approval</p>
                  </Card>
                </TabsContent>

                <TabsContent value="approved" className="mt-6">
                  <Card className="p-6">
                    <p className="text-gray-600 dark:text-gray-400">Approved properties</p>
                  </Card>
                </TabsContent>

                <TabsContent value="rejected" className="mt-6">
                  <Card className="p-6">
                    <p className="text-gray-600 dark:text-gray-400">Rejected properties</p>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">User Management</h2>
              <Card className="p-6">
                <p className="text-gray-600 dark:text-gray-400">User management interface will be displayed here</p>
              </Card>
            </div>
          )}

          {activeTab === 'bookings' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">All Bookings</h2>
              <Card className="p-6">
                <p className="text-gray-600 dark:text-gray-400">Booking management interface will be displayed here</p>
              </Card>
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Payments & Settlements</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Revenue</p>
                  <p className="text-3xl font-bold">₹1.2Cr</p>
                </Card>
                <Card className="p-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Pending Settlements</p>
                  <p className="text-3xl font-bold">₹12.5L</p>
                </Card>
                <Card className="p-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Platform Commission</p>
                  <p className="text-3xl font-bold">₹18L</p>
                </Card>
              </div>

              <Card className="p-6">
                <h3 className="font-bold mb-4">Payment Transactions</h3>
                <p className="text-gray-600 dark:text-gray-400">Transaction list will be displayed here</p>
              </Card>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Platform Settings</h2>

              <Card className="p-6">
                <h3 className="font-bold mb-4">General Settings</h3>
                <div className="space-y-4 max-w-2xl">
                  <div>
                    <label className="block text-sm font-medium mb-1">Platform Commission (%)</label>
                    <input 
                      type="number" 
                      defaultValue="15" 
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Default Currency</label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700">
                      <option>INR</option>
                      <option>USD</option>
                      <option>EUR</option>
                    </select>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">Save Settings</Button>
                </div>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
