import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/Initial Letter D Digital Logo Design Template.svg";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={"80px"} marginX={5}></Image>
      <SearchInput></SearchInput>
      <ColourModeSwitch></ColourModeSwitch>
    </HStack>
  );
};

export default NavBar;
