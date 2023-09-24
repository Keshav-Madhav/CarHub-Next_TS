import { MouseEventHandler } from "react";

export interface CustombuttonProps {
    title: string;
    containerStyles?: string;
    btnType?: "button" | "submit";
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}