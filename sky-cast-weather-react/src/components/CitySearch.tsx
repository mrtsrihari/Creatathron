import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { searchCities, WeatherData } from "@/data/weatherData";
import { Search } from "lucide-react";

interface CitySearchProps {
  onCitySelect: (city: WeatherData) => void;
}

const CitySearch = ({ onCitySelect }: CitySearchProps) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<WeatherData[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length > 0) {
      const results = searchCities(query);
      setSuggestions(results);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCitySelect = (city: WeatherData) => {
    setQuery(city.city);
    setShowSuggestions(false);
    onCitySelect(city);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
        <Input
          type="text"
          placeholder="Search for a city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length > 0 && setShowSuggestions(true)}
          className="pl-12 h-14 text-lg glass border-2 border-border/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300"
        />
      </div>

      {showSuggestions && (
        <div className="absolute top-full mt-2 w-full glass rounded-xl shadow-2xl overflow-hidden z-50 animate-scale-in">
          {suggestions.length > 0 ? (
            <div className="max-h-80 overflow-y-auto">
              {suggestions.map((city, index) => (
                <button
                  key={`${city.city}-${index}`}
                  onClick={() => handleCitySelect(city)}
                  className="w-full px-6 py-4 text-left hover:bg-primary/10 transition-colors duration-200 border-b border-border/30 last:border-0 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {city.city}
                      </p>
                      <p className="text-sm text-muted-foreground">{city.country}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-foreground">{city.temperature}°</p>
                      <p className="text-sm text-muted-foreground capitalize">{city.weather}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="px-6 py-8 text-center">
              <p className="text-muted-foreground">No cities found</p>
              <p className="text-sm text-muted-foreground mt-1">Try searching for another city</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CitySearch;
