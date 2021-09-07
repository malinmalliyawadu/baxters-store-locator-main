import React, { Component } from 'react';
import { IStoreDetails } from '../constants/stores';
export interface IStoreContext {
    stores: IStoreDetails[];
    updateSearch: (bbox: [number, number, number, number]) => void;
    clearSearch: () => void;
}
export declare const StoreContext: React.Context<IStoreContext>;
export declare class StoreProvider extends Component {
    state: {
        stores: IStoreDetails[];
    };
    updateStores(bbox: [number, number, number, number]): void;
    render(): JSX.Element;
}
