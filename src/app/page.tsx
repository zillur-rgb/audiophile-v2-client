import { Box } from "../utils/chakra-components/ChakraComponents";
import HeroSection from "../components/HeroSection";
import HomeHeader from "@/components/hero-section/HomeHeader";
import Categories from "@/components/homepage/categories/Categories";
import Featured from "@/components/homepage/feature-products/Featured";

export default async function Home() {
  return (
    <Box bg={"white"}>
      <HomeHeader />
      <Categories />
      <Featured />
    </Box>
  );
}
