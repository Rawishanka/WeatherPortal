// Internal UI components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const TodayWeatherSkeleton = () => {
  return (
    <Card className="flex-1 shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-center sm:text-xl text-sm">
          <CardTitle>
            <Skeleton className="h-6 w-40" />
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto sm:overflow-x-visible">
          <div className="h-[200px] w-full min-w-[400px] flex items-center justify-center">
            <div className="w-full h-full">
              {/* Simulate chart lines and axis with block skeletons */}
              <div className="h-full w-full relative">
                {/* Horizontal lines */}
                {[1, 2, 3, 4].map((_, i) => (
                  <Skeleton
                    key={i}
                    className="absolute left-0 right-0 h-[1px] bg-muted"
                    style={{ top: `${(i + 1) * 40}px` }}
                  />
                ))}

                {/* Vertical bars to simulate X-axis ticks */}
                <div className="absolute bottom-2 left-4 right-4 flex justify-between">
                  {[...Array(6)].map((_, i) => (
                    <Skeleton key={i} className="h-8 w-[1px] bg-muted" />
                  ))}
                </div>

                {/* Simulated lines */}
                <Skeleton className="absolute left-0 right-0 top-[60px] h-1 rounded-full bg-blue-200 opacity-40" />
                <Skeleton className="absolute left-0 right-0 top-[100px] h-1 rounded-full bg-muted opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default TodayWeatherSkeleton
