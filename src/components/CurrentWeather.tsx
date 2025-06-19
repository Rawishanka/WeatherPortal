import type { Location, WeatherResponse } from '@/api/types'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowDown, ArrowUp, CloudSun, Droplet, Droplets, Sun, Thermometer, Wind } from 'lucide-react';
import { formatWeatherDate } from '@/utils/date';


interface CityWeatherProps {
    data: WeatherResponse,
    location: Location
}

const CurrentCityWeather = ({ data, location }: CityWeatherProps) => {
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
        <Card className="overflow-hidden mt-3">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <CloudSun className="h-6 w-6 text-yellow-500" />
                    <div className='flex flex-wrap gap-3'>
                        <CardTitle className="sm:text-xl text-sm">
                            {location.name}, {location.country}
                        </CardTitle>
                        <p className="text-xs text-muted-foreground self-end pb-0.5">
                            {formatWeatherDate(last_updated)}
                        </p>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="">
                    <div className="space-y-4 col-span-2 grid grid-cols-3">
                        {/* temperature area */}
                        <div className='col-span-2'>
                            <div className="flex items-center gap-2">
                                <p className="sm:text-7xl text-5xl font-bold tracking-tighter">
                                    {temp_c}&deg;
                                </p>
                                <div className="space-y-1">
                                    <p className="sm:text-sm text-xs font-medium text-muted-foreground">
                                        Feels like {feelslike_c}&deg;
                                    </p>
                                    <div className="flex gap-2 sm:text-sm text-xs font-medium">
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

                            <div className="flex justify-between sm:gap-4 gap-2">
                                <div className="flex items-center gap-2 w-fit">
                                    <Droplets className="sm:h-6 sm:w-6 h-4 w-4 text-blue-500" />
                                    <div className="space-y-0.5">
                                        <p className="text-xs font-medium">Humidity</p>
                                        <p className="sm:text-sm text-xs text-muted-foreground">{humidity}%</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 w-fit">
                                    <Wind className="sm:h-6 sm:w-6 h-4 w-4 text-blue-500" />
                                    <div className="space-y-0.5">
                                        <p className="text-xs font-medium">Wind Speed</p>
                                        <p className="sm:text-sm text-xs text-muted-foreground">{wind_kph} km/h</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 w-fit">
                                    <Sun className="sm:h-6 sm:w-6 h-4 w-4 text-blue-500" />
                                    <div className="space-y-0.5">
                                        <p className="text-xs font-medium">UV Index</p>
                                        <p className="sm:text-sm text-xs text-muted-foreground">{uv}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* icon area */}
                        <div className="flex flex-col items-center justify-center relative">
                            <div className="aspect-square w-full sm:max-w-[100px] max-w-[70px] items-center justify-center">
                                <img src={`https:${icon}`} alt="weather" className="h-full w-full" />
                            </div>
                            <div className="text-center absolute inset-x-0 bottom-3">
                                <p className="text-sm font-medium capitalize ">{text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>

    );
}

export default CurrentCityWeather