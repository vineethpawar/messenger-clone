import React from "react";
import MessageChatHeader from "./MessageChatHeader";
import { VStack } from "native-base";
import MessageChatBody from "./MessageChatBody";
import ChatInput from "./ChatInput";

const MessageChatSection = () => {
  return (
    <VStack px={4} flex={1}>
      <MessageChatHeader />
      <MessageChatBody />
      <ChatInput />
    </VStack>
  );
};

export default MessageChatSection;
