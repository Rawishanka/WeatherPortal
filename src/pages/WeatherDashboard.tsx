import type { Location } from "@/api/types"
import CurrentCityWeather from "@/components/CurrentCityWeather"
import LoadingWeather from "@/components/LoadingWeather"
import { Button } from "@/components/ui/button"
import { useWeatherQuery } from "@/hooks/useWeather"
import { icons, RefreshCw } from "lucide-react"


const WeatherDashboard = () => {
  
  const weather = useWeatherQuery();
  const handleRefresh = ()=>{
    weather.refetch();
  }

  const location : Location =  {
    "id": 2842281,
    "name": "Colombo",
    "region": "Western",
    "country": "Sri Lanka",
    "lat": 6.93,
    "lon": 79.85,
    "url": "colombo-western-sri-lanka"
  };

  
  if(weather.isLoading){
    return <LoadingWeather/>
  }
  return (
    <div>
      {/* reload current whether */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight">Location</h1>
        <div>
          <Button size={"icon"} variant={"outline"} onClick={handleRefresh}>
            <RefreshCw className={`${weather.isFetching ? " animate-spin h-4 w-4" : "h-4 w-4"}`} />
          </Button>
        </div>
      </div>

      <div className="gird gap-6">
        <div>
          <CurrentCityWeather data={weather.data!} location={location} />
        </div>
        <div>dd</div>
      </div>
    </div>
  )
}

export default WeatherDashboard