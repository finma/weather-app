import { clearIcon, humidityIcon, searchIcon, windIcon } from "../../assets";
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

const Weather = () => {
  return (
    <WeatherWrapper>
      <WeatherCard>
        <WeatherSearchBar>
          <WeatherSearchInput type="text" placeholder="Search city" />
          <WeatherSearchIcon src={searchIcon} alt="Search Icon" />
        </WeatherSearchBar>

        <WeatherInfo>
          <WeatherIcon src={clearIcon} alt="Weather Icon" />
          <WeatherTemperature>24°c</WeatherTemperature>
          <WeatherLocation>Majalengka</WeatherLocation>

          <WeatherDataWrapper>
            <WeatherDataItem>
              <WeatherDataIcon src={humidityIcon} alt="Humidity Icon" />
              <div>
                <p>91%</p>
                <span>Humidity</span>
              </div>
            </WeatherDataItem>
            <WeatherDataItem>
              <WeatherDataIcon src={windIcon} alt="Wind Icon" />
              <div>
                <p>3.6 Km/h</p>
                <span>Wind Speed</span>
              </div>
            </WeatherDataItem>
          </WeatherDataWrapper>
        </WeatherInfo>
      </WeatherCard>
    </WeatherWrapper>
  );
};

export default Weather;
