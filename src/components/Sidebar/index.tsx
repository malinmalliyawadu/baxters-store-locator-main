import React from "react";
import styled from "styled-components";
import { Search } from "../Search";
import { Stores } from "../Stores";

const SidebarWrapper = styled.div`
  position: absolute;
  left: 2rem;
  top: 2rem;
  bottom: 2rem;
  width: 460px;
  height: 85vh;
`;

const FiltersBox = styled.div`
  position: relative;
  display: flex;
  padding: 1rem 0 0;
  z-index: 1;
  gap: 0.5rem;
  align-items: center;
`;

const FilterButton = styled.button`
  border-radius: 1rem;
  border: solid 1px #333;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
`;

const FiltersLabel = styled.div`
  margin-left: 1rem;
`;

export const Sidebar = () => (
  <SidebarWrapper>
    <Search />

    <FiltersBox>
      <FiltersLabel>Filters:</FiltersLabel>
      <FilterButton>
        {/* <Check /> */}
        Supermarkets
      </FilterButton>
      <FilterButton>
        {/* <Check /> */}
        Wholesalers
      </FilterButton>
      <FilterButton>
        {/* <Check /> */}
        Other stockists
      </FilterButton>
    </FiltersBox>

    <Stores />
  </SidebarWrapper>
);
