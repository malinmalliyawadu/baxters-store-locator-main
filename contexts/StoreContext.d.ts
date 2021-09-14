import React from "react";
import { IStoreDetails } from "../constants/stores";
export interface IStoreContext {
    stores: IStoreDetails[];
    filter: string;
    filterStores: (type: string) => void;
    updateSearch: (bbox: [number, number, number, number]) => void;
    clearSearch: () => void;
}
export declare const StoreContext: React.Context<IStoreContext>;
export declare const StoreProvider: React.FC;
