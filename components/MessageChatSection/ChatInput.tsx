import IonIcon from "@reacticons/ionicons";
import { Box, HStack, Pressable, TextArea } from "native-base";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Theme } from "emoji-picker-react";
import { Popover } from "native-base";

const ChatInput: React.FC = () => {
  const EmojiPicker = dynamic(() => import("emoji-picker-react"), {
    ssr: false,
  });
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [chatInputText, setChatInputText] = useState("");
  const [numLines, setNumLines] = useState(1);

  const handleTextChange = (newText: string) => {
    setChatInputText(newText);
    // Calculate the height of the text content
    setNumLines(Math.min(newText.split("\n")?.length, 4));
  };

  return (
    <Box px={3}>
      <HStack mt={3} py={2} bg="appSecondary" rounded={"lg"}>
        <TextArea
          autoCompleteType={"on"}
          _focus={{ bg: "appSecondary" }}
          w={"100%"}
          totalLines={numLines}
          focusOutlineColor={"transparent"}
          bg="appSecondary"
          color={"white"}
          borderRadius={"10px"}
          fontSize={16}
          lineHeight={22}
          fontWeight={500}
          fontFamily={"Lato"}
          placeholder="Message"
          InputLeftElement={
            <Popover
              isOpen={showEmojiPicker}
              onOpen={() => {
                setShowEmojiPicker(true);
              }}
              onClose={() => {
                setShowEmojiPicker(false);
              }}
              offset={7}
              placement="top left"
              trigger={(triggerProps) => (
                <Pressable {...triggerProps} ml={4}>
                  {({ isHovered }) => {
                    return (
                      <Box
                        p={"4px"}
                        rounded="lg"
                        bg={isHovered ? "light.500" : "transparent"}
                      >
                        <IonIcon
                          style={{ fontSize: "24px", color: "white" }}
                          name="happy-outline"
                        />
                      </Box>
                    );
                  }}
                </Pressable>
              )}
            >
              <Popover.Content>
                <EmojiPicker
                  previewConfig={{
                    showPreview: false,
                  }}
                  theme={Theme.DARK}
                  height={"400px"}
                  width={"290px"}
                />
              </Popover.Content>
            </Popover>
          }
          InputRightElement={
            <HStack alignItems={"center"} space={3} mr={4}>
              <Pressable onPress={() => {}}>
                {({ isHovered }) => (
                  <Box
                    rounded="lg"
                    px={"2px"}
                    py={"3px"}
                    bg={isHovered ? "light.500" : "transparent"}
                  >
                    <IonIcon
                      style={{ fontSize: "24px", color: "white" }}
                      name="attach-outline"
                    />
                  </Box>
                )}
              </Pressable>
              <Pressable onPress={() => {}}>
                {({ isHovered }) => (
                  <Box
                    rounded="lg"
                    p={"4px"}
                    bg={isHovered ? "light.500" : "transparent"}
                  >
                    <IonIcon
                      style={{ fontSize: "23px", color: "white" }}
                      name="camera-outline"
                    />
                  </Box>
                )}
              </Pressable>
            </HStack>
          }
          placeholderTextColor={"gray.400"}
          borderWidth={0}
          value={chatInputText}
          onChangeText={handleTextChange}
        />
      </HStack>
    </Box>
  );
};

export default ChatInput;
