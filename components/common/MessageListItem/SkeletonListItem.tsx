import { HStack, Skeleton, VStack } from "native-base";
import React from "react";
interface SkeletonListItemProps {
  type?: "default" | "link";
}

const SkeletonListItem: React.FC<SkeletonListItemProps> = ({
  type = "default",
}) => {
  const isTypeDefault = type === "default";
  return (
    <HStack mb={9} space={2} alignItems={"center"}>
      <Skeleton
        rounded={isTypeDefault ? "full" : "lg"}
        size={isTypeDefault ? "70px" : "50px"}
        startColor={"gray.500"}
        endColor={"gray.700"}
      />
      <VStack space={isTypeDefault ? 4 : 2} alignItems={"center"} flex={1}>
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

export default SkeletonListItem;
