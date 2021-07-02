import React, { Component } from "react";
import reactDOM from "react-dom";
import styled from "styled-components";
import { StoreProvider } from "./contexts/StoreContext";
import { MapProvider } from "./contexts/MapContext";
import { Map } from "./components/Map";
import { Sidebar } from "./components/Sidebar";

const App = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 90vh;
  margin: 0;
  padding: 0;
`;

class StoreLocator extends Component {
  render() {
    return (
      <MapProvider>
        <StoreProvider>
          <App>
            <Sidebar />

            <Map />
          </App>
        </StoreProvider>
      </MapProvider>
    );
  }
}

reactDOM.render(<StoreLocator />, document.getElementById("store-locator"));
