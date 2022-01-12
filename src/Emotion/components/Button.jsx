import { useCSSObject } from "../helpers";

export function Button({ children, ...props }) {
	const [cssProps, forwardProps] = useCSSObject(props);
	return (
		<button css={cssProps} {...forwardProps}>
			{children}
		</button>
	);
}
