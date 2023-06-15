import React from "react";
import { HStack, Pressable, ScrollView, Skeleton, Text } from "native-base";
import MessageListItem from "../common/MessageListItem";
import IonIcon from "@reacticons/ionicons";
import SkeletonListItem from "../common/MessageListItem/SkeletonListItem";

const MessageList = () => {
  return (
    <>
      <HStack alignItems={"center"} px={3} mb={2}>
        <Pressable mr="auto">
          <HStack space={2} alignItems={"center"}>
            <Text
              fontSize={18}
              fontWeight={500}
              fontFamily={"Lato"}
              color={"white"}
            >
              Messages
            </Text>
            <IonIcon style={{ color: "white" }} name="chevron-down-outline" />
          </HStack>
        </Pressable>
        <Pressable
          _hover={{ bg: "gray.600" }}
          rounded={"lg"}
          p={"6px"}
          mr={-2}
          onPress={() => {}}
        >
          <IonIcon
            style={{ fontSize: "20px", color: "white" }}
            name="person-add-outline"
          />
        </Pressable>
      </HStack>
      <ScrollView
        pr={2}
        persistentScrollbar
        showsVerticalScrollIndicator={true}
        flex={1}
      >
        <MessageListItem />
        <MessageListItem isSelected />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
      </ScrollView>
    </>
  );
};

export const MessageListSkeletonUI = () => {
  return (
    <>
      <Skeleton
        my={1}
        mb={4}
        rounded={"full"}
        h="30px"
        w={"100%"}
        startColor={"gray.500"}
        endColor={"gray.700"}
      />
      <ScrollView px={2} showsVerticalScrollIndicator={false} flex={1}>
        <SkeletonListItem />
        <SkeletonListItem />
        <SkeletonListItem />
        <SkeletonListItem />
        <SkeletonListItem />
        <SkeletonListItem />
      </ScrollView>
    </>
  );
};

export default MessageList;
