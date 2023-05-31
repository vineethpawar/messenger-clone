import { VStack } from "native-base";
import React from "react";
import Searchbar from "./Searchbar";

const Sidebar = () => {
  return (
    <VStack w={"100%"} maxW={"300px"}>
      <Searchbar />
    </VStack>
  );
};

export default Sidebar;
