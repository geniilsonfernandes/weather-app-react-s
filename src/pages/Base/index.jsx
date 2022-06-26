/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import P from "prop-types";
import { SearchInput } from "../../components/SearchInput";
import * as S from "./styles";
import { Container } from "../../components/Layout";
import { useDataContext } from "../../context/dataContext";

export const Base = ({ children }) => {
  const { fetchQuery, loading, error } = useDataContext();
  const handleSubmit = (query) => {
    fetchQuery(query);
  };

  return (
    <S.Main>
      <Container>
        <S.Header>
          <SearchInput
            onSubmit={handleSubmit}
            error={error}
            loading={loading}
          />
        </S.Header>
      </Container>

      {children}
    </S.Main>
  );
};

Base.propTypes = {
  children: P.node,
};
