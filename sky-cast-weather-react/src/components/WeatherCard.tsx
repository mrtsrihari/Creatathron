import { WeatherData } from "@/data/weatherData";
import { Cloud, Droplets, Wind, Eye, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WeatherCardProps {
  weather: WeatherData;
  isCelsius: boolean;
  onToggleUnit: () => void;
}

const WeatherCard = ({ weather, isCelsius, onToggleUnit }: WeatherCardProps) => {
  const convertTemp = (temp: number) => {
    return isCelsius ? temp : Math.round((temp * 9) / 5 + 32);
  };

  const getWeatherGradient = (weatherType: string) => {
    const type = weatherType.toLowerCase();
    if (type.includes("sunny")) return "from-sunny-light via-sunny to-sunny-light";
    if (type.includes("cloud")) return "from-cloudy via-cloudy-dark to-cloudy";
    if (type.includes("rain")) return "from-rainy via-rainy-dark to-rainy";
    if (type.includes("storm")) return "from-stormy via-stormy to-rainy-dark";
    if (type.includes("snow")) return "from-snowy via-snowy-ice to-snowy";
    return "from-primary via-accent to-primary";
  };

  return (
    <div className="glass rounded-3xl p-8 w-full max-w-2xl shadow-2xl animate-scale-in">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold text-foreground mb-2">{weather.city}</h2>
          <p className="text-lg text-muted-foreground">{weather.country}</p>
        </div>
        <Button
          onClick={onToggleUnit}
          variant="outline"
          size="lg"
          className="glass border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          °{isCelsius ? "C" : "F"} → °{isCelsius ? "F" : "C"}
        </Button>
      </div>

      {/* Main Weather Display */}
      <div className={`bg-gradient-to-br ${getWeatherGradient(weather.weather)} rounded-2xl p-8 mb-6 shadow-lg`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-6xl md:text-8xl font-bold text-white mb-2 animate-scale-in">
              {convertTemp(weather.temperature)}°
            </p>
            <p className="text-2xl text-white/90 capitalize font-medium">{weather.weather}</p>
            <p className="text-lg text-white/80 mt-2">
              Feels like {convertTemp(weather.feelsLike)}°{isCelsius ? "C" : "F"}
            </p>
          </div>
          <div className="text-8xl opacity-80 animate-float">
            {weather.weather.toLowerCase().includes("sunny") && "☀️"}
            {weather.weather.toLowerCase().includes("cloud") && "☁️"}
            {weather.weather.toLowerCase().includes("rain") && "🌧️"}
            {weather.weather.toLowerCase().includes("storm") && "⛈️"}
            {weather.weather.toLowerCase().includes("snow") && "❄️"}
          </div>
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="glass rounded-xl p-4 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-2">
            <Droplets className="w-5 h-5 text-rainy" />
            <span className="text-sm text-muted-foreground">Humidity</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{weather.humidity}%</p>
        </div>

        <div className="glass rounded-xl p-4 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-2">
            <Wind className="w-5 h-5 text-accent" />
            <span className="text-sm text-muted-foreground">Wind Speed</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{weather.wind} km/h</p>
        </div>

        <div className="glass rounded-xl p-4 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-2">
            <Eye className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Visibility</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{weather.visibility} km</p>
        </div>

        <div className="glass rounded-xl p-4 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-2">
            <Gauge className="w-5 h-5 text-secondary-foreground" />
            <span className="text-sm text-muted-foreground">Pressure</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{weather.pressure} mb</p>
        </div>

        <div className="glass rounded-xl p-4 hover:scale-105 transition-transform duration-300 md:col-span-2">
          <div className="flex items-center gap-3 mb-2">
            <Cloud className="w-5 h-5 text-cloudy-dark" />
            <span className="text-sm text-muted-foreground">Coordinates</span>
          </div>
          <p className="text-lg font-bold text-foreground">
            {weather.lat.toFixed(2)}°N, {weather.lon.toFixed(2)}°E
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
