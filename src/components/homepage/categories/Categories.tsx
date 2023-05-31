import React from "react";
import {
  Box,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "../../../utils/chakra-components/ChakraComponents";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

type Props = {};
const categories = [
  {
    id: 0,
    title: "headphones",
    image: "/images/shared/desktop/image-headphones.png",
  },
  {
    id: 1,
    title: "earphones",
    image: "/images/shared/desktop/image-earphones.png",
  },
  {
    id: 2,
    title: "speakers",
    image: "/images/shared/desktop/image-speakers.png",
  },
];

const Categories = (props: Props) => {
  return (
    <HStack spacing={16} color={"black"} py={40} px={28}>
      {categories.map((cat) => (
        <VStack
          key={cat.id}
          bg={"#fafafa"}
          w={"100%"}
          h={"200px"}
          pos={"relative"}
          borderRadius={"lg"}
        >
          <Box pos={"absolute"} top={-12}>
            <Image
              src={cat.image}
              alt="image-headphones"
              width={200}
              height={200}
            />
          </Box>
          <VStack pos={"absolute"} bottom={4}>
            <Text
              textTransform={"uppercase"}
              letterSpacing={1}
              fontWeight={700}
            >
              {cat.title}
            </Text>
            <Link href={`/${cat.title}`}>
              <HStack spacing={0}>
                <Text>SHOP</Text>
                <MdKeyboardArrowRight
                  color="orange"
                  fontWeight={700}
                  fontSize={"24px"}
                />
              </HStack>
            </Link>
          </VStack>
        </VStack>
      ))}
    </HStack>
  );
};

export default Categories;
