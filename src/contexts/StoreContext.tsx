import React, { Component } from 'react';
import { createContext } from 'react';
import { stores, IStoreDetails } from '../constants/stores';

export interface IStoreContext {
  stores: IStoreDetails[];
  updateSearch: (bbox: [number, number, number, number]) => void;
  clearSearch: () => void;
}

export const StoreContext = createContext<IStoreContext>({
  stores: [],
  updateSearch: () => {},
  clearSearch: () => {}
});

export class StoreProvider extends Component {
  state: {
    stores: IStoreDetails[];
  } = {
    stores,
  }

  updateStores(bbox: [number, number, number, number]) {
    const nextStores = stores.filter(({ lngLat }) => {
      const isInsideSouthwestBounds = lngLat[0] > bbox[0] && lngLat[1] > bbox[1];
      const isInsideNortheastBounds = lngLat[0] < bbox[2] && lngLat[1] < bbox[3];

      return isInsideNortheastBounds && isInsideSouthwestBounds;
    });
    this.setState({ stores: nextStores });
  }

  render() {
    return (
      <StoreContext.Provider value={{
        stores: this.state.stores,
        updateSearch: this.updateStores.bind(this),
        clearSearch: () => { this.setState({ stores }); }
      }}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}
