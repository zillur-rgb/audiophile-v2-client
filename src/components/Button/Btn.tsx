import React from "react";
import { Button } from "../../utils/chakra-components/ChakraComponents";

type Props = {
  label: string;
  onClick?: () => void;
  bgColor?: string;
  color?: string;
};

const Btn = (props: Props) => {
  return (
    <Button
      bg={props.bgColor || "orange"}
      color={props.color || "white"}
      onClick={props.onClick}
      px={12}
      py={6}
      _hover={{
        color: "orange",
        background: "#f1f1f1",
      }}
    >
      {props.label}
    </Button>
  );
};

export default Btn;
