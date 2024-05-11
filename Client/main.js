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
  let optionA = answers.answer_a;
  let optionB = answers.answer_b;
  let optionC = answers.answer_c;
  let optionD = answers.answer_d;

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
    let response = await fetch(URL);
    let res = await response.json();
    let question = res[0].question;
    let answers = res[0].answers;
    correctAnswer = res[0].correct_answers;

    console.log(correctAnswer);

    assignValues(question, answers);
    // checks what user selected
    allOption.forEach((option, index) => {
      option.addEventListener("click", () => getAnswer(index));
    });
  } catch (e) {
    console.log("Unable to fetch the data due to some unfotunate circumstances", e);
  }
};

//Toogles background color to indicate which options are selected
//and toogles the boolean varaible if it is selected.
function getAnswer(index) {
  //Answer checking varaibles
  firstAns = false;
  secondAns = false;
  thirdAns = false;
  fourthAns = false;
  const selectedAnswers = [firstAns, secondAns, thirdAns, fourthAns];
  selectedAnswers[index] = !selectedAnswers[index];
  allOption.forEach((option, i) => {
    const isSelected = index === i;
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
  firstAns = selectedAnswers[0];
  secondAns = selectedAnswers[1];
  thirdAns = selectedAnswers[2];
  fourthAns = selectedAnswers[3];
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
