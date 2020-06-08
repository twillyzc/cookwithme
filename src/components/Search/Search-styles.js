import styled from "styled-components";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

export const Container = styled.div`
  position: relative;
  width: auto;
  display: flex;
  color: #403c40;
`;

export const Icon = styled(SearchIcon)`
  position: absolute;
  display: flex;
  align-items: center;
  color: rgba(31, 32, 65, 0.5);

  z-index: 1;
  justify-content: center;
  align-self: center;
  right: 10px;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    color: rgba(31, 32, 65, 0.75);
  }
`;

export const Input = styled(InputBase)`
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 20px;
  width: 100%;
  padding: 0 35px 0 20px;
  &:hover {
    border: 1px solid rgba(31, 32, 65, 0.5);
  }
`;
