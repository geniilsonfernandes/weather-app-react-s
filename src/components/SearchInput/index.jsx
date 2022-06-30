import React, { useEffect, useState } from "react";
import P from "prop-types";
import { FiSearch } from "react-icons/fi";

import * as S from "./styles.js";

export const SearchInput = ({ onSubmit, error, loading, sucess }) => {
  const [value, setValue] = useState("");
  const [prevValue, setPrevValue] = useState("");

  const handleChangeValue = (target) => {
    setValue(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    !!value && onSubmit(value);
    setPrevValue(value);
  };
  useEffect(() => {
    sucess ? setValue("") : setValue(prevValue);
  }, [sucess]);

  return (
    <S.Wrapper onSubmit={handleSubmit} error={error} isloading={loading}>
      <S.WrapperIcon htmlFor="search">
        <FiSearch aria-label="search icon button" size={18} />
      </S.WrapperIcon>
      <S.SearchInput
        value={value}
        placeholder="Search places"
        onChange={({ target }) => handleChangeValue(target)}
        type="text"
        id="search"
        disabled={loading}
      />
      {!!error && <S.Error>{error}</S.Error>}
      {!!loading && <S.DotsLoading aria-label="loading"></S.DotsLoading>}
    </S.Wrapper>
  );
};

SearchInput.propTypes = {
  onSubmit: P.func,
  error: P.oneOfType([P.string, P.bool]),
  loading: P.bool,
  sucess: P.bool,
};
