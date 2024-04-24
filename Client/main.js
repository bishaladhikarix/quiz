//frontend varaibles
const questionContainer = document.querySelector('.question');
const ansContainer = document.querySelector('.answer');



//Api's shits
const apiKey = 'FVqReQUHGBzu36QQdfmzINPK9WwXCmgN9ISRpJM3';
const URL = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=1`;
let catagory = '';
let difficulty = '';


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

//takes responsibility for passing the data to related functions;
const assignValues = (question,answers)=>{
    assignQuestion(question);
    assignAnswers(answers);
}


const data = async ()=>{
    

    try{
        let response = await(fetch(URL));
        let res = await response.json();
        question = res[0].question;
        let answers = res[0].answers;
        let multipleCorrectAns = res[0].multiple_correct_answers;
        let correctAns = res[0].correct_answer;
        
        assignValues(question,answers);
        

    }catch(e){
        console.log("something happened" , e);
    }
    

}


data();


