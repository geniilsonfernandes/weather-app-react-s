import React from "react";
import * as S from "./styles";
import P from "prop-types";
import { WeatherIcon } from "../WeatherIcon";

export const Weather = ({ temp, description, condition, date, icon }) => {
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <WeatherIcon icon={icon} label={condition} />
      </S.IconWrapper>
      <S.Content>
        <S.Condition>{condition}</S.Condition>
        <S.Descripiton>{description}</S.Descripiton>
        <S.Date>{date}</S.Date>
        <S.Temp>{temp}°C</S.Temp>
      </S.Content>
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

Weather.propTypes = {
  temp: P.number,
  condition: P.string,
  icon: P.oneOf(cases),
  description: P.string,
  date: P.number,
};
