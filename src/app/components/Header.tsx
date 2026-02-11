import { Link, useLocation } from 'react-router-dom';
import { Hotel, Home, Tag, Briefcase, Moon, Sun, User, Menu, HouseIcon  } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useState, useEffect } from 'react';
import logo from '../../images/logo.svg';
import { CompactSearchBar } from './CompactSearchBar';

interface HeaderProps {
  transparent?: boolean;
}

export function Header({ transparent = false }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCompactSearch, setShowCompactSearch] = useState(false);

  // Check if we're on the home page or search page
  const isHome = location.pathname === '/';
  const isSearch = location.pathname === '/search';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Show compact search bar when scrolled past a certain point
      // For home page, it's usually past the hero section (approx 300-400px)
      // For search page, it might be immediate or after a small scroll
      if (isHome) {
        setShowCompactSearch(scrollPosition > 350);
      } else if (isSearch) {
        setShowCompactSearch(scrollPosition > 100);
      } else {
        setShowCompactSearch(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome, isSearch]);

  const headerClass = transparent && isHome && !isScrolled
    ? 'bg-transparent text-white drop-shadow-md'
    : 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 shadow-sm';

  const navigation = [
    { name: 'Hotels', icon: Hotel, path: '/search?type=hotel' },
    { name: 'Villas', icon: Home, path: '/search?type=villa,homestay' },
    { name: 'Hostels', icon: HouseIcon, path: '/search?type=hostel' },
    { name: 'Deals', icon: Tag, path: '/deals' },
  ];

  const handleCompactSearchClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Ideally this would focus the main search bar or open a search modal
  };

  return (
    <header className={`${transparent && isHome ? 'fixed top-0 w-full' : 'sticky top-0'} z-50 transition-all duration-300 ${headerClass} ${transparent && isHome && !isScrolled ? 'backdrop-blur-sm' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 transition-all duration-300">
          {/* Logo */}
          <Link to="/" className={`flex items-center gap-2 ${showCompactSearch ? 'mr-4' : ''}`}>
            <img src={logo} alt="StayOnVacation" className="h-10 w-10 md:h-12 md:w-12" />
            <div className={`flex items-center gap-1 hidden sm:flex ${showCompactSearch ? 'lg:flex' : ''}`}>
              <span className="font-extrabold text-xl tracking-tight text-blue-600 dark:text-blue-400">Stay</span>
              <span className="font-semibold text-xl text-gray-800 dark:text-gray-200">On</span>
              <span className="font-bold text-xl text-orange-500 dark:text-orange-400">Vacation</span>
            </div>
          </Link>

          {/* Center Section: Navigation OR Compact Search Bar */}
          <div className="flex-1 flex justify-center">
            {showCompactSearch ? (
              <div className="animate-in fade-in zoom-in duration-300">
                <CompactSearchBar onClick={handleCompactSearchClick} />
              </div>
            ) : (
              <nav className={`hidden md:flex items-center gap-6 ${isScrolled || !transparent ? '' : 'text-white'}`}>
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="flex items-center gap-2 hover:opacity-80 transition-opacity group relative"
                    >
                      <div className="flex flex-col items-center">
                        <Icon className="h-5 w-5 mb-1" />
                        <span className="text-sm font-medium">{item.name}</span>
                        <span className="absolute -bottom-2 w-0 h-0.5 bg-current transition-all group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                      </div>
                    </Link>
                  );
                })}
              </nav>
            )}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={transparent && isHome && !isScrolled ? 'text-white hover:bg-white/20' : ''}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <Link to="/my-trips" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Briefcase className="h-4 w-4" />
              <span>My Trips</span>
            </Link>

            <Link to="/my-profile">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors ${transparent && isHome && !isScrolled
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}>
                <User className="h-5 w-5" />
              </div>
            </Link>

            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden ml-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  {navigation.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                  <Link
                    to="/my-trips"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <Briefcase className="h-5 w-5" />
                    <span>My Trips</span>
                  </Link>
                  <Link
                    to="/my-profile"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <User className="h-5 w-5" />
                    <span>My Profile</span>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
