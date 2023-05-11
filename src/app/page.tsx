import { Box } from "../utils/chakra-components/ChakraComponents";
import HeroSection from "../components/HeroSection";
import HomeHeader from "@/components/hero-section/HomeHeader";
import Categories from "@/components/categories/Categories";

export default async function Home() {
  return (
    <Box bg={"white"}>
      <HomeHeader />
      <Categories />
    </Box>
  );
}
