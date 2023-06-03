import { VStack } from "native-base";
import React from "react";
import ActionIcons from "./ActionIcons";
import dynamic from "next/dynamic";
import { SharedPhotosSkeletonUI } from "./SharedPhotos";

const MessageDetailsGroup = () => {
  const SharedPhotos = dynamic(() => import("./SharedPhotos"), {
    loading: () => <SharedPhotosSkeletonUI />,
  });
  return (
    <VStack space={5} flex={1}>
      <ActionIcons />
      <SharedPhotos />
    </VStack>
  );
};

export default MessageDetailsGroup;
