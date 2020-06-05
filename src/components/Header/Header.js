import React from "react";
import Search from "../Search/Search";
import {
  HeaderSearch,
  HeaderContainer,
  HeaderNav,
  NavItem,
  HeaderNavMenu,
  NavItemLink,
} from "./Header-styles";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderNav>
          <HeaderNavMenu>
            <NavItem>
              <NavItemLink to="/">Home</NavItemLink>
            </NavItem>
            <NavItem>
              <NavItemLink to="/about">About</NavItemLink>
            </NavItem>

            {/*<Link to="/recipe/334354"><NavItem></NavItem></Link>*/}
            {/*<Link to="/"><NavItem></NavItem></Link>*/}
          </HeaderNavMenu>
        </HeaderNav>
        <HeaderSearch>
          <Search />
        </HeaderSearch>
      </HeaderContainer>
    );
  }
}

export default Header;
