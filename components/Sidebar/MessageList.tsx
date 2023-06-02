import React from "react";
import {
  Box,
  HStack,
  Pressable,
  ScrollView,
  Skeleton,
  Text,
  VStack,
} from "native-base";
import MessageListItem from "../common/MessageListItem";
import IonIcon from "@reacticons/ionicons";

const MessageList = () => {
  return (
    <>
      <HStack alignItems={"center"} p={3}>
        <Text
          fontSize={18}
          fontWeight={500}
          fontFamily={"Lato"}
          color={"white"}
          flex={3}
        >
          Messages <IonIcon name="chevron-down-outline" />
        </Text>
        <Pressable
          _hover={{ bg: "gray.600" }}
          rounded={"full"}
          p={2}
          mr={-2}
          onPress={() => {}}
        >
          <IonIcon
            style={{ fontSize: "20px", color: "white" }}
            name="person-add-outline"
          />
        </Pressable>
      </HStack>
      <ScrollView showsVerticalScrollIndicator={false} flex={1}>
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
  const SkeletonListItem = () => {
    return (
      <HStack mb={9} space={2} alignItems={"center"}>
        <Skeleton
          rounded={"full"}
          size={"70px"}
          startColor={"gray.500"}
          endColor={"gray.700"}
        />
        <VStack space={4} alignItems={"center"} flex={1}>
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
    <>
      <Skeleton
        my={6}
        rounded={"full"}
        h="25px"
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
