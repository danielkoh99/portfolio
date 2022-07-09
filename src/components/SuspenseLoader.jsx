import { Skeleton } from "@chakra-ui/react";
import React from "react";

export default function SuspenseLoader({ children }) {
  return <Skeleton>{...children}</Skeleton>;
}
