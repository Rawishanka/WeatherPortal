// Internal UI components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";


const DailyForecastSkeleton = () => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-5 w-36" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full overflow-x-auto sm:overflow-visible">
          <div className="space-y-4 min-w-[600px]">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div
                key={idx}
                className="grid grid-cols-3 items-center gap-4 rounded-lg border p-4"
              >
                <div className="space-y-1">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-20" />
                </div>

                <div className="flex justify-center gap-4">
                  <Skeleton className="h-4 w-10" />
                  <Skeleton className="h-4 w-10" />
                </div>

                <div className="flex justify-end gap-4">
                  <Skeleton className="h-4 w-14" />
                  <Skeleton className="h-4 w-14" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyForecastSkeleton;
