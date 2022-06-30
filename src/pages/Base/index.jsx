/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import P from "prop-types";
import { SearchInput } from "../../components/SearchInput";
import * as S from "./styles";
import { Container } from "../../components/Layout";
import { useDataContext } from "../../context/dataContext";

export const Base = ({ children }) => {
  const { getForecastByPlace, loading, error, sucess, data } = useDataContext();
  
  const handleSubmit = (query) => {
    getForecastByPlace(query);
  };

  return (
    <S.Main>
      <Container>
        <S.Header>
          <SearchInput
            onSubmit={handleSubmit}
            error={error}
            loading={loading}
            sucess={sucess}
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
