// Internal application modules (services, hooks, types)
import { WeatherDataMemento } from "@/services/memento_pattern/WeatherDataMemento";
import { useLocalStorage } from "./useLocalStorage";
import type { WeatherSnapshot } from "@/types/weather";


export function useWeatherCaretaker() {
  const [snapshots, setSnapshots] = useLocalStorage<WeatherSnapshot[]>("weather_history", []);


  const addMemento = (memento: WeatherDataMemento) => {
    const snapshot = memento.getSnapshot();

    const filtered = snapshots.filter(
      (s) => s.weather.location.name !== snapshot.weather.location.name
    );

    const updated = [...filtered, snapshot].slice(-6);
    setSnapshots(updated);
  };

  const removeMemento = (cityName: string) => {
    const updated = snapshots.filter(
      (s) => s.weather.location.name !== cityName
    );
    setSnapshots(updated);
  };

  const clear = () => {
    setSnapshots([]);
  };

  const mementos = snapshots.map((s) => WeatherDataMemento.fromSnapshot(s));

  return {
    mementos,         
    addMemento,
    removeMemento,
    clear,
  };
}
