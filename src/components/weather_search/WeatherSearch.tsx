import React, { useState } from 'react'
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command'
import { Button } from '../ui/button';
import { Search } from 'lucide-react';
import { useLocationQuery } from '@/hooks/useWeather';
import type { Cordinates } from '@/types/weather';
import type { Location } from '@/api/types';


interface Props {
    selectCordinate:  (cord: Cordinates | undefined) => void;
}
const WeatherSearch = ({ selectCordinate }: Props) => {
    const [open, setOpen] = useState(false);
    const [keyword, setKeyword] = useState(" ");
    const geoQuery = useLocationQuery(keyword);

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
                <CommandInput onValueChange={handleChange} placeholder="Search city..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        {geoQuery.isLoading && <CommandItem disabled>Loading...</CommandItem>}

                        {geoQuery.data?.map((item:Location) => (
                            <CommandItem value={`${item.lat}|${item.lon}`} key={`${item.lat}${item.lon}`} onSelect={() => handleSelect(item)}>
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