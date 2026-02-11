import { Search } from 'lucide-react';

interface CompactSearchBarProps {
    onClick?: () => void;
    className?: string;
}

export function CompactSearchBar({ onClick, className = '' }: CompactSearchBarProps) {
    return (
        <div
            onClick={onClick}
            className={`flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer py-2.5 px-4 ${className}`}
        >
            <div className="flex items-center gap-4 text-sm font-medium text-gray-900 dark:text-gray-100 pr-2 border-r border-gray-300 dark:border-gray-600">
                <span>Where</span>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium text-gray-900 dark:text-gray-100 pr-2 border-r border-gray-300 dark:border-gray-600">
                <span>When</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span>Who</span>
            </div>
            <div className="bg-orange-500 p-2 rounded-full text-white ml-2">
                <Search className="h-4 w-4" />
            </div>
        </div>
    );
}
