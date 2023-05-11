import React from "react";
import { Box, HStack, Text } from "../utils/chakra-components/ChakraComponents";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <HStack
      justify={"space-between"}
      py={4}
      borderBottom={".5px solid rgba(255, 255, 255, .3)"}
    >
      <Text fontSize={"xl"} fontWeight={700}>
        <Box as="span" color={"orange"}>
          Audio
        </Box>
        phile.
      </Text>
      <HStack spacing={16}>
        <Link href={"/"}>
          <Text>Home</Text>
        </Link>
        <Link href={"/headphones"}>
          <Text>Headphones</Text>
        </Link>
        <Link href={"/earphones"}>
          <Text>Earphones</Text>
        </Link>
        <Link href={"/speakers"}>
          <Text>Speakers</Text>
        </Link>
      </HStack>
      <FiShoppingCart color="white" fontSize={"24px"} />
    </HStack>
  );
};

export default Navbar;
