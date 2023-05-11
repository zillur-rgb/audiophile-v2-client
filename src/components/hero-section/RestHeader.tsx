import React from "react";
import HeroSection from "../HeroSection";
import { Text, VStack } from "../../utils/chakra-components/ChakraComponents";

type Props = {
  text: string;
};

const HeadphonesHeader = (props: Props) => {
  return (
    <HeroSection>
      <VStack>
        <Text
          textTransform={"uppercase"}
          fontWeight={700}
          fontSize={"xl"}
          py={20}
        >
          {props.text}
        </Text>
      </VStack>
    </HeroSection>
  );
};

export default HeadphonesHeader;
