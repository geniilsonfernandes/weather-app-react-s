import React from "react";
import * as S from "./styles";
import P from "prop-types";
import { WeatherIcon } from "../WeatherIcon";
import { convertTimeStamp } from "../../utils/convertTimeStamp";

export const Weather = ({ temp, description, condition, date, iconCode }) => {
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <WeatherIcon iconCode={iconCode} label={condition} />
      </S.IconWrapper>
      <S.Content>
        <S.Condition>{condition}</S.Condition>
        <S.Descripiton>{description}</S.Descripiton>
        <S.Date>{convertTimeStamp(date).fullDate}</S.Date>
        <S.Temp>{temp}°C</S.Temp>
      </S.Content>
    </S.Wrapper>
  );
};

Weather.propTypes = {
  temp: P.oneOfType([P.string, P.number]),
  condition: P.string,
  iconCode: P.number,
  description: P.string,
  date: P.number,
};
