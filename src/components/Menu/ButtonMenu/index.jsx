import React from "react";
import * as S from "./styles";
import P from "prop-types";

export const ButtonMenu = ({ title, onClick, toolTipOnClick }) => {
  const handleClick = () => {
    !!onClick && onClick();
  };

  const handleToolTipClick = () => {
    !!toolTipOnClick && toolTipOnClick();
  };

  return (
    <S.Wrapper
      onClick={() => handleClick()}
      role="button"
      aria-label="place recente"
    >
      <S.ButtonLabel>{title}</S.ButtonLabel>

      <S.ButtonRemove onClick={() => handleToolTipClick()}>
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
