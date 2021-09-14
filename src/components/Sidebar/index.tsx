import { StoreContext } from "../../contexts/StoreContext";
import React, { useContext } from "react";
import styled from "styled-components";
import { Search } from "../Search";
import { Stores } from "../Stores";
import { FilterButton } from "./FilterButton";

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
  padding: 0.5rem 0 0;
  z-index: 1;
  gap: 0.5rem;
  align-items: center;
`;

const FiltersLabel = styled.div`
  margin-left: 0.5rem;
`;

export const Sidebar = () => {
  const { filter, filterStores } = useContext(StoreContext);

  return (
    <SidebarWrapper>
      <Search />

      <FiltersBox>
        <FiltersLabel>Filters</FiltersLabel>
        <FilterButton
          filter={filter}
          type={"Supermarkets"}
          onClick={filterStores}
        />
        <FilterButton
          filter={filter}
          type={"Wholesalers"}
          onClick={filterStores}
        />
        <FilterButton
          filter={filter}
          type={"Other Stockists"}
          onClick={filterStores}
        />
        {filter && <button onClick={() => filterStores("")}>Clear</button>}
      </FiltersBox>

      <Stores />
    </SidebarWrapper>
  );
};
