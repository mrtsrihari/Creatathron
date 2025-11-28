# ☀️ SkyCast - Your Personal Weather Companion

A beautiful, modern weather application built with React, TypeScript, and Tailwind CSS. SkyCast delivers stunning interactive weather forecasts with animated weather effects, intelligent avatars, and seamless user experience.

## ✨ Features

### 🔍 **Smart City Search**
- Real-time city search with auto-suggestions
- Displays temperature and weather at a glance
- Error handling for cities not found
- Click to instantly load complete weather data

### 🌤️ **Dynamic Weather Display**
- Current temperature with "feels like" calculation
- Comprehensive weather metrics (humidity, wind, visibility, pressure)
- Weather-reactive UI themes that change based on conditions
- Smooth temperature unit toggle (°C ↔ °F)
- Beautiful gradient cards matching weather conditions

### 🎨 **Weather Animations** (Pure CSS)
- **Sunny**: Rotating sun with rays
- **Cloudy**: Drifting clouds across the screen
- **Rainy**: Falling raindrops animation
- **Storm**: Lightning flashes with heavy rain
- **Snow**: Gentle falling snowflakes

### 📅 **7-Day Forecast Slider**
- Horizontal scrollable forecast cards
- Min/max temperature display
- Weather icons for each day
- Smooth entrance animations
- Hover effects for interactive feel

### 🌓 **Light & Dark Mode**
- Beautiful light and dark themes
- Smooth transitions between modes
- Automatic system preference detection
- Preference saved in localStorage

### 💾 **Smart Persistence**
- Last searched city automatically saved
- Temperature unit preference remembered
- Theme preference persisted
- Instant reload of previous session

### 🗺️ **Interactive Map**
- Visual representation of city location
- Animated pin drop with ripple effect
- Geographic coordinates display
- Smooth zoom animations
- Region highlighting

### 🤖 **Reactive Weather Avatar**
The avatar responds to weather conditions with personality:
- **Sunny**: Happy with sunglasses 😎
- **Hot (>35°C)**: Sweating and uncomfortable 🥵
- **Rainy**: Protected with umbrella ☔
- **Cloudy**: Neutral expression 🙂
- **Storm**: Shocked and worried 😱
- **Cold/Snow**: Shivering with scarf 🥶

Each expression includes helpful tips and messages!

### ⚡ **Micro-Interactions**
- Hover scaling effects on cards
- Input glow while typing
- Smooth fade and slide transitions
- Button ripple effects
- Skeleton loading states
- Scale-in animations for all major elements

## 🎯 Technical Highlights

### **Modern Tech Stack**
- **React 18** with TypeScript for type safety
- **Vite** for lightning-fast development
- **Tailwind CSS** with custom design system
- **Radix UI** for accessible components
- **Framer Motion** ready for advanced animations
- **Lucide React** for beautiful icons

### **Design System**
- Comprehensive HSL-based color palette
- Weather-specific color tokens (sunny, cloudy, rainy, stormy, snowy)
- Glassmorphism effects with backdrop blur
- Custom animation keyframes
- Responsive breakpoints
- Dark mode optimized

### **Data Management**
- Mock weather data for 12+ global cities
- Type-safe data structures
- Efficient search algorithms
- localStorage integration for persistence

### **Performance**
- Optimized animations with CSS transforms
- Efficient re-renders with React hooks
- Lazy loading and code splitting ready
- Mobile-first responsive design

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

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm installed

### Installation

1. **Clone the repository**
```bash
git clone <YOUR_GIT_URL>
cd skycast
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:8080`

### Build for Production
```bash
npm run build
npm run preview
```

## 🎨 Design Philosophy

SkyCast embraces **modern glassmorphism** with weather-reactive themes:
- **Dynamic backgrounds** that respond to weather conditions
- **Smooth animations** that don't overwhelm
- **Accessible design** with proper contrast ratios
- **Mobile-first** responsive approach
- **Performance-focused** with CSS-only animations where possible

## 🌐 Available Cities

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

## 🔮 Future Enhancements

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

## 📸 Screenshots

### Light Mode
_Beautiful daytime interface with sunny weather_

### Dark Mode  
_Elegant nighttime theme with storm effects_

### Mobile View
_Fully responsive design for all devices_

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

This project is open source and available under the MIT License.

## 👏 Acknowledgments

- Weather icons from Lucide React
- Inspiration from modern weather apps
- Built with Lovable's AI-powered development platform
- Mock weather data for demonstration purposes
