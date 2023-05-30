import RestHeader from "@/components/hero-section/RestHeader";
import Registration from "@/components/registration/Registration";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <RestHeader text={"registration"} />
      <Registration />
    </>
  );
};

export default page;
