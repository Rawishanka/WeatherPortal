import type { Location, WeatherResponse } from '@/api/types'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowDown, ArrowUp, CloudSun, Droplet, Droplets, Sun, Thermometer, Wind } from 'lucide-react';


interface CityWeatherProps {
    data: WeatherResponse,
    location: Location
}

const CurrentCityWeather = ({ data, location }: CityWeatherProps) => {
    const {
        temp_c,
        humidity,
        wind_kph,
        uv,
        condition: { icon, code },
    } = data.current;

    return (
        <Card className="overflow-hidden">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <CloudSun className="h-6 w-6 text-yellow-500" />
                    <CardTitle className="text-xl">
                        {location.name}, {location.country}
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-6">
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                        

                        <div className="flex items-center gap-2">
                            <p className="text-7xl font-bold tracking-tighter">
                                {temp_c}
                            </p>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">
                                    Feels like {temp_c}
                                </p>
                                <div className="flex gap-2 text-sm font-medium">
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

                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex items-center gap-2">
                                <Droplets className="h-4 w-4 text-blue-500" />
                                <div className="space-y-0.5">
                                    <p className="text-sm font-medium">Humidity</p>
                                    <p className="text-sm text-muted-foreground">{humidity}%</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Wind className="h-4 w-4 text-blue-500" />
                                <div className="space-y-0.5">
                                    <p className="text-sm font-medium">Wind Speed</p>
                                    <p className="text-sm text-muted-foreground">{wind_kph} km/h</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Sun className="h-4 w-4 text-blue-500" />
                                <div className="space-y-0.5">
                                    <p className="text-sm font-medium">UV Index</p>
                                    <p className="text-sm text-muted-foreground">{uv}</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className="relative flex aspect-square w-full max-w-[200px] items-center justify-center">
                            <img
                                src={`https:${icon}`}
                                alt={'weather'}
                                className="h-full w-full object-contain"
                            />
                            <div className="absolute bottom-0 text-center">
                                <p className="text-sm font-medium capitalize">
                                    {code}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>

    );
}

export default CurrentCityWeather