import { ScrollView } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import ChatItem from "../common/ChatItem";

const MessageChatBody = () => {
  const scrollViewRef = useRef();
  const [contentHeight, setContentHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleContentSizeChange = (contentWidth: number, height: number) => {
    setContentHeight(height);
  };

  useEffect(() => {
    if (
      scrollViewRef.current &&
      (scrollPosition <= contentHeight || scrollPosition === 0)
    ) {
      // @ts-ignore
      scrollViewRef?.current?.scrollToEnd({ animated: true });
    }
  }, [contentHeight, scrollPosition]);

  return (
    <ScrollView
      px={2}
      ref={scrollViewRef}
      showsVerticalScrollIndicator={false}
      _contentContainerStyle={{ mt: "auto", mb: "0" }}
      flex={1}
      onContentSizeChange={handleContentSizeChange}
      //   onScroll={handleScroll}
    >
      <ChatItem isMe />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem isMe />
      <ChatItem />
      <ChatItem />
      <ChatItem isMe />
      <ChatItem />
      <ChatItem />
      <ChatItem isMe />
    </ScrollView>
  );
};

export default MessageChatBody;
