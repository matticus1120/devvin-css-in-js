import React from "react";

import { Box } from "@chakra-ui/react";

function ChakraSection() {
  return (
    <div>
      <h2>ChakraSection</h2>
      <Box m={2}>Tomato</Box>
      <Box maxW="960px" mx="auto" text="center">
        <h3>Box 2</h3>
      </Box>
      <Box m={[2, 3]} />
    </div>
  );
}

export default ChakraSection;
