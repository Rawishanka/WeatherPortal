// External library imports
import React from 'react';
import { ArrowDown, ArrowUp, Droplets, Wind } from 'lucide-react';
import { format } from "date-fns";

// Internal application modules (types)
import type { TableData } from '@/types/weather';
import type { Forecast } from '@/api/types';

// Internal UI components
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';




interface UpcomingDaysProps {
  data: Forecast;
}


const DailyForecast = React.memo(({ data }: UpcomingDaysProps) => {

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
     <Card className="">
      <CardHeader>
        <CardTitle>5-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Enable horizontal scroll on small screens */}
        <div className="w-full overflow-x-auto sm:overflow-visible">
          <div className=" space-y-4">
            {upcomingDays.map((day) => (
              <div
                key={day.date}
                className="grid grid-cols-3 items-center gap-4 rounded-lg border p-4"
              >
                <div>
                  <p className="font-medium">
                    {format(new Date(day.date), "EEE, MMM d")}
                  </p>
                  <p className="text-sm text-muted-foreground capitalize">
                    {day.text}
                  </p>
                </div>

                <div className="flex justify-center gap-4">
                  <span className="flex items-center text-blue-500">
                    <ArrowDown className="mr-1 h-4 w-4" />
                    {day.min_temp}
                  </span>
                  <span className="flex items-center text-red-500">
                    <ArrowUp className="mr-1 h-4 w-4" />
                    {day.max_temp}
                  </span>
                </div>

                <div className="flex justify-end gap-4">
                  <span className="flex items-center gap-1">
                    <Droplets className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">{day.humidity}%</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Wind className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">{day.wind_speed}km/h</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
})

export default DailyForecast