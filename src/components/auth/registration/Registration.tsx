"use client";

import { addData } from "@/services/apiHelpers";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

type IUserInput = {
  email: string;
  name: string;
  password: string;
  address: string;
  dateOfBirth: string;
  role: string;
};

export default function Registration(props: Props) {
  const [registration, setRegistration] = useState<IUserInput>({
    email: "",
    name: "",
    password: "",
    address: "",
    dateOfBirth: "",
    role: "",
  });

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (userInfo: IUserInput) => addData("users", userInfo),
  });

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    mutation.mutateAsync(registration);
    console.log("registration", registration);
  };

  const labelProps = {
    pr: "100px",
  };

  {
    mutation.isLoading && <h1>Signing up</h1>;
  }

  {
    mutation.isError && <h1>Error sending data</h1>;
  }

  {
    mutation.isSuccess && router.push("/");
  }

  return (
    <VStack width={"100%"} bg={"#00000010"}>
      <form onSubmit={onSubmit}>
        <VStack spacing={2}>
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

          <label>
            Select your role:
            <select
              onChange={(e) =>
                setRegistration((prevState) => ({
                  ...prevState,
                  role: e.target.value,
                }))
              }
            >
              <option value={"seller"}>Seller</option>
              <option value={"buyer"}>Buyer</option>
            </select>
          </label>

          <Button type="submit" bg={"orange"}>
            Submit
          </Button>
        </VStack>
      </form>
    </VStack>
  );
}
