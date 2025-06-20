import { weatherAPI } from "@/api/weather";
import { DEFAULT_LOCATION } from "@/constants/weather";
import type { Cordinates } from "@/types/weather"
import { useQuery } from "@tanstack/react-query"

const KEYS = {
    weather: (cordinates: Cordinates) => ["weather", cordinates] as const,
    location: (search: string) => ["location", search] as const,
    hourlyData: (hourlyData: Cordinates) => ["hourly-data", hourlyData] as const
}


export function useWeatherQuery(cordinate?: Cordinates) {
    cordinate = cordinate ?? DEFAULT_LOCATION;
    return useQuery({
        queryKey: KEYS.weather(cordinate),
        queryFn: () => weatherAPI.getCurrentWeather(cordinate)
    });
}


export function useLocationQuery(keyWord?: string) {
    keyWord = keyWord && keyWord?.length > 0 ? keyWord : " ";
    return useQuery({
        queryKey: KEYS.location(keyWord),
        queryFn: () => weatherAPI.getGeoCode(keyWord),
        enabled: keyWord.length > 2
    });
}


export function useHourlyDataQuery(days?: string, location?: Cordinates) {
    days = days ?? "5";
    location = location ?? DEFAULT_LOCATION
    return useQuery({
        queryKey: KEYS.hourlyData(location),
        queryFn: () => weatherAPI.getHourlyData(days, location)
    });
}