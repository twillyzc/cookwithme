import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
`;

export const HeaderWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto auto;
`;

export const HeaderSearch = styled.div`
  width: 250px;
  transition: 0.2s;
  grid-column: 2/3;
  grid-row: 1/-1;

  &:focus-within {
    width: 275px;
  }
`;

export const HeaderNav = styled.nav`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  flex: 0 1 100%;
  grid-column: 3/4;
  grid-row: 1/-1;
`;

export const NavItem = styled.li`
  padding: 0 10px;
`;

export const HeaderNavMenu = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavItemLink = styled(Link)`
  text-decoration: none;
  color: #6f4541;
  &:hover {
    color: #6f4541;
  }
`;
