import React, { Component } from "react";
import reactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import { StoreProvider } from "./contexts/StoreContext";
import { MapProvider } from "./contexts/MapContext";
import { Map } from "./components/Map";
import { Sidebar } from "./components/Sidebar";

const App = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", "Helvetica Neue", Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
`;

class StoreLocator extends Component {
  render() {
    return (
      <MapProvider>
        <StoreProvider>
          <App>
            <GlobalStyles />
            <Sidebar />

            <Map />
          </App>
        </StoreProvider>
      </MapProvider>
    );
  }
}

reactDOM.render(<StoreLocator />, document.getElementById("store-locator"));
