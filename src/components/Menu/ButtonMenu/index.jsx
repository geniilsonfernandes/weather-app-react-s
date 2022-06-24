import React, { useState } from "react";
import * as S from "./styles";
import P from "prop-types";

export const ButtonMenu = ({ title, onClick, toolTipOnClick }) => {
  const [showRemove, setShowRemove] = useState(false);

  const handleClick = () => {
    !!onClick && onClick();
  };

  const handleToolTipClick = () => {
    !!toolTipOnClick && toolTipOnClick();
  };
  return (
    <S.Wrapper
      onMouseOver={() => setShowRemove(true)}
      onMouseLeave={() => setShowRemove(false)}
    >
      <S.Label onClick={() => handleClick()}>{title}</S.Label>
      {showRemove && (
        <S.ButtonRemove onClick={() => handleToolTipClick()}>
          Remove
        </S.ButtonRemove>
      )}
    </S.Wrapper>
  );
};

ButtonMenu.propTypes = {
  title: P.string,
  onClick: P.func,
  toolTipOnClick: P.func,
};
