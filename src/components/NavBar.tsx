import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Initial Letter D Digital Logo Design Template.svg";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Link to={"/"}>
        <Image src={logo} boxSize={"80px"} objectFit="cover"></Image>
      </Link>
      <SearchInput></SearchInput>
      <ColourModeSwitch></ColourModeSwitch>
    </HStack>
  );
};

export default NavBar;
