import { Box, Input } from "native-base";
import React from "react";
import IonIcon from "@reacticons/ionicons";

const Searchbar = () => {
  const [searchInput, setSearchInput] = React.useState("");

  return (
    <Input
      _focus={{ bg: "appSecondary" }}
      focusOutlineColor={"transparent"}
      bg="appSecondary"
      color={"white"}
      borderRadius={"10px"}
      h={"50px"}
      fontSize={16}
      fontWeight={500}
      fontFamily={"Lato"}
      placeholder="Search"
      placeholderTextColor={"gray.400"}
      borderWidth={0}
      InputLeftElement={
        <Box pl={4}>
          <IonIcon
            style={{ fontSize: "24px", color: "white" }}
            name="search-outline"
          />
        </Box>
      }
      value={searchInput}
      onChangeText={(text) => setSearchInput(text)}
    />
  );
};

export default Searchbar;
