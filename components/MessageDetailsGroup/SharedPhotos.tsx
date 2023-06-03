import { Box, HStack, Pressable, Skeleton, Text, VStack } from "native-base";
import React from "react";

const ImageGridItem = ({ dimensionType = "square", isLoading = false }) => {
  if (isLoading)
    return (
      <Box
        p={1}
        style={{
          aspectRatio: dimensionType === "square" ? 1 : 2,
        }}
        width={dimensionType === "square" ? "40%" : "60%"}
      >
        <Skeleton
          rounded={"lg"}
          size="100%"
          startColor={"gray.500"}
          endColor={"gray.700"}
        />
      </Box>
    );
  return (
    <Box
      p={1}
      style={{
        aspectRatio: dimensionType === "square" ? 1 : 2,
      }}
      width={dimensionType === "square" ? "40%" : "60%"}
    >
      <Box rounded={"lg"} size="100%" bg={"gray.200"} />
    </Box>
  );
};

const SharedPhotos = () => {
  const images = Array(4).fill(0);

  return (
    <VStack space={2} mb={4}>
      <HStack px={1} alignItems={"center"}>
        <Text
          fontSize={18}
          fontWeight={500}
          fontFamily={"Lato"}
          color={"white"}
          flex={1}
        >
          Shared photos
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
      <HStack flexWrap={"wrap"}>
        {images?.map((img, idx) => (
          <ImageGridItem
            dimensionType={
              idx % 4 === 1 || idx % 4 === 2 ? "rectangle" : "square"
            }
          />
        ))}
      </HStack>
    </VStack>
  );
};

export const SharedPhotosSkeletonUI = () => {
  const images = Array(4).fill(0);
  return (
    <VStack space={2} mb={4}>
      <Box px={1}>
        <Skeleton
          rounded={"full"}
          h="28px"
          w={"100%"}
          startColor={"gray.500"}
          endColor={"gray.700"}
        />
      </Box>
      <HStack flexWrap={"wrap"}>
        {images?.map((img, idx) => (
          <ImageGridItem
            isLoading
            dimensionType={
              idx % 4 === 1 || idx % 4 === 2 ? "rectangle" : "square"
            }
          />
        ))}
      </HStack>
    </VStack>
  );
};
export default SharedPhotos;
