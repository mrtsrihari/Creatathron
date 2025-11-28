SkyCast - Your Personal Weather Companion
## 📁 Project Structure

```
skycast/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI components
│   │   ├── CitySearch.tsx   # City search with suggestions
│   │   ├── WeatherCard.tsx  # Main weather display
│   │   ├── ForecastSlider.tsx # 7-day forecast
│   │   ├── WeatherAnimations.tsx # Weather effects
│   │   ├── WeatherAvatar.tsx # Reactive avatar
│   │   ├── InteractiveMap.tsx # Location map
│   │   └── ThemeToggle.tsx  # Light/dark mode
│   ├── data/
│   │   └── weatherData.ts   # Mock weather database
│   ├── pages/
│   │   ├── Index.tsx        # Main app page
│   │   └── NotFound.tsx     # 404 page
│   ├── index.css            # Design system & animations
│   └── App.tsx              # App configuration
├── public/                   # Static assets
├── index.html               # SEO optimized HTML
├── tailwind.config.ts       # Tailwind configuration
└── README.md                # This file
```
## Available Cities

The app includes mock data for these cities:
- Chennai, India
- Mumbai, India  
- Delhi, India
- Bangalore, India
- London, UK
- New York, USA
- Tokyo, Japan
- Sydney, Australia
- Moscow, Russia
- Singapore
- Dubai, UAE
- Paris, France

## Future Enhancements

Potential features for future versions:
- [ ] Real weather API integration (OpenWeather, WeatherAPI)
- [ ] Hourly forecast view
- [ ] Weather alerts and notifications
- [ ] Multiple location tracking
- [ ] Weather history and trends
- [ ] Air quality index
- [ ] UV index and recommendations
- [ ] Precipitation probability graphs
- [ ] Share weather cards on social media
- [ ] Weather-based activity suggestions
- [ ] PWA support with offline functionality
- [ ] Geolocation auto-detection



