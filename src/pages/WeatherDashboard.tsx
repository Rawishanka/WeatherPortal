// Built-in and external library imports
import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";

// Internal application modules (hooks, services, types)
import {
  useHourlyDataQuery,
  useWeatherQuery
} from "@/hooks/useWeather";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useWeatherCaretaker } from "@/hooks/useWeatherCaretaker";
import { WeatherDataOriginator } from "@/services/memento_pattern/WeatherDataOriginator";
import type { Cordinates } from "@/types/weather";

// Internal UI and feature components
import { Button } from "@/components/ui/button";
import ErrorAlert from "@/components/error/ErrorAlert";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WeatherSearch from "@/components/weather_search/WeatherSearch";
import SearchHistory from "@/components/history/SearchHistory";
import CurrentCityWeather from "@/components/current_weather/CurrentWeather";
import CurrentWeatherSkeleton from "@/components/current_weather/CurrentWeatherSkeleton";
import CurrentCityWeatherMobile from "@/components/current_weather/CurrentWeatherMobile";
import CurrentWeatherMobileSkeleton from "@/components/current_weather/CurrentWeatherMobileSkeleton";
import DailyForcast from "@/components/daily_weather/DayForcast";
import DayForcastMobile from "@/components/daily_weather/DayForcastMobile";
import DailyForecastSkeleton from "@/components/daily_weather/DailyForcastSkeleton";
import DailyForcastSkeletonMobile from "@/components/daily_weather/DailyForcastSkeletonMobile";
import TodayWeather from "@/components/today_weather/TodayWeather";
import TodayWeatherSkeleton from "@/components/today_weather/TodayWeatherSkeleton";
import WeatherDetails from "@/components/weather_details/WeatherDetails";
import WeatherDetailsSkeleton from "@/components/weather_details/WeatherDetailsSkeleton";


const WeatherDashboard = () => {
  const [selectedCity, setSelectedCity] = useState<Cordinates>();
  const weather = useWeatherQuery(selectedCity);
  const hourlyData = useHourlyDataQuery("5", selectedCity);
  const isMobile = useMediaQuery(490);

  const { addMemento, mementos, removeMemento } = useWeatherCaretaker();

 useEffect(() => {
  if (weather.data && hourlyData.data) {
    const originator = new WeatherDataOriginator();
    originator.setState(weather.data, hourlyData.data);
    const memento = originator.save();
    addMemento(memento);
  }
}, [weather.data]); 

  const showSkeleton = weather.isLoading || hourlyData.isLoading;
  const isForecastReady = !hourlyData.isLoading && !!hourlyData.data?.forecast;

  const handleRefresh = () => {
    weather.refetch();
  }


  if (weather.isError || hourlyData.isError) {
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
        {/* reload current weather and search weather*/}
        {isMobile && <div className="w-full flex justify-center"><WeatherSearch selectCordinate={setSelectedCity} /></div>}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">Weather</h1>
          {!isMobile && <div><WeatherSearch selectCordinate={setSelectedCity} /></div>}
          <div>
            <Button
              size={"icon"}
              variant={"outline"}
              onClick={handleRefresh}
              disabled={weather.isFetching}
              className="cursor-pointer"
            >
              <RefreshCw
                className={`h-4 w-4 cursor-pointer transition-transform duration-500 ${weather.isFetching ? "animate-spin" : ""
                  }`}
              />
            </Button>
          </div>
        </div>
        {/* search history */}
        <SearchHistory removeMemento={removeMemento} mementos={mementos}/>
        <div className=" mt-2">
          <div className="flex lg:flex-row flex-col gap-4">
            {weather.isLoading ? (
              isMobile ? <CurrentWeatherMobileSkeleton /> : <CurrentWeatherSkeleton />
            ) : (
              isMobile ? <CurrentCityWeatherMobile data={weather.data!} /> : <CurrentCityWeather data={weather.data!} />
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
          {isForecastReady ? <>
            <div className="flex-1 min-w-[600px] hidden sm:block">
              <DailyForcast data={hourlyData.data!.forecast} />
            </div>
            <div className="flex-1 min-w-[200px] sm:hidden block">
              <DayForcastMobile data={hourlyData.data!.forecast} />
            </div>
          </> : <>
            <div className="flex-1 min-w-[600px] hidden sm:block">
              <DailyForecastSkeleton />
            </div>
            <div className="flex-1 min-w-[200px] sm:hidden block">
              <DailyForcastSkeletonMobile />
            </div>
          </>}
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
      <Footer />
    </>
  )
}

export default WeatherDashboard
