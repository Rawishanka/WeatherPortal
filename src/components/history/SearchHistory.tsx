import type { Cordinates, WeatherSnapshot } from "@/types/weather";
import type { WeatherLocation } from '@/api/types';

interface HistoryProps {
    mementos: WeatherSnapshot[];
    removeMemento: (item: string) => void;
    selectCordinate: (cord: Cordinates | undefined) => void;
}
const SearchHistory = ({ mementos, removeMemento, selectCordinate }: HistoryProps) => {
    const historyList = mementos ?? mementos;

    const handleSelect = (location: WeatherLocation) => {
        const cord: Cordinates = {
            latitude: location.lat,
            longitude: location.lon
        };
        selectCordinate(cord);

    };
    return (
        <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-1 gap-4 mt-5 mb-5">
            {historyList.map((item) => (
                <div
                    key={item.weather.location.name}
                    className="relative"

                >
                    <div onClick={() => handleSelect(item.weather.location)}>
                        <div className="text-sm font-semibold text-blue-600 dark:text-blue-300">
                            {item.weather.location.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            {item.weather.location.country}
                        </div>
                        <div className="text-3xl font-bold mt-2 text-gray-800 dark:text-white">
                            {item.weather.current.temp_c}&deg;C
                        </div>
                        <img
                            src={`https:${item.weather.current.condition.icon}`}
                            alt={item.weather.current.condition.text}
                            className="w-8 h-8"
                        />
                    </div>
                    <button
                        onClick={() => removeMemento(item.weather.location.name)}
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm cursor-pointer"
                    >
                        ✕
                    </button>
                </div>
            ))}
        </div>

    )
}

export default SearchHistory