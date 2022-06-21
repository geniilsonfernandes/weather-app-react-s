import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background: #444444;

  svg {
    transform: scale(1.4);
  }
`;

export const Content = styled.div``;
export const Title = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white100};
`;

export const Mesure = styled.h1`
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white100};
`;
