import { HStack, Box } from "native-base";
import React from "react";
import Sidebar from "../../components/Sidebar";
import MessageDetailsGroup from "../../components/MessageDetailsGroup";
import MessageChatSection from "../../components/MessageChatSection";

const Home = () => {
  return (
    <HStack p={{ base: 3, lg: 7 }} h={"100vh"} w={"100%"} bg="appBG">
      <Box p={4} minW={"340px"} maxW={"380px"} flex={1}>
        <Sidebar />
      </Box>
      <Box flex={3}>
        <MessageChatSection />
      </Box>
      <Box p={4} flex={1} minW={"340px"} maxW={"380px"}>
        <MessageDetailsGroup />
      </Box>
    </HStack>
  );
};

export default Home;
