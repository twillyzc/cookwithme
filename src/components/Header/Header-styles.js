import { Link as RouterLink } from "react-router-dom";

import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 90px;
  padding: 10px 10px;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SearchContainer = styled.div`
  width: 250px;
  transition: 0.2s;
  order: -1;

  &:focus-within {
    width: 275px;
  }
`;

export const Nav = styled.nav`
  list-style: none;
  display: flex;
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
