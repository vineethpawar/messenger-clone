import { Box, Pressable, ScrollView, Spinner, Text } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import ChatItem from "../common/ChatItem";
import { NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import IonIcon from "@reacticons/ionicons";

const MessageChatBody = () => {
  const scrollViewRef = useRef();
  const [messages, setMessages] = useState([]);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const [showScrollToBottomButton, setShowScrollToBottomButton] =
    useState(false);
  const [prevScrollOffset, setPrevScrollOffset] = useState(
    // @ts-ignore
    scrollViewRef.current?.contentOffset?.y
  );

  useEffect(() => {
    // Start from bottom
    // TODO: replace later to start from where messages are not read
    // @ts-ignore
    scrollViewRef.current.scrollToEnd({ animated: false });
  }, [scrollViewRef.current, scrollViewRef]);

  // useEffect(() => {
  //   // Simulating new message arrival
  //   const timer = setInterval(() => {
  //     const newMessage = `New Message ${messages.length + 1}`;
  //     // @ts-ignore
  //     setMessages((prevMessages) => [...prevMessages, newMessage]);
  //   }, 3000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [messages]);

  useEffect(() => {
    // Enable auto-scroll when new messages arrive and user is at the bottom
    if (autoScrollEnabled) {
      scrollToBottom();
    }
  }, [messages]);

  const scrollToBottom = () => {
    // @ts-ignore
    scrollViewRef.current.scrollToEnd({ animated: true });
    setAutoScrollEnabled(true);
    setShowScrollToBottomButton(false);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!autoScrollEnabled) {
      if (prevScrollOffset < event.nativeEvent.contentOffset.y) {
        setAutoScrollEnabled(true);
        setShowScrollToBottomButton(false);
      }
      setPrevScrollOffset(event.nativeEvent.contentOffset.y);
      return;
    }
    // const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    console.log("NE", event.nativeEvent.contentOffset.y);
    // Check if user scrolled to the top
    if (prevScrollOffset > event.nativeEvent.contentOffset.y) {
      setAutoScrollEnabled(false);
      setShowScrollToBottomButton(true);
    } else {
      setAutoScrollEnabled(true);
      setShowScrollToBottomButton(false);
    }
    setPrevScrollOffset(event.nativeEvent.contentOffset.y);
  };

  const handleContentSizeChange = (
    clientWidth: number,
    clientHeight: number
  ) => {
    if (autoScrollEnabled) {
      scrollToBottom();
    } else {
      setShowScrollToBottomButton(true);
    }
  };
  return (
    <Box position={"relative"} flex={1}>
      <ScrollView
        scrollEventThrottle={50}
        px={2}
        ref={scrollViewRef}
        showsVerticalScrollIndicator={
          // @ts-ignore
          scrollViewRef?.current?.scrollHeight > 1500 ? true : false
        }
        _contentContainerStyle={{ mt: "auto", mb: "0" }}
        flex={1}
        onContentSizeChange={handleContentSizeChange}
        onScroll={handleScroll}
      >
        <ChatItem isMe />
        <ChatItem />
        <ChatItem />
        <ChatItem isMe />
        <ChatItem />
        <ChatItem />
        {messages.map((message, index) => (
          <ChatItem key={index} />
        ))}
      </ScrollView>
      <Box position={"absolute"} bottom={0} w={"100%"} zIndex={100}>
        {showScrollToBottomButton && (
          <Pressable
            shadow={6}
            rounded={"full"}
            onPress={scrollToBottom}
            mx="auto"
            size={"30px"}
            bg="appPrimary"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <IonIcon
              name={"chevron-down"}
              style={{ fontSize: "14px", color: "white" }}
            />
          </Pressable>
        )}
      </Box>
    </Box>
  );
};

export const MessageChatBodySkeleton = () => {
  return (
    <Box alignItems={"center"} justifyContent={"center"} flex={1}>
      <Spinner color="light.400" size={"lg"} />
    </Box>
  );
};

export default MessageChatBody;
