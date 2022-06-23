import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 300px;
  margin: 0 auto;
`;
export const Menu = styled.nav``;

export const Link = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.white100};
  text-decoration: none;
  transition: all ease-in-out 200ms;
  cursor: pointer;
  background: none;
  height: 38px;
  padding: 0 16px;
  border-radius: 4px;
  z-index: 20;
  &:hover {
    color: ${({ theme }) => theme.colors.white500};
    background: ${({ theme }) => theme.colors.black300};
  }
`;
export const Place = styled.span`
  font-size: 1.6rem;
  color: inherit;
`;

const modalModifier = {
  open: () => css`
    transform: translateX(-50%) translateY(0);
    opacity: 1;
    pointer-events: initial;
  `,
};

export const Modal = styled.div`
  background: ${({ theme }) => theme.colors.black300};
  
  border-radius: 4px;
  padding: 4px 8px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-30px);
  transform-origin: center center;
  
  width: 300px;
  max-width: 300px;
  
  transition: all ease-in-out 100ms;
  opacity: 0;
  pointer-events: none;
  z-index: -10;
  
  ${({ isOpen }) => css`
    ${!!isOpen && modalModifier.open()}
  `}
`;

export const Tag = styled.span`
  display: flex;
  color: ${({ theme }) => theme.colors.white100};
  font-size: 1.3rem;
  padding: 4px 0;
`;
