import IonIcon from "@reacticons/ionicons";
import { Box, HStack, Pressable, Text, VStack, useToken } from "native-base";
import React from "react";
interface MessageListItemProps {
  isSelected?: boolean;
}
const MessageListItem: React.FC<MessageListItemProps> = ({
  isSelected = false,
}) => {
  const appPrimaryColor = useToken("colors", "appPrimary");
  const MessageStatusIcon = ({
    status,
  }: {
    status: "seen" | "sent" | "unread";
  }) => {
    if (status === "seen")
      return (
        <IonIcon
          style={{ fontSize: "20px", color: appPrimaryColor }}
          name="checkmark-done-sharp"
        />
      );
    if (status === "sent")
      return (
        <IonIcon
          style={{ fontSize: "20px", color: "grey" }}
          name="checkmark-sharp"
        />
      );
    if (status === "unread") {
      return (
        <Box
          style={{ aspectRatio: 1 }}
          size={"26px"}
          rounded={"full"}
          alignItems={"center"}
          justifyContent={"center"}
          bg={appPrimaryColor}
          p={1}
        >
          <Text
            fontWeight={500}
            fontFamily={"Lato"}
            fontSize={14}
            color={"white"}
          >
            3
          </Text>
        </Box>
      );
    }
    return null;
  };
  return (
    <Pressable
      p={3}
      pl={2}
      mb={3}
      rounded={"lg"}
      _hover={{ bg: "gray.700" }}
      bg={isSelected ? "gray.700" : "transparent"}
    >
      <HStack space={2} alignItems={"center"}>
        <Box position={"relative"} rounded={"full"} size={"70px"} bg="gray.400">
          {true && (
            <Box
              borderWidth={2}
              borderColor={"appBG"}
              position={"absolute"}
              bottom={"2px"}
              right={"2px"}
              rounded={"full"}
              size={"15px"}
              bg={"green.500"}
            />
          )}
        </Box>
        <VStack space={3} flex={1}>
          <HStack alignItems={"center"} justifyContent={"space-between"}>
            <Text
              flex={1}
              fontSize={18}
              lineHeight={20}
              fontFamily={"Lato"}
              fontWeight={500}
              noOfLines={1}
              textTransform={"capitalize"}
            >
              kristen watson awdawda awd awd
            </Text>
            <Text
              color="light.400"
              fontSize={14}
              fontFamily={"Lato"}
              fontWeight={500}
            >
              12:30 PM
            </Text>
          </HStack>
          <HStack alignItems={"center"} space={2}>
            <Text
              flex={1}
              fontSize={16}
              lineHeight={16}
              color="light.400"
              fontFamily={"Lato"}
              fontWeight={500}
              noOfLines={1}
            >
              Lets meet today? awdawd awd awd awd
            </Text>
            <MessageStatusIcon status={"unread"} />
          </HStack>
        </VStack>
      </HStack>
    </Pressable>
  );
};

export default MessageListItem;
