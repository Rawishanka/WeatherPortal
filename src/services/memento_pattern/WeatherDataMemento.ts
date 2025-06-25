import type { WeatherForecastResponse, WeatherResponse } from "@/api/types";

export class WeatherDataMemento {
  readonly weather: WeatherResponse;
  readonly forecast: WeatherForecastResponse;

  constructor(weather: WeatherResponse, forecast: WeatherForecastResponse) {
    this.weather = weather;
    this.forecast = forecast;
  }

  getSnapshot() {
    return {
      weather: this.weather,
      forecast: this.forecast,
    };
  }

  static fromSnapshot(snapshot: {
    weather: WeatherResponse;
    forecast: WeatherForecastResponse;
  }) {
    return new WeatherDataMemento(snapshot.weather, snapshot.forecast);
  }
}
