import React from "react";
import P from "prop-types";
import { SearchInput } from "../../components/SearchInput";
import * as S from "./styles";

export const Base = ({ children }) => {
  return (
    <S.Head>
      <SearchInput />
      {children}
    </S.Head>
  );
};

Base.propTypes = {
  children: P.node,
};
