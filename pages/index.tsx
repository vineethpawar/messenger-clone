import { Box, HStack } from "native-base";
import React from "react";
import Sidebar from "../components/Sidebar";

const App: React.FC = () => {
  return (
    <HStack p={{ base: 3, lg: 7 }} flex={1} bg="appBG">
      <Box p={4} maxW={"400px"} flex={1}>
        <Sidebar />
      </Box>
      <Box flex={3}></Box>
      <Box flex={1}></Box>
    </HStack>
  );
};

export default App;
