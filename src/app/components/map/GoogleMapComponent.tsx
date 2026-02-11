import React, { useState, useCallback, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, OverlayView } from '@react-google-maps/api';
import { Property } from '../../../data/properties';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { mapStyles, darkMapStyles } from './mapStyles';

const containerStyle = {
    width: '100%',
    height: '100%'
};

// Default center
const defaultCenter = {
    lat: 20.5937,
    lng: 78.9629
};

interface GoogleMapComponentProps {
    properties: Property[];
    selectedProperty: string | null;
    onSelectProperty: (id: string) => void;
}

export const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ properties, selectedProperty, onSelectProperty }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''
    });

    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [hoveredProperty, setHoveredProperty] = useState<string | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const checkDarkMode = () => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        };
        checkDarkMode();
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    const onLoad = useCallback(function callback(map: google.maps.Map) {
        if (properties.length > 0) {
            const bounds = new window.google.maps.LatLngBounds();
            properties.forEach(prop => {
                if (prop.latitude && prop.longitude) {
                    bounds.extend({ lat: prop.latitude, lng: prop.longitude });
                }
            });
            map.fitBounds(bounds);
        }
        setMap(map);
    }, [properties]);

    const onUnmount = useCallback(function callback(map: google.maps.Map) {
        setMap(null);
    }, []);

    if (!isLoaded) {
        return <div className="w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse" />;
    }

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={defaultCenter}
            zoom={5}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
                styles: isDarkMode ? darkMapStyles : mapStyles
            }}
        >
            {properties.map((prop) => (
                prop.latitude && prop.longitude ? (
                    <OverlayView
                        key={prop.id}
                        position={{ lat: prop.latitude, lng: prop.longitude }}
                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    >
                        <div
                            className="relative -translate-x-1/2 -translate-y-full cursor-pointer group pb-3"
                            onMouseEnter={() => setHoveredProperty(prop.id)}
                            onMouseLeave={() => setHoveredProperty(null)}
                            onClick={() => onSelectProperty(prop.id)}
                            style={{ zIndex: hoveredProperty === prop.id || selectedProperty === prop.id ? 50 : 10 }}
                        >
                            {/* Marker Label (Price Pill) */}
                            <div className={`
                                relative z-20 px-3 py-1.5 rounded-2xl shadow-md font-bold text-sm whitespace-nowrap transition-all duration-300 border
                                flex items-center justify-center min-w-[max-content]
                                ${selectedProperty === prop.id
                                    ? 'bg-blue-600 text-white border-blue-700 scale-110'
                                    : 'bg-blue-50 text-blue-700 border-blue-600 hover:scale-105 hover:bg-blue-100'}
                            `}>
                                Rs. {prop.price.toLocaleString()}
                            </div>

                            {/* Anchor Point (Triangle) */}
                            <div className={`
                                absolute left-1/2 transform -translate-x-1/2 bottom-1 w-3 h-3 rotate-45 z-10
                                border-r border-b rounded-sm
                                ${selectedProperty === prop.id
                                    ? 'bg-blue-600 border-blue-700'
                                    : 'bg-blue-50 border-blue-600'}
                             `} />

                            {/* Hover Preview Card */}
                            {(hoveredProperty === prop.id || selectedProperty === prop.id) && (
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-72 z-50 animate-in fade-in zoom-in-95 duration-200">
                                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden p-3">
                                        <div className="h-40 rounded-lg overflow-hidden mb-3 relative group-hover:shadow-md transition-shadow">
                                            <ImageWithFallback
                                                src={prop.images[0]}
                                                alt={prop.name}
                                                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                                            />
                                            <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1">
                                                <span>★</span> {prop.guestRating}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-base truncate text-gray-900 dark:text-gray-100">{prop.name}</h4>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 truncate mb-2">{prop.area}, {prop.city}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="font-bold text-blue-600 text-lg">
                                                    Rs. {prop.price.toLocaleString()} <span className="text-xs text-gray-400 font-normal">/ night</span>
                                                </div>
                                                <div className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                                                    View Details
                                                </div>
                                            </div>
                                        </div>
                                        {/* Triangle Pointer for Card */}
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 rotate-45 border-r border-b border-gray-200 dark:border-gray-800" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </OverlayView>
                ) : null
            ))}
        </GoogleMap>
    );
};
