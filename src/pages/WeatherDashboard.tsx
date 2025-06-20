import type { Location } from "@/api/types"
import CurrentCityWeather from "@/components/current_weather/CurrentWeather"
import DayWeatherTable from "@/components/daily_weather/DayWeatherTable"
import WeatherDetails from "@/components/weather_details/WeatherDetails"
import CurrentWeatherSkeleton from "@/components/current_weather/CurrentWeatherSkeleton"
import TodayWeather from "@/components/today_weather/TodayWeather"
import { Button } from "@/components/ui/button"
import {
  useHourlyDataQuery,
  useLocationQuery,
  useWeatherQuery
} from "@/hooks/useWeather"
import { RefreshCw } from "lucide-react"
import WeatherDetailsSkeleton from "@/components/weather_details/WeatherDetailsSkeleton"
import ErrorAlert from "@/components/error/ErrorAlert"
import TodayWeatherSkeleton from "@/components/today_weather/TodayWeatherSkeleton"

const WeatherDashboard = () => {
  const cityDetails = useLocationQuery()
  const weather = useWeatherQuery()
  const hourlyData = useHourlyDataQuery()

  const showSkeleton = weather.isLoading || hourlyData.isLoading

  const handleRefresh = () => {
    weather.refetch()
  }

  const location: Location = {
    id: 2842281,
    name: "Colombo",
    region: "Western",
    country: "Sri Lanka",
    lat: 6.93,
    lon: 79.85,
    url: "colombo-western-sri-lanka"
  }

  if (weather.isError) {
    return (
      <ErrorAlert
        title="Weather Not Found"
        description="Weather details fetching error"
      />
    )
  }
  if (hourlyData.isError) {
    return (
      <ErrorAlert
        title="Weather Not Found"
        description="Weather details fetching error"
      />
    )
  }


  return (
    <div>
      {/* reload current weather */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight">Weather</h1>
        <div>search bar</div>
        <div>
          <Button
            size={"icon"}
            variant={"outline"}
            onClick={handleRefresh}
            disabled={weather.isFetching}
          >
            <RefreshCw
              className={`h-4 w-4 transition-transform duration-500 ${weather.isFetching ? "animate-spin" : ""
                }`}
            />
          </Button>
        </div>
      </div>

      <div className="grid gap-6 mt-2">
        <div className="flex lg:flex-row flex-col gap-4">
          {weather.isLoading ? (
            <CurrentWeatherSkeleton />
          ) : (
            <CurrentCityWeather data={weather.data!} location={location} />
          )}

          {hourlyData.isLoading ? (
            <TodayWeatherSkeleton />
          ) : (
            <TodayWeather
              hourlyData={hourlyData.data!.forecast.forecastday[0].hour}
            />
          )}
        </div>

        <div className="flex lg:flex-row flex-col gap-4 mt-4">
          {showSkeleton ? (
            <WeatherDetailsSkeleton />
          ) : (
            <WeatherDetails
              sunrise={hourlyData.data!.forecast.forecastday[0].astro.sunrise}
              sunset={hourlyData.data!.forecast.forecastday[0].astro.sunset}
              wind_direction={weather.data!.current.wind_dir.toString()}
              pressure={weather.data!.current.pressure_in.toString()}
            />
          )}

          <DayWeatherTable />
        </div>
      </div>
    </div>
  )
}

export default WeatherDashboard
