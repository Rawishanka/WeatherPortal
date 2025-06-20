import React from 'react'
import { Button } from '../ui/button'
import { RefreshCw } from 'lucide-react'

const WeatherHeader = () => {
    return (
        <div className="flex justify-between items-center">
            {/* <h1 className="text-xl font-bold tracking-tight">Weather</h1>
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
            </div> */}
        </div>
    )
}

export default WeatherHeader