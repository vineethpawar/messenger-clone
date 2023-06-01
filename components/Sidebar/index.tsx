import { VStack } from "native-base";
import React from "react";
import Searchbar from "./Searchbar";
import StatusSlider from "./StatusSlider";

const Sidebar = () => {
  return (
    <VStack w={"100%"} maxW={"300px"}>
      <Searchbar />
      <StatusSlider />
    </VStack>
  );
};

export default Sidebar;
