/* eslint-disable no-unused-vars */
import React from "react";
import { WiStrongWind } from "react-icons/wi";
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

  return (
    <S.Container>
      <S.SectionMenu>
        <Menu />
      </S.SectionMenu>
      <S.WeatherWrapper>
        <Weather {...mockWeather} />
      </S.WeatherWrapper>
      <S.BoxWrapper margin="16">
        <MeasureCard
          title="Wind"
          mesure="10km/h"
          icon={<WiStrongWind aria-label="Wind" />}
        />
        <MeasureCard
          title="Pressure"
          mesure="963 mbar"
          icon={<WiStrongWind aria-label="Wind" />}
        />
        <MeasureCard
          title="Humidity"
          mesure="80%"
          icon={<WiStrongWind aria-label="Wind" />}
        />
        <MeasureCard
          title="Precipitation"
          mesure="80%"
          icon={<WiStrongWind aria-label="Wind" />}
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
};
