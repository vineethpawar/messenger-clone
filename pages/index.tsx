import React from "react";
import Home from "../screens/Home";
import {
  Alert,
  Box,
  CloseIcon,
  HStack,
  IconButton,
  Slide,
  Text,
  VStack,
} from "native-base";

const App: React.FC = () => {
  return (
    <VStack>
      <Slide in={false} placement="top">
        <Alert w="100%" status={"error"}>
          <VStack space={2} flexShrink={1} w="100%">
            <HStack
              alignItems={"center"}
              flex={1}
              space={2}
              justifyContent="space-between"
            >
              <Box></Box>
              <HStack alignItems={"center"} space={2} flexShrink={1}>
                <Alert.Icon size={"md"} mt="1" />
                <Text fontSize="md" color="coolGray.800">
                  {"Check your internet connection"}
                </Text>
              </HStack>
              <IconButton
                variant="unstyled"
                _focus={{
                  borderWidth: 0,
                }}
                icon={<CloseIcon size="3" />}
                _icon={{
                  color: "coolGray.600",
                }}
              />
            </HStack>
          </VStack>
        </Alert>
      </Slide>
      <Home />
    </VStack>
  );
};

export default App;
