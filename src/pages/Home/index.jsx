import React from "react";
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
import loadingImage from "../../image/loading.gif";
import * as S from "./styles";

export const Home = () => {
  const { data, currentPlace } = useDataContext();
  if (!data.name) {
    return (
      <S.Loading>
        {currentPlace && <p>pesquise uma cidade</p>}
        <img src={loadingImage} alt="loading" />
      </S.Loading>
    );
  } else {
    return (
      <S.Container>
        <S.SectionMenu>
          <Menu currentPlace={currentPlace.name} />
        </S.SectionMenu>
        <S.WeatherWrapper>
          <Weather
            temp={data.current.temp.toFixed()}
            condition={data.current.weather[0].main}
            description={data.current.weather[0].description}
            date={data.current.dt}
            iconCode={data.current.weather[0].id}
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
          <Heading title="Week | last 5 days" />
          <S.SectionGrid>
            {data.daily.slice(0, 5).map((temp) => (
              <WeatherCard
                key={temp.dt}
                temp={temp.temp.day.toFixed()}
                iconCode={temp.weather[0].id}
                date={temp.dt}
              />
            ))}
          </S.SectionGrid>
        </S.SectionWrapper>
      </S.Container>
    );
  }
};
