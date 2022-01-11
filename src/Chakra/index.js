import React from "react";
import ChakraSection from "./ChakraSection";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
<<<<<<< HEAD
	brand: {
		900: "#1a365d",
		800: "#153e75",
		700: "#2a69ac",
	},
=======
  brand: {
    red: "#ec0000",
    blue: "#001dff",
    green: "#028201",
    offWhite: "#dcdcdc",
  },
>>>>>>> aeed04be4fa65f4fb2aac06a18addc58fb249225
};

const theme = extendTheme({ colors });

function Chakra() {
<<<<<<< HEAD
	return (
		<ChakraProvider theme={theme}>
			<ChakraSection />
		</ChakraProvider>
	);
=======
  return (
    <ChakraProvider theme={theme}>
      <ChakraSection />
    </ChakraProvider>
  );
>>>>>>> aeed04be4fa65f4fb2aac06a18addc58fb249225
}

export default Chakra;
