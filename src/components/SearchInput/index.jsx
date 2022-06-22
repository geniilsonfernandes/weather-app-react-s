import React, { useState } from "react";
import P from "prop-types";
import { FiSearch } from "react-icons/fi";

import * as S from "./styles.js";

export const SearchInput = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChangeValue = (target) => {
    setValue(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    !!value && onSubmit(value);
  };

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.WrapperIcon htmlFor="search">
        <FiSearch aria-label="search icon button" color="#DDDDDD" size={18} />
      </S.WrapperIcon>
      <S.SearchInput
        value={value}
        placeholder="Search places"
        onChange={({ target }) => handleChangeValue(target)}
        type="text"
        id="search"
      />
    </S.Wrapper>
  );
};

SearchInput.propTypes = {
  onSubmit: P.func,
};
