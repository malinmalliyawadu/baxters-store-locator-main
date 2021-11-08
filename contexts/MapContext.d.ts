import React from "react";
import mapboxgl from "mapbox-gl";
export interface IMapContext {
    map?: mapboxgl.Map;
    setMap: (map: mapboxgl.Map) => void;
    resetMap: () => void;
}
export declare const MapContext: React.Context<IMapContext>;
export declare const MapProvider: React.FC;
