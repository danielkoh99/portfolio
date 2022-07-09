import React from "react";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDom from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
