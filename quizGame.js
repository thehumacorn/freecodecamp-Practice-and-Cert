const questions = 
[

  //object0
  {
    category: "Food",
    question: "What is my favorite type of food?",
    choices: ["Indian","Chinese","Greek"],
    answer: "Indian"
  },

  //object1
  {
    category: "Pets",
    question: "What is my type of Pet?",
    choices: ["Cat","Dog","Fish"],
    answer: "Cat"
  },

  //object2
  {
    category: "Weather",
    question: "What is my favorite type of Weather?",
    choices: ["Snow","Rain","Sun"],
    answer: "Rain"
  },

  //object3
  {
    category: "Colors",
    question: "What is my favority color?",
    choices: ["Black","White","Blue"],
    answer: "White"
  },

  //object4
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

//Computing Random Question from array and saving in variable
const questionObject = getRandomQuestion(questions)

//Computing the computers choice from quesitonObject choice array and saving in variable
const computerAnswer = getRandomComputerChoice(questionObject.choices)
  
getResults(questionObject, computerAnswer)

function getResults(questionObject, computerAnswer){

  const answer = questionObject.answer

  //results to check in if statements
  console.log("Computer answer: " + computerAnswer)
  console.log("questionObject answer: " + answer)

  if(computerAnswer === answer){
    return console.log("The computer's choice is correct!");
  }else if(computerAnswer !== answer){
    return console.log(`The computer's choice is wrong. The correct answer is: ${answer}`)
  }
}

