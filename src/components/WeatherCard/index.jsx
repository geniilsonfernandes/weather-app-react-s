import React from "react";
import P from "prop-types";
import { WeatherIcon } from "../WeatherIcon/";

import * as S from "./styles";

export const WeatherCard = ({ icon }) => {
  return (
    <S.Wrapper>
      <S.Date>Sun, 20 Mar</S.Date>
      <S.Icon>
        <WeatherIcon size={48} icon={icon} />
      </S.Icon>
      <S.Temp>22°C</S.Temp>
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
  label: P.oneOf(cases),
};
