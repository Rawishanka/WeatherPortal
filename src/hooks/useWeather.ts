import { weatherAPI } from "@/api/weather";
import { DEFAULT_LOCATION } from "@/constants/weather";
import type { Cordinates } from "@/types/weather"
import { useQuery } from "@tanstack/react-query"

const KEYS = {
    weather: (cordinates: Cordinates) => ["weather", cordinates] as const,
    location: (search: string) => ["location", search] as const,
}


export function useWeatherQuery(cordinate?: Cordinates) {
    cordinate = cordinate ?? DEFAULT_LOCATION;
    return useQuery({
        queryKey: KEYS.weather(cordinate),
        queryFn: ()=> weatherAPI.getCurrentWeather(cordinate)
    });
}


export function useLocationQuery(keyWord: string) {
    keyWord = keyWord ?? "";
    return useQuery({
        queryKey: KEYS.location(keyWord),
        queryFn: ()=> weatherAPI.getGeoCode(keyWord)
    });
}