import React from "react";
import styled from "styled-components";
import { Disclosure } from "@headlessui/react";
import { stores } from "../../constants/stores";

const ChainHeader = styled.div`
  margin: 1rem;
  color: #333333;

  button {
    width: 100%;
    padding: 1rem;
    font-size: 1.3rem;
    text-align: left;
    border: none;
    cursor: pointer;
    position: relative;

    :hover {
      background-color: #d8a1a2;
    }

    :after {
      content: "▼";
      position: absolute;
      right: 1rem;
    }
  }
`;

const Store = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 1rem;

  flex: 1 1 25%;

  border-bottom: ${({ hasDivider }: { hasDivider?: boolean }) =>
    hasDivider ? "1px solid #e0e0e0" : "1px solid transparent"};
`;

const StoreLink = styled.a`
  text-decoration: none;
  color: #525255;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 2s;
  padding: 1rem;

  &:hover {
    color: rgb(139, 48, 50);
    background: rgba(139, 48, 50, 0.06);
  }
`;

const StoreWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const sortFn = (storeA: string, storeB: string): number => {
  const a = storeA.toUpperCase();
  const b = storeB.toUpperCase();

  if (a < b) return -1;
  if (a > b) return 1;
  // names must be equal
  return 0;
};

export const ListSection = ({ category }: { category: string }) => {
  const hasDivider = stores.length > 3;

  return (
    <Disclosure>
      <ChainHeader>
        <Disclosure.Button>{category}</Disclosure.Button>
      </ChainHeader>

      <Disclosure.Panel>
        <StoreWrapper>
          {stores
            .filter(
              (store) => (store.storeBrand || store.storeType) === category
            )
            .sort((storeA, storeB) => sortFn(storeA.name, storeB.name))
            .map((store) => {
              return (
                <Store
                  key={`list-section-store-${store.name}`}
                  hasDivider={hasDivider}
                >
                  <StoreLink href={store.href}>{store.name}</StoreLink>
                </Store>
              );
            })}
        </StoreWrapper>
      </Disclosure.Panel>
    </Disclosure>
  );
};
