import { Box } from "../utils/chakra-components/ChakraComponents";
import HeroSection from "../components/HeroSection";
import HomeHeader from "@/components/shared/hero-section/HomeHeader";
import Categories from "@/components/homepage/categories/Categories";
import Featured from "@/components/homepage/feature-products/Featured";
import Model from "@/components/homepage/model/Model";

export default async function Home() {
  return (
    <Box bg={"white"}>
      <HomeHeader />
      <Categories />
      <Featured />
      <Model />
    </Box>
  );
}
