"use client";

import Navbar from "@/components/Navbar";
import ProductDetails from "@/components/products/ProductDetails";
import { Text, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

type Props = {};

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      {/* <Text>Slug is comming</Text> */}
      <ProductDetails params={params} />
    </>
  );
};

export default Page;
