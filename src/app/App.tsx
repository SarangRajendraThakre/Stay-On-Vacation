import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '../contexts/ThemeContext';
import { Toaster } from './components/ui/sonner';
import { HomePage } from './pages/HomePage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { PropertyDetailsPage } from './pages/PropertyDetailsPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { LoginPage } from './pages/LoginPage';
import { MyTripsPage } from './pages/MyTripsPage';
import { MyProfilePage } from './pages/MyProfilePage';
import { MapViewPage } from './pages/MapViewPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { PartnerDashboard } from './pages/PartnerDashboard';
import { AdminDashboard } from './pages/AdminDashboard';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/property/:id" element={<PropertyDetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/my-trips" element={<MyTripsPage />} />
          <Route path="/my-profile" element={<MyProfilePage />} />
          <Route path="/map-view" element={<MapViewPage />} />
          <Route path="/deals" element={<SearchResultsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/partner" element={<PartnerDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <Toaster position="top-center" />
      </BrowserRouter>
    </ThemeProvider>
  );
}
