import Login from "@/components/auth/login/Login";
import RestHeader from "@/components/shared/hero-section/RestHeader";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <RestHeader text={"login"} />
      <Login />
    </>
  );
};

export default page;
