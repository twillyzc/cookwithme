import React from "react";
import Search from "../Search/Search";
import {
  HeaderSearch,
  HeaderContainer,
  HeaderNav,
  NavItem,
  HeaderNavMenu,
  NavItemLink,
  HeaderWrapper,
} from "./Header-styles";

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderWrapper>
          <HeaderNav>
            <HeaderNavMenu>
              <NavItem>
                <NavItemLink to="/">Home</NavItemLink>
              </NavItem>
              <NavItem>
                <NavItemLink to="/about">About</NavItemLink>
              </NavItem>
            </HeaderNavMenu>
          </HeaderNav>
          <HeaderSearch>
            <Search />
          </HeaderSearch>
        </HeaderWrapper>
      </HeaderContainer>
    );
  }
}

export default Header;
