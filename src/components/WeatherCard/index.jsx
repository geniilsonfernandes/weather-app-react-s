import React from "react";
import P from "prop-types";
import { WeatherIcon } from "../WeatherIcon/";

import * as S from "./styles";
import { convertTimeStamp } from "../../utils/convertTimeStamp";

export const WeatherCard = ({ iconCode, temp, date, condition }) => {
  return (
    <S.Wrapper>
      <S.Date>{convertTimeStamp(date).weekday}</S.Date>
      <S.Icon>
        <WeatherIcon iconCode={iconCode} label={condition} />
      </S.Icon>
      <S.Temp>{temp}°C</S.Temp>
    </S.Wrapper>
  );
};

WeatherCard.propTypes = {
  iconCode: P.number,
  date: P.number,
  temp: P.oneOfType([P.string, P.number]),
  condition: P.string,
};
