/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import {
  WiStrongWind,
  WiRaindrop,
  WiBarometer,
  WiThermometer,
} from "react-icons/wi";
import { MeasureCard } from "../../components/MeasureCard";
import { Menu } from "../../components/Menu";
import { Weather } from "../../components/Weather";
import { Heading } from "../../components/Heading";
import { WeatherCard } from "../../components/WeatherCard";
import { useDataContext } from "../../context/dataContext";

import * as S from "./styles";

const mockWeather = {
  temp: 45,
  condition: "Clear sky",
  description: "Low rain",
  date: 10101000,
};
const mockWeatherCard = [
  {
    date: 123456,
    temp: 10,
    icon: "Rain",
    condition: "low rain",
  },
  {
    date: 123456,
    temp: 20,
    icon: "Rain",
    condition: "low rain",
  },
  {
    date: 123456,
    temp: 30,
    icon: "Rain",
    condition: "low rain",
  },
  {
    date: 123456,
    temp: 40,
    icon: "Rain",
    condition: "low rain",
  },
  {
    date: 123456,
    temp: 50,
    icon: "Rain",
    condition: "low rain",
  },
];

export const Home = () => {
  const { loading, data, error, state } = useDataContext();

  if (!data.name) {
    return <span>no have data</span>;
  } else {
    return (
      <S.Container>
        <S.SectionMenu>
          <Menu />
        </S.SectionMenu>
        <S.WeatherWrapper>
          <Weather
            temp={data.current.temp.toFixed()}
            condition={data.current.weather[0].main}
            description={data.current.weather[0].description}
            date={data.current.dt}
          />
        </S.WeatherWrapper>
        <S.BoxWrapper margin="16">
          <MeasureCard
            title="Wind"
            unit="km/h"
            mesure={data.current.wind_speed}
            icon={<WiStrongWind aria-label="Wind" />}
          />
          <MeasureCard
            title="Pressure"
            unit="mbar"
            mesure={data.current.pressure}
            icon={<WiBarometer aria-label="Pressure" />}
          />
          <MeasureCard
            title="Humidity"
            unit="%"
            mesure={data.current.humidity}
            icon={<WiRaindrop aria-label="Humidity" />}
          />
          <MeasureCard
            title="Feels like"
            unit="°C"
            mesure={data.current.feels_like}
            icon={<WiThermometer aria-label="Feels like" />}
          />
        </S.BoxWrapper>
        <S.SectionWrapper>
          <Heading title="Week" />
          <S.SectionGrid>
            {mockWeatherCard.map((item) => (
              <WeatherCard key={item.temp} {...item} />
            ))}
          </S.SectionGrid>
        </S.SectionWrapper>
      </S.Container>
    );
  }
};
