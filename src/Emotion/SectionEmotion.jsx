/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { css, useTheme } from "@emotion/react";
import { tryTaggedTemplateLiterals } from "./helpers";
import { Button, Container, Box } from "./components";

function SectionEmotion(props) {
  const theme = useTheme();
  useEffect(() => {
    tryTaggedTemplateLiterals();
  }, []);
  return (
    <Container>
      <h2>Sweet Emotion</h2>
      <Box>
        <h3
          css={{
            marginBottom: "30px",
          }}
        >
          Sweet h3 bro
        </h3>
        <Button
          bg="red"
          sx={{
            backgroundColor: "hot-pink",
          }}
          isDisabled={false}
          onClick={() => {
            alert("You clicked me");
          }}
        >
          Click Me
        </Button>
      </Box>
    </Container>
  );
}

export default SectionEmotion;
