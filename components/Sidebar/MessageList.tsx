import React from "react";
import { Box, HStack, ScrollView, Skeleton, VStack } from "native-base";
import MessageListItem from "../common/MessageListItem";

const MessageList = () => {
  return (
    <ScrollView flex={1}>
      <MessageListItem />
    </ScrollView>
  );
};

export const MessageListSkeletonUI = () => {
  const SkeletonListItem = () => {
    return (
      <HStack mb={2} space={2} alignItems={"center"}>
        <Skeleton
          rounded={"full"}
          size={"70px"}
          startColor={"gray.500"}
          endColor={"gray.700"}
        />
        <VStack space={1} alignItems={"center"} flex={1}>
          <Skeleton
            h="20px"
            rounded="full"
            startColor={"gray.500"}
            endColor={"gray.700"}
          />
          <Skeleton
            h="20px"
            rounded="full"
            startColor={"gray.500"}
            endColor={"gray.700"}
          />
        </VStack>
      </HStack>
    );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} flex={1}>
      <SkeletonListItem />
      <SkeletonListItem />
      <SkeletonListItem />
      <SkeletonListItem />
      <SkeletonListItem />
      <SkeletonListItem />
      <SkeletonListItem />
      <SkeletonListItem />
      <SkeletonListItem />
      <SkeletonListItem />
    </ScrollView>
  );
};

export default MessageList;
