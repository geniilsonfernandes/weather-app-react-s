import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
`;
export const Menu = styled.nav``;

const ButtonModifiers = {
  active: (theme) => css`
    background: ${theme.colors.black[300]};
    svg {
      transform: rotate(-180deg);
    }
  `,
};
export const Button = styled.button`
  height: 38px;
  padding: 0 20px;
  display: flex;
  background: none;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  transition: all ease-in-out 200ms;
  ${({ theme, isOpen }) => css`
    color: ${theme.colors.white[100]};
    font-size: ${theme.fontSizes.small};
    border-radius: ${theme.radius};
    &:hover {
      color: ${theme.colors.white[500]};
      background: ${theme.colors.black[300]};
    }
    svg {
      transition: all ease-in-out 200ms;
    }
    ${!!isOpen && ButtonModifiers.active(theme)}
  `}
  cursor: pointer;
  z-index: 20;
`;

const modalModifier = {
  open: () => css`
    transform: translateX(-50%) translateY(0);
    opacity: 1;
    pointer-events: initial;
  `,
};
export const Modal = styled.div`
  padding: 8px 8px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-30px);
  transform-origin: center center;
  width: 400px;
  opacity: 0;
  pointer-events: none;
  transition: all ease-in-out 100ms;

  z-index: -10;
  ${({ theme, isOpen }) => css`
    background: ${theme.colors.black[300]};
    border-radius: ${theme.radius};
    ${!!isOpen && modalModifier.open()}
  `}
`;

export const Tag = styled.span`
  ${({ theme }) => css`
    display: flex;
    font-size: 1.2rem;
    padding-left: 8px;
    padding-bottom: 4px;
    color: ${theme.colors.white[100]};
    border-bottom: 1px solid ${theme.colors.black[400]};
  `}
`;

export const ModalContent = styled.div`
  padding-top: 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Span = styled.span`
  width: 100%;
  height: 32px;
  padding: 4px 8px;
  text-align: left;
  border: none;
  border-radius: 4px;
  background: none;
  transition: background ease-in-out 300ms;
  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-size: ${theme.fontSizes.xsmall};
    line-height: ${theme.fontSizes.large};
    background: ${theme.colors.black[300]};
    &:hover {
      background: ${theme.colors.black[400]};
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
