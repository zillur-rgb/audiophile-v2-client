import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { log } from "console";
import Image from "next/image";
import React, { useState } from "react";
import ProductTitle from "../shared/ProductTitle";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import Btn from "../Button/Btn";
import SectionTitle from "../shared/SectionTitle";
import Categories from "../homepage/categories/Categories";
import Featured from "../homepage/feature-products/Featured";
import Model from "../homepage/model/Model";
import { IProduct } from "@/types/products.type";

type Props = {
  params: {
    slug: string;
  };
};

const ProductDetails = ({ params }: Props) => {
  // Setting the cart
  const [cart, setCart] = useState<number>(0);
  // fetching the single data from the database based on params
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["singleData"],
    queryFn: () =>
      axios
        .get(`http://localhost:5000/api/products/${params.slug}`)
        .then((res) => {
          return res.data.data as IProduct;
        }),
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error fetching data</Text>;
  }

  //   const filteredData = data.filter((item: any) => item.slug === slug);

  return (
    <>
      <VStack px={56} py={28}>
        <HStack spacing={40}>
          <Image
            src={data?.image[0] as string}
            width={512}
            height={512}
            alt={"image"}
          />
          <VStack spacing={8} align={"flex-start"}>
            <ProductTitle
              color="black"
              fontSize="30px"
              letterSpacing={1.05}
              label={data?.name as string}
            />
            <Text color={"#00000080"} lineHeight={"30px"}>
              {data?.description}
            </Text>
            <Text color={"#000000"} fontSize={20} fontWeight={500}>
              €{data?.price}
            </Text>

            <HStack>
              <HStack
                justify={"space-between"}
                bg={"#f1f1f1"}
                h={12}
                w={24}
                px={2}
                borderRadius={"lg"}
              >
                <BiMinus
                  cursor={cart > 0 ? "pointer" : "not-allowed"}
                  onClick={() => {
                    if (cart > 0) {
                      setCart(cart - 1);
                    } else {
                      setCart(0);
                    }
                  }}
                  fontSize={20}
                />
                <Text fontSize={18} fontWeight={700}>
                  {cart}
                </Text>
                <BsPlus
                  fontSize={20}
                  cursor={"pointer"}
                  onClick={() => setCart(cart + 1)}
                />
              </HStack>
              <Btn label="Add to cart" />
            </HStack>
          </VStack>
        </HStack>

        {/* Features */}
        <HStack spacing={28} pt={20} alignItems={"flex-start"}>
          <VStack maxW={"50%"} spacing={12} align={"flex-start"}>
            <SectionTitle label="features" />
            <VStack>
              {data?.features.map((feat) => (
                <Text color={"#00000080"} lineHeight={"30px"} key={feat}>
                  - {feat}
                </Text>
              ))}
            </VStack>
          </VStack>
          <VStack spacing={12} align={"flex-start"}>
            <SectionTitle label="description" />
            <Text color={"#00000080"} lineHeight={"30px"}>
              {data?.description}
            </Text>
          </VStack>
        </HStack>

        {/* Gallery */}
        <Grid
          w={"100%"}
          h="700px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
          pt={20}
        >
          <GridItem
            bg="tomato"
            bgImage={data?.image[0]}
            bgRepeat={"no-repeat"}
            bgPos={"center"}
            bgSize={"cover"}
            borderRadius={"xl"}
          />
          <GridItem borderRadius={"xl"} bgImage={data?.image[1]} />
          {/* <GridItem
            colSpan={1}
            borderRadius={"xl"}
            bgImage={data.gallery.third.desktop}
          /> */}
        </Grid>
        {/* <Model /> */}
      </VStack>
    </>
  );
};

export default ProductDetails;
