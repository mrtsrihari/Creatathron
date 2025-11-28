import { ForecastDay } from "@/data/weatherData";
import { Cloud, CloudRain, Sun, CloudSnow, CloudLightning, CloudSun } from "lucide-react";

interface ForecastSliderProps {
  forecast: ForecastDay[];
  isCelsius: boolean;
}

const ForecastSlider = ({ forecast, isCelsius }: ForecastSliderProps) => {
  const getWeatherIcon = (weather: string) => {
    const iconClass = "w-8 h-8";
    switch (weather.toLowerCase()) {
      case "sunny":
        return <Sun className={`${iconClass} text-sunny`} />;
      case "cloudy":
        return <Cloud className={`${iconClass} text-cloudy-dark`} />;
      case "partly cloudy":
        return <CloudSun className={`${iconClass} text-cloudy`} />;
      case "rainy":
        return <CloudRain className={`${iconClass} text-rainy`} />;
      case "storm":
        return <CloudLightning className={`${iconClass} text-stormy`} />;
      case "snow":
        return <CloudSnow className={`${iconClass} text-snowy-ice`} />;
      default:
        return <Sun className={iconClass} />;
    }
  };

  const convertTemp = (temp: number) => {
    return isCelsius ? temp : Math.round((temp * 9) / 5 + 32);
  };

  return (
    <div className="w-full overflow-hidden">
      <h3 className="text-xl font-semibold mb-4 text-foreground">7-Day Forecast</h3>
      <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {forecast.map((day, index) => (
          <div
            key={`${day.day}-${index}`}
            className="glass rounded-2xl p-4 min-w-[120px] snap-start flex-shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer group animate-slide-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <p className="text-sm font-medium text-muted-foreground mb-3 text-center">{day.day}</p>
            <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">
              {getWeatherIcon(day.weather)}
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">
                {convertTemp(day.temp)}°{isCelsius ? "C" : "F"}
              </p>
              <div className="flex items-center justify-center gap-2 mt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="text-accent">↑</span>
                  {convertTemp(day.maxTemp)}°
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-primary">↓</span>
                  {convertTemp(day.minTemp)}°
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastSlider;
