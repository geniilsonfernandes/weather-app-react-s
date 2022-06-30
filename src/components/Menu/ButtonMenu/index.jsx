import React from "react";
import * as S from "./styles";
import P from "prop-types";

export const ButtonMenu = ({ title, onClick, toolTipOnClick }) => {
  const handleClick = () => {
    !!onClick && onClick(title);
  };

  const handleToolTipClick = () => {
    !!toolTipOnClick && toolTipOnClick(title);
  };

  return (
    <S.Wrapper role="button" aria-label="place recente">
      <S.ButtonLabel onClick={() => handleClick(title)}>{title}</S.ButtonLabel>
      <S.ButtonRemove
        onClick={() => handleToolTipClick()}
      >
        Remove
      </S.ButtonRemove>
    </S.Wrapper>
  );
};

ButtonMenu.propTypes = {
  title: P.string,
  onClick: P.func,
  toolTipOnClick: P.func,
};
