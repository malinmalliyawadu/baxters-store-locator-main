import React from "react";
interface FilterButtonProps {
    type: string;
    filter: string;
    onClick: (type: string) => void;
}
export declare const FilterButton: React.FC<FilterButtonProps>;
export {};
