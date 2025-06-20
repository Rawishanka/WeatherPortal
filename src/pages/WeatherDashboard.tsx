import type { Location } from "@/api/types"
import CurrentCityWeather from "@/components/CurrentWeather"
import DayWeatherTable from "@/components/DayWeatherTable"
import ExtraWeatherDetails from "@/components/ExtraWeatherDetails"
import LoadingWeather from "@/components/LoadingWeather"
import TodayWeather from "@/components/TodayWeather"
import { Button } from "@/components/ui/button"
import { useHourlyDataQuery, useLocationQuery, useWeatherQuery } from "@/hooks/useWeather"
import { icons, RefreshCw } from "lucide-react"


const WeatherDashboard = () => {

  const cityDetails = useLocationQuery();
  const weather = useWeatherQuery();
  const hourlyData = useHourlyDataQuery();

  const handleRefresh = () => {
    weather.refetch()
  }

  const location: Location = {
    "id": 2842281,
    "name": "Colombo",
    "region": "Western",
    "country": "Sri Lanka",
    "lat": 6.93,
    "lon": 79.85,
    "url": "colombo-western-sri-lanka"
  };
  console.log(cityDetails.data)

  if (weather.isLoading) {
    return <LoadingWeather />
  }
  return (
    <div>
      {/* reload current whether */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight">Weather</h1>
        <div>search bar</div>
        <div>
          <Button size={"icon"} variant={"outline"} onClick={handleRefresh}>
            <RefreshCw className={`transition-transform duration-500${weather.isFetching ? "transition-transform duration-500 animate-spin h-4 w-4" : "h-4 w-4 "}`} />
          </Button>
        </div>
      </div>

      <div className="gird gap-6 mt-2">
        <div className="flex lg:flex-row flex-col gap-4">
          <CurrentCityWeather data={weather.data!} location={location} />
          <TodayWeather hourlyData={hourlyData.data!.forecast.forecastday[0].hour} />
        </div>
        <div className="flex lg:flex-row flex-col gap-4 mt-4">
          <ExtraWeatherDetails sunset={hourlyData.data!.forecast.forecastday[0].astro.sunset} sunrise={hourlyData.data!.forecast.forecastday[0].astro.sunrise} wind_direction={weather.data!.current.wind_dir.toString()} pressure={weather.data!.current.pressure_in.toString()} />
          <DayWeatherTable />
        </div>
      </div>
    </div>
  )
}

export default WeatherDashboard