import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/Initial Letter D Digital Logo Design Template.svg";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={"80px"} marginX={5}></Image>
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColourModeSwitch></ColourModeSwitch>
    </HStack>
  );
};

export default NavBar;
