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

export const WeatherIcon = ({ icon, label }) => {
  switch (icon) {
    case "ClearSky":
      return (
        <S.Icon aria-label={label}>
          <ClearSky />
        </S.Icon>
      );
    case "BrokenClouds":
      return (
        <S.Icon aria-label={label}>
          <BrokenClouds />
        </S.Icon>
      );
    case "FewClouds":
      return (
        <S.Icon aria-label={label}>
          <FewClouds />
        </S.Icon>
      );
    case "Mist":
      return (
        <S.Icon aria-label={label}>
          <Mist />
        </S.Icon>
      );
    case "Rain":
      return (
        <S.Icon aria-label={label}>
          <Rain />
        </S.Icon>
      );
    case "ScatteredClouds":
      return (
        <S.Icon aria-label={label}>
          <ScatteredClouds />
        </S.Icon>
      );
    case "Snow":
      return (
        <S.Icon aria-label={label}>
          <Snow />
        </S.Icon>
      );
    case "Thunderstorm":
      return (
        <S.Icon aria-label={label}>
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
  label: P.oneOf(cases),
};
