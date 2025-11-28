export interface WeatherData {
  city: string;
  country: string;
  lat: number;
  lon: number;
  weather: "Sunny" | "Cloudy" | "Rainy" | "Storm" | "Snow" | "Partly Cloudy";
  temperature: number;
  feelsLike: number;
  humidity: number;
  wind: number;
  visibility: number;
  pressure: number;
  forecast: ForecastDay[];
}

export interface ForecastDay {
  day: string;
  temp: number;
  minTemp: number;
  maxTemp: number;
  weather: "Sunny" | "Cloudy" | "Rainy" | "Storm" | "Snow" | "Partly Cloudy";
}

export const weatherDatabase: WeatherData[] = [
  {
    city: "Chennai",
    country: "India",
    lat: 13.08,
    lon: 80.27,
    weather: "Sunny",
    temperature: 32,
    feelsLike: 36,
    humidity: 65,
    wind: 12,
    visibility: 10,
    pressure: 1013,
    forecast: [
      { day: "Mon", temp: 31, minTemp: 27, maxTemp: 33, weather: "Sunny" },
      { day: "Tue", temp: 29, minTemp: 26, maxTemp: 32, weather: "Partly Cloudy" },
      { day: "Wed", temp: 30, minTemp: 27, maxTemp: 33, weather: "Sunny" },
      { day: "Thu", temp: 28, minTemp: 25, maxTemp: 31, weather: "Cloudy" },
      { day: "Fri", temp: 27, minTemp: 24, maxTemp: 30, weather: "Rainy" },
      { day: "Sat", temp: 29, minTemp: 26, maxTemp: 32, weather: "Partly Cloudy" },
      { day: "Sun", temp: 31, minTemp: 28, maxTemp: 34, weather: "Sunny" },
    ],
  },
  {
    city: "Mumbai",
    country: "India",
    lat: 19.07,
    lon: 72.87,
    weather: "Cloudy",
    temperature: 28,
    feelsLike: 31,
    humidity: 72,
    wind: 18,
    visibility: 8,
    pressure: 1010,
    forecast: [
      { day: "Mon", temp: 27, minTemp: 25, maxTemp: 29, weather: "Cloudy" },
      { day: "Tue", temp: 26, minTemp: 24, maxTemp: 28, weather: "Rainy" },
      { day: "Wed", temp: 25, minTemp: 23, maxTemp: 27, weather: "Rainy" },
      { day: "Thu", temp: 27, minTemp: 25, maxTemp: 29, weather: "Partly Cloudy" },
      { day: "Fri", temp: 28, minTemp: 26, maxTemp: 30, weather: "Sunny" },
      { day: "Sat", temp: 29, minTemp: 27, maxTemp: 31, weather: "Sunny" },
      { day: "Sun", temp: 27, minTemp: 25, maxTemp: 29, weather: "Cloudy" },
    ],
  },
  {
    city: "Delhi",
    country: "India",
    lat: 28.61,
    lon: 77.20,
    weather: "Partly Cloudy",
    temperature: 35,
    feelsLike: 39,
    humidity: 45,
    wind: 15,
    visibility: 9,
    pressure: 1008,
    forecast: [
      { day: "Mon", temp: 34, minTemp: 28, maxTemp: 38, weather: "Sunny" },
      { day: "Tue", temp: 36, minTemp: 30, maxTemp: 40, weather: "Sunny" },
      { day: "Wed", temp: 33, minTemp: 27, maxTemp: 37, weather: "Partly Cloudy" },
      { day: "Thu", temp: 31, minTemp: 26, maxTemp: 35, weather: "Cloudy" },
      { day: "Fri", temp: 29, minTemp: 24, maxTemp: 33, weather: "Rainy" },
      { day: "Sat", temp: 32, minTemp: 27, maxTemp: 36, weather: "Partly Cloudy" },
      { day: "Sun", temp: 35, minTemp: 29, maxTemp: 39, weather: "Sunny" },
    ],
  },
  {
    city: "Bangalore",
    country: "India",
    lat: 12.97,
    lon: 77.59,
    weather: "Rainy",
    temperature: 24,
    feelsLike: 23,
    humidity: 85,
    wind: 20,
    visibility: 6,
    pressure: 1012,
    forecast: [
      { day: "Mon", temp: 23, minTemp: 20, maxTemp: 26, weather: "Rainy" },
      { day: "Tue", temp: 22, minTemp: 19, maxTemp: 25, weather: "Rainy" },
      { day: "Wed", temp: 24, minTemp: 21, maxTemp: 27, weather: "Cloudy" },
      { day: "Thu", temp: 25, minTemp: 22, maxTemp: 28, weather: "Partly Cloudy" },
      { day: "Fri", temp: 26, minTemp: 23, maxTemp: 29, weather: "Sunny" },
      { day: "Sat", temp: 24, minTemp: 21, maxTemp: 27, weather: "Rainy" },
      { day: "Sun", temp: 23, minTemp: 20, maxTemp: 26, weather: "Rainy" },
    ],
  },
  {
    city: "London",
    country: "UK",
    lat: 51.50,
    lon: -0.12,
    weather: "Cloudy",
    temperature: 15,
    feelsLike: 13,
    humidity: 70,
    wind: 22,
    visibility: 7,
    pressure: 1015,
    forecast: [
      { day: "Mon", temp: 14, minTemp: 11, maxTemp: 17, weather: "Cloudy" },
      { day: "Tue", temp: 13, minTemp: 10, maxTemp: 16, weather: "Rainy" },
      { day: "Wed", temp: 15, minTemp: 12, maxTemp: 18, weather: "Partly Cloudy" },
      { day: "Thu", temp: 16, minTemp: 13, maxTemp: 19, weather: "Sunny" },
      { day: "Fri", temp: 14, minTemp: 11, maxTemp: 17, weather: "Cloudy" },
      { day: "Sat", temp: 12, minTemp: 9, maxTemp: 15, weather: "Rainy" },
      { day: "Sun", temp: 13, minTemp: 10, maxTemp: 16, weather: "Cloudy" },
    ],
  },
  {
    city: "New York",
    country: "USA",
    lat: 40.71,
    lon: -74.00,
    weather: "Sunny",
    temperature: 22,
    feelsLike: 21,
    humidity: 55,
    wind: 14,
    visibility: 10,
    pressure: 1016,
    forecast: [
      { day: "Mon", temp: 21, minTemp: 17, maxTemp: 25, weather: "Sunny" },
      { day: "Tue", temp: 23, minTemp: 19, maxTemp: 27, weather: "Sunny" },
      { day: "Wed", temp: 20, minTemp: 16, maxTemp: 24, weather: "Partly Cloudy" },
      { day: "Thu", temp: 19, minTemp: 15, maxTemp: 23, weather: "Cloudy" },
      { day: "Fri", temp: 18, minTemp: 14, maxTemp: 22, weather: "Rainy" },
      { day: "Sat", temp: 21, minTemp: 17, maxTemp: 25, weather: "Partly Cloudy" },
      { day: "Sun", temp: 22, minTemp: 18, maxTemp: 26, weather: "Sunny" },
    ],
  },
  {
    city: "Tokyo",
    country: "Japan",
    lat: 35.68,
    lon: 139.65,
    weather: "Partly Cloudy",
    temperature: 26,
    feelsLike: 28,
    humidity: 68,
    wind: 16,
    visibility: 9,
    pressure: 1011,
    forecast: [
      { day: "Mon", temp: 25, minTemp: 22, maxTemp: 28, weather: "Partly Cloudy" },
      { day: "Tue", temp: 24, minTemp: 21, maxTemp: 27, weather: "Cloudy" },
      { day: "Wed", temp: 23, minTemp: 20, maxTemp: 26, weather: "Rainy" },
      { day: "Thu", temp: 25, minTemp: 22, maxTemp: 28, weather: "Partly Cloudy" },
      { day: "Fri", temp: 27, minTemp: 24, maxTemp: 30, weather: "Sunny" },
      { day: "Sat", temp: 26, minTemp: 23, maxTemp: 29, weather: "Sunny" },
      { day: "Sun", temp: 24, minTemp: 21, maxTemp: 27, weather: "Cloudy" },
    ],
  },
  {
    city: "Sydney",
    country: "Australia",
    lat: -33.86,
    lon: 151.20,
    weather: "Sunny",
    temperature: 28,
    feelsLike: 30,
    humidity: 60,
    wind: 18,
    visibility: 10,
    pressure: 1014,
    forecast: [
      { day: "Mon", temp: 27, minTemp: 23, maxTemp: 31, weather: "Sunny" },
      { day: "Tue", temp: 29, minTemp: 25, maxTemp: 33, weather: "Sunny" },
      { day: "Wed", temp: 26, minTemp: 22, maxTemp: 30, weather: "Partly Cloudy" },
      { day: "Thu", temp: 24, minTemp: 20, maxTemp: 28, weather: "Cloudy" },
      { day: "Fri", temp: 23, minTemp: 19, maxTemp: 27, weather: "Rainy" },
      { day: "Sat", temp: 25, minTemp: 21, maxTemp: 29, weather: "Partly Cloudy" },
      { day: "Sun", temp: 28, minTemp: 24, maxTemp: 32, weather: "Sunny" },
    ],
  },
  {
    city: "Moscow",
    country: "Russia",
    lat: 55.75,
    lon: 37.61,
    weather: "Snow",
    temperature: -5,
    feelsLike: -10,
    humidity: 80,
    wind: 25,
    visibility: 4,
    pressure: 1020,
    forecast: [
      { day: "Mon", temp: -6, minTemp: -9, maxTemp: -3, weather: "Snow" },
      { day: "Tue", temp: -4, minTemp: -7, maxTemp: -1, weather: "Snow" },
      { day: "Wed", temp: -3, minTemp: -6, maxTemp: 0, weather: "Cloudy" },
      { day: "Thu", temp: -2, minTemp: -5, maxTemp: 1, weather: "Partly Cloudy" },
      { day: "Fri", temp: -5, minTemp: -8, maxTemp: -2, weather: "Snow" },
      { day: "Sat", temp: -7, minTemp: -10, maxTemp: -4, weather: "Snow" },
      { day: "Sun", temp: -6, minTemp: -9, maxTemp: -3, weather: "Cloudy" },
    ],
  },
  {
    city: "Singapore",
    country: "Singapore",
    lat: 1.35,
    lon: 103.81,
    weather: "Storm",
    temperature: 29,
    feelsLike: 34,
    humidity: 88,
    wind: 28,
    visibility: 5,
    pressure: 1009,
    forecast: [
      { day: "Mon", temp: 28, minTemp: 26, maxTemp: 31, weather: "Storm" },
      { day: "Tue", temp: 29, minTemp: 27, maxTemp: 32, weather: "Rainy" },
      { day: "Wed", temp: 30, minTemp: 28, maxTemp: 33, weather: "Partly Cloudy" },
      { day: "Thu", temp: 29, minTemp: 27, maxTemp: 32, weather: "Storm" },
      { day: "Fri", temp: 28, minTemp: 26, maxTemp: 31, weather: "Rainy" },
      { day: "Sat", temp: 30, minTemp: 28, maxTemp: 33, weather: "Sunny" },
      { day: "Sun", temp: 29, minTemp: 27, maxTemp: 32, weather: "Partly Cloudy" },
    ],
  },
  {
    city: "Dubai",
    country: "UAE",
    lat: 25.20,
    lon: 55.27,
    weather: "Sunny",
    temperature: 42,
    feelsLike: 48,
    humidity: 35,
    wind: 10,
    visibility: 10,
    pressure: 1005,
    forecast: [
      { day: "Mon", temp: 41, minTemp: 32, maxTemp: 45, weather: "Sunny" },
      { day: "Tue", temp: 43, minTemp: 34, maxTemp: 47, weather: "Sunny" },
      { day: "Wed", temp: 40, minTemp: 31, maxTemp: 44, weather: "Partly Cloudy" },
      { day: "Thu", temp: 39, minTemp: 30, maxTemp: 43, weather: "Sunny" },
      { day: "Fri", temp: 42, minTemp: 33, maxTemp: 46, weather: "Sunny" },
      { day: "Sat", temp: 44, minTemp: 35, maxTemp: 48, weather: "Sunny" },
      { day: "Sun", temp: 43, minTemp: 34, maxTemp: 47, weather: "Sunny" },
    ],
  },
  {
    city: "Paris",
    country: "France",
    lat: 48.85,
    lon: 2.35,
    weather: "Partly Cloudy",
    temperature: 18,
    feelsLike: 17,
    humidity: 62,
    wind: 12,
    visibility: 9,
    pressure: 1017,
    forecast: [
      { day: "Mon", temp: 17, minTemp: 13, maxTemp: 21, weather: "Partly Cloudy" },
      { day: "Tue", temp: 19, minTemp: 15, maxTemp: 23, weather: "Sunny" },
      { day: "Wed", temp: 16, minTemp: 12, maxTemp: 20, weather: "Cloudy" },
      { day: "Thu", temp: 15, minTemp: 11, maxTemp: 19, weather: "Rainy" },
      { day: "Fri", temp: 17, minTemp: 13, maxTemp: 21, weather: "Partly Cloudy" },
      { day: "Sat", temp: 20, minTemp: 16, maxTemp: 24, weather: "Sunny" },
      { day: "Sun", temp: 18, minTemp: 14, maxTemp: 22, weather: "Sunny" },
    ],
  },
];

export function searchCities(query: string): WeatherData[] {
  if (!query) return [];
  
  const lowerQuery = query.toLowerCase();
  return weatherDatabase.filter(
    (data) =>
      data.city.toLowerCase().includes(lowerQuery) ||
      data.country.toLowerCase().includes(lowerQuery)
  );
}

export function getCityWeather(city: string): WeatherData | null {
  return weatherDatabase.find((data) => data.city.toLowerCase() === city.toLowerCase()) || null;
}
