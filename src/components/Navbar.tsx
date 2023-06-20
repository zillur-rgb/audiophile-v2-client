"use client";
import React, { useContext, useEffect } from "react";
import { Box, HStack, Text } from "../utils/chakra-components/ChakraComponents";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import providerContext, { ProviderType } from "@/providers/UserProviders";
import { routeMatchPath } from "@/services/helperFunctions";

type Props = {};
export const navItems = [
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
  {
    id: 4,
    title: "Login",
    href: "/auth/login",
  },
  {
    id: 5,
    title: "Registration",
    href: "/auth/registration",
  },
];

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const { userToken, setUserToken } = useContext<ProviderType>(providerContext);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setUserToken(localStorage.getItem("userToken") as string);
    }
  }, [setUserToken]);
  return (
    <HStack
      justify={"space-between"}
      py={4}
      px={28}
      borderBottom={".5px solid rgba(255, 255, 255, .3)"}
      bg={"#191919"}
    >
      <Link href={"/"}>
        <Text fontSize={"xl"} color={"#fff"} fontWeight={700}>
          <Box as="span" color={"orange"}>
            Audio
          </Box>
          phile.
        </Text>
      </Link>
      <HStack spacing={16}>
        {navItems.map((nav) => {
          if (userToken) {
            if (nav.id !== 4 && nav.id !== 5) {
              return (
                <Link key={nav.id} href={nav.href}>
                  <Text
                    fontWeight={
                      routeMatchPath(nav.href, pathname) ? 700 : "auto"
                    }
                    color={
                      routeMatchPath(nav.href, pathname) ? "orange" : "white"
                    }
                  >
                    {nav.title}
                  </Text>
                </Link>
              );
            }
          } else {
            if (nav.id !== 100) {
              return (
                <Link key={nav.id} href={nav.href}>
                  <Text
                    fontWeight={
                      routeMatchPath(nav.href, pathname) ? 700 : "auto"
                    }
                    color={
                      routeMatchPath(nav.href, pathname) ? "orange" : "white"
                    }
                  >
                    {nav.title}
                  </Text>
                </Link>
              );
            }
          }
        })}

        {userToken && (
          <>
            <Link href={"/"} onClick={() => setUserToken("")}>
              <Text color={"white"}>Logout</Text>
            </Link>
            <Link href={"/"}>
              <Text color={"white"}>Dashboard</Text>
            </Link>
          </>
        )}
      </HStack>
      <FiShoppingCart color="white" fontSize={"24px"} />
    </HStack>
  );
};

export default Navbar;
