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
  max-height: 480px;
  bottom: 1rem;
  top: 5.5rem;
  overflow-y: auto;
  position: absolute;
  z-index: 1;
  display: block;
  width: 100%;
  border-radius: 4px;
`;

const Store = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  margin: 0;
  border-left: solid 10px #8b3032;
  border-bottom: 1px solid #e0e0e0;

  cursor: pointer;
  background: white;
  transition: background 0.5s;

  &:hover {
    background: #f5f5f5;
  }
`;

const StoreHeader = styled.div`
  font-weight: 500;
  font-size: 1rem;
  color: #8b3032;
  padding: 16px;
`;

const StoreBody = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;

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
  flex-direction: column;
`;

export const Stores = () => {
  const { stores } = useContext(StoreContext);
  const { map } = useContext(MapContext);

  return (
    <StoresList>
      <AnimatePresence>
        {stores.map((store) => (
          <Store
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
            <StoreInfo>
              <StoreHeader className="store-header">{store.name}</StoreHeader>

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
            </StoreInfo>
            <StoreArrow>
              <FastArrowRight width="32" height="32" />
            </StoreArrow>
          </Store>
        ))}
      </AnimatePresence>
    </StoresList>
  );
};
