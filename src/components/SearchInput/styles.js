import styled from "styled-components";

export const Wrapper = styled.form`
  height: 52px;
  background: ${({ theme }) => theme.colors.black[300]};
  width: 100%;
  max-width: 500px;
  display: flex;
  border-radius: 4px;
  &:focus-within {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.white[100]};
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

  color: ${({ theme }) => theme.colors.white[100]};
  font-size: ${({ theme }) => theme.fontSizes.normal};
  &::placeholder {
    color: ${({ theme }) => theme.colors.white[400]};
  }
`;
