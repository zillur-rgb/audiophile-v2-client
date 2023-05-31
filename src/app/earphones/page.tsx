"use client";

import EarphonesComponent from "@/components/products/EarphonesComponent";
import RestHeader from "@/components/shared/hero-section/RestHeader";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <RestHeader text={"earphones"} />
      <EarphonesComponent />
    </>
  );
};

export default page;
