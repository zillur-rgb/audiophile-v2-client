import React from "react";
import {
  Box,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "../../../utils/chakra-components/ChakraComponents";
import Link from "next/link";
import Navbar, { navItems } from "@/components/Navbar";
import { routeMatchPath } from "@/services/helperFunctions";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  const pathname = usePathname();
  return (
    <HStack
      bg={"#191919"}
      spacing={16}
      color={"black"}
      px={28}
      py={16}
      justify={"space-between"}
    >
      <VStack w={{ sm: "100%", lg: "40%" }} spacing={12} align={"flex-start"}>
        <Link href={"/"}>
          <Text fontSize={"xl"} color={"white"} fontWeight={700}>
            <Box as="span" color={"orange"}>
              Audio
            </Box>
            phile.
          </Text>
        </Link>
        <Text color={"#ffffff90"}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - were open 7 days a week.
        </Text>
        <Text color={"#ffffff90"}>
          Copyright 2023. MD Zillur Rahman. All Rights Reserved
        </Text>
      </VStack>
      <VStack
        align={"flex-end"}
        justify={"space-between"}
        spacing={16}
        w={{ sm: "100%", lg: "40%" }}
      >
        <HStack spacing={12}>
          {navItems.slice(0, 4).map((nav) => (
            <Link key={nav.id} href={nav.href}>
              <Text
                fontWeight={routeMatchPath(nav.href, pathname) ? 700 : "auto"}
                color={routeMatchPath(nav.href, pathname) ? "orange" : "white"}
              >
                {nav.title}
              </Text>
            </Link>
          ))}
        </HStack>
        <HStack spacing={"1rem"}>
          <Image
            src={"/images/shared/desktop/icon-facebook.svg"}
            height={24}
            width={24}
            alt="facebook"
          />
          <Image
            src={"/images/shared/desktop/icon-instagram.svg"}
            height={24}
            width={24}
            alt="twitter"
          />
          <Image
            src={"/images/shared/desktop/icon-twitter.svg"}
            height={24}
            width={24}
            alt="twitter"
          />
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Footer;
