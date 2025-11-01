import {
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Zunisha from "../assets/Zunisha.png";
import { LuSearch } from "react-icons/lu";
import { FaFilter } from "react-icons/fa";

export default function Navbar() {
  return (
    <HStack
      position={"fixed"}
      zIndex={"100"}
      top={0}
      width={"full"}
      height={"60px"}
      backgroundColor="rgba(0, 0, 0, 0.76)"
      backdropFilter="blur(10px)"
      WebkitBackdropFilter="blur(10px)"
      paddingX={10}
      justifyContent={"space-between"}
    >
      <HStack gap={2}>
        <Image
          boxShadow="0 0 50px #32a88b57"
          src={Zunisha}
          width={"45px"}
          borderRadius={"4xl"}
        />
        <Text
          color={"#32a88b"}
          fontSize={"2xl"}
          fontWeight={"bold"}
          textAlign={"left"}
        >
          Zunisha
        </Text>
      </HStack>
      <HStack>
        <InputGroup endElement={<LuSearch />} w={"400px"}>
          <Input
            placeholder="Search"
            focusRing={"none"}
            border={"none"}
            backgroundColor={"#161616ff"}
            borderRadius={"xl"}
          />
        </InputGroup>
        <IconButton borderRadius={"xl"} backgroundColor={"#161616ff"}>
          <FaFilter color={"#535353ff"} />
        </IconButton>
      </HStack>
    </HStack>
  );
}
