"use client";

import React from "react";
import {
  VStack,
  Text,
  Box,
  HStack,
} from "../../../utils/chakra-components/ChakraComponents";
import Btn from "../../Button/Btn";
import HeroSection from "../../HeroSection";
import ProductTitle from "../ProductTitle";

type Props = {};

const HomeHeader = (props: Props) => {
  const onClick = () => {};
  return (
    <HeroSection>
      <HStack h={"90vh"} bgImage={"/images/home/desktop/image-hero.jpg"}>
        <VStack pt={30} spacing={6} align={"flex-start"} maxW={"550px"}>
          <Text letterSpacing={3} textTransform={"uppercase"} color="lightText">
            New Product
          </Text>
          <ProductTitle
            lineHeight="60px"
            letterSpacing={8}
            fontSize="48px"
            label="XX99 MARK II HEADPHONES"
          />
          <Text color="lightText">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Text>
          <Btn onClick={onClick} label="See products" />
        </VStack>
      </HStack>
    </HeroSection>
  );
};

export default HomeHeader;
