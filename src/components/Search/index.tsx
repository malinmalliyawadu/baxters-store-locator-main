import React, { useContext, useRef } from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";
// @ts-ignore
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { StoreContext } from "../../contexts/StoreContext";
import { MapContext } from "../../contexts/MapContext";

let geocoder: any;

const SearchHeader = styled.div`
  padding: 0;
  z-index: 2;
`;

export const Search = () => {
  const inputRef: React.RefObject<HTMLDivElement> = useRef(null);
  const { updateSearch, clearSearch } = useContext(StoreContext);
  const { map, resetMap } = useContext(MapContext);

  if (!geocoder && map && inputRef.current) {
    geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl,
      countries: "NZ",
      marker: false,
      types: "region,postcode,district,place,locality,neighborhood,address",
    });

    map.setPadding({ left: 500, top: 0, right: 0, bottom: 0 });

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );

    geocoder.on(
      "result",
      ({
        result,
      }: {
        result: {
          bbox: [number, number, number, number];
        };
      }) => {
        updateSearch(result.bbox);
      }
    );

    geocoder.on("clear", () => {
      resetMap();
      clearSearch();
    });

    inputRef.current.appendChild(geocoder.onAdd(map));
  }

  return (
    <SearchHeader>
      <div ref={inputRef}></div>
    </SearchHeader>
  );
};
