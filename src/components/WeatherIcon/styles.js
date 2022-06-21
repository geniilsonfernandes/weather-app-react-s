import styled from "styled-components";

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: ${({ size }) => size + "px"};
    height: ${({ size }) => size + "px"};
  }
`;
