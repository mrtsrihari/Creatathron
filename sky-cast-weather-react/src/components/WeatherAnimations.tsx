import { useEffect, useState } from "react";

interface WeatherAnimationsProps {
  weather: string;
}

const WeatherAnimations = ({ weather }: WeatherAnimationsProps) => {
  const [elements, setElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const weather_lower = weather.toLowerCase();
    let newElements: JSX.Element[] = [];

    if (weather_lower.includes("sunny")) {
      // Animated sun
      newElements.push(
        <div key="sun" className="absolute top-10 right-10 w-32 h-32 animate-rotate-sun">
          <div className="absolute inset-0 bg-sunny rounded-full blur-2xl opacity-50" />
          <div className="absolute inset-4 bg-sunny-light rounded-full shadow-xl" />
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 h-8 bg-sunny-light origin-bottom"
              style={{
                transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
              }}
            />
          ))}
        </div>
      );
    }

    if (weather_lower.includes("cloud")) {
      // Drifting clouds
      newElements.push(
        ...Array(3)
          .fill(null)
          .map((_, i) => (
            <div
              key={`cloud-${i}`}
              className="absolute animate-drift-cloud"
              style={{
                top: `${20 + i * 15}%`,
                animationDelay: `${i * 5}s`,
                animationDuration: `${20 + i * 10}s`,
              }}
            >
              <div className="relative w-24 h-16">
                <div className="absolute bottom-0 left-4 w-12 h-12 bg-cloudy rounded-full blur-sm opacity-70" />
                <div className="absolute bottom-0 left-0 w-16 h-10 bg-cloudy-dark rounded-full blur-sm opacity-60" />
                <div className="absolute bottom-0 right-0 w-14 h-8 bg-cloudy rounded-full blur-sm opacity-70" />
              </div>
            </div>
          ))
      );
    }

    if (weather_lower.includes("rain")) {
      // Falling raindrops
      newElements.push(
        ...Array(30)
          .fill(null)
          .map((_, i) => (
            <div
              key={`rain-${i}`}
              className="absolute w-0.5 h-8 bg-rainy animate-rain-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${0.5 + Math.random() * 0.5}s`,
              }}
            />
          ))
      );
    }

    if (weather_lower.includes("storm")) {
      // Storm with lightning
      newElements.push(
        <div key="lightning" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-stormy-flash animate-lightning opacity-0" />
          <div
            className="absolute top-1/4 left-1/3 w-1 h-32 bg-stormy-flash animate-lightning"
            style={{ clipPath: "polygon(50% 0%, 0% 40%, 50% 40%, 0% 100%, 100% 60%, 50% 60%)" }}
          />
        </div>
      );
      // Add rain for storms
      newElements.push(
        ...Array(40)
          .fill(null)
          .map((_, i) => (
            <div
              key={`storm-rain-${i}`}
              className="absolute w-0.5 h-10 bg-rainy-dark animate-rain-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${0.4 + Math.random() * 0.4}s`,
              }}
            />
          ))
      );
    }

    if (weather_lower.includes("snow")) {
      // Falling snowflakes
      newElements.push(
        ...Array(25)
          .fill(null)
          .map((_, i) => (
            <div
              key={`snow-${i}`}
              className="absolute text-snowy animate-snow-fall"
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${12 + Math.random() * 12}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              ❄
            </div>
          ))
      );
    }

    setElements(newElements);
  }, [weather]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements}
    </div>
  );
};

export default WeatherAnimations;
