import { Box, HStack, Text, VStack } from "native-base";
import React from "react";
import { messageSentTimeFormat } from "../../../utils/messageSentTimeFormat";

interface ChatItemProps {
  isMe?: boolean;
  mesage: any;
}
const ChatItem: React.FC<ChatItemProps> = ({ isMe = false, message }) => {
  return (
    <HStack direction={isMe ? "row-reverse" : "row"} p={2}>
      <Box
        position={"relative"}
        rounded={"full"}
        size={"60px"}
        bg="gray.400"
      ></Box>
      <Box size={"10px"} />
      <VStack p={1} space={2} maxW={"60%"}>
        <HStack direction={isMe ? "row-reverse" : "row"}>
          <Text
            fontSize={17}
            lineHeight={20}
            fontFamily={"Lato"}
            fontWeight={500}
            noOfLines={1}
            textTransform={"capitalize"}
          >
            {message?.entry?.publisher}
          </Text>
          <Box size={"10px"} />
          <Text
            color="light.400"
            fontSize={14}
            fontFamily={"Lato"}
            fontWeight={500}
          >
            {messageSentTimeFormat(message?.timetoken)}
          </Text>
        </HStack>

        <VStack
          p={3}
          rounded={"lg"}
          bg={isMe ? "appPrimary" : "light.700"}
          space={2}
        >
          <Text
            fontSize={16}
            lineHeight={16}
            color="light.300"
            fontFamily={"Lato"}
            fontWeight={500}
          >
            {message?.entry?.text}
          </Text>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default ChatItem;
