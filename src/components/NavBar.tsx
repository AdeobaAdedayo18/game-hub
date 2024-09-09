import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/react.svg";
import ColourModeSwitch from "./ColourModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src="logo" boxSize={"60px"}></Image>
      <ColourModeSwitch></ColourModeSwitch>
    </HStack>
  );
};

export default NavBar;
