import React from "react";
import { Text } from "../../utils/chakra-components/ChakraComponents";

type Props = {
  label: string;
  color?: string;
  fontSize?: string;
  letterSpacing?: number;
};

const ProductTitle = (props: Props) => {
  return (
    <Text
      letterSpacing={props.letterSpacing || 12}
      textTransform={"uppercase"}
      fontSize={props.fontSize || 60}
      lineHeight={"70px"}
      fontWeight={"700"}
      color={props.color || "#fff"}
    >
      {props.label}
    </Text>
  );
};

export default ProductTitle;
