import type { WeatherForecastResponse, WeatherResponse } from "@/api/types";

export interface Cordinates {
    latitude : number,
    longitude : number
}

export interface HourlyWeatherData {
  time: string;         
  temp_c: number;      
  humidity: number;   
  feelslike_c: number;  
}

export interface TableData {
  date:string;
  humidity:number;
  max_temp:number;
  min_temp:number;
  wind_speed:number;
  text:string;
  icon:string;
}


export type WeatherSnapshot = {
    weather: WeatherResponse;
    forecast: WeatherForecastResponse;
};