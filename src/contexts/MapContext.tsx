import React, { useState } from "react";
import mapboxgl from "mapbox-gl";
import { createContext } from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

mapboxgl.accessToken =
  "pk.eyJ1IjoibmlnZWx3dGYiLCJhIjoiY2s5OWJ5ZTY0MXFqNDNpbXluNnFyaW05bCJ9.KWrK94vejsU0tTA0DgbUeQ";

export interface IMapContext {
  map?: mapboxgl.Map;
  setMap: (map: mapboxgl.Map) => void;
  resetMap: () => void;
}

export const MapContext = createContext<IMapContext>({
  setMap: () => {},
  resetMap: () => {},
});

export const MapProvider: React.FC = ({ children }) => {
  const [map, setMap] = useState<mapboxgl.Map>();
  const { width } = useWindowDimensions();

  return (
    <MapContext.Provider
      value={{
        map: map,
        setMap: setMap,
        resetMap: () => {
          map?.flyTo({
            center: width > 400 ? [174.7762, -41.2865] : [166, -40.57],
            zoom: 4,
            speed: 8,
          });
        },
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
