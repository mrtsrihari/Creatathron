import { useEffect, useState } from "react";

interface WeatherAvatarProps {
  weather: string;
  temperature: number;
}

const WeatherAvatar = ({ weather, temperature }: WeatherAvatarProps) => {
  const [message, setMessage] = useState("");
  const [expression, setExpression] = useState("neutral");

  useEffect(() => {
    // Determine avatar expression and message based on weather
    switch (weather.toLowerCase()) {
      case "sunny":
        if (temperature > 35) {
          setExpression("hot");
          setMessage("Phew! It's scorching! Stay hydrated! 💧");
        } else {
          setExpression("happy");
          setMessage("What a beautiful sunny day! ☀️");
        }
        break;
      case "rainy":
        setExpression("umbrella");
        setMessage("Don't forget your umbrella! ☔");
        break;
      case "cloudy":
      case "partly cloudy":
        setExpression("neutral");
        setMessage("Looks a bit cloudy today! 🌥️");
        break;
      case "storm":
        setExpression("shocked");
        setMessage("Storm alert! Stay safe indoors! ⚡");
        break;
      case "snow":
        if (temperature < -10) {
          setExpression("freezing");
          setMessage("Brrr... Bundle up! It's freezing! 🧣");
        } else {
          setExpression("cold");
          setMessage("Let it snow! Stay warm! ❄️");
        }
        break;
      default:
        setExpression("neutral");
        setMessage("Have a great day!");
    }
  }, [weather, temperature]);

  const renderAvatar = () => {
    const baseClass = "transition-all duration-500";

    switch (expression) {
      case "happy":
        return (
          <div className={`${baseClass} relative`}>
            <div className="w-24 h-24 bg-sunny rounded-full flex items-center justify-center shadow-lg">
              <div className="text-5xl animate-float">😎</div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-sunny-light rounded-full animate-pulse" />
          </div>
        );
      case "hot":
        return (
          <div className={`${baseClass} relative`}>
            <div className="w-24 h-24 bg-destructive rounded-full flex items-center justify-center shadow-lg">
              <div className="text-5xl animate-bounce">🥵</div>
            </div>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 text-2xl animate-float">💦</div>
          </div>
        );
      case "umbrella":
        return (
          <div className={`${baseClass} relative`}>
            <div className="w-24 h-24 bg-rainy rounded-full flex items-center justify-center shadow-lg">
              <div className="text-5xl">😌</div>
            </div>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-4xl">☂️</div>
          </div>
        );
      case "shocked":
        return (
          <div className={`${baseClass} relative`}>
            <div className="w-24 h-24 bg-stormy rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <div className="text-5xl">😱</div>
            </div>
            <div className="absolute -top-2 right-0 text-3xl animate-lightning">⚡</div>
          </div>
        );
      case "freezing":
      case "cold":
        return (
          <div className={`${baseClass} relative`}>
            <div className="w-24 h-24 bg-snowy-ice rounded-full flex items-center justify-center shadow-lg">
              <div className="text-5xl animate-pulse">{expression === "freezing" ? "🥶" : "😊"}</div>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl">🧣</div>
          </div>
        );
      default:
        return (
          <div className={`${baseClass} relative`}>
            <div className="w-24 h-24 bg-cloudy rounded-full flex items-center justify-center shadow-lg">
              <div className="text-5xl animate-float">🙂</div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 animate-scale-in">
      {renderAvatar()}
      <div className="glass rounded-2xl px-6 py-3 max-w-xs text-center">
        <p className="text-sm font-medium text-foreground">{message}</p>
      </div>
    </div>
  );
};

export default WeatherAvatar;
