import React from "react";
import { Button } from "../../utils/chakra-components/ChakraComponents";

type Props = {
  label: string;
  onClick: () => void;
};

const Btn = (props: Props) => {
  return (
    <Button variant={"base"} onClick={props.onClick}>
      {props.label}
    </Button>
  );
};

export default Btn;
