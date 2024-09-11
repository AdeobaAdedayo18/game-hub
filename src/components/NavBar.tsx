import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/bulls-eye.webp";
import ColourModeSwitch from "./ColourModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} boxSize={"60px"} marginX={5}></Image>
      <ColourModeSwitch></ColourModeSwitch>
    </HStack>
  );
};

export default NavBar;
