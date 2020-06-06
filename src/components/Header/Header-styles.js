import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 70px;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr repeat(2, auto-fit);
`;

export const SearchContainer = styled.div`
  width: 250px;
  transition: 0.2s;
  grid-column: 2/3;
  grid-row: 1/-1;

  &:focus-within {
    width: 275px;
  }
`;

export const Nav = styled.nav`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  flex: 0 1 100%;
  grid-column: 3/4;
  grid-row: 1/-1;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

export const Link = styled(RouterLink)`
  &:hover {
    color: rgba(31, 32, 65, 0.5);
  }
`;
