import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.black500};
  padding: 10px 16px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
`;

export const Date = styled.span`
  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white100};
`;
export const Icon = styled.div`
  padding: 8px 0;
`;
export const Temp = styled.h2`
  font-weight: 600;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white100};
`;
