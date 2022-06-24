import React from "react";
import P from "prop-types";
import { SearchInput } from "../../components/SearchInput";
import * as S from "./styles";
import { Container } from "../../components/Layout";

export const Base = ({ children }) => {
  return (
    <S.Main>
      <Container>
        <S.Header>
          <SearchInput />
        </S.Header>
      </Container>

      {children}
    </S.Main>
  );
};

Base.propTypes = {
  children: P.node,
};
