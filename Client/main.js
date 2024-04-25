//frontend varaibles
const questionContainer = document.querySelector('.question');
const ansContainer = document.querySelector('.answer');


//Api's shits
const apiKey = 'FVqReQUHGBzu36QQdfmzINPK9WwXCmgN9ISRpJM3';
const URL = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=1`;
let catagory = '';
let difficulty = '';

//Answer checking varaibles
let firstAns = false;
let secondAns = false;
let thirdAns = false;
let fourthAns = false;


//Fetching data
const data = async ()=>{
    

    try{
        let response = await(fetch(URL));
        let res = await response.json();
        let question = res[0].question;
        let answers = res[0].answers;
        let correctAns = res[0].correct_answers;
        
        assignValues(question,answers,correctAns);
        click();

    }catch(e){
        console.log("Unable to fetch the data due to some unfotunate circumstances" , e);
    }
    

}

//takes responsibility for passing the data to related functions;
const assignValues = (question,answers,correctAns)=>{
    assignQuestion(question);
    assignAnswers(answers);
    checkAnswers(correctAns);
    
}

//assign question to questoin field
const assignQuestion = (question)=>{
    questionContainer.innerText = question;
}

//assign option of answers to ans-visual container
const assignAnswers = (answers)=>{
    let optionA = answers.answer_a;
    let optionB = answers.answer_b;
    let optionC = answers.answer_c;
    let optionD = answers.answer_d;
    
    //html elemnet for answer-optoins
    const optionOne = document.querySelector('.one');
    const optionTwo = document.querySelector('.two');
    const optionThree = document.querySelector('.three');
    const optionFour = document.querySelector('.four');

    optionOne.innerText = 'A) ' + optionA;
    optionTwo.innerText = 'B) ' + optionB;
    optionThree.innerText = 'C) ' + optionC;
    optionFour.innerText = 'D) ' + optionD;
}


//pass the individual  option available to the toogle functoin; 
const click = () => {
    // const firstOption = document.querySelector('.option-a');
    // const secondOption = document.querySelector('.option-b');
    // const thirdOption = document.querySelector('.option-c');
    // const fourthOption = document.querySelector('.option-d');

    // const allOption = [firstOption,secondOption,thirdOption,fourthOption];
    const allOption = document.querySelectorAll('#opt');
    const selectedAnswers = [firstAns,secondAns,thirdAns,fourthAns];

    allOption.forEach((option,index)=>{
        option.addEventListener('click',()=>{
            toggleOption(option,index,selectedAnswers);
            
        })
    })
    

}
//Toogles background color to indicate which options are selected
//and toogles the boolean varaible if it is selected.
const toggleOption = (option,index,selectedAnswers) => {
    selectedAnswers[index] = !selectedAnswers[index];
    if(selectedAnswers[index]){
        option.style.backgroundColor = 'aliceblue';
    }else{
        option.style.backgroundColor = 'blue';
    }
    firstAns = selectedAnswers[0];
    secondAns = selectedAnswers[1];
    thirdAns = selectedAnswers[2];
    fourthAns = selectedAnswers[3];
   
}

//function to check the answer whether it is correct or incorrect;
const checkAnswers = (ans)=>{
    const score = document.querySelector('.score');
    const result = document.querySelector('.result');
    const userInput = [firstAns,secondAns,thirdAns,fourthAns];
    const answers = [ans.answer_a_correct , ans.answer_b_correct , ans.answer_c_correct , ans.answer_d_correct];

    let scoreValue = 0;
    score.innerText = scoreValue;

    userInput.forEach((input)=>{
        answers.forEach((ans)=>{

            let checkUsr = 0; // get increment according to number of userSelected optoins;
            let checkAns = 0;// get increment according to number of correct answer;

            if(input == true){
                checkUsr++;
            }

            if(ans == true){
                checkAns++;
            }

            if(checkUsr === checkAns){
                scoreValue++;
                result.innerText = "Correct";
            }else{
                result.innerText = "Incorrect";
            }
        })
    })

}


data();

