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
        bg="appPrimary"
        _text={{
          color: "#fff",
          fontFamily: "Lato",
          fontWeight: 500,
        }}
      >
        <Pressable
          bg="appSecondary"
          rounded={"xl"}
          size={"50px"}
          alignItems={"center"}
          justifyContent={"center"}
          borderWidth="1px"
          borderColor="transparent"
          _hover={{
            borderColor: !!color ? color : "light.400",
            borderWidth: "1px",
          }}
        >
          {({ isHovered }) => (
            <IonIcon
              // @ts-ignore
              name={icon}
              style={{
                fontSize: "22px",
                color: isHovered ? color || highlight : light,
              }}
            />
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
          Chat
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
