import { useEffect, useState } from "react";
import { WeatherData } from "@/data/weatherData";

interface InteractiveMapProps {
  selectedCity: WeatherData | null;
  onRegionClick: (city: string) => void;
}

const InteractiveMap = ({ selectedCity }: InteractiveMapProps) => {
  const [pinPosition, setPinPosition] = useState({ x: 50, y: 50 });
  const [showRipple, setShowRipple] = useState(false);

  useEffect(() => {
    if (selectedCity) {
      // Convert lat/lon to approximate position on map (simplified)
      const x = ((selectedCity.lon + 180) / 360) * 100;
      const y = ((90 - selectedCity.lat) / 180) * 100;
      setPinPosition({ x, y });
      setShowRipple(true);
      setTimeout(() => setShowRipple(false), 1500);
    }
  }, [selectedCity]);

  return (
    <div className="glass rounded-3xl p-6 w-full h-[400px] relative overflow-hidden shadow-2xl animate-scale-in">
      <h3 className="text-xl font-semibold mb-4 text-foreground">Location</h3>
      
      {/* Simplified world map using SVG */}
      <div className="relative w-full h-full bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl overflow-hidden">
        {/* World map grid */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Grid lines */}
          {[...Array(10)].map((_, i) => (
            <g key={`grid-${i}`}>
              <line x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="currentColor" strokeWidth="0.2" />
              <line x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="currentColor" strokeWidth="0.2" />
            </g>
          ))}
          
          {/* Simplified continents (decorative shapes) */}
          <ellipse cx="25" cy="35" rx="12" ry="15" fill="currentColor" opacity="0.3" />
          <ellipse cx="50" cy="40" rx="18" ry="20" fill="currentColor" opacity="0.3" />
          <ellipse cx="75" cy="45" rx="15" ry="18" fill="currentColor" opacity="0.3" />
          <ellipse cx="30" cy="70" rx="8" ry="12" fill="currentColor" opacity="0.3" />
          <ellipse cx="85" cy="65" rx="10" ry="14" fill="currentColor" opacity="0.3" />
        </svg>

        {/* Location pin */}
        {selectedCity && (
          <div
            className="absolute z-10 transition-all duration-1000 ease-out"
            style={{
              left: `${pinPosition.x}%`,
              top: `${pinPosition.y}%`,
              transform: "translate(-50%, -100%)",
            }}
          >
            {/* Pin */}
            <div className="relative animate-float">
              <div className="w-8 h-8 bg-destructive rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-6 bg-destructive" />
            </div>

            {/* Ripple effect */}
            {showRipple && (
              <>
                <div className="absolute top-0 left-0 w-8 h-8 border-2 border-destructive rounded-full animate-ripple" />
                <div
                  className="absolute top-0 left-0 w-8 h-8 border-2 border-destructive rounded-full animate-ripple"
                  style={{ animationDelay: "0.3s" }}
                />
              </>
            )}

            {/* City label */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <div className="glass rounded-lg px-3 py-1">
                <p className="text-sm font-semibold text-foreground">{selectedCity.city}</p>
              </div>
            </div>
          </div>
        )}

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 glass rounded-lg px-3 py-2">
          <p className="text-xs text-muted-foreground">Interactive Map</p>
        </div>

        {selectedCity && (
          <div className="absolute bottom-4 left-4 glass rounded-lg px-4 py-2">
            <p className="text-xs text-muted-foreground mb-1">Coordinates</p>
            <p className="text-sm font-semibold text-foreground">
              {selectedCity.lat.toFixed(2)}°, {selectedCity.lon.toFixed(2)}°
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveMap;
