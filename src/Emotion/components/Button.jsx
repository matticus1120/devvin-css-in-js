/** @jsxImportSource @emotion/react */
import { useMemo } from "react";
import { useTheme } from "@emotion/react";
import { useCSSObject } from "../helpers";

export function Button({ children, ...props }) {
  const [additionalCssProps, forwardProps] = useCSSObject(props);
  const theme = useTheme();
  const buttonStyles = useMemo(() => {
    return {
      borderRadius: theme.shape[4],
      border: "none",
      outline: "none",
      padding: "8px 16px 8px 16px",
      backgroundColor: theme.colors.darkBlue,
      color: theme.colors.white,
      ...additionalCssProps,
    };
  }, [additionalCssProps]);

  const { isDisabled, isSpinning, as, ...otherProps } = forwardProps;

  const TagName = as ? as : "button";

  return (
    <TagName css={buttonStyles} disabled={false} {...otherProps} role="button">
      {children}
      {isSpinning && <span>SPIN</span>}
    </TagName>
  );
}
