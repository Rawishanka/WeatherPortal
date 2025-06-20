import type { HourlyWeatherData } from "@/types/weather";

export interface Location {
  id: number,
  name: string,
  region: string,
  country: string,
  lat: number,
  lon: number,
  url: string,
};


export interface WeatherResponse {
  location: WeatherLocation;
  current: Current;
}

export interface WeatherLocation extends Omit<Location, 'id' | 'url'> {
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface Current {
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface Condition {
  icon: string;
  code: number;
  text:string;
}


export interface ForecastDay {
  day: TemperatureRange;
  hour: HourlyWeatherData[];
  astro:AstroData;
  date:string;
}


export interface Forecast {
  forecastday: ForecastDay[];
}


export interface WeatherForecastResponse {
  location: WeatherLocation;
  forecast: Forecast;
}


export interface AstroData {
  sunrise: string;
  sunset: string;
}

export interface TemperatureRange {
  maxtemp_c: number;
  mintemp_c: number;
  avghumidity:number;
  maxwind_kph:number;
  condition:Condition;
}

