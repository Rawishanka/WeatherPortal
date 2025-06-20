import type { Location, WeatherResponse } from '@/api/types'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ArrowDown, ArrowUp, CloudSun, Droplet, Droplets, Sun, Thermometer, Wind } from 'lucide-react';
import { formatWeatherDate } from '@/utils/date';


interface CityWeatherProps {
    data: WeatherResponse,
    location: Location
}

const CurrentCityWeatherMobile = ({ data, location }: CityWeatherProps) => {
    const {
        last_updated,
        temp_c,
        humidity,
        wind_kph,
        uv,
        feelslike_c,
        condition: { icon, text },
    } = data.current;


    return (
        <Card className="overflow-hidden shadow-lg w-full">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <CloudSun className="h-6 w-6 text-yellow-500" />
                    <div className="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-3">
                        <CardTitle className="text-base sm:text-xl">
                            {location.name}, {location.country}
                        </CardTitle>
                        <p className="text-xs text-muted-foreground">
                            {formatWeatherDate(last_updated)}
                        </p>
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Temperature & Details */}
                    <div className="flex-1 space-y-4">
                        {/* Temperature */}
                        <div className="flex items-center gap-3">
                            <p className="text-5xl sm:text-7xl font-bold tracking-tight">
                                {temp_c}&deg;
                            </p>
                            <div className="space-y-1">
                                <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                                    Feels like {feelslike_c}&deg;
                                </p>
                                <div className="flex gap-2 text-xs sm:text-sm font-medium">
                                    <span className="flex items-center gap-1 text-blue-500">
                                        <ArrowDown className="h-3 w-3" />
                                        {temp_c}
                                    </span>
                                    <span className="flex items-center gap-1 text-red-500">
                                        <ArrowUp className="h-3 w-3" />
                                        {temp_c}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Details: humidity, wind, uv */}
                        <div className="grid grid-cols-3 gap-3">
                            <div className="flex items-center gap-2">
                                <Droplets className="h-4 w-4 sm:h-6 sm:w-6 text-blue-500" />
                                <div>
                                    <p className="text-xs font-medium">Humidity</p>
                                    <p className="text-xs text-muted-foreground">{humidity}%</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Wind className="h-4 w-4 sm:h-6 sm:w-6 text-blue-500" />
                                <div>
                                    <p className="text-xs font-medium">Wind</p>
                                    <p className="text-xs text-muted-foreground">{wind_kph} km/h</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Sun className="h-4 w-4 sm:h-6 sm:w-6 text-blue-500" />
                                <div>
                                    <p className="text-xs font-medium">UV Index</p>
                                    <p className="text-xs text-muted-foreground">{uv}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Weather icon */}
                    <div className="flex flex-col items-center justify-center sm:w-auto">
                        <div className="w-20 sm:w-24 aspect-square">
                            <img src={`https:${icon}`} alt="weather" className="w-full h-full" />
                        </div>
                        <p className="text-sm font-medium capitalize mt-2 text-center">{text}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default CurrentCityWeatherMobile