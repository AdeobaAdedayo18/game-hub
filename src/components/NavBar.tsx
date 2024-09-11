import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/bulls-eye.webp";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={"60px"} marginX={5}></Image>
      <SearchInput></SearchInput>
      <ColourModeSwitch></ColourModeSwitch>
    </HStack>
  );
};

export default NavBar;
