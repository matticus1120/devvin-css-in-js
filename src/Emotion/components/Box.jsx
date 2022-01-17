/** @jsxImportSource @emotion/react */
import { useMemo } from "react";
import { css, useTheme } from "@emotion/react";
import { toCSSObject } from "../system";

export function Box({ children, sx, ...props }) {
	const [cssProps, forwardProps] = toCSSObject(props);
	console.log("cssProps", cssProps);
	// const theme = useTheme();
	const boxStyles = useMemo(() => {
		return {
			border: "solid thin",
			...cssProps,
			...sx,
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
