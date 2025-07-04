// External library imports
import { useState } from 'react';
import { Loader2, Search } from 'lucide-react';

// Internal application modules (hooks, types)
import { useLocationQuery } from '@/hooks/useWeather';
import { useDebounce } from '@/hooks/useDebounce';
import type { Cordinates } from '@/types/weather';
import type { Location } from '@/api/types';

// Internal UI components
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command';
import { Button } from '../ui/button';



interface Props {
    selectCordinate: (cord: Cordinates | undefined) => void;
}
const WeatherSearch = ({ selectCordinate }: Props) => {
    const [open, setOpen] = useState(false);
    const [keyword, setKeyword] = useState("");
    const debouncedKeyword = useDebounce(keyword, 300);
    const geoQuery = useLocationQuery(debouncedKeyword);

    const handleSelect = (location: Location) => {
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
                className="flex text-muted-foreground cursor-text justify-center items-center w-auto md:w-60"
            >
                <Search className=" h-4 w-4" />
                <p className=''>Search by City</p>
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