import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
`;
export const Label = styled.button`
  ${({ theme }) => css`
    height: 48px;
    padding: 0 8px;
    background: ${theme.colors.black300};
    border-radius: ${theme.radius};
    width: 100%;

    color: ${theme.colors.white100};
    font-size: 1.4rem;
    font-weight: 400;
    text-align: left;
  `}
`;
export const ButtonRemove = styled.button`
  ${({ theme }) => css`
    position: absolute;
    padding: 2px 4px;

    right: 0;
    margin-right: 16px;
    top: 50%;
    transform: translateY(-50%);

    border-radius: ${theme.radius};
    background: none;
    color: ${theme.colors.white100};
    border: 1px solid ${theme.colors.white500}; ;
  `}
`;
