
import type { WeatherForecastResponse, WeatherResponse } from "@/api/types";
import { WeatherDataMemento } from "./WeatherDataMemento";

export class WeatherDataOriginator {
  private weather!: WeatherResponse;
  private forecast!: WeatherForecastResponse;

  setState(weather: WeatherResponse, forecast: WeatherForecastResponse) {
    this.weather = weather;
    this.forecast = forecast;
  }

  save(): WeatherDataMemento {
    return new WeatherDataMemento(this.weather, this.forecast);
  }

  restore(memento: WeatherDataMemento) {
    const { weather, forecast } = memento.getSnapshot();
    this.weather = weather;
    this.forecast = forecast;
  }

  getState() {
    return {
      weather: this.weather,
      forecast: this.forecast,
    };
  }
}
