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
  max-height: 600px;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const FiltersBox = styled.div`
  position: relative;
  display: flex;
  padding: 0.5rem;
  margin-top: 0.5rem;
  z-index: 1;
  gap: 0.5rem;
  align-items: start;
  background: white;
  flex-direction: column;
  border-radius: 4px;
`;

const FiltersLabel = styled.div`
  margin-left: 0.5rem;
  font-weight: bold;
`;

const FiltersLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: solid 1px #dedede;
  padding-bottom: 0.1rem;
`;

const FilterButtonsContainer = styled.div`
  display: flex;
  gap: 2px;
`;

const ClearFilterButton = styled.button`
  padding: 0;
  background: transparent;
  border: none;
  color: rgb(139, 48, 50);
  cursor: pointer;

  :hover {
    color: rgb(71, 10, 11);
  }
`;

export const Sidebar = () => {
  const { filter, filterStores } = useContext(StoreContext);

  return (
    <SidebarWrapper>
      <Search />

      <FiltersBox>
        <FiltersLabelContainer>
          <FiltersLabel>Filters</FiltersLabel>
          {filter && (
            <ClearFilterButton onClick={() => filterStores("")}>
              Clear
            </ClearFilterButton>
          )}
        </FiltersLabelContainer>
        <FilterButtonsContainer>
          <FilterButton
            filter={filter}
            type={"Countdown"}
            onClick={filterStores}
          />
          <FilterButton
            filter={filter}
            type={"New World"}
            onClick={filterStores}
          />
          <FilterButton
            filter={filter}
            type={"Moore Wilsons"}
            onClick={filterStores}
          />
          <FilterButton
            filter={filter}
            type={"Wholesalers"}
            onClick={filterStores}
          />
          <FilterButton filter={filter} type={"Other"} onClick={filterStores} />
        </FilterButtonsContainer>
      </FiltersBox>

      <Stores />
    </SidebarWrapper>
  );
};
