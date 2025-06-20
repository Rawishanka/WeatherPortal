import React from "react";

export default function DailyForcastSkeletonMobile() {
  // Render 5 skeleton day items
  const skeletonDays = Array.from({ length: 5 });

  return (
    <div className="w-full">
      <div className="animate-pulse border rounded-lg shadow-sm p-4">
        <div className="mb-4">
          <div className="h-6 w-32 bg-gray-300 rounded"></div>
        </div>

        <div className="space-y-4">
          {skeletonDays.map((_, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-gray-200 p-4 flex flex-col sm:grid sm:grid-cols-3 gap-4"
            >
              {/* Date and weather text */}
              <div className="flex flex-col space-y-2">
                <div className="h-5 w-24 bg-gray-300 rounded"></div>
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
              </div>

              {/* Temperatures */}
              <div className="flex sm:justify-center justify-start gap-4">
                <div className="h-4 w-12 bg-blue-300 rounded"></div>
                <div className="h-4 w-12 bg-red-300 rounded"></div>
              </div>

              {/* Humidity and wind */}
              <div className="flex sm:justify-end justify-start gap-6">
                <div className="h-4 w-16 bg-blue-300 rounded"></div>
                <div className="h-4 w-20 bg-blue-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
