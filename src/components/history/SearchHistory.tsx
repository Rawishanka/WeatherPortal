import type { WeatherSnapshot } from "@/types/weather";

interface HistoryProps {
    mementos: WeatherSnapshot[];
    removeMemento: (item: string) => void;
}
const SearchHistory = ({ mementos, removeMemento }: HistoryProps) => {
    const historyList = mementos ?? mementos;
    return (
        <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-1 gap-4 mt-5 mb-5">
            {historyList.map((item) => (
                <div
                    key={item.weather.location.name}
                    className="relative w-full bg-white dark:bg-gray-900 shadow-md rounded-2xl p-4 flex flex-col items-center text-center hover:ring-2 hover:ring-blue-400 transition-all"
                >
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