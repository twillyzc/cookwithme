import styled from "styled-components";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

export const SearchContainer = styled.div`
  position: relative;
  width: auto;
  display: flex;
  color: #403c40;
`;

export const IconSearch = styled(SearchIcon)`
  position: absolute;
  display: flex;
  align-items: center;
  color: inherit;
  z-index: 1;
  justify-content: center;
  align-self: center;
  right: 10px;
`;

export const Input = styled(InputBase)`
  //background-color: #fff;
  border: 1px solid rgb(204, 86, 45, 0.3);
  color: #d6cead;
  border-radius: 20px;
  &:hover {
    border: 1px solid rgb(204, 86, 45, 0.7);
  }

  width: 100%;

  padding-left: 40px;
`;
