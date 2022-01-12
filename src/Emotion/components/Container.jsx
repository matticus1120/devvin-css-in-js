/** @jsxImportSource @emotion/react */
import { css, jsx, useTheme } from "@emotion/react";
import { useCSSObject } from "../helpers";

export function Container({ children, ...props }) {
	const [additonalCssProps, forwardProps] = useCSSObject(props);
	const { maxWidths } = useTheme();
	return (
		<div
			css={{
				...additonalCssProps,
				...{
					maxWidth: maxWidths[6],
					margin: "0 auto",
				},
			}}
			{...forwardProps}>
			{children}
		</div>
	);
}
