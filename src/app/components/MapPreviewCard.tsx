import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { MapPin } from 'lucide-react';

export function MapPreviewCard() {
    const navigate = useNavigate();

    return (
        <div className="rounded-xl overflow-hidden mb-6 relative group cursor-pointer h-32 w-full shadow-md hover:shadow-lg transition-shadow" onClick={() => navigate('/map-view')}>
            {/* Realistic Map Background using CSS/SVG */}
            <div className="absolute inset-0 bg-[#e5e7eb] dark:bg-gray-800">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full opacity-60">
                    <defs>
                        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#d1d5db" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="#f3f4f6" />

                    {/* Parks */}
                    <path d="M -10 20 Q 50 60 120 40 T 250 80 V 150 H -10 Z" fill="#dcfce7" stroke="none" />
                    <path d="M 200 -10 Q 250 50 300 10 V -10 Z" fill="#dcfce7" stroke="none" />

                    {/* Vertical Roads */}
                    <path d="M 60 0 L 70 150" stroke="white" strokeWidth="8" fill="none" />
                    <path d="M 220 0 L 200 150" stroke="white" strokeWidth="8" fill="none" />

                    {/* Horizontal Roads */}
                    <path d="M 0 40 Q 150 60 350 30" stroke="white" strokeWidth="8" fill="none" />
                    <path d="M 0 100 Q 150 120 350 90" stroke="white" strokeWidth="6" fill="none" />

                    {/* Yellow Highway */}
                    <path d="M -20 120 Q 150 80 350 140" stroke="#fcd34d" strokeWidth="6" fill="none" className="opacity-80" />
                </svg>
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10">
                <Button
                    className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-500 font-bold shadow-sm rounded-full px-6 py-2 h-auto text-sm tracking-wide hover:scale-105 transition-transform"
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate('/map-view');
                    }}
                >
                    EXPLORE ON MAP <MapPin className="ml-2 h-4 w-4 fill-blue-600 text-white" />
                </Button>
            </div>
        </div>
    );
}
