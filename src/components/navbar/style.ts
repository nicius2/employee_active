import styled from "styled-components";

export const NavBarStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 24px;
`;

export const NavBarSearch = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  padding: 8px 16px;
  border-radius: 12px;
  border: 1px solid transparent;
  transition: border 0.3s ease;
  gap: 5px;
  border: 0.50px solid ${({theme}) => theme.colors.neutral};

  & input {
    background: none;
    border: none;
    font-size: 1rem;
    outline: none;
    color: ${({ theme }) => theme.colors.neutral};
    width: 280px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.secundary};
    }
  }
`;

export const NavBarFilterNotification = styled.div`
     display: flex;
     align-items: center;
     gap: 10px;

`