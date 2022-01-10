import React from "react";

import { Box, Container } from "@chakra-ui/react";

function ChakraSection() {
  return (
    <Container>
      <h2>ChakraSection</h2>
      <Box p={20} align="center">
        Tomato
      </Box>
      <Box p={5} align="center" bg={["brand.red", "brand.blue", "brand.green"]}>
        <h3>Box 2</h3>
      </Box>
      <Box m={[2, 3]}>Apples</Box>
    </Container>
  );
}

export default ChakraSection;
