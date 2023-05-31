import React from "react";
import {
  Box,
  Button,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "../../../utils/chakra-components/ChakraComponents";
import Image from "next/image";
import Btn from "@/components/Button/Btn";
import ProductTitle from "@/components/shared/ProductTitle";

type Props = {};

const Featured = (props: Props) => {
  return (
    <VStack spacing={16} color={"black"} pb={40} px={28}>
      <HStack
        bg={"orange"}
        w="100%"
        borderRadius={"1rem"}
        bgImage={"/images/home/desktop/pattern-circles.svg"}
        bgRepeat={"no-repeat"}
        bgPos={"50%"}
        bgSize={"contain"}
        px={"56"}
        pt={20}
        spacing={12}
      >
        <Image
          src={"/images/home/desktop/image-speaker-zx9.png"}
          alt="ZX9-speaker"
          width={406}
          height={493}
        />
        <VStack align={"flex-start"} spacing={4}>
          <ProductTitle label="ZX9 SPEAKER" />
          <Text color={"#ffffff95"}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Text>
          <Btn bgColor="black" label="See Products" />
        </VStack>
      </HStack>

      <HStack
        borderRadius={"1rem"}
        justify={"space-between "}
        w="100%"
        pr={"40"}
        pt={20}
      >
        <Image
          src={"/images/home/desktop/image-earphones-yx1.jpg"}
          alt="earphones-yx1"
          width={614}
          height={320}
        />
        <VStack align={"flex-start"}>
          <ProductTitle
            label="YX1 EARPHONE"
            color="black"
            fontSize="30px"
            letterSpacing={6}
          />
          {/* <Btn bgColor="black" label="See Products" /> */}
          <Button
            bg={"white"}
            color={"black"}
            border={"4px solid black"}
            px={20}
            py={8}
            textTransform={"uppercase"}
            _hover={{
              bg: "black",
              color: "white",
            }}
          >
            see products
          </Button>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Featured;
