"use client";
import React from "react";
import { Box, HStack, Text } from "../utils/chakra-components/ChakraComponents";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import { useParams } from "next/navigation";

type Props = {};
const navItems = [
  {
    id: 0,
    title: "Home",
    href: "/",
  },
  {
    id: 1,
    title: "Headphones",
    href: "/headphones",
  },
  {
    id: 2,
    title: "Earphones",
    href: "/earphones",
  },
  {
    id: 3,
    title: "Speakers",
    href: "/speakers",
  },
];

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const routeMatchPath = (route: string) => {
    if (pathname === route) {
      return true;
    }
  };
  return (
    <HStack
      justify={"space-between"}
      py={4}
      borderBottom={".5px solid rgba(255, 255, 255, .3)"}
    >
      <Link href={"/"}>
        <Text fontSize={"xl"} fontWeight={700}>
          <Box as="span" color={"orange"}>
            Audio
          </Box>
          phile.
        </Text>
      </Link>
      <HStack spacing={16}>
        {navItems.map((nav) => (
          <Link key={nav.id} href={nav.href}>
            <Text
              fontWeight={routeMatchPath(nav.href) ? 700 : "auto"}
              color={routeMatchPath(nav.href) ? "orange" : "white"}
            >
              {nav.title}
            </Text>
          </Link>
        ))}
      </HStack>
      <FiShoppingCart color="white" fontSize={"24px"} />
    </HStack>
  );
};

export default Navbar;
