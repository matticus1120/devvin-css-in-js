/** @jsxImportSource @emotion/react */
import { useMemo } from "react";
import { css, useTheme } from "@emotion/react";

export function Box({ children, sx, ...props }) {
  const boxStyles = useMemo(() => {
    return {
      border: "solid thin",
    };
  }, [sx]);
  const as = false;
  const TagName = as ? as : "div";

  const otherProps = {};

  return (
    <TagName css={boxStyles} {...otherProps}>
      {children}
    </TagName>
  );
}
