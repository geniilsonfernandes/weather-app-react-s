import React from "react";
import * as S from "./styles";
import P from "prop-types";

const Weather = ({ temp, description, condition, date }) => {
  return (
    <S.Wrapper>
      <S.WeatherIcon>icon</S.WeatherIcon>
      <S.Content>
        <S.Condition>{condition}</S.Condition>
        <S.Descripiton>{description}</S.Descripiton>
        <S.Date>{date}</S.Date>
        <S.Temp>{temp}°C</S.Temp>
      </S.Content>
    </S.Wrapper>
  );
};

Weather.propTypes = {
  temp: P.number,
  condition: P.string,
  description: P.string,
  date: P.number,
};
export default Weather;
