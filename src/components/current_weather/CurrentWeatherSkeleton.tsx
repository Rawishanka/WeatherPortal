import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { CloudSun } from "lucide-react"

const CurrentWeatherSkeleton = () => {
  return (
    <Card className="overflow-hidden shadow-lg min-w-[400px]">
      <CardHeader>
        <div className="flex items-center gap-3">
          <CloudSun className="h-6 w-6 text-yellow-500" />
          <div className="flex flex-wrap gap-3">
            <CardTitle className="sm:text-xl text-sm">
              <Skeleton className="h-5 w-32" />
            </CardTitle>
            <div className="text-xs text-muted-foreground self-end pb-0.5">
              <Skeleton className="h-3 w-20" />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4 col-span-2 grid grid-cols-3 min-w-[400px]">
          {/* Temperature area */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <Skeleton className="sm:h-20 h-14 w-20 rounded-md" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-28" />
                <div className="flex gap-2">
                  <Skeleton className="h-4 w-10" />
                  <Skeleton className="h-4 w-10" />
                </div>
              </div>
            </div>

            <div className="flex justify-between sm:gap-4 gap-2">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-2 w-fit">
                  <Skeleton className="sm:h-6 sm:w-6 h-4 w-4 rounded-full" />
                  <div className="space-y-0.5">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-3 w-12" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Icon area */}
          <div className="flex flex-col items-center justify-center relative">
            <Skeleton className="aspect-square sm:w-[100px] w-[70px] rounded-md" />
            <div className="text-center absolute inset-x-0 bottom-3">
              <Skeleton className="h-4 w-24 mx-auto" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CurrentWeatherSkeleton
