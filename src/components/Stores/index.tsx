import React, { useContext } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "../../contexts/StoreContext";
import { MapContext } from "../../contexts/MapContext";
import { FastArrowRight } from "iconoir-react";

const StoresList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 70vh;
  overflow-y: auto;
  position: absolute;
  z-index: 1;
  display: block;
  width: 100%;
  border-radius: 4px;
`;

const Store = styled(motion.li)`
  margin: 0;
  border: solid 1px #8b3032;
  cursor: pointer;
  background: white;

  &:hover {
    background: #c79d9e;
  }
`;

const StoreHeader = styled.div`
  background: #8b3032;
  color: white;
  padding: 16px;
`;

const StoreBody = styled.div`
  padding: 16px;
  flex: 1;
`;

const StoreArrow = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 1rem;
`;

const StoreInfo = styled.div`
  display: flex;
`;

export const Stores = () => {
  const { stores } = useContext(StoreContext);
  const { map } = useContext(MapContext);

  return (
    <StoresList>
      <AnimatePresence>
        {stores.map((store) => (
          <Store
            positionTransition
            key={store.name}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => {
              if (map) {
                map.flyTo({
                  center: store.lngLat,
                  zoom: 16,
                  speed: 6,
                });
              }
            }}
          >
            <StoreHeader>{store.name}</StoreHeader>

            <StoreInfo>
              <StoreBody>
                {store.address}
                <br />
                {store.locality} {store.postcode}
                <br />
                {store.region}
                <br />
                <br />
                {store.phone}
              </StoreBody>

              <StoreArrow>
                <FastArrowRight width="2rem" height="2rem" />
              </StoreArrow>
            </StoreInfo>
          </Store>
        ))}
      </AnimatePresence>
    </StoresList>
  );
};
