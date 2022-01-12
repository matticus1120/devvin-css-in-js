/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { useCSSObject } from "../helpers";

export function Button({ children, ...props }) {
  const [additionalCssProps, forwardProps] = useCSSObject(props);
  const theme = useTheme();
  return (
    <button
      css={{
        borderRadius: theme.shape[4],
        outline: "none",
        ...additionalCssProps,
      }}
      {...forwardProps}
    >
      {children}
    </button>
  );
}
