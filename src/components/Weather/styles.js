import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WeatherIcon = styled.span``;
export const Content = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Condition = styled.h2`
  font-size: 3rem;
  line-height: 2.6rem;
  padding: 8px 0;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white100};
`;
export const Descripiton = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white100};
`;
export const Date = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  padding-top: 8px;
  color: ${({ theme }) => theme.colors.white500};
`;
export const Temp = styled.h1`
  font-size: 4.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white100};
  padding-top: 8px;
`;
