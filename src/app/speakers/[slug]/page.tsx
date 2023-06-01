"use client";

import ProductDetails from "@/components/products/ProductDetails";
import { Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

const page = ({ params }: { params: { slug: string } }) => {
  return <ProductDetails params={params} />;
};

export default page;
