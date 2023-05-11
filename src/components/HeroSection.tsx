"use client";
import Image from "next/image";
import React from "react";
import { Box, VStack } from "../utils/chakra-components/ChakraComponents";
import Text from "../utils/chakra-components/ChakraText";
import Navbar from "./Navbar";
import Btn from "./Button/Btn";

type Props = {
  children: React.ReactNode;
};

export default function HeroSection(props: Props) {
  const onClick = () => {
    console.log("Hello");
  };
  return (
    <Box bg={"#191919"} px={28}>
      <Navbar />
      {props.children}
    </Box>
  );
}
