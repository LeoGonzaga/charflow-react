import React from "react";
import * as SC from "./styles";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Content from "../Content";
import Flex from "../Flex";

export const Layout = (): JSX.Element => {
  return (
    <SC.Container>
      <Header />
      <Flex>
        <Sidebar />
        <Content />
      </Flex>
    </SC.Container>
  );
};
