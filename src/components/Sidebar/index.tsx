import React from "react";
import styled from "styled-components";
import { Search } from "../Search";
import { Stores } from "../Stores";

const SidebarWrapper = styled.div`
  position: absolute;
  left: 2rem;
  top: 2rem;
  width: 400px;
`;

export const Sidebar = () => (
  <SidebarWrapper>
    <Search />
    <Stores />
  </SidebarWrapper>
);
