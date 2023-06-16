import { Box, Pressable, ScrollView, Spinner, Text } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import ChatItem from "../common/ChatItem";
import { NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import IonIcon from "@reacticons/ionicons";
import pubnub from "../../utils/pubnub";

const MessageChatBody = () => {
  const scrollViewRef = useRef();
  const [messages, setMessages] = useState<Array<any>>([]);
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
    scrollViewRef?.current?.scrollToEnd({ animated: false });
  }, [scrollViewRef?.current, scrollViewRef]);

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

  const channel = "my_channel";
  const messageCount = 100; // Number of messages to retrieve
  // PUBNUB HISTORY
  useEffect(() => {
    pubnub.hereNow(
      {
        channels: [channel],
        includeUUIDs: true,
      },
      (status, response) => {
        if (status.error) {
          console.error(
            "Error retrieving presence information:",
            status.errorData
          );
          return;
        }

        // Retrieve past messages using the History API
        pubnub.history(
          {
            channel: channel,
            count: messageCount,
          },
          (status, response) => {
            if (status.error) {
              console.error("Error retrieving history:", status.errorData);
              return;
            }

            const pastMessages = response.messages;

            setMessages(pastMessages);
          }
        );
      }
    );
  }, []);
  // PUBNUB LISTENERS
  useEffect(() => {
    // Subscribe to a PubNub channel
    pubnub.subscribe({
      channels: [channel],
    });

    // Receive messages from the subscribed channel
    pubnub.addListener({
      message: (message) => {
        setMessages((messages) => [...messages, message]);
      },
    });

    // Publish a message to the channel
    // pubnub.publish({
    //   channel: "my_channel",
    //   message: {
    //     publisher: "John",
    //     text: "Hello guys!!",
    //   },
    // });

    // Unsubscribe from the channel when the component unmounts
    return () => {
      pubnub.unsubscribe({
        channels: ["my_channel"],
      });
    };
  }, []);

  const scrollToBottom = () => {
    // @ts-ignore
    scrollViewRef?.current?.scrollToEnd({ animated: true });
    setAutoScrollEnabled(true);
    setShowScrollToBottomButton(false);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    // if (!autoScrollEnabled) {
    //   if (prevScrollOffset < event.nativeEvent.contentOffset.y) {
    //     setAutoScrollEnabled(true);
    //     setShowScrollToBottomButton(false);
    //   }
    //   setPrevScrollOffset(event.nativeEvent.contentOffset.y);
    //   return;
    // }
    // // const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    // // console.log("NE", event.nativeEvent.contentOffset.y);
    // // Check if user scrolled to the top
    // if (prevScrollOffset > event.nativeEvent.contentOffset.y) {
    //   setAutoScrollEnabled(false);
    //   setShowScrollToBottomButton(true);
    // } else {
    //   setAutoScrollEnabled(true);
    //   setShowScrollToBottomButton(false);
    // }
    // setPrevScrollOffset(event.nativeEvent.contentOffset.y);
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

  return !messages?.length ? (
    <MessageChatBodySkeleton />
  ) : (
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
        {messages.map((message) => (
          <ChatItem key={message?.timetoken} message={message} />
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
