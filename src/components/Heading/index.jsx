import React from "react";
import P from "prop-types";

import * as S from "./styles";

export const Heading = ({ title }) => {
  return <S.Head>{title}</S.Head>;
};

Heading.propTypes = {
  title: P.string,
};
