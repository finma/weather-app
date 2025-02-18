import qs from "query-string";
import { toast } from "sonner";
import { useCallback, useEffect, useState } from "react";

import { kelvinToCelsius } from "../../lib/utils";
import {
  clearIcon,
  cloudIcon,
  drizzleIcon,
  humidityIcon,
  rainIcon,
  searchIcon,
  snowIcon,
  windIcon,
} from "../../assets";
import {
  WeatherCard,
  WeatherDataIcon,
  WeatherDataItem,
  WeatherDataWrapper,
  WeatherIcon,
  WeatherInfo,
  WeatherLocation,
  WeatherSearchBar,
  WeatherSearchIcon,
  WeatherSearchInput,
  WeatherTemperature,
  WeatherWrapper,
} from "../styles/Weather.styled";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

interface WeatherIcon {
  icon: string;
  theme: string;
}

const allIcons: Record<string, WeatherIcon> = {
  "01d": { icon: clearIcon, theme: "clear" },
  "01n": { icon: clearIcon, theme: "clear" },
  "02d": { icon: cloudIcon, theme: "cloud" },
  "02n": { icon: cloudIcon, theme: "cloud" },
  "03d": { icon: cloudIcon, theme: "cloud" },
  "03n": { icon: cloudIcon, theme: "cloud" },
  "04d": { icon: drizzleIcon, theme: "drizzle" },
  "04n": { icon: drizzleIcon, theme: "drizzle" },
  "09d": { icon: rainIcon, theme: "rain" },
  "09n": { icon: rainIcon, theme: "rain" },
  "10d": { icon: rainIcon, theme: "rain" },
  "10n": { icon: rainIcon, theme: "rain" },
  "13d": { icon: snowIcon, theme: "snow" },
  "13n": { icon: snowIcon, theme: "snow" },
};

interface WeatherData {
  location: string;
  temperature: number;
  humidity: number;
  wind: number;
  icon: string;
  theme: string;
}

interface WeatherProps {
  setBackgroundTheme: (theme: string) => void;
}

const Weather = ({ setBackgroundTheme }: WeatherProps) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData>({
    location: "",
    temperature: 0,
    humidity: 0,
    wind: 0,
    icon: "",
    theme: "clear",
  });

  const search = useCallback(
    async (city: string) => {
      if (!city) {
        toast.error("Please enter a city");
        return;
      }

      try {
        const url = qs.stringifyUrl({
          url: BASE_URL,
          query: {
            q: city,
            appid: import.meta.env.VITE_APP_ID,
          },
        });

        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
          toast.error("City not found");
          return;
        }

        const weather = allIcons[data.weather[0].icon] || {
          icon: clearIcon,
          theme: "clear",
        };

        setWeatherData({
          location: data.name,
          temperature: kelvinToCelsius(data.main.temp),
          humidity: data.main.humidity,
          wind: data.wind.speed,
          icon: weather.icon,
          theme: weather.theme,
        });
        setBackgroundTheme(weather.theme);
        setSearchInput("");

        toast.success(`Successfully searched for ${city}`);
      } catch (error) {
        toast.error("Failed to fetch weather data");
      }
    },
    [setBackgroundTheme]
  );

  useEffect(() => {
    search("Jakarta");
  }, [search]);

  return (
    <WeatherWrapper>
      <WeatherCard weatherTheme={weatherData.theme}>
        <WeatherSearchBar>
          <WeatherSearchInput
            type="text"
            placeholder="Search city"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <WeatherSearchIcon
            src={searchIcon}
            alt="Search Icon"
            onClick={() => search(searchInput)}
          />
        </WeatherSearchBar>

        {weatherData.location && (
          <WeatherInfo key={weatherData.location}>
            <WeatherIcon src={weatherData.icon} alt="Weather Icon" />
            <WeatherTemperature>{weatherData.temperature}°c</WeatherTemperature>
            <WeatherLocation>{weatherData.location}</WeatherLocation>

            <WeatherDataWrapper>
              <WeatherDataItem>
                <WeatherDataIcon src={humidityIcon} alt="Humidity Icon" />
                <div>
                  <p>{weatherData.humidity}%</p>
                  <span>Humidity</span>
                </div>
              </WeatherDataItem>
              <WeatherDataItem>
                <WeatherDataIcon src={windIcon} alt="Wind Icon" />
                <div>
                  <p>{weatherData.wind} Km/h</p>
                  <span>Wind Speed</span>
                </div>
              </WeatherDataItem>
            </WeatherDataWrapper>
          </WeatherInfo>
        )}
      </WeatherCard>
    </WeatherWrapper>
  );
};

export default Weather;
