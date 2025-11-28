import { useState, useEffect } from "react";
import CitySearch from "@/components/CitySearch";
import WeatherCard from "@/components/WeatherCard";
import ForecastSlider from "@/components/ForecastSlider";
import WeatherAnimations from "@/components/WeatherAnimations";
import WeatherAvatar from "@/components/WeatherAvatar";
import InteractiveMap from "@/components/InteractiveMap";
import ThemeToggle from "@/components/ThemeToggle";
import { WeatherData, getCityWeather } from "@/data/weatherData";
import { toast } from "sonner";

const Index = () => {
  const [selectedCity, setSelectedCity] = useState<WeatherData | null>(null);
  const [isCelsius, setIsCelsius] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedCity = localStorage.getItem("lastCity");
    const savedUnit = localStorage.getItem("tempUnit");
    
    if (savedUnit) {
      setIsCelsius(savedUnit === "celsius");
    }

    if (savedCity) {
      const cityData = getCityWeather(savedCity);
      if (cityData) {
        setSelectedCity(cityData);
      }
    } else {
      // Default city
      const defaultCity = getCityWeather("Chennai");
      if (defaultCity) {
        setSelectedCity(defaultCity);
      }
    }
  }, []);

  const handleCitySelect = (city: WeatherData) => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setSelectedCity(city);
      localStorage.setItem("lastCity", city.city);
      setIsLoading(false);
      toast.success(`Weather loaded for ${city.city}`, {
        description: `${city.temperature}°${isCelsius ? "C" : "F"} - ${city.weather}`,
      });
    }, 500);
  };

  const handleToggleUnit = () => {
    const newUnit = !isCelsius;
    setIsCelsius(newUnit);
    localStorage.setItem("tempUnit", newUnit ? "celsius" : "fahrenheit");
    toast.success(`Temperature unit changed to °${newUnit ? "C" : "F"}`);
  };

  const handleRegionClick = (city: string) => {
    const cityData = getCityWeather(city);
    if (cityData) {
      handleCitySelect(cityData);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Weather animations background */}
      {selectedCity && <WeatherAnimations weather={selectedCity.weather} />}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <header className="flex items-center justify-between animate-slide-in">
          <div>
            <h1 className="text-5xl font-bold text-foreground mb-2">
              Sky<span className="text-primary">Cast</span>
            </h1>
            <p className="text-muted-foreground">Your personal weather companion</p>
          </div>
          <ThemeToggle />
        </header>

        {/* Search */}
        <div className="flex justify-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
          <CitySearch onCitySelect={handleCitySelect} />
        </div>

        {/* Main content grid */}
        {selectedCity && !isLoading ? (
          <>
            {/* Avatar */}
            <div className="flex justify-center" style={{ animationDelay: "0.2s" }}>
              <WeatherAvatar weather={selectedCity.weather} temperature={selectedCity.temperature} />
            </div>

            {/* Weather card and map */}
            <div className="grid lg:grid-cols-2 gap-8" style={{ animationDelay: "0.3s" }}>
              <WeatherCard weather={selectedCity} isCelsius={isCelsius} onToggleUnit={handleToggleUnit} />
              <InteractiveMap selectedCity={selectedCity} onRegionClick={handleRegionClick} />
            </div>

            {/* Forecast */}
            <div className="glass rounded-3xl p-8 animate-slide-in" style={{ animationDelay: "0.4s" }}>
              <ForecastSlider forecast={selectedCity.forecast} isCelsius={isCelsius} />
            </div>
          </>
        ) : (
          isLoading && (
            <div className="flex items-center justify-center py-20">
              <div className="glass rounded-2xl p-8 flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                <p className="text-lg text-foreground">Loading weather data...</p>
              </div>
            </div>
          )
        )}

        {/* Footer */}
        <footer className="text-center text-muted-foreground text-sm py-8 animate-slide-in">
          <p>© 2024 SkyCast. Made with ❤️ using React & TypeScript</p>
          <p className="mt-2">Mock data - No external APIs used</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
