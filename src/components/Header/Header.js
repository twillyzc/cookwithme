import React from "react";

import Search from "../Search/Search";

import {
  Container,
  SearchContainer,
  Link,
  Item,
  Menu,
  Nav,
  Wrapper,
} from "./Header-styles";

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Nav>
            <Menu>
              <Item>
                <Link to="/">Home</Link>
              </Item>
              <Item>
                <Link to="/about">About</Link>
              </Item>
            </Menu>
          </Nav>
          <SearchContainer>
            <Search />
          </SearchContainer>
        </Wrapper>
      </Container>
    );
  }
}

export default Header;
