/** @jsxImportSource @emotion/react */
import React from "react";
import { css, useTheme } from "@emotion/react";
import { color } from "styled-system";

// const color = "white";

// https://stackoverflow.com/questions/66965774/emotion-css-prop-and-nextjs-new-jsx-runtime-error-pragma-and-pragmafrag-canno

function SectionEmotion(props) {
  console.log("props", props);
  console.log("color", color);
  const { colors } = useTheme();
  console.log("colors", colors);
  return (
    <div>
      <h2>Sweet Emotion</h2>
      <div
        css={css`
          padding: 32px;
          background-color: color;
          padding: 32px;
          border-radius: 4px;
          position: relative;
          display: inline-block;
          padding-right: 93px;
        `}
      >
        <h3
          bg={"colors.navyBlue"}
          css={{
            backgroundColor: "colors.navyBlue",
            color: colors.white,
            display: "inline-block",
          }}
        >
          Sweet div bro
        </h3>
      </div>
    </div>
  );
}

export default SectionEmotion;
