//frontend varaibles
const questionContainer = document.querySelector(".question");
const ansContainer = document.querySelector(".answer");
const submitBtn = document.querySelector(".submit");
const allOption = document.querySelectorAll("#opt");

//Api's shits
const apiKey = "FVqReQUHGBzu36QQdfmzINPK9WwXCmgN9ISRpJM3";
const URL = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=1`;
let catagory = "";
let difficulty = "";

//Answer checking varaibles
let firstAns = false;
let secondAns = false;
let thirdAns = false;
let fourthAns = false;
let correctAnswer;
let scoreValue = 0;

//takes responsibility for passing the data to related functions;
const assignValues = (question, answers) => {
  assignQuestion(question);
  assignAnswers(answers);
};

//assign question to questoin field
const assignQuestion = (question) => {
  questionContainer.innerText = question;
};

//assign option of answers to ans-visual container
const assignAnswers = (answers) => {
  const optionA = answers.answer_a;
  const optionB = answers.answer_b;
  const optionC = answers.answer_c;
  const optionD = answers.answer_d;

  //html elemnet for answer-optoins
  const optionOne = document.querySelector(".one");
  const optionTwo = document.querySelector(".two");
  const optionThree = document.querySelector(".three");
  const optionFour = document.querySelector(".four");

  optionOne.innerText = "A) " + optionA;
  optionTwo.innerText = "B) " + optionB;
  optionThree.innerText = "C) " + optionC;
  optionFour.innerText = "D) " + optionD;
};

//Fetching data
const data = async () => {
  try {
    const response = await fetch(URL);
    const res = await response.json();
    const question = res[0].question;
    const answers = res[0].answers;
    correctAnswer = res[0].correct_answers;

    // Logged answer to check if score increases or not when answer is correct.
    console.log(correctAnswer);

    assignValues(question, answers);
    // checks what user selected
    allOption.forEach((option, index) => {
      option.addEventListener("click", () => getAnswer(index));
    });
  } catch (e) {
    throw new Error(`Unable to fetch the data due to some unfotunate circumstances : ${e}`);
  }
};

//Toogles background color to indicate which options are selected
function dispalySelectedOption(selectedIndex) {
  allOption.forEach((option, index) => {
    const isSelected = selectedIndex === index;
    const style = isSelected ? "aliceblue" : "blue";
    option.style.backgroundColor = style;
    option.addEventListener("mouseover", () => {
      option.classList.add("hoverEffect");
      option.removeAttribute("style");
    });
    option.addEventListener("mouseout", () => {
      option.classList.remove("hoverEffect");
      option.setAttribute("style", `background-color:${style}`);
    });
  });
}

// Toogles the boolean varaible if it is selected.
function getAnswer(index) {
  //Answer checking varaibles
  // used it here so that only one option will be selected and others will be set to false
  firstAns = false;
  secondAns = false;
  thirdAns = false;
  fourthAns = false;
  const selectedAnswers = [firstAns, secondAns, thirdAns, fourthAns];
  selectedAnswers[index] = !selectedAnswers[index];
  firstAns = selectedAnswers[0];
  secondAns = selectedAnswers[1];
  thirdAns = selectedAnswers[2];
  fourthAns = selectedAnswers[3];
  dispalySelectedOption(index);
}

//function to check the answer whether it is correct or incorrect;
const checkAnswers = (correctAnswer) => {
  const score = document.querySelector(".player-score");
  const result = document.querySelector(".result");
  const userInput = [firstAns, secondAns, thirdAns, fourthAns];
  const answerIndex = Object.values(correctAnswer);
  const correctAnswerIndex = answerIndex.indexOf("true");
  const userInputIndex = userInput.indexOf(true);

  if (correctAnswerIndex === userInputIndex) {
    scoreValue++;
    result.textContent = "Correct";
  } else result.textContent = "Incorrect";

  score.innerText = `Score: ${scoreValue}`;
  setTimeout(() => {
    data();
  }, 1000);
};

submitBtn.addEventListener("click", () => checkAnswers(correctAnswer));
window.addEventListener("load", data);
