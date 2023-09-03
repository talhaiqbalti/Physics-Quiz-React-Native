import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState, useRef } from "react";
import {
	Text,
	SafeAreaView,
	FlatList,
	View,
	ActivityIndicator,
	Dimensions
} from "react-native";
import { useQuizContext } from "../../context/QuizContext.js";
import ResultItem from "../../Components/ResultItem/ResultItem.js";
import CustomButton from "../../Components/CustomButton/CustomButton.js";
import GradientWrapper from "../../Components/GradientWrapper/GradientWrapper.js";
import LottieView from "lottie-react-native";
import getStyles from "./Finish.style.";

const Finish = () => {
	const { quizQuestions, recordedAnswers, reset } = useQuizContext();
	const [finalScore, setFinalScore] = useState(null);

	const navigation = useNavigation();
	const animation = useRef(null);

	const screenDimensions = Dimensions.get("screen");
	const styles = getStyles(screenDimensions);

	const getScore = () => {
		let score = 0;
		for (let i = 0; i < quizQuestions.length; i++) {
			if (quizQuestions[i].correctAnswer === recordedAnswers[i].answer) {
				score++;
			}
		}
		setFinalScore(score);
	};

	const playAgain = () => {
		navigation.navigate("Quiz");
		reset("answers");
	};

	const quit = () => {
		navigation.navigate("Starter");
		reset("all");
	};

	useEffect(() => {
		getScore();
	}, []);

	if (finalScore === null) return <ActivityIndicator />;

	return (
		<GradientWrapper>
			<SafeAreaView style={styles.container}>
				<View style={styles.resultContainer}>
					<Text style={styles.endTitle}>All questions answered!</Text>

					<Text style={styles.scoreAnnouncement}>
						You scored {finalScore} out of {quizQuestions.length}
					</Text>
          <Text style={styles.contact}>For qurires contact: irfansaeedi59@gmail.com</Text>

					<LottieView
						autoPlay
						ref={animation}
						style={{
							width: 200,
							height: 200,
							backgroundColor: "transparent",
						}}
						// Find more Lottie files at https://lottiefiles.com/featured
						source={require("../../assets/animations/trophy.json")}
					/>

					{/* <Image source={awardImg} alt="trophy" style={styles.awardImg} /> */}

					<View style={styles.buttonContainer}>
						<CustomButton
							buttonText="Play Again"
							onPress={() => playAgain()}
							type="primary"
						/>
						<CustomButton
							buttonText="Quit"
							onPress={() => quit()}
							type="secondary"
						/>
					</View>

					<View style={styles.listContainer}>
						<Text style={styles.subtitle}>Review your answers:</Text>
						<FlatList
							data={recordedAnswers}
							renderItem={({ item }) => (
								<ResultItem questions={quizQuestions} item={item} />
							)}
							keyExtractor={(item) => item.id}
						/>
					</View>
				</View>
			</SafeAreaView>
		</GradientWrapper>
	);
};

export default Finish;
