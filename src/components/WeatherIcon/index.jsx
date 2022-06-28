import React from "react";
import P from "prop-types";
import * as S from "./styles";
import { RiAlertFill } from "react-icons/ri";
export const WeatherIcon = ({ iconCode, label }) => {
  if (iconCode) {
    return (
      <S.Icon className={`owf owf-${iconCode}`} alt={label} title={label} />
    );
  } else {
    return <RiAlertFill aria-label="no found" title="no found" />;
  }
};

WeatherIcon.propTypes = {
  iconCode: P.number,
  label: P.string,
};
