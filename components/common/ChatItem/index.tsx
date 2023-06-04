import { Box, HStack, Text, VStack } from "native-base";
import React from "react";

interface ChatItemProps {
  isMe?: boolean;
}
const ChatItem: React.FC<ChatItemProps> = ({ isMe = false }) => {
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
            Friendly chat
          </Text>
          <Box size={"10px"} />
          <Text
            color="light.400"
            fontSize={14}
            fontFamily={"Lato"}
            fontWeight={500}
          >
            12:30 PM
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
            color="light.400"
            fontFamily={"Lato"}
            fontWeight={500}
          >
            {
              "This awdaw aw aw aw aw dwa da \n w dawd aw daawd aw aw awd awdawd d "
            }
          </Text>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default ChatItem;
