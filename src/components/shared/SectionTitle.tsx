import { Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  label: string;
  fontSize?: number | string;
};

const SectionTitle = (props: Props) => {
  return (
    <Text
      fontSize={props.fontSize || 36}
      textTransform={"uppercase"}
      fontWeight={500}
    >
      {props.label}
    </Text>
  );
};

export default SectionTitle;
