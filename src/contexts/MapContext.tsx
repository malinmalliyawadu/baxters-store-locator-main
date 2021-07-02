import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { createContext } from 'react';

mapboxgl.accessToken = 'pk.eyJ1IjoibmlnZWx3dGYiLCJhIjoiY2s5OWJ5ZTY0MXFqNDNpbXluNnFyaW05bCJ9.KWrK94vejsU0tTA0DgbUeQ';

export interface IMapContext {
  map?: mapboxgl.Map;
  setMap: (map: mapboxgl.Map) => void;
  resetMap: () => void;
}

export const MapContext = createContext<IMapContext>({
  setMap: () => {},
  resetMap: () => {},
});

export class MapProvider extends Component {
  state: {
    map?: mapboxgl.Map;
  } = {};

  setMap(map: mapboxgl.Map) {
    this.setState({ map });
  }

  render() {
    return (
      <MapContext.Provider value={{
        map: this.state.map,
        setMap: this.setMap.bind(this),
        resetMap: () => {
          this.state.map?.flyTo({
            center: [174.7762, -41.2865],
            zoom: 4,
            speed: 8,
          })
        }
      }}>
        {this.props.children}
      </MapContext.Provider>
    )
  }
}
