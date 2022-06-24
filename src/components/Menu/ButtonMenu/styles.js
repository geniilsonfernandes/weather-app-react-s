import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 36px;
`;

export const ButtonLabel = styled.button`
  width: 100%;
  height: 100%;
  padding: 0 8px;
  text-align: left;
  border: none;
  border-radius: 4px;
  background: none;
  transition: background ease-in-out 300ms;
  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-size: ${theme.fontSizes.normal};
    background: ${theme.colors.black[100]};
    &:hover {
      background: ${theme.colors.black[300]};
    }
    &:hover + button {
      opacity: 1;
    }
    &:focus + button {
      opacity: 1;
    }
  `}
  cursor: pointer;
`;

export const ButtonRemove = styled.button`
  position: absolute;
  padding: 2px 8px;
  right: 0;
  margin-right: 8px;
  top: 50%;
  transform: translateY(-50%);
  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-size: ${theme.fontSizes.xsmall};
    border-radius: ${theme.radius};
    border: 1px solid ${theme.colors.white[500]};
    background: none;
    opacity: 0.2;
    &:hover {
      background: ${theme.colors.black[400]};
      opacity: 1;
    }
    &:focus {
      background: ${theme.colors.black[400]};
      opacity: 1;
    }
  `}
  cursor: pointer;
`;
