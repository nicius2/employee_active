import { Link } from "react-router";
import styled from "styled-components";

export const AsideTitle = styled.div`
  & h1 {
    font-size: 2rem;
    font-weight: 400;
  }

  & h3 {
    font-size: 16px;
    font-weight: 200;
  }
`;

export const AsideDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 100vh;
  justify-content: space-between;
`;

export const AsideTitleComponents = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;

  gap: 3rem;
  margin-bottom: 3rem;

  margin-top: 10px;
`;

export const AsideAllComponents = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 20px;
`;

export const AsideComponents = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 400;
  gap: 7px;
  cursor: pointer;
  padding: 6px 10px;
  font-size: 14px;
  color: aliceblue;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secundary};
    border-radius: 8px;
    border-right: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;
