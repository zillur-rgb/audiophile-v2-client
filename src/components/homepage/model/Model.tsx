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

type Props = {};

const Model = (props: Props) => {
  return (
    <HStack spacing={16} color={"black"} pb={40} px={28} w="100%">
      <VStack w={{ sm: "100%", lg: "50%" }} spacing={12}>
        <Text fontSize={60} fontWeight={700} lineHeight={"72px"}>
          BRINGING YOU THE{" "}
          <Text color={"orange"} as={"span"}>
            BEST
          </Text>{" "}
          AUDIO GEAR
        </Text>
        <Text color={"#00000060"} lineHeight={"2rem"}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Text>
      </VStack>
      <Box borderRadius={20}>
        <Image
          src={"/images/shared/desktop/image-best-gear.jpg"}
          alt="ZX9-speaker"
          width={554}
          height={604}
        />
      </Box>
    </HStack>
  );
};

export default Model;
