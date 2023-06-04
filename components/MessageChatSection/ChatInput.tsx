import IonIcon from "@reacticons/ionicons";
import { Box, HStack, Pressable, TextArea } from "native-base";
import React, { useState } from "react";

const ChatInput: React.FC = () => {
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
            <Pressable onPress={() => {}} ml={4}>
              <IonIcon
                style={{ fontSize: "24px", color: "white" }}
                name="happy-outline"
              />
            </Pressable>
          }
          InputRightElement={
            <HStack space={3} mr={4}>
              <Pressable onPress={() => {}}>
                <IonIcon
                  style={{ fontSize: "24px", color: "white" }}
                  name="attach-outline"
                />
              </Pressable>
              <Pressable onPress={() => {}}>
                <IonIcon
                  style={{ fontSize: "24px", color: "white" }}
                  name="camera-outline"
                />
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
