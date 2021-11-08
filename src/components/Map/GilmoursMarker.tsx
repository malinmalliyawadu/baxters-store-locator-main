import React from "react";
import styled from "styled-components";
import icon from "../../images/gilmours-icon.png";

const Container = styled.div`
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
`;

export const GilmoursMarker = () => (
  <Container>
    <img src={icon} height={40} />
  </Container>
);
