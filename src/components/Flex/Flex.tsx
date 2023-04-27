import React from "react";
import * as SC from "./styles";

interface IFlex {
  children: React.ReactNode;
}

export const Flex = ({ children }: IFlex): JSX.Element => {
  return <SC.Container>{children}</SC.Container>;
};
