// global declarations
const questions = [
  {
    questionNumber: 1,
    question: "Which of these is not used to declare a variable in JavaScript?",
    answers: ["Const", "Let", "Var", "Dec"],
    correctAnswer: "Dec",
  },
  {
    questionNumber: 2,
    question: "What is the name for the symbols ( ) ?",
    answers: [
      "Curly Brackets",
      "Angular Brackets",
      "Parentheses",
      "Open Brackets",
    ],
    correctAnswer: "Parentheses",
  },
  {
    questionNumber: 3,
    question:
      "What attribute should be used to link a JavaScript file to an HTML file?",
    answers: ["src", "href", "link", "rel"],
    correctAnswer: "src",
  },
  {
    questionNumber: 4,
    question: "What symbol is used to reference an ID in CSS?",
    answers: [".", "#", "/", "="],
    correctAnswer: "#",
  },
  {
    questionNumber: 5,
    question: "Which of these is not a type of loop statement in JavaScript?",
    answers: ["For", "While", "Rotate", "Continue"],
    correctAnswer: "Rotate",
  },
];

let questionIndex = 0;
let timerValue = 12 * questions.length;
let quizComplete = false;

const startBtn = document.getElementById("start-button");

const readFromLocalStorage = (key, defaultValue) => {
  // get from LS by key
  const dataLS = localStorage.getItem(key);
  // parse LS data
  const parsedData = JSON.parse(dataLS);
  // CHECK
  // check if highscores exist in LS

  if (parsedData) {
    return parsedData;
    // CHECK
    // if false then set highscores to empty array in LS
  } else {
    return defaultValue;
  }
};

const onLoad = () => {
  // initialise local storage
  const highScores = readFromLocalStorage("High Scores", []);
  console.log(highScores);
};

const removeStartSection = () => {};

const startTimer = () => {
  // declare function to execute every 1 sec
  const countdown = () => {
    // decrement timer value
    // if quizComplete is true then stop timer
    // check if timer reaches 0
    // if true render game over
  };

  // setInterval of 1000ms (1s)
};

const validateAnswer = () => {
  // get answer clicked from user
  // get the correct answer for question
  // compare the 2 answers
  // if incorrect subtract 5 seconds from timerValue
  // if incorrect render error alert with message and status
  // if correct render success alert with message and status
  // set timeout for 500ms and then go to next question
  // if question is last question set quizComplete to true and then render form
  // if question is not last question then increment question index and render next question
};

const handleFormSubmit = () => {
  // get value from input
  // check if empty then render error alert with message and status
  // if not empty then create the score object
  // {
  //   fullName: "Bob Smith",
  //   score: 25
  // }
  // push score object to LS
  // render quizCompleteSection
};

const renderTimerSection = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const renderQuestionSection = () => {
  // use HTML as guide and build in JS
  // append section to main
  // add click event listener on #question-section
};

const renderGameOver = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const renderAlert = (message, status) => {
  // use HTML as guide and build in JS
  // append div to #question-section
};

const renderForm = () => {
  // use HTML as guide and build in JS
  // append section to main
  // add submit event handler to form
};

const renderQuizCompleteSection = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const startQuiz = () => {
  console.log("start");
  // remove start section
  // start timer
  // render timer section
  // render question section
};

// start button click event listener
startBtn.addEventListener("click", startQuiz);
// document on load event listener
window.addEventListener("load", onLoad);
