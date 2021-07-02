import React from 'react';
import styled from 'styled-components';
import { Search } from '../Search';
import { Stores } from '../Stores';

const SidebarWrapper = styled.div`
  flex-basis: 40%;
  flex-shrink: 0;
`;

export const Sidebar = () => (
  <SidebarWrapper>
    <Search />
    <Stores />
  </SidebarWrapper>
)
