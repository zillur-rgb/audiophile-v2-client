import React from "react";
import {
  Box,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "../../utils/chakra-components/ChakraComponents";
import Image from "next/image";
import ProductTitle from "../shared/ProductTitle";
import Btn from "../Button/Btn";
import { useRouter } from "next/navigation";

type Props = {
  data: any[];
};

const Products = ({ data }: Props) => {
  const router = useRouter();

  return (
    <VStack pb={40} px={28}>
      {data.map((dta: any) => {
        return (
          <HStack
            spacing={16}
            color={"black"}
            key={dta.id}
            py={20}
            flexDir={dta.id % 2 === 0 ? "row" : "row-reverse"}
            justify={"space-between"}
          >
            <Image
              src={dta.image.desktop}
              height={504}
              width={504}
              alt="image"
            />

            <VStack spacing={8} maxW={"40%"} align={"flex-start"}>
              <ProductTitle
                label={dta.slug}
                color="black"
                fontSize={"30px"}
                letterSpacing={2}
                lineHeight="45px"
              />
              <Text>{dta.description}</Text>
              <Btn
                onClick={() => router.push(`/${dta.category}/${dta.slug}`)}
                label="SEE PRODUCT"
              />
            </VStack>
          </HStack>
        );
      })}
    </VStack>
  );
};

export default Products;
