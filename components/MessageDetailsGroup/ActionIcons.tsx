import IonIcon from "@reacticons/ionicons";
import {
  Box,
  HStack,
  Pressable,
  Text,
  Tooltip,
  VStack,
  useToken,
} from "native-base";
import React from "react";

const ActionIcons = () => {
  const [light, highlight, red] = useToken("colors", [
    "light.500",
    "light.100",
    "red.400",
  ]);
  const IconItem: React.FC<{ icon: string; label: string; color?: string }> = ({
    icon,
    label,
    color,
  }) => {
    return (
      <Tooltip
        label={label}
        openDelay={300}
        bgColor={"appPrimary"}
        _text={{
          color: "#fff",
          fontFamily: "Lato",
          fontWeight: 500,
          fontSize: 14,
        }}
      >
        <Pressable>
          {({ isHovered }) => (
            <Box
              bg="appSecondary"
              rounded={"xl"}
              size={"50px"}
              alignItems={"center"}
              justifyContent={"center"}
              borderWidth="1px"
              borderColor={isHovered ? "light.500" : "transparent"}
            >
              <IonIcon
                // @ts-ignore
                name={icon}
                style={{
                  fontSize: "22px",
                  color: isHovered ? color || highlight : light,
                }}
              />
            </Box>
          )}
        </Pressable>
      </Tooltip>
    );
  };
  return (
    <VStack space={3}>
      <HStack px={1} alignItems={"center"}>
        <Text
          fontSize={18}
          fontWeight={500}
          fontFamily={"Lato"}
          color={"white"}
          flex={1}
        >
          Chat Details
        </Text>
        <Pressable onPress={() => {}}>
          {({ isHovered }) => (
            <Box
              rounded="lg"
              p={"1px"}
              bg={isHovered ? "light.500" : "transparent"}
            >
              <IonIcon
                // @ts-ignore
                name={"close-outline"}
                style={{
                  fontSize: "25px",
                  color: isHovered ? highlight : light,
                }}
              />
            </Box>
          )}
        </Pressable>
      </HStack>
      <HStack px={1} space={4}>
        <IconItem icon={"notifications-off-outline"} label={"Mute group"} />
        <IconItem icon={"person-add-outline"} label={"Add member"} />
        <IconItem icon={"create-outline"} label={"Rename group"} />
        <IconItem color={red} icon={"exit-outline"} label={"Exit group"} />
      </HStack>
    </VStack>
  );
};

export default ActionIcons;
