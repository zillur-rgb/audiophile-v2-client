"use client";

import SpeakersComponent from "@/components/products/SpeakersComponent";
import RestHeader from "@/components/shared/hero-section/RestHeader";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <RestHeader text={"speakers"} />
      <SpeakersComponent />
    </>
  );
};

export default page;
