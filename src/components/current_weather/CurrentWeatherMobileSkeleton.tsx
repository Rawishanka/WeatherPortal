// External library imports
import { CloudSun } from "lucide-react";

// Internal UI components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";


const CurrentWeatherMobileSkeleton = () => {
  return (
    <Card className="overflow-hidden shadow-lg w-full">
      <CardHeader>
        <div className="flex items-center gap-3">
          <CloudSun className="h-6 w-6 text-yellow-500" />
          <div className="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-3">
            <CardTitle className="text-base sm:text-xl">
              <Skeleton className="h-4 w-36 sm:w-48" />
            </CardTitle>
            <p className="text-xs text-muted-foreground">
              <Skeleton className="h-3 w-20" />
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          {/* Temperature & Details */}
          <div className="flex-1 space-y-4">
            {/* Temperature */}
            <div className="flex items-center gap-3">
              <Skeleton className="h-16 sm:h-20 w-20 sm:w-24" />
              <div className="space-y-1">
                <Skeleton className="h-3 w-24" />
                <div className="flex gap-2">
                  <Skeleton className="h-3 w-10" />
                  <Skeleton className="h-3 w-10" />
                </div>
              </div>
            </div>

            {/* Details: humidity, wind, uv */}
            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-1">
                <Skeleton className="h-3 w-12" />
                <Skeleton className="h-3 w-10" />
              </div>
              <div className="space-y-1">
                <Skeleton className="h-3 w-12" />
                <Skeleton className="h-3 w-10" />
              </div>
              <div className="space-y-1">
                <Skeleton className="h-3 w-12" />
                <Skeleton className="h-3 w-10" />
              </div>
            </div>
          </div>

          {/* Weather icon */}
          <div className="flex flex-col items-center justify-center sm:w-auto">
            <Skeleton className="w-20 sm:w-24 aspect-square" />
            <Skeleton className="h-4 w-16 mt-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWeatherMobileSkeleton;
