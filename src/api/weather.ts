import type { Cordinates } from "@/types/weather";
import { API_CONFIG } from "./config";
import type { WeatherForecastResponse, WeatherResponse } from "./types";

class WeatherAPI {
    private createURL(url: string, params: Record<string, string | number>) {
        const searchParams = new URLSearchParams({
            ...params,
            key: API_CONFIG.API_KEY

        });
        return `${url}?${searchParams.toString()}`;
    }


    private async fetchData<T>(url: string): Promise<T> {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Weather API Error " + response.statusText)
        } return response.json();
    }


    async getCurrentWeather({ latitude, longitude }: Cordinates) {
        const url = this.createURL(`${API_CONFIG.BASE_URL}/current.json`, {
            q: `${latitude},${longitude}`
        });
        return await this.fetchData<WeatherResponse>(url);
    }


    async getGeoCode(searchText: string) {
        const url = this.createURL(`${API_CONFIG.BASE_URL}/search.json`, {
            q: searchText
        });
        return await this.fetchData<Location[]>(url);
    }

    
    async getHourlyData(date: string, { latitude, longitude }: Cordinates) {
        const url = this.createURL(`${API_CONFIG.BASE_URL}/marine.json`, {
            q: `${latitude},${longitude}`,
            days:date
        });
        return await this.fetchData<WeatherForecastResponse>(url);
    }
}

export const weatherAPI = new WeatherAPI();