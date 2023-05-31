import { Box, HStack } from "native-base";
import React from "react";
import Searchbar from "../components/Sidebar/Searchbar";

const App: React.FC = () => {
  return (
    <HStack p={{ base: 3, lg: 7 }} flex={1} bg="appBG">
      <Box p={4} maxW={"400px"} flex={1}>
        <Searchbar />
      </Box>
      <Box flex={3}></Box>
      <Box flex={1}></Box>
    </HStack>
  );
};

export default App;
