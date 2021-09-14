import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { stores as rawStores, IStoreDetails } from "../constants/stores";

export interface IStoreContext {
  stores: IStoreDetails[];
  filter: string;
  filterStores: (type: string) => void;
  updateSearch: (bbox: [number, number, number, number]) => void;
  clearSearch: () => void;
}

export const StoreContext = createContext<IStoreContext>({
  stores: [],
  filter: "",
  filterStores: () => null,
  updateSearch: () => {},
  clearSearch: () => {},
});

export const StoreProvider: React.FC = ({ children }) => {
  const [stores, setStores] = useState<IStoreDetails[]>(rawStores);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (filter) {
      const filteredStores = rawStores.filter((x) => x.storeType === filter);
      setStores(filteredStores);
    } else {
      setStores(rawStores);
    }
  }, [filter]);

  const updateStoresByBoundingBox = (
    bbox: [number, number, number, number]
  ) => {
    const nextStores = stores.filter(({ lngLat }) => {
      const isInsideSouthwestBounds =
        lngLat[0] > bbox[0] && lngLat[1] > bbox[1];
      const isInsideNortheastBounds =
        lngLat[0] < bbox[2] && lngLat[1] < bbox[3];

      return isInsideNortheastBounds && isInsideSouthwestBounds;
    });
    setStores(nextStores);
  };

  return (
    <StoreContext.Provider
      value={{
        stores: stores,
        filter: filter,
        filterStores: setFilter,
        updateSearch: updateStoresByBoundingBox,
        clearSearch: () => {
          setStores(rawStores);
        },
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
