// file:        weather.tsx
// source:      https://api.openweathermap.org
// remarks:     Weather Today: Updated every 1 hour

import { useEffect, useState } from "react";

type WeatherData = {
  main: {
    temp: number;
  };
  weather: {
    main: string;          // e.g., Rain, Clear, Clouds
    description: string;
    icon: string;          // OpenWeather icon code
  }[];
  name: string;
};

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  // Set last updated time
  const [lastUpdated, setLastUpdated] = useState<string>("");

  useEffect(() => {
    const fetchWeather = async () => {
      
      const apiKey = import.meta.env.VITE_WEATHER_KEY;
      const city = "Singapore";

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );

      const data = await res.json();
      setWeather(data);

      // 🔥 Set last updated time
      const now = new Date();
      setLastUpdated(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );

    };

    fetchWeather();

    // Auto-update every 1 hour
    const interval = setInterval(fetchWeather, 1000 * 60 * 60);

    return () => clearInterval(interval); // cleanup
    
  }, []);

  if (!weather) return <div>Loading weather...</div>;

  const weatherMain = weather.weather[0].main;

  // Color coding based on weather type
  const bgColor = {
    Clear: "#FFD93D",
    Clouds: "#C0C0C0",
    Rain: "#4DA6FF",
    Drizzle: "#66CCFF",
    Thunderstorm: "#6666FF",
    Snow: "#FFFFFF",
    Mist: "#B0B0B0",
  }[weatherMain] || "#f4f6f8";

  // OpenWeather icon URL
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div style={{ ...styles.card, background: bgColor }}>
      <h3 style={{ fontSize: "16px", margin: "4px 0" }} >{weather.name}</h3>
      <img src={iconUrl} alt={weather.weather[0].description} style={{ width: "60px", height: "60px" }} />
      <p style={{ fontSize: "15px", margin: "2px 0" }}>{weather.main.temp}°C</p>
      <p style={{ fontSize: "12px", margin: "2px 0", textTransform: "capitalize" }}>{weather.weather[0].description}</p>
      <p style={{ fontSize: "11px", opacity: 0.6 }}> Last Updated: {lastUpdated}</p>
    </div> 
  );

}

const styles = {
  card: {
    flex: 1,
    width: "100%",   // 130px -> 95px
    height: "205px",  // 185px
    padding: "8px",
    borderRadius: "16px",
    background: "#ffffff",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column" as const,

    justifyContent: "center",   // 🔥 vertical center
    alignItems: "center",       // 🔥 horizontal center
    textAlign: "center" as const // 🔥 center text
  },

  lastUpdated: {
    fontSize: "11px",
    marginTop: "6px",
    opacity: 0.6,
  }

};
