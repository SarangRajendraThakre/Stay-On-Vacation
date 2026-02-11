import { Link, useLocation } from 'react-router-dom';
import { Hotel, Home, Tag, Briefcase, Moon, Sun, User, Menu } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useState } from 'react';
import logo from '../../images/logo.svg';

interface HeaderProps {
  transparent?: boolean;
}

export function Header({ transparent = false }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if we're on the home page
  const isHome = location.pathname === '/';

  // Handle scroll effect for transparent header
  if (transparent && isHome) {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  const headerClass = transparent && isHome && !isScrolled
    ? 'bg-transparent text-white drop-shadow-md'
    : 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 shadow-sm';

  const navigation = [
    { name: 'Hotels', icon: Hotel, path: '/search?type=hotel' },
    { name: 'Homestay & Villas', icon: Home, path: '/search?type=villa,homestay' },
    { name: 'Hostels', icon: Home, path: '/search?type=hostel' },
    { name: 'Deals', icon: Tag, path: '/deals' },
  ];

  return (
    <header className={`${transparent && isHome ? 'fixed top-0 w-full' : 'sticky top-0'} z-50 transition-all duration-300 ${headerClass} ${transparent && isHome && !isScrolled ? 'backdrop-blur-sm' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="StayOnVacation" className="h-12 w-12" />
            <div className="flex items-center gap-1 hidden sm:flex">
              <span className="font-extrabold text-xl tracking-tight text-blue-600 dark:text-blue-400">Stay</span>
              <span className="font-semibold text-xl text-gray-800 dark:text-gray-200">On</span>
              <span className="font-bold text-xl text-orange-500 dark:text-orange-400">Vacation</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

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

            <Link to="/login">
              <Button className={transparent && isHome && !isScrolled ? 'bg-white text-gray-900 hover:bg-gray-100' : ''}>
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
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
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
