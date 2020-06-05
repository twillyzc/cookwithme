import styled from "styled-components";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

export const SearchContainer = styled.div`
  position: relative;
  width: auto;
  display: flex;
  color: white;
`;

export const IconSearch = styled(SearchIcon)`
  position: absolute;
  display: flex;
  align-items: center;
  padding: 5px;
  color: inherit;
  z-index: 1;
`;

export const Input = styled(InputBase)`
  background-color: rgba(60, 79, 143, 0.7);
  color: inherit;
  border-radius: 4px;

  width: 300px;
  &:focus-within {
    width: 350px;
  }
  transition: 0.2s;
  padding-left: 40px;
`;
