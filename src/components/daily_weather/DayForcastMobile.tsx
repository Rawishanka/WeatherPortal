import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { ArrowDown, ArrowUp, Droplets, Wind } from 'lucide-react'
import { format } from "date-fns";
import type { TableData } from '@/types/weather';
import type { Forecast } from '@/api/types';



interface UpcomingDaysProps {
    data: Forecast;
}


const DailyForecastMobile = React.memo(({ data }: UpcomingDaysProps) => {

    const upcomingDays: TableData[] = data.forecastday.map(item => {
        const tableData: TableData = {
            date: item.date,
            max_temp: item.day.maxtemp_c,
            min_temp: item.day.mintemp_c,
            humidity: item.day.avghumidity,
            wind_speed: item.day.maxwind_kph,
            text: item.day.condition.text,
            icon: item.day.condition.icon
        };
        return tableData;
    });

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>5-Day Forecast</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="w-full space-y-4">
                    {upcomingDays.map((day) => (
                        <div
                            key={day.date}
                            className="rounded-lg border p-4 flex flex-col sm:grid sm:grid-cols-3 gap-4"
                        >
                            {/* Date and weather text */}
                            <div className="flex flex-col">
                                <p className="font-medium text-base">
                                    {format(new Date(day.date), "EEE, MMM d")}
                                </p>
                                <p className="text-sm text-muted-foreground capitalize">
                                    {day.text}
                                </p>
                            </div>

                            {/* Temperatures */}
                            <div className="flex sm:justify-center justify-start gap-4">
                                <span className="flex items-center text-blue-500 text-sm">
                                    <ArrowDown className="mr-1 h-4 w-4" />
                                    {day.min_temp}&deg;
                                </span>
                                <span className="flex items-center text-red-500 text-sm">
                                    <ArrowUp className="mr-1 h-4 w-4" />
                                    {day.max_temp}&deg;
                                </span>
                            </div>

                            {/* Humidity and wind */}
                            <div className="flex sm:justify-end justify-start gap-6">
                                <span className="flex items-center gap-1 text-sm">
                                    <Droplets className="h-4 w-4 text-blue-500" />
                                    {day.humidity}%
                                </span>
                                <span className="flex items-center gap-1 text-sm">
                                    <Wind className="h-4 w-4 text-blue-500" />
                                    {day.wind_speed} km/h
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
})

export default DailyForecastMobile