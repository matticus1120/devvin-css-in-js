import React from "react";
import { ThemeProvider } from "@emotion/react";

import theme from "./theme";

import SectionEmotion from "./SectionEmotion";
import SectionMUI from "./SectionMUI";

function Emotion() {
	return (
		<ThemeProvider theme={theme}>
			<SectionEmotion />
			<SectionMUI />
		</ThemeProvider>
	);
}

export default Emotion;
