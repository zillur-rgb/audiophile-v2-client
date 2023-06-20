"use client";
import { Text, VStack } from "@chakra-ui/react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <VStack h={"80%"} alignItems={"center"} justifyContent={"center"}>
      <Text fontSize={36}>🌀 Loading...</Text>
    </VStack>
  );
}
