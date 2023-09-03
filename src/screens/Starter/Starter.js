import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, SafeAreaView, View, Image, Dimensions , ScrollView} from "react-native";
import CustomButton from "../../Components/CustomButton/CustomButton.js";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import palette from "../../styles/colours.js";
import { useQuizContext } from "../../context/QuizContext.js";
import Slider from "@react-native-community/slider";
import Pawprint from "../../assets/images/pawprint.png";
import getStyles from "./Starter.style.js";

const questionTypes = ["Heat and Thermodynamics", "Rotational Motion", "Work, Power and Energy", "Electrostatics", "Current Electricity", "Gravitation", "Vector", "Scope of Physics", "Waves", "Oscillation", "Geometrical Optics", "Motion and Force", "Electromegnietism"];

const Starter = () => {
	const { numQuestions, questionType, updateNumQuestions, updateQuestionType } =
		useQuizContext();

	const screenDimensions = Dimensions.get("screen");
	const styles = getStyles(screenDimensions);

	const navigation = useNavigation();

	const canStart = numQuestions && questionType;

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.innerContainer}>
				<MaskedView
					style={{ flex: 1, flexDirection: "row", height: "100%" }}
					maskElement={
						<View
							style={{
								// Transparent background because mask is based off alpha channel.
								backgroundColor: "transparent",
								flex: 1,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Text style={styles.titleText}>Physics</Text>
						</View>
					}
				>
					{/* Shows behind the mask, you can put anything here, such as an image */}
					<LinearGradient
						colors={[palette.primary, palette.accent]}
						start={{ x: 0, y: 1 }}
						end={{ x: 0, y: 0.33 }}
						style={{ flex: 1 }}
					/>
				</MaskedView>

				<ScrollView style={styles.outerOptionsContainer}>
				

					<View style={styles.optionsContainer}>
						<View style={styles.questionType}>
							<Text style={styles.subtitle}>
								Choose chapter: {questionType}
							</Text>
						</View>
						<View style={styles.buttonsContainer}>
							{questionTypes.map((qType, index) => (
								<CustomButton
									key={`${qType}-${index}`}
									buttonText={qType}
									onPress={() => updateQuestionType(qType)}
									type="primary"
								/>
							))}
						</View>
					</View>
					<CustomButton
						width="80%"
						buttonText="start"
						onPress={() => navigation.navigate("Quiz")}
						disabled={!canStart}
						type="secondary"
					/>
				</ScrollView>
			</ScrollView>
		
		</SafeAreaView>
	);
};

export default Starter;
