import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.black[300]};
  padding: 10px 16px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px 16px;
  }
`;

export const Date = styled.span`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  color: ${({ theme }) => theme.colors.white[400]};
  @media (max-width: 768px) {
    order: 0;
  }
`;
export const Icon = styled.div`
  padding: 16px 0;
  display: flex;
  align-items: center;
  font-size: 38px;
  @media (max-width: 768px) {
    padding: 0;
    font-size: 24px;
  }
`;
export const Temp = styled.h2`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.white[100]};
  @media (max-width: 768px) {
    order: 1;
    font-size: 1.8rem;
  }
`;
