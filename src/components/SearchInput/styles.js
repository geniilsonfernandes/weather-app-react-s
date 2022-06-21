import styled from "styled-components";

export const Wrapper = styled.form`
  height: 52px;
  background: #343434;
  width: 100%;
  max-width: 500px;
  display: flex;
  border-radius: 4px;
  &:focus-within {
    box-shadow: 0 0 0 1px #dddddd;
  }
`;
export const WrapperIcon = styled.label`
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  background: none;

  color: #dddddd;
  font-size: 1.6rem;
  &::placeholder {
    color: #dddddd;
  }
`;
