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
    queryKey: ["Headphones Data"],
    queryFn: () =>
      axios.get("http://localhost:5000/api/products").then((res) => {
        const data = res.data;
        setProducts(res.data);

        const filteredData = data.data.filter(
          (item: any) => item.category === "headphone"
        );
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
