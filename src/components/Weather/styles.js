import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const IconWrapper = styled.div`
  padding: 16px 0;
  width: 130px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Condition = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  line-height: 2.6rem;
  padding: 8px 0;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white[100]};
`;
export const Descripiton = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white[100]};
`;
export const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: 300;
  padding-top: 8px;
  color: ${({ theme }) => theme.colors.white[500]};
`;
export const Temp = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white[100]};
  padding-top: 8px;
`;
