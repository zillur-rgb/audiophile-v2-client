import providerContext, { ProviderType } from "@/providers/UserProviders";
import { Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import Products from "./Products";

type Props = {};

const HeadphonesComponent = (props: Props) => {
  const { setProducts, products } = useContext<ProviderType>(providerContext);
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios.get("products.json").then((res) => {
        const data = res.data;
        console.log("dta", data.products);

        const filteredData = data.products.filter(
          (item: any) => item.category === "headphones"
        );
        console.log("dta", filteredData);
        return filteredData;
      }),
  });

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return (
      <Text fontSize={60} color={"black"}>
        Error fetching data
      </Text>
    );
  }
  return (
    <>
      <Products data={data} />{" "}
    </>
  );
};

export default HeadphonesComponent;