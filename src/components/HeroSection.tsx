"use client";
import React from "react";
import { Box } from "../utils/chakra-components/ChakraComponents";

type Props = {
  children: React.ReactNode;
};

export default function HeroSection(props: Props) {
  const onClick = () => {
    console.log("Hello");
  };
  return (
    <Box bg={"#191919"} px={28}>
      {/* <Navbar /> */}
      {props.children}
    </Box>
  );
}
