import { ScrollView, VStack } from "native-base";
import React from "react";
import ActionIcons from "./ActionIcons";
import dynamic from "next/dynamic";
import { SharedPhotosSkeletonUI } from "./SharedPhotos";
import { SharedLinksSkeletonUI } from "./SharedLinks";

const MessageDetailsGroup = () => {
  const SharedPhotos = dynamic(() => import("./SharedPhotos"), {
    loading: () => <SharedPhotosSkeletonUI />,
  });
  const SharedLinks = dynamic(() => import("./SharedLinks"), {
    loading: () => <SharedLinksSkeletonUI />,
  });
  return (
    <VStack space={5} flex={1}>
      <ActionIcons />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SharedPhotos />
        <SharedLinks />
      </ScrollView>
    </VStack>
  );
};

export default MessageDetailsGroup;
