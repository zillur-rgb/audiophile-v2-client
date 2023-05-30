"use client";

import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {};

type Inputs = {
  email: string;
  name: string;
  password: string;
  address: string;
  dateOfBirth: string;
  role: string;
};

export default function Registration(props: Props) {
  const [registration, setRegistration] = useState<Inputs>({
    email: "",
    name: "",
    password: "",
    address: "",
    dateOfBirth: "",
    role: "",
  });

  const onSubmit = () => {
    console.log("registration", registration);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Email
        <input
          placeholder={"Email"}
          type="email"
          onChange={(e) =>
            setRegistration((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />
      </label>
      <label>
        Fullname
        <input
          placeholder={"Name"}
          type="text"
          onChange={(e) =>
            setRegistration((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
        />
      </label>
      <label>
        Password
        <input
          placeholder={"Password"}
          type="password"
          onChange={(e) =>
            setRegistration((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
        />
      </label>
      <label>
        Address
        <input
          placeholder={"Address"}
          type="address"
          onChange={(e) =>
            setRegistration((prevState) => ({
              ...prevState,
              address: e.target.value,
            }))
          }
        />
      </label>
      <label>
        Date of Birth
        <input
          placeholder={"Date of Birth dd-mm-yyyy"}
          type="text"
          onChange={(e) =>
            setRegistration((prevState) => ({
              ...prevState,
              dateOfBirth: e.target.value,
            }))
          }
        />
      </label>

      <Button type="submit" onClick={onSubmit} bg={"orange"}>
        Submit
      </Button>
    </form>
  );
}
