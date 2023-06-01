import IonIcon from "@reacticons/ionicons";
import { Box, Pressable, ScrollView, Skeleton } from "native-base";
import React, { Suspense } from "react";

const StatusSlider: React.FC = () => {
  return (
    <Suspense fallback={<SkeletonUI />}>
      <ScrollView
        w={"100%"}
        showsHorizontalScrollIndicator={false}
        horizontal
        py={4}
        my={4}
      >
        <StatusItem type="add_status" />
        <StatusItem />
        <StatusItem />
        <StatusItem />
        <StatusItem />
        <StatusItem />
      </ScrollView>
    </Suspense>
  );
};

interface StatusItemProps {
  type?: "default" | "add_status";
}
const StatusItem: React.FC<StatusItemProps> = ({ type = "default" }) => {
  return (
    <Pressable
      position={"relative"}
      rounded={"full"}
      mr={2}
      size={"70px"}
      bg="gray.400"
    >
      {type === "add_status" && (
        <Box
          position={"absolute"}
          right={0}
          bottom={0}
          rounded={"full"}
          alignItems={"center"}
          justifyContent={"center"}
          size={"20px"}
          bg="#28313D"
        >
          <IonIcon
            style={{ fontSize: "15px", color: "white" }}
            name="add-outline"
          />
        </Box>
      )}
    </Pressable>
  );
};

const SkeletonUI = () => {
  return (
    <ScrollView
      w={"100%"}
      showsHorizontalScrollIndicator={false}
      horizontal
      py={4}
      my={4}
    >
      <Skeleton
        startColor={"gray.500"}
        endColor={"gray.700"}
        rounded={"full"}
        mr={2}
        size={"70px"}
      />
      <Skeleton
        startColor={"gray.500"}
        endColor={"gray.700"}
        rounded={"full"}
        mr={2}
        size={"70px"}
      />
      <Skeleton
        startColor={"gray.500"}
        endColor={"gray.700"}
        rounded={"full"}
        mr={2}
        size={"70px"}
      />
      <Skeleton
        startColor={"gray.500"}
        endColor={"gray.700"}
        rounded={"full"}
        mr={2}
        size={"70px"}
      />
    </ScrollView>
  );
};

export default StatusSlider;
