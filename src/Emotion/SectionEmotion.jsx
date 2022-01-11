/** @jsxImportSource @emotion/react */
import React from "react";
import { css, useTheme } from "@emotion/react";

function useCSSObject(props) {
	const { m, mt, p, pb, color, bg, fontSize, ...rest } = props;
	return [
		{
			margin: m,
			marginTop: mt,
			padding: p,
			paddingBottom: pb,
			color: color,
			background: bg,
			fontSize: fontSize,
		},
		rest,
	];
}

function Button({ children, ...props }) {
	const [cssProps, forwardProps] = useCSSObject(props);
	return (
		<button css={cssProps} {...forwardProps}>
			{children}
		</button>
	);
}

function SectionEmotion(props) {
	const theme = useTheme();
	return (
		<div>
			<h2>Sweet Emotion</h2>
			<div>
				<h3
					css={{
						backgroundColor: theme.colors.silver,
						color: theme.colors.white,
					}}>
					Sweet h3 bro
				</h3>
				<Button
					// If we want to use strings here, we'll need some helpers - this is how emotion theming works?
					color={theme.colors.white}
					// color="white"  // or should useCSSObject() assume "color" is from theme.colors?
					fontSize={theme.fontSizes[3]}
					bg={theme.colors["near-black"]}
					mt={theme.space[1]}
					onClick={() => {
						alert("You clicked me");
					}}>
					Click Me
				</Button>
			</div>
		</div>
	);
}

export default SectionEmotion;
