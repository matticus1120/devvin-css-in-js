/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { css, useTheme } from "@emotion/react";
import { tryTaggedTemplateLiterals } from "./helpers";
import { Button, Container } from "./components";

function SectionEmotion(props) {
	const theme = useTheme();
	useEffect(() => {
		tryTaggedTemplateLiterals();
	}, []);
	return (
		<Container>
			<h2>Sweet Emotion</h2>
			<div>
				<h3
					css={{
						backgroundColor: theme.colors.silver,
						color: [theme.colors.white, theme.colors.red, theme.colors.blue],
						padding: theme.space[4],
					}}>
					Sweet h3 bro
				</h3>
				<Button
					// bg={theme.colors.red}
					bg="red"
					sx={{
						backgroundColor: "hot-pink",
					}}
					isDisabled={false}
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
