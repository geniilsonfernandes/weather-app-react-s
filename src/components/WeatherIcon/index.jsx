import React from "react";
import P from "prop-types";
import * as S from "./styles";
import {
  ClearSky,
  BrokenClouds,
  FewClouds,
  Mist,
  Rain,
  ScatteredClouds,
  Snow,
  Thunderstorm,
  Compass,
} from "./Icons";

export const WeatherIcon = ({ icon, label, size }) => {
  switch (icon) {
    case "ClearSky":
      return (
        <S.Icon aria-label={label} size={size}>
          <ClearSky />
        </S.Icon>
      );
    case "BrokenClouds":
      return (
        <S.Icon aria-label={label} size={size}>
          <BrokenClouds />
        </S.Icon>
      );
    case "FewClouds":
      return (
        <S.Icon aria-label={label} size={size}>
          <FewClouds />
        </S.Icon>
      );
    case "Mist":
      return (
        <S.Icon aria-label={label} size={size}>
          <Mist />
        </S.Icon>
      );
    case "Rain":
      return (
        <S.Icon aria-label={label} size={size}>
          <Rain />
        </S.Icon>
      );
    case "ScatteredClouds":
      return (
        <S.Icon aria-label={label} size={size}>
          <ScatteredClouds />
        </S.Icon>
      );
    case "Snow":
      return (
        <S.Icon aria-label={label} size={size}>
          <Snow />
        </S.Icon>
      );
    case "Thunderstorm":
      return (
        <S.Icon aria-label={label} size={size}>
          <Thunderstorm />
        </S.Icon>
      );
    default:
      return (
        <S.Icon aria-label="Not found">
          <Compass />
        </S.Icon>
      );
  }
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

WeatherIcon.propTypes = {
  icon: P.oneOf(cases),
  label: P.string,
  size: P.number,
};
