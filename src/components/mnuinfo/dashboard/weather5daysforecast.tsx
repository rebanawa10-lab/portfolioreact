// file:        weather5daysforecast.tsx
// source:      https://api.openweathermap.org
// remarks:     Weather Forecast: 5 days in 3-hour intervals


import { useEffect, useState } from "react";

type ForecastItem = {
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    main: string;  
    description: string;
    icon: string;   // Icon
  }[];
};

type ForecastResponse = {
  city: {
    name: string;
  };
  list: ForecastItem[];
};

function getBackgroundColor(weatherMain: string): string {
  switch (weatherMain.toLowerCase()) {
    case "clear":
      return "#ffd700"; // sunny yellow
    case "clouds":
      return "#b0c4de"; // light blue-gray
    case "rain":
      return "#87cefa"; // sky blue
    case "snow":
      return "#f0f8ff"; // icy white
    case "thunderstorm":
      return "#ff6347"; // tomato red
    case "drizzle":
      return "#add8e6"; // light blue
    case "mist":
    case "fog":
      return "#d3d3d3"; // gray
    default:
      return "#f4f6f8"; // default card color
  }
}

export default function WeatherWidget() {
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);

  useEffect(() => {
    const fetchForecast = async () => {

      const apiKey = import.meta.env.VITE_WEATHER_KEY;
      const city = "Singapore";

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
      );

      const data = await res.json();
      setForecast(data);
    };

    fetchForecast();
  }, []);

  if (!forecast) return <div>Loading forecast...</div>;

  // Filter to get one forecast per day (12:00 PM)
  const dailyForecast = forecast.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  );

  return (

    <div style={styles.card}>
      <h3 style={{ display: "none" }}>{forecast.city.name} - 5 Day Forecast</h3>

        <div style={styles.grid}>

            {dailyForecast.slice(0, 5).map((item, index) => {
                // Format date as "MMM-DD"
                const date = new Date(item.dt_txt);
                const formattedDate = date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit"
                });

                return (
                  <div key={index} style={{
                      ...styles.day, backgroundColor: getBackgroundColor(item.weather[0].main) 
                      }}  
                  >
                      <p><strong>{formattedDate}</strong></p>
                      <img
                          src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                          alt={item.weather[0].description}
                          style={{ width: "60px", height: "60px" }}
                      />
                      <p style={{ fontSize: "15px", margin: "2px 0" }}>{item.main.temp}°C</p>
                      <p style={{ fontSize: "12px", margin: "2px 0", textTransform: "capitalize" }}>{item.weather[0].description}</p>
                  </div>
                );
              })}

        </div>

    </div>

  );
}

const styles = {
  card: {
    flex: 1,
    width: "100%",  // ORIG: 770px -> 540px
    height: "220px",   // ORIG: 100%
    padding: "2px",     
    borderRadius: "16px",
    background: "#ffffff",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column" as const,
  }
,

 grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)", // 5 equal columns
    gap: "10px",
    marginTop: "1px"
  },
  day: {
    padding: "15px",
    background: "white",
    borderRadius: "10px",
    textAlign: "center" as const,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  }
};
