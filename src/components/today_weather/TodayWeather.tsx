import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { HourlyWeatherData } from '@/types/weather';


interface ChartData {
  time: string;
  temp: number;
  feels_like: number;
}
type Props = {
  hourlyData: HourlyWeatherData[];
};
const TodayWeather = React.memo(({ hourlyData }: Props) => {

  function convertToChartData(data: HourlyWeatherData[]): ChartData[] {
    return data
      .filter(item => {
        const hourPart = item.time.split(" ")[1];
        const hour = parseInt(hourPart.slice(0, 2), 10);
        return hour % 2 === 0;
      })
      .map(item => ({
        time: item.time.split(" ")[1],
        temp: item.temp_c,
        feels_like: item.feelslike_c,
      }));
  }


  const chartData = convertToChartData(hourlyData);

  return (
    <Card className="flex-1 shadow-lg">
      <CardHeader>
        <div className='flex justify-between items-center sm:text-xl text-sm'>
          <CardTitle>Today's Temperature</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className='overflow-x-auto sm:overflow-x-visible'>
          <div className="h-[200px] w-full min-w-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis
                  dataKey="time"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}°`}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground">
                                Temperature
                              </span>
                              <span className="font-bold">
                                {payload[0].value}°
                              </span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground">
                                Feels Like
                              </span>
                              <span className="font-bold">
                                {payload[1].value}°
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="temp"
                  stroke="#2563eb"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="feels_like"
                  stroke="#64748b"
                  strokeWidth={2}
                  dot={false}
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </CardContent>
    </Card>
  )
});

export default TodayWeather