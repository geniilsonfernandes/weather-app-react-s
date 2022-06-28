import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 650px;
  margin: 0 auto;
  padding: 8px;
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const SectionMenu = styled.div`
  max-width: 650px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  z-index: 100;
  position: relative;
`;
export const SectionWrapper = styled.div`
  max-width: 650px;
  ${({ margin = 0 }) => css`
    margin: ${margin}px 0;
  `}
`;

export const WeatherWrapper = styled(SectionWrapper)`
  margin-bottom: 32px;
`;

export const BoxWrapper = styled(SectionWrapper)`
  ${({ theme, margin }) => css`
    background: ${theme.colors.black[300]};
    border-radius: ${theme.radius};
    padding: 16px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin: ${margin}px 0;
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
      padding: 24px 16px;
    }
  `}
`;

export const SectionGrid = styled(SectionWrapper)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  padding: 0;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Loading = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  img {
    width: 100px;
    height: 100px;
  }
`;
