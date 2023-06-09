import React from "react";
import { VStack } from "native-base";
import ChatInput from "./ChatInput";
import dynamic from "next/dynamic";
import { MessageChatBodySkeleton } from "./MessageChatBody";
import { MessageChatHeaderSkeleton } from "./MessageChatHeader";

const MessageChatSection = () => {
  const MessageChatBody = dynamic(() => import("./MessageChatBody"), {
    ssr: false,
    loading: () => <MessageChatBodySkeleton />,
  });

  const MessageChatHeader = dynamic(() => import("./MessageChatHeader"), {
    ssr: false,
    loading: () => <MessageChatHeaderSkeleton />,
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
