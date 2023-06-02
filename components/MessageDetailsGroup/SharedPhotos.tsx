import { Box, HStack, Pressable, Text, VStack } from "native-base";
import React from "react";

const SharedPhotos = () => {
  const images = Array(4).fill(0);

  const ImageGridItem = ({ dimensionType = "square" }) => {
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
  return (
    <VStack space={2}>
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

export default SharedPhotos;
// generate js logic to know if number comes under this pattern 1,2,5,6,9,10,13,14...
