import styled, { css } from "styled-components";

const wrapperModifer = {
  error: (theme) => css`
    box-shadow: 0 0 0 1px ${theme.colors.error};
    animation: shake-horizontal 0.3s ease-in-out both;
    &:focus-within {
      box-shadow: 0 0 0 1px ${theme.colors.error};
    }
    @keyframes shake-horizontal {
      0%,
      100% {
        transform: translateX(0);
      }
      20%,
      50%,
      60% {
        transform: translateX(-4px);
      }
      40%,
      80% {
        transform: translateX(4px);
      }
    }
    ${WrapperIcon} {
      svg {
        color: ${theme.colors.error} !important;
      }
    }
  `,
  loading: (theme) => css`
    background: ${theme.colors.black[200]};
    opacity: 0.6;
    cursor: not-allowed;
    &:focus-within {
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.black[300]};
    }
  `,
};

export const Wrapper = styled.form`
  ${({ error, isloading, theme }) => css`
    background: ${theme.colors.black[300]};
    height: 52px;
    width: 100%;
    max-width: 500px;
    display: flex;
    border-radius: 4px;
    position: relative;
    &:focus-within {
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.white[100]};
    }
    ${!!error && wrapperModifer.error(theme)}
    ${!!isloading && wrapperModifer.loading(theme)}
  `}
`;

export const WrapperIcon = styled.label`
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
  `}
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
  &:disabled {
    cursor: not-allowed;
  }
`;

export const Error = styled.span`
  position: absolute;
  bottom: -30px;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xsmall};
    color: ${theme.colors.error};
  `}
`;

export const DotsLoading = styled.span`
  position: absolute;
  right: 34px;
  top: 22px;

  width: 8px;
  height: 8px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white[300]};
  color: ${({ theme }) => theme.colors.white[300]};
  animation: dotFlashing 1s infinite linear alternate;
  animation-delay: 0.5s;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
  }

  &::before {
    left: -15px;
    width: 8px;
    height: 8px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.white[300]};
    color: ${({ theme }) => theme.colors.white[300]};
    animation: dotFlashing 1s infinite alternate;
    animation-delay: 0s;
  }

  &::after {
    left: 15px;
    width: 8px;
    height: 8px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.white[300]};
    color: ${({ theme }) => theme.colors.white[300]};
    animation: dotFlashing 1s infinite alternate;
    animation-delay: 1s;
  }

  @keyframes dotFlashing {
    0% {
      background-color: ${({ theme }) => theme.colors.white[300]};
    }
    50%,
    100% {
      background-color: ${({ theme }) => theme.colors.black[500]};
    }
  }
`;
