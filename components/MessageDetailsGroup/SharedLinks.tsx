import { Box, HStack, Pressable, Skeleton, Text, VStack } from "native-base";
import React from "react";
import MessageListItem from "../common/MessageListItem";
import SkeletonListItem from "../common/MessageListItem/SkeletonListItem";

const SharedLinks = () => {
  const images = Array(4).fill(0);

  return (
    <VStack space={1}>
      <HStack px={1} alignItems={"center"}>
        <Text
          fontSize={18}
          fontWeight={500}
          fontFamily={"Lato"}
          color={"white"}
          flex={1}
        >
          Shared links
        </Text>
        <Pressable onPress={() => {}}>
          {({ isHovered }) => (
            <Text
              onPress={() => {}}
              fontSize={14}
              fontWeight={500}
              fontFamily={"Lato"}
              color={isHovered ? "light.100" : "light.400"}
              style={{
                textDecorationLine: "underline",
              }}
            >
              See all
            </Text>
          )}
        </Pressable>
      </HStack>
      <VStack>
        {images?.map((img, idx) => (
          <MessageListItem type="link" />
        ))}
      </VStack>
    </VStack>
  );
};

export const SharedLinksSkeletonUI = () => {
  const lists = Array(4).fill(0);
  return (
    <VStack space={1}>
      <Box px={1} mb={3}>
        <Skeleton
          rounded={"full"}
          h="28px"
          w={"100%"}
          startColor={"gray.500"}
          endColor={"gray.700"}
        />
      </Box>
      <VStack px={1}>
        {lists?.map((img, idx) => (
          <SkeletonListItem type="link" />
        ))}
      </VStack>
    </VStack>
  );
};
export default SharedLinks;
