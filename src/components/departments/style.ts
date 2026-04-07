import styled from "styled-components";

export const DepartamentsDiv = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  align-items: center;

  & span {
    font-weight: 800;
  }
`;

export const DepartamentsItem = styled.button<{ $active?: boolean }>`
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : "none"};
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral};
  padding: 4px 8px;
  border-radius: 6px;
  transition: background 0.3s ease;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primary};
  }
`

export const DepartamentsDivButton = styled.div`
  display: flex;
  gap: 5px;
`;
