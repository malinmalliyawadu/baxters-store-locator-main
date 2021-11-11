import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { stores as rawStores, IStoreDetails } from "../constants/stores";

export interface IStoreContext {
  stores: IStoreDetails[];
  filter: string;
  filterStores: (type: string) => void;
  clearSearch: () => void;
}

export const StoreContext = createContext<IStoreContext>({
  stores: [],
  filter: "",
  filterStores: () => null,
  clearSearch: () => {},
});

export const StoreProvider: React.FC = ({ children }) => {
  const [stores, setStores] = useState<IStoreDetails[]>(rawStores);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (filter) {
      const filteredStores = rawStores.filter(
        (x) => x.storeType.startsWith(filter) || x.storeBrand === filter
      );
      setStores(filteredStores);
    } else {
      setStores(rawStores);
    }
  }, [filter]);

  return (
    <StoreContext.Provider
      value={{
        stores: stores,
        filter: filter,
        filterStores: setFilter,
        clearSearch: () => {
          setStores(rawStores);
        },
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
