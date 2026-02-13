const questions = 
[

  //object1
  {
    category: "Food",
    question: "What is my favorite type of food?",
    choices: ["Indian","Chinese","Greek"],
    answer: "Indian"
  },

  //object2
  {
    category: "Pets",
    question: "What is my type of Pet?",
    choices: ["Cat","Dog","Fish"],
    answer: "Cat"
  },

  //object3
  {
    category: "Weather",
    question: "What is my favorite type of Weather?",
    choices: ["Snow","Rain","Sun"],
    answer: "Rain"
  },

  //object4
  {
    category: "Colors",
    question: "What is my favority color?",
    choices: ["Black","White","Blue"],
    answer: "White"
  },

  //object5
  {
    category: "Music Instruments",
    question: "What is my favorite Instrument?",
    choices: ["Piano","Guitar","Trumpet"],
    answer: "Guitar"
  }
];

function getRandomQuestion(array){
  const min = 0;
  const max = 4;
  const randomObject = Math.round(Math.random() * (max - min) + min);
  return array[randomObject];
}

function getRandomComputerChoice(array){
  const min = 0;
  const max = array.length-1
  const randomAnswer = Math.round(Math.random() * (max - min) + min);
  const randomSelectedAnswer = array[randomAnswer]
  return randomSelectedAnswer
}

const selectedObject = getRandomQuestion(questions)

const selectedChoices = selectedObject.choices

const answer = selectedObject.answer

const computerSelectedAnswer = getRandomComputerChoice(selectedChoices)

getResults(answer, computerSelectedAnswer)

function getResults(selectedObject, computerSelectedAnswer){
  if(computerSelectedAnswer === selectedObject){
    return console.log("The computer's choice is correct!");
  }else if(computerSelectedAnswer !== selectedObject){
    return console.log(`The computer's choice is wrong. The correct answer is: ${answer}`)
  }
}
