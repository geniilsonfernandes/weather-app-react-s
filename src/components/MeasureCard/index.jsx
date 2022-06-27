import React from "react";
import P from "prop-types";

import * as S from "./styles";

export const MeasureCard = ({ title, icon, mesure, unit }) => {
  return (
    <S.Wrapper>
      {!!icon && <S.Icon>{icon}</S.Icon>}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Mesure>
          {mesure}
          {unit}
        </S.Mesure>
      </S.Content>
    </S.Wrapper>
  );
};

MeasureCard.propTypes = {
  icon: P.node,
  title: P.string,
  mesure: P.oneOfType([P.string, P.number]),
  unit: P.oneOf(["km/h", "%", "mbar", "°C"]),
};
