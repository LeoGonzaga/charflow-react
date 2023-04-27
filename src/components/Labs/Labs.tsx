import React from "react";
import * as SC from "./styles";

interface User {
  name: string;
  age: number;
}

export const Labs = (): JSX.Element => {
  const user: User = {
    name: "leo",
  };
  return <SC.Container />;
};
