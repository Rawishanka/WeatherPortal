import type { Location } from "@/api/types"
import CurrentCityWeather from "@/components/current_weather/CurrentWeather"
import DailyForcast from "@/components/daily_weather/DayForcast"
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
import DayForcastMobile from "@/components/daily_weather/DayForcastMobile"
import Header from "@/components/Header"
import CurrentCityWeatherMobile from "@/components/current_weather/CurrentWeatherMobile"
import useMediaQuery from "@/hooks/useMediaQuery"

const WeatherDashboard = () => {
  const cityDetails = useLocationQuery()
  const weather = useWeatherQuery()
  const hourlyData = useHourlyDataQuery();
  const isMobile = useMediaQuery(490);

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
    <>
      <Header />
      <div className="px-6 py-8 flex-grow container mx-auto ">
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

        <div className=" mt-2">
          <div className="flex lg:flex-row flex-col gap-4">
            {weather.isLoading ? (
              <>
                <div className="sm:block hidden">
                  <CurrentWeatherSkeleton />
                </div>
                <div className="block sm:hidden">
                  mobile
                </div>
              </>
            ) : (
              // <div>
              //   <div className="sm:block hidden">
              //     <CurrentCityWeather data={weather.data!} location={location} />
              //   </div>
              //   <div className="sm:hidden block">
              //     <CurrentCityWeatherMobile  data={weather.data!} location={location} />
              //   </div>
              // </div>
                isMobile ? <CurrentCityWeatherMobile data={weather.data!} location={location} /> : <CurrentCityWeather data={weather.data!} location={location} />
              
            )}

            {hourlyData.isLoading ? (
              <TodayWeatherSkeleton />
            ) : (
              <TodayWeather
                hourlyData={hourlyData.data!.forecast.forecastday[0].hour}
              />
            )}
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-6 mt-4 items-start w-full overflow-x-auto sm:overflow-x-visible">
          <div className="flex-1 min-w-[600px] hidden sm:block">
            {!hourlyData.isLoading && hourlyData.data?.forecast && (
              <DailyForcast data={hourlyData.data.forecast} />
            )}
          </div>
          <div className="flex-1 min-w-[200px] sm:hidden block">
            {!hourlyData.isLoading && hourlyData.data?.forecast && (
              <DayForcastMobile data={hourlyData.data.forecast} />
            )}
          </div>
          <div className="flex-1 w-full min-w-[200px]">
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
          </div>
        </div>
      </div>
      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60">footer</footer>
    </>

  )
}

export default WeatherDashboard
