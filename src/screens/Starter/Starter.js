import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, SafeAreaView, View, Image, Dimensions , ScrollView, TouchableOpacity,} from "react-native";
import CustomButton from "../../Components/CustomButton/CustomButton.js";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import palette from "../../styles/colours.js";
import { useQuizContext } from "../../context/QuizContext.js";
import Slider from "@react-native-community/slider";
import Pawprint from "../../assets/images/pawprint.png";
import getStyles from "./Starter.style.js";

import { Touchable } from "react-native";

import heat from "../../assets/images/chapter_covers/heat_and_thermodynamic_.png";
import rotational from "../../assets/images/chapter_covers/Rotational_motion.png";
import work from "../../assets/images/chapter_covers/work_power_energy.png"
import electrostatics from "../../assets/images/chapter_covers/Electrosattic.png";
import current from "../../assets/images/chapter_covers/Current_electricity_.png"
import gravity from "../../assets/images/chapter_covers/Gravitation.png"
import vector from '../../assets/images/chapter_covers/VECTORR.png'
import scope from "../../assets/images/chapter_covers/scope_of_physics.png"
import wave from "../../assets/images/chapter_covers/Waves.png"
import oscillation from "../../assets/images/chapter_covers/oscillation.png"
import geometrical from "../../assets/images/chapter_covers/GEOMETRICAL_OPTICS.png"
import motion from "../../assets/images/chapter_covers/Force_and_motion.png"
import electromegnat from "../../assets/images/chapter_covers/elecromagnitism.png"

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
			<View style={styles.innerContainer}>
				{/* <MaskedView
					style={{ flex: 1, flexDirection: "row", height: "100%" }}
					maskElement={
						<View
							style={{
							
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
				\
					<LinearGradient
						colors={[palette.primary, palette.accent]}
						start={{ x: 0, y: 1 }}
						end={{ x: 0, y: 0.33 }}
						style={{ flex: 1 }}
					/>
				</MaskedView> */}

				<View style={styles.outerOptionsContainer}>
				

					<ScrollView style={styles.optionsContainer} contentContainerStyle={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexWrap: "wrap",
						flexDirection: 'row',
						
					}}>
							<Text style={{color: "#fff", flexBasis: "100%", marginTop: 170, marginBottom: -90, fontSize: 24}}>
								Choose chapter: {questionType}
							</Text>
						
						
						
						<TouchableOpacity onPress={()=>{
								updateQuestionType("Heat and Thermodynamics")
								navigation.navigate("Quiz")
							}}>
							<Image source={heat} style={{height: 250, width: 125, marginLeft: 30, marginRight: 30,}} />
						</TouchableOpacity>
					
						<TouchableOpacity  onPress={()=>{
								updateQuestionType("Rotational Motion")
								navigation.navigate("Quiz")
							}}>
							<Image source={rotational} style={{height: 250, width: 125, marginLeft: 30, marginRight: 30}} />
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{
								updateQuestionType("Work, Power and Energy")
								navigation.navigate("Quiz")
							}}>
							<Image source={work} style={{height: 250, width: 125, marginLeft: 30, marginRight: 30}} />
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{
								updateQuestionType("Electrostatics")
								navigation.navigate("Quiz")
							}}>
							<Image source={electrostatics} style={{height: 250, width: 125, marginLeft: 30, marginRight: 30}} />
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{
								updateQuestionType("Current Electricity")
								navigation.navigate("Quiz")
							}}>
							<Image source={current} style={{height: 250, width: 125, marginLeft: 30, marginRight: 30}} />
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{
								updateQuestionType("Gravitation")
								navigation.navigate("Quiz")
							}}>
							<Image source={gravity} style={{height: 250, width: 125, marginLeft: 30, marginRight: 30}} />
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{
								updateQuestionType("Vector")
								navigation.navigate("Quiz")
							}}>
							<Image source={vector} style={{height: 250, width: 125, marginLeft: 30, marginRight: 30}} />
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{
								updateQuestionType("Scope of Physics")
								navigation.navigate("Quiz")
							}}>
							<Image source={scope} style={{height: 250, width: 125, marginLeft: 30, marginRight: 30}} />
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{
								updateQuestionType("Waves")
								navigation.navigate("Quiz")
							}}>
							<Image source={wave} style={{height: 250, width: 125, marginLeft: 30, marginRight: 30}} />
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{
								updateQuestionType("Oscillation")
								navigation.navigate("Quiz")
							}}>
							<Image source={oscillation} style={{height: 250, width: 125, marginLeft: 30, marginRight: 30}} />
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{
								updateQuestionType("Geometrical Optics")
								navigation.navigate("Quiz")
							}}>
							<Image source={geometrical} style={{height: 250, width: 125, marginLeft: 30, marginRight: 30}} />
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{
								updateQuestionType("Motion and Force")
								navigation.navigate("Quiz")
							}}>
							<Image source={motion} style={{height: 250, width: 125, marginLeft: 30, marginRight: 30}} />
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{
								updateQuestionType("Electromegnietism")
								navigation.navigate("Quiz")
							}}>
							<Image source={electromegnat} style={{height: 250, width: 125, marginLeft: 30, marginRight: 30}} />
						</TouchableOpacity>
						{/* <View style={styles.buttonsContainer}>
							{questionTypes.map((qType, index) => (
								<CustomButton
									key={`${qType}-${index}`}
									buttonText={qType}
									onPress={() => updateQuestionType(qType)}
									type="primary"
								/>
							))}
						</View> */}
					</ScrollView>
					{/* <CustomButton
						width="80%"
						buttonText="start"
						onPress={() => navigation.navigate("Quiz")}
						disabled={!canStart}
						type="secondary"
					/> */}
				</View>
			</View>
		
		</SafeAreaView>
	);
};

export default Starter;
