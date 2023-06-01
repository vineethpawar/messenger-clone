import { Box, VStack } from "native-base";
import React from "react";
import Searchbar from "./Searchbar";
import dynamic from "next/dynamic";
import { StatusSliderSkeletonUI } from "./StatusSlider";
import { MessageListSkeletonUI } from "./MessageList";

const StatusSlider = dynamic(() => import("./StatusSlider"), {
  loading: () => <StatusSliderSkeletonUI />,
  ssr: false,
});

const MessageList = dynamic(() => import("./MessageList"), {
  loading: () => <MessageListSkeletonUI />,
  ssr: false,
});

const Sidebar = () => {
  return (
    <VStack w={"100%"} flex={1}>
      <Searchbar />
      <StatusSlider />
      <MessageList />
    </VStack>
  );
};

export default Sidebar;
