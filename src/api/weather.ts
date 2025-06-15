import { API_CONFIG } from "./config";
import type { WeatherResponse, Cordinates } from "./types";

class WeatherAPI {
    private createURL(url: string, params: Record<string, string | number>) {
        const searchParams = new URLSearchParams({
            key: API_CONFIG.API_KEY,
            ...params
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
            p: `${latitude},${longitude}`
        });
        return await this.fetchData<WeatherResponse>(url);
    }


    async getGeoCode(searchText: string) {
        const url = this.createURL(`${API_CONFIG.BASE_URL}/search.json`, {
            p: searchText
        });
        return await this.fetchData<WeatherResponse>(url);
    }
}