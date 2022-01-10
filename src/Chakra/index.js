import React from "react";
import ChakraSection from "./ChakraSection";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    red: "#ec0000",
    blue: "#001dff",
    green: "#028201",
    offWhite: "#dcdcdc",
  },
};

const theme = extendTheme({ colors });

function Chakra() {
  return (
    <ChakraProvider theme={theme}>
      <ChakraSection />
    </ChakraProvider>
  );
}

export default Chakra;
