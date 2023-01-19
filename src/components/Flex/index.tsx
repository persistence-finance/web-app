import styled from "styled-components";

export const Bar = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 1.5rem;
`;

export const Row = styled.div`
  display: flex;
  gap: 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
  gap: 16px;
`;
