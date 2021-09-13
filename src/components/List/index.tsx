import React from "react";
import styled from "styled-components";
import { ListSection } from "./ListSection";

const ListHeader = styled.h2`
  padding: 1rem;
  border-bottom: 3px solid #8b3032;
`;

const List = () => {
  return (
    <div>
      <ListHeader>FIND YOUR CLOSEST STOCKIST</ListHeader>
      <ListSection category="Countdown" />
      <ListSection category="New World" />
      <ListSection category="Moore Wilsons" />\
      <ListSection category="Gilmours" />
      <ListSection category="Other Stockists" />
    </div>
  );
};

export default List;
