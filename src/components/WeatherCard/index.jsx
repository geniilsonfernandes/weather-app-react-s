import React from "react";
import P from "prop-types";
import { WeatherIcon } from "../WeatherIcon/";

import * as S from "./styles";

export const WeatherCard = ({ icon, temp, date, condition }) => {
  return (
    <S.Wrapper>
      <S.Date>{date}</S.Date>
      <S.Icon>
        <WeatherIcon icon={icon} label={condition} />
      </S.Icon>
      <S.Temp>{temp}°C</S.Temp>
    </S.Wrapper>
  );
};
const cases = [
  "ClearSky",
  "BrokenClouds",
  "FewClouds",
  "Mist",
  "Rain",
  "ScatteredClouds",
  "Snow",
  "Thunderstorm",
];

WeatherCard.propTypes = {
  icon: P.oneOf(cases),
  date: P.number,
  temp: P.number,
  condition: P.string,
};
