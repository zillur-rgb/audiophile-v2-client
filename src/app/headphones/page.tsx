"use client";
import HeadphonesComponent from "@/components/products/HeadphonesComponent";
import RestHeader from "@/components/shared/hero-section/RestHeader";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <RestHeader text={"headphones"} />
      <div>earphones</div>
      <HeadphonesComponent />
    </>
  );
};

export default page;
