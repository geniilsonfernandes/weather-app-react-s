import React from "react";
import P from "prop-types";
import { SearchInput } from "../../components/SearchInput";
import * as S from "./styles";

export const Base = ({ children }) => {
  return (
    <S.Main>
      <S.Header>
        <SearchInput />
      </S.Header>
      {children}
    </S.Main>
  );
};

Base.propTypes = {
  children: P.node,
};
