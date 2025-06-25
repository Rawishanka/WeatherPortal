import { WeatherDataMemento } from "@/services/memento_pattern/WeatherDataMemento";
import type { WeatherSnapshot } from "@/types/weather";
import { useLocalStorage } from "./useLocalStorage";


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
    console.log(updated)
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
