import { HStack, Box, VStack, Text, Avatar, Pressable } from "native-base";
import React from "react";

const MessageChatHeader = () => {
  return (
    <Pressable rounded={"lg"} p={3} _hover={{ bg: "gray.700" }}>
      <HStack space={3} alignItems={"center"}>
        <Box
          position={"relative"}
          rounded={"full"}
          size={"70px"}
          bg="gray.400"
        ></Box>
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
              Friendly chat
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
              9 member, 3 online
            </Text>
          </HStack>
        </VStack>
        <Box>
          <Avatar.Group
            _avatar={{
              size: "md",
              borderColor: "appPrimary",
            }}
            max={3}
          >
            <Avatar
              bg="green.500"
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            >
              AJ
            </Avatar>
            <Avatar
              bg="cyan.500"
              source={{
                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              }}
            >
              TE
            </Avatar>
            <Avatar
              bg="indigo.500"
              source={{
                uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            >
              JB
            </Avatar>
            <Avatar
              bg="amber.500"
              source={{
                uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              }}
            >
              TS
            </Avatar>
            <Avatar
              bg="green.500"
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            >
              AJ
            </Avatar>
            <Avatar
              bg="cyan.500"
              source={{
                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              }}
            >
              TE
            </Avatar>
            <Avatar
              bg="indigo.500"
              source={{
                uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            >
              JB
            </Avatar>
            <Avatar
              bg="amber.500"
              source={{
                uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              }}
            >
              TS
            </Avatar>
          </Avatar.Group>
        </Box>
      </HStack>
    </Pressable>
  );
};

export default MessageChatHeader;
