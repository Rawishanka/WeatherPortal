import React, { useState } from 'react'
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command'
import { Button } from '../ui/button';
import { Loader2, Search } from 'lucide-react';
import { useLocationQuery } from '@/hooks/useWeather';
import type { Cordinates } from '@/types/weather';
import type { Location } from '@/api/types';
import { useDebounce } from '@/hooks/useDebounce';


interface Props {
    selectCordinate: (cord: Cordinates | undefined) => void;
}
const WeatherSearch = ({ selectCordinate }: Props) => {
    const [open, setOpen] = useState(false);
    const [keyword, setKeyword] = useState("");
    const debouncedKeyword = useDebounce(keyword, 300);
    const geoQuery = useLocationQuery(debouncedKeyword);

    const handleChange = (text: string) => {
        if (text.length > 3) {
            setKeyword(text);
        }
    }


    const handleSelect = (location: Location) => {
        console.log(location);
        const cord: Cordinates = {
            latitude: location.lat,
            longitude: location.lon
        };
        selectCordinate(cord);
        setOpen(false);
    };


    return (
        <>
            <Button
                onClick={() => setOpen(true)}
                variant="outline"
                className="flex text-muted-foreground cursor-text justify-center items-center w-auto md:w-40"
            >
                <Search className="mr-2 h-4 w-4" />
                <p>Search by City</p>
            </Button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput value={keyword} onValueChange={setKeyword} placeholder="Search city..." />
                <CommandList>
                    {keyword.length > 2 && !geoQuery.isLoading && (
                        <CommandEmpty>No cities found.</CommandEmpty>
                    )}
                    <CommandGroup heading="Suggestions">
                        {geoQuery.isLoading && (
                            <div className="flex items-center justify-center p-4">
                                <Loader2 className="h-4 w-4 animate-spin" />
                            </div>
                        )}
                        {geoQuery.data && geoQuery.data!.map((item: Location) => (
                            <CommandItem
                                value={`${item.name}, ${item.country}`}
                                key={`${item.lat}${item.lon}`}
                                onSelect={() => handleSelect(item)}
                            >
                                {item.name}, {item.country}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}

export default WeatherSearch