// import { decode } from "html-entities";

import heat from "../assets/questions/HeatAndThrmodynamics.json"
import rotational from "../assets/questions/torqueEquilibirium.json"
import work from "../assets/questions/workPowerEnergy.json"
import electrostatics from "../assets/questions/electrostatic.json"
import current from "../assets/questions/currentElectricity.json"
import electromegnietism from "../assets/questions/electromegnitism.json"
import geometrical from "../assets/questions/geometricalOptics.json"
import gravitation from "../assets/questions/gravitation.json"
import motion from "../assets/questions/motionAndForce.json"
import oscillation from "../assets/questions/oscillations.json"
import scope from "../assets/questions/scopeOfPhysics.json"
import vector from "../assets/questions/vector.json"
import waves from "../assets/questions/waves.json"


function shuffleAndSelect(array, count) {
  // Shuffle the array
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  // Select the specified number of elements
  const selectedElements = shuffledArray.slice(0, count);

  return selectedElements;
}


export const getTrueFalseQuestions = async (numQuestions) => {
	let num = 10;

	if (numQuestions) {
		num = numQuestions;
	}

	const apiCall = await fetch(
		`https://opentdb.com/api.php?amount=${num.toString()}&type=boolean`,
	);
	const data = await apiCall.json();
	return data.results.map((object, index) => {
		return {
			questionNumber: index,
			question: object.question,
			answers: object.incorrect_answers.concat(object.correct_answer).sort(),
			correctAnswer: object.correct_answer,
		};
	});
};

export const getRegularQuestions = async () => {
	const apiCall = await fetch("https://opentdb.com/api.php?amount=10");
	const data = await apiCall.json();
	return data.results.map((object, index) => {
		return {
			questionNumber: index,
			question: object.question,
			answers: object.incorrect_answers.concat(object.correct_answer).sort(),
			correctAnswer: object.correct_answer,
		};
	});
};

export const getSpecificNumberOfRegularQuestions = async (
	numberOfQuestions,
  questionType
) => {
  console.log(numberOfQuestions)
  let data = heat.questions

  if(questionType === "Heat and Thermodynamics"){
    data = shuffleAndSelect(heat.questions, numberOfQuestions)
  } else if (questionType === "Rotational Motion"){
    data = shuffleAndSelect(rotational.questions, numberOfQuestions)
  }else if (questionType === "Work, Power and Energy"){
    data = shuffleAndSelect(work.questions, numberOfQuestions)
  }else if (questionType === "Electrostatics"){
    data = shuffleAndSelect(electrostatics.questions, numberOfQuestions)
  }else if (questionType === "Current Electricity"){
    data = shuffleAndSelect(current.questions, numberOfQuestions)
  }else if (questionType === "Gravitation"){
    data = shuffleAndSelect(gravitation.questions, numberOfQuestions)
  }else if (questionType === "Vector"){
    data = shuffleAndSelect(vector.questions, numberOfQuestions)
  }else if (questionType === "Scope of Physics"){
    data = shuffleAndSelect(scope.questions, numberOfQuestions)
  }else if (questionType === "Waves"){
    data = shuffleAndSelect(waves.questions, numberOfQuestions)
  }else if (questionType === "Oscillation"){
   data = shuffleAndSelect(oscillation.questions, numberOfQuestions)
  }else if (questionType === "Geometrical Optics"){
    data = shuffleAndSelect(geometrical.questions, numberOfQuestions)
  }else if (questionType === "Motion and Force"){
    data = shuffleAndSelect(motion.questions, numberOfQuestions)
  }else if (questionType === "Electromegnietism"){
    data = shuffleAndSelect(electromegnietism.questions, numberOfQuestions)
  }
  
	return data.map((object, index) => {
		return {
			questionNumber: index,
			question: object.question,
			answers: object.options,
			correctAnswer: object.correct_answer,
		};
	});
};

// function decodeHtml(html) {
// 	return decode(html);
// }
