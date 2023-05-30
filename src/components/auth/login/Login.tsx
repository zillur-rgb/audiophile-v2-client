"use client";

import { addData } from "@/services/apiHelpers";
import { Button, VStack } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {};
interface IUserInput {
  email: string;
  password: string;
}
export default function Login(props: Props) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (userInfo: IUserInput) => addData("login", userInfo),
  });

  {
    mutation.isLoading && <h1>Logging in</h1>;
  }

  {
    mutation.isError && <h1>Error sending data</h1>;
  }

  {
    mutation.isSuccess && router.push("/");
  }
  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { data } = await mutation.mutateAsync(loginData);
    console.log("User", data);
  };
  return (
    <VStack width={"100%"} h="100vh" bg={"#00000010"}>
      <form onSubmit={onSubmit}>
        <VStack spacing={2}>
          <label>
            Email
            <input
              placeholder={"Email"}
              type="email"
              onChange={(e) =>
                setLoginData((prevState) => ({
                  ...prevState,
                  email: e.target.value,
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
                setLoginData((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
          </label>

          <Button type="submit" bg={"orange"}>
            Submit
          </Button>
        </VStack>
      </form>
    </VStack>
  );
}
