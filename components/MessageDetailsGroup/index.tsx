import { VStack } from "native-base";
import React from "react";
import ActionIcons from "./ActionIcons";
import SharedPhotos from "./SharedPhotos";

const MessageDetailsGroup = () => {
  return (
    <VStack space={5} flex={1}>
      <ActionIcons />
      <SharedPhotos />
    </VStack>
  );
};

export default MessageDetailsGroup;
