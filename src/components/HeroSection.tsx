"use client";
import Image from "next/image";
import React from "react";
import { Box, VStack } from "../utils/chakra-components/ChakraComponents";
import Text from "../utils/chakra-components/ChakraText";
import Navbar from "./Navbar";
import Btn from "./Button/Btn";

type Props = {};

export default function HeroSection() {
  const onClick = () => {
    console.log("Hello");
  };
  return (
    <Box bg={"#191919"} px={28}>
      <Box bgImage={"/images/home/desktop/image-hero.jpg"} h={"100vh"}>
        <Navbar />
        <VStack pt={40} spacing={6} align={"flex-start"} maxW={"550px"}>
          <Text letterSpacing={3} textTransform={"uppercase"} color="lightText">
            New Product
          </Text>
          <Text fontSize={"xxl"} fontWeight={700} lineHeight={"64px"}>
            XX99 MARK II HEADPHONES
          </Text>
          <Text color="lightText">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Text>
          <Btn onClick={onClick} label="See products" />
        </VStack>
      </Box>
    </Box>
  );
}
