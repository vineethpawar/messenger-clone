import { Box, HStack } from "native-base";
import React from "react";
import Sidebar from "../components/Sidebar";

const App: React.FC = () => {
  return (
    <HStack p={{ base: 3, lg: 7 }} h={"100vh"} w={"100%"} bg="appBG">
      <Box p={4} minW={"340px"} maxW={"400px"} flex={1}>
        <Sidebar />
      </Box>
      <Box flex={3}></Box>
      <Box flex={1}></Box>
    </HStack>
  );
};

export default App;
