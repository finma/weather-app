import styled from "styled-components";

export const WeatherWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const WeatherCard = styled.div`
  padding: 40px;
  border-radius: 10px;
  background: ${({ theme }) => theme.wheater.clear.color2};
  background: linear-gradient(
    320deg,
    ${({ theme }) => theme.wheater.clear.color2} 0%,
    ${({ theme }) => theme.wheater.clear.color1} 100%
  );
`;

export const WeatherSearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 50px;
    height: 50px;
    padding: 12px;
    border-radius: 50%;
    background-color: #ebfffc;
    cursor: pointer;
  }
`;

export const WeatherSearchInput = styled.input`
  height: 50px;
  border: none; 
  outline: none;
  border-radius: 25px;
  padding-left: 20px;
  color: #626262
  background-color: #ebfffc;
  font-size: 18px;
`;

export const WeatherSearchIcon = styled.img`
  width: 50px;
  height: 50px;
  padding: 12px;
  border-radius: 50%;
  background-color: #ebfffc;
  cursor: pointer;
`;

export const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const WeatherIcon = styled.img`
  width: 150px;
  margin: 30px 0;
`;

export const WeatherTemperature = styled.p`
  color: #fff;
  font-size: 80px;
  line-height: 1;
`;

export const WeatherLocation = styled.p`
  color: #fff;
  font-size: 40px;
`;

export const WeatherDataWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  color: #fff;
  display: flex;
  justify-content: space-between;
`;

export const WeatherDataItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 22px;

  span {
    display: block;
    font-size: 16px;
  }
`;

export const WeatherDataIcon = styled.img`
  width: 26px;
  margin-top: 10px;
`;
