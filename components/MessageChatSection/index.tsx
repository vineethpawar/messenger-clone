import React from "react";
import MessageChatHeader from "./MessageChatHeader";
import { VStack } from "native-base";
import ChatInput from "./ChatInput";
import dynamic from "next/dynamic";
import { MessageChatBodySkeleton } from "./MessageChatBody";

const MessageChatSection = () => {
  const MessageChatBody = dynamic(() => import("./MessageChatBody"), {
    ssr: false,
    loading: () => <MessageChatBodySkeleton />,
  });
  return (
    <VStack px={4} flex={1}>
      <MessageChatHeader />
      <MessageChatBody />
      <ChatInput />
    </VStack>
  );
};

export default MessageChatSection;
