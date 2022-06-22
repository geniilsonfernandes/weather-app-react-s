import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.black500};
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
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.white100};
  @media (max-width: 768px) {
    order: 0;
  }
`;
export const Icon = styled.div`
  padding: 16px 0;
  display: flex;
  align-items: center;
  svg {
    width: 48px;
    height: 48px;
  }
  @media (max-width: 768px) {
    order: 2;
    padding: 0;
    svg {
      width: 32px;
      height: 32px;
    }
  }
`;
export const Temp = styled.h2`
  font-weight: 600;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white100};
  @media (max-width: 768px) {
    order: 1;
    font-size: 1.8rem;
  }
`;
