/** @jsxImportSource @emotion/react */
import React from "react";
import { css, useTheme } from "@emotion/react";
import { helpers } from "./helpers";
import { Button, Container } from "./components";

function SectionEmotion(props) {
	const theme = useTheme();
	return (
		<Container>
			<h2>Sweet Emotion</h2>
			<div>
				<h3
					css={{
						backgroundColor: theme.colors.silver,
						color: [theme.colors.white, theme.colors.red, theme.colors.blue],
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
		</Container>
	);
}

export default SectionEmotion;
