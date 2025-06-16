import { Skeleton } from "./ui/skeleton"


const LoadingWeather = () => {
  return (
     <div className="space-y-6">
      <div className="grid gap-6">
        <Skeleton className="w-full rounded-lg" />
        <Skeleton className="w-full rounded-lg" />
        <div className="grid gap-6 md:grid-cols-2">
          <Skeleton className="w-full rounded-lg" />
          <Skeleton className="w-[300px] rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export default LoadingWeather