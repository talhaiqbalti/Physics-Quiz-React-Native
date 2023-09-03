import React from "react";
import Navigation from "./src/routes/RouteContainer.js";
import { QuizProvider } from "./src/context/QuizContext.js";
import { ActivityIndicator } from "react-native";

import { useFonts, Blaka_400Regular } from "@expo-google-fonts/dev";

const App = () => {
	let [fontsLoaded] = useFonts({
		Blaka_400Regular,
	});

	if (!fontsLoaded) {
		return <ActivityIndicator />;
	} else {
		return (
			<QuizProvider>
				<Navigation />
			</QuizProvider>
		);
	}
};

export default App;
