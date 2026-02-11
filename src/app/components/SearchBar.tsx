import { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar as CalendarComponent } from './ui/calendar';
import { format } from 'date-fns';
import { properties } from '../../data/properties';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  onSearch?: (data: SearchData) => void;
  className?: string;
}

export interface SearchData {
  destination: string;
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  adults: number;
  children: number;
  rooms: number;
}

export function SearchBar({ onSearch, className = '' }: SearchBarProps) {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [isDatesOpen, setIsDatesOpen] = useState(false);
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<{ label: string; type: 'city' | 'property' | 'type'; id?: string }[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (value: string) => {
    setDestination(value);
    if (value.length > 0) {
      const lowerValue = value.toLowerCase();

      const cityMatches = Array.from(new Set(
        properties
          .filter(p => p.city.toLowerCase().includes(lowerValue))
          .map(p => p.city)
      )).map(city => ({ label: city, type: 'city' as const }));

      const typeMatches = Array.from(new Set(
        properties
          .filter(p => p.type.toLowerCase().includes(lowerValue))
          .map(p => p.type)
      )).map(type => ({ label: type, type: 'type' as const }));

      const propertyMatches = properties
        .filter(p => p.name.toLowerCase().includes(lowerValue))
        .map(p => ({ label: p.name, type: 'property' as const, id: p.id }));

      setSuggestions([...cityMatches, ...typeMatches, ...propertyMatches]);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: { label: string; type: 'city' | 'property' | 'type'; id?: string }) => {
    setDestination(suggestion.label);
    setShowSuggestions(false);
    setIsDatesOpen(true);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch({ destination, checkIn, checkOut, adults, children, rooms });
    }
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-3 md:p-3 ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Destination */}
        <div className="col-span-2 md:col-span-1 relative">
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Where
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search destination or city"
              value={destination}
              onChange={(e) => handleInputChange(e.target.value)}
              onFocus={() => destination && setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 max-h-64 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-3 transition-colors"
                  >
                    {suggestion.type === 'city' && <MapPin className="h-4 w-4 text-blue-500" />}
                    {suggestion.type === 'property' && <Search className="h-4 w-4 text-gray-500" />}
                    {suggestion.type === 'type' && <Search className="h-4 w-4 text-purple-500" />}
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{suggestion.label}</p>
                      <p className="text-xs text-gray-500 capitalize">{suggestion.type}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Dates */}
        <div
          className="relative"
          onMouseEnter={() => setIsDatesOpen(true)}
          onMouseLeave={() => setIsDatesOpen(false)}
        >
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Dates
          </label>
          <Popover open={isDatesOpen} onOpenChange={setIsDatesOpen}>
            <PopoverTrigger asChild>
              <button
                className="w-full flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-left hover:border-gray-400 dark:hover:border-gray-500 dark:bg-gray-700 dark:text-white transition-colors"
                onClick={() => setIsDatesOpen(!isDatesOpen)}
              >
                <Calendar className="h-5 w-5 text-gray-400" />
                <span className="text-sm">
                  {checkIn && checkOut
                    ? `${format(checkIn, 'MMM dd')} - ${format(checkOut, 'MMM dd')}`
                    : 'Add dates'}
                </span>
              </button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0"
              align="start"
              onMouseEnter={() => setIsDatesOpen(true)}
              onMouseLeave={() => setIsDatesOpen(false)}
            >
              <div className="flex gap-4 p-4">
                <div>
                  <p className="text-sm font-medium mb-2">Check-in</p>
                  <CalendarComponent
                    mode="single"
                    selected={checkIn}
                    onSelect={(date) => {
                      setCheckIn(date);
                    }}
                    disabled={(date) => date < new Date()}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Check-out</p>
                  <CalendarComponent
                    mode="single"
                    selected={checkOut}
                    onSelect={(date) => {
                      setCheckOut(date);
                      if (date) {
                        setIsDatesOpen(false);
                        setIsGuestsOpen(true);
                      }
                    }}
                    disabled={(date) => date < (checkIn || new Date())}
                  />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Guests & Rooms */}
        <div
          className="relative"
          onMouseEnter={() => setIsGuestsOpen(true)}
          onMouseLeave={() => setIsGuestsOpen(false)}
        >
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Guests & Rooms
          </label>
          <Popover open={isGuestsOpen} onOpenChange={setIsGuestsOpen}>
            <PopoverTrigger asChild>
              <button
                className="w-full flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-left hover:border-gray-400 dark:hover:border-gray-500 dark:bg-gray-700 dark:text-white transition-colors"
                onClick={() => setIsGuestsOpen(!isGuestsOpen)}
              >
                <Users className="h-5 w-5 text-gray-400" />
                <span className="text-sm">
                  {adults + children} Guests, {rooms} Room{rooms > 1 ? 's' : ''}
                </span>
              </button>
            </PopoverTrigger>
            <PopoverContent
              className="w-80"
              align="start"
              onMouseEnter={() => setIsGuestsOpen(true)}
              onMouseLeave={() => setIsGuestsOpen(false)}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Adults</span>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{adults}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setAdults(adults + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Children</span>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{children}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setChildren(children + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Rooms</span>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setRooms(Math.max(1, rooms - 1))}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{rooms}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setRooms(rooms + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Search Button */}
        <div className="col-span-2 md:col-span-1 flex items-end">
          <Button onClick={handleSearch} className="w-full h-[42px] bg-blue-600 hover:bg-blue-700 text-white">
            <Search className="h-5 w-5 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
