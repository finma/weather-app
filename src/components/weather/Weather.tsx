import qs from "query-string";
import { toast } from "sonner";
import { useEffect, useState } from "react";

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

const allIcons: Record<string, string> = {
  "01d": clearIcon,
  "01n": clearIcon,
  "02d": cloudIcon,
  "02n": cloudIcon,
  "03d": cloudIcon,
  "03n": cloudIcon,
  "04d": drizzleIcon,
  "04n": drizzleIcon,
  "09d": rainIcon,
  "09n": rainIcon,
  "10d": rainIcon,
  "10n": rainIcon,
  "13d": snowIcon,
  "13n": snowIcon,
};

const kelvinToCelsius = (k: number) => Math.floor(k - 273.15);

interface WeatherData {
  location: string;
  temperature: number;
  humidity: number;
  wind: number;
  icon: string;
}

const Weather = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData>({
    location: "",
    temperature: 0,
    humidity: 0,
    wind: 0,
    icon: "",
  });

  const search = async (city: string) => {
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

      const icon = allIcons[data.weather[0].icon] || clearIcon;

      setWeatherData({
        location: data.name,
        temperature: kelvinToCelsius(data.main.temp),
        humidity: data.main.humidity,
        wind: data.wind.speed,
        icon,
      });
      setSearchInput("");

      toast.success(`Successfully searched for ${city}`);
    } catch (error) {
      toast.error("Failed to fetch weather data");
    }
  };

  useEffect(() => {
    search("Jakarta");
  }, []);

  return (
    <WeatherWrapper>
      <WeatherCard>
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
