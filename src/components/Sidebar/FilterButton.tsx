import { Check } from "iconoir-react";
import React from "react";
import styled from "styled-components";

const Button = styled.button<{ $selected: boolean }>`
  border-radius: 1rem;
  border: solid 1px #333;
  cursor: pointer;
  padding: 0.25rem 0.4rem;
  display: flex;
  align-items: center;
  background: ${({ $selected }) => ($selected ? "rgb(139, 48, 50)" : "#ddd")};
  color: ${({ $selected }) => ($selected ? "white" : "black")};
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
`;

interface FilterButtonProps {
  type: string;
  filter: string;
  onClick: (type: string) => void;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  type,
  filter,
  onClick,
}) => {
  return (
    <Button onClick={() => onClick(type)} $selected={filter === type}>
      {filter === type && <Check />}
      {type}
    </Button>
  );
};
