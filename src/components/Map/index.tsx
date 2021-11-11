import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import cuid from "cuid";
import mapboxgl from "mapbox-gl";
import { StoreContext } from "../../contexts/StoreContext";
import { MapContext } from "../../contexts/MapContext";
import { CountdownMarker } from "./CountdownMarker";
import { renderToString } from "react-dom/server";
import { NewWorldMarker } from "./NewWorldMarker";
import { GilmoursMarker } from "./GilmoursMarker";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 670px;
`;

const defaultMarkerHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="86" fill-rule="nonzero"><path d="M17.5 42.667a1.25 1.25 0 0 1-1.118-.691l-3.845-7.7A17.5 17.5 0 0 1 0 17.5C0 7.85 7.85 0 17.5 0S35 7.85 35 17.5a17.5 17.5 0 0 1-12.537 16.786l-3.845 7.7a1.25 1.25 0 0 1-1.118.691h0z" fill="#ff415b"/><path d="M17.5 0h-.01v25.703 16.963c.484 0 .917-.268 1.128-.69l3.845-7.7A17.5 17.5 0 0 0 35 17.5C35 7.85 27.15 0 17.5 0z" fill="#b20042"/><path d="M17.5 22.083c-2.1 0-4.066 6.09-5.75 5.083-3.29-1.965-5.5-5.563-5.5-9.667 0-6.203 5.047-11.25 11.25-11.25s11.25 5.047 11.25 11.25c0 4.207-2.32 7.882-5.75 9.81-1.627.916-3.504-5.228-5.5-5.228z" fill="#af9e8d"/><path d="M17.5 6.25h-.01v15.834c2.007-.001 3.884 6.143 5.5 5.227 3.43-1.93 5.75-5.604 5.75-9.81 0-6.203-5.047-11.25-11.25-11.25z" fill="#92796e"/><path d="M15.3 10.938c-.696 5.89-.734 6.362-1.54 7.028-1.057.872-1.558 1.56-2.04 2.938-.53 1.513-.46 4.143-.46 5.426a.95.95 0 0 0 .46.812c1.692 1.02 2.663 1.608 5.8 1.608s-.01-17.807-.01-17.812h-2.2z" fill="#d2433b"/><path d="M11.317 23.13c-.09 1.197-.067 2.436-.067 3.2a.95.95 0 0 0 .46.812c1.692 1.02 2.663 1.608 5.8 1.608 1.125 0 1.865-4.553.042-4.613-2.393 0-4.233-.192-6.225-1.006h0z" fill="#fed7a3"/><path d="M19.7 10.917c.696 5.89.734 6.363 1.54 7.028 1.057.873 1.558 1.56 2.04 2.938.53 1.513.46 4.143.46 5.426a.95.95 0 0 1-.46.812 11.18 11.18 0 0 1-5.79 1.608c-.001 0 .01-17.807.01-17.812h2.2z" fill="#ae3434"/><path d="M23.687 23.13c.09 1.197.067 2.436.067 3.2a.95.95 0 0 1-.46.812c-1.692 1.02-2.663 1.608-5.8 1.608l-.042-4.613c2.393 0 4.233-.192 6.225-1.006h0z" fill="#fed7a3"/><path d="M17.5 8.5h2.083c.322 0 .583.26.583.583v1.333c0 .322-.26.583-.583.583H17.5V8.5z" fill="#0b0b0b"/><path d="M17.5 8.5h-2.083c-.322 0-.583.26-.583.583v1.333c0 .322.26.583.583.583H17.5V8.5z" fill="#1b1b1b"/><path d="M17.505 28.75c.001.002.001-.8 0-2.406-.366-.27-.958-.404-1.776-.404s-1.45.202-1.893.607l.306.443-.748-.06c-.17-.022-.41-.067-.728-.135l.346.664-.346.25c1.2.735 2.813 1.082 4.84 1.04h0z" fill="#9d2636"/><path d="M17.5 28.75a509.93 509.93 0 0 1 0-2.406c.366-.27.958-.404 1.776-.404s1.45.202 1.893.607l-.306.443.747-.06c.17-.022.41-.067.728-.135l-.346.664.346.25c-1.2.735-2.813 1.082-4.838 1.04h0z" fill="#751724"/></svg>`;
const countdownMarkerHtml = renderToString(<CountdownMarker />);
const newWorldMarkerHtml = renderToString(<NewWorldMarker />);
const gilmoursMarkerHtml = renderToString(<GilmoursMarker />);

let markers: mapboxgl.Marker[] = [];

export const Map = () => {
  const { stores } = useContext(StoreContext);
  const { map, setMap } = useContext(MapContext);
  const { width } = useWindowDimensions();
  const id = `map${cuid()}`;

  useEffect(() => {
    markers.forEach((marker) => marker.remove());

    if (!map) {
      setMap(
        new mapboxgl.Map({
          container: id,
          style: "mapbox://styles/nigelwtf/ck9ax9u8h0za31ilsiktnl0cn",
          center: width > 400 ? [174.7762, -41.2865] : [180, -40.57],
          zoom: 4,
        })
      );
    }

    if (map) {
      markers = stores.map((store) => {
        const markerElement = document.createElement("div");
        markerElement.className = "mapbox-marker-element";

        switch (store.storeBrand) {
          case "Countdown":
            markerElement.innerHTML = countdownMarkerHtml;
            break;
          case "New World":
            markerElement.innerHTML = newWorldMarkerHtml;
            break;
          case "Gilmours":
            markerElement.innerHTML = gilmoursMarkerHtml;
            break;
          default:
            markerElement.innerHTML = defaultMarkerHtml;
        }

        const marker = new mapboxgl.Marker(markerElement)
          .setLngLat(store.lngLat)
          .addTo(map);

        return marker;
      });
    }
  });

  return <MapWrapper id={id} />;
};
