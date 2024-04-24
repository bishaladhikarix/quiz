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
//function to check the answer whether it is correct or incorrect;
const checkAnswers = (ans)=>{

}

//takes responsibility for passing the data to related functions;
const assignValues = (question,answers,correctAns)=>{
    assignQuestion(question);
    assignAnswers(answers);
    checkAnswers(correctAns);
}

const checkAnswer = ()=>{
    if(firstAns){
        console.log("first answer has been changed");

    }
    if(secondAns){
        console.log("second answer has been changed");

    }
    if(thirdAns){
        console.log("thrid answer has been changed");

    }
    if(fourthAns){
        console.log("fourht answer has been changed");
    }
}

const click = ()=>{

    const firstOption = document.querySelector('.option-a');
    const secondOption = document.querySelector('.option-a');
    const thirdOption = document.querySelector('.option-a');
    const fourthOption = document.querySelector('.option-a');

    firstOption.addEventListener('click',()=>{
        if(firstOption.style.backgroundColor === 'blue'){
            firstOption.style.backgroundColor = 'aliceblue'
            firstAns = !firstAns;
        }else{
            firstOption.style.backgroundColor = 'blue';
            firstAns = !firstAns;
        }
    })

    secondOption.addEventListener('click',()=>{
        if(secondOption.style.backgroundColor === 'blue'){
            secondOption.style.backgroundColor = 'aliceblue'
            secondAns = !secondAns;
        }else{
            secondOption.style.backgroundColor = 'blue';
            secondAns = !secondAns;
        }
    })

    thirdOption.addEventListener('click',()=>{
        if(thirdOption.style.backgroundColor === 'blue'){
            thirdOption.style.backgroundColor = 'aliceblue'
            thirdAns = !thirdAns;
        }else{
            thirdOption.style.backgroundColor = 'blue';
            thirdAns = !thirdAns;
        }
    })

    fourthOption.addEventListener('click',()=>{
        if(fourthOption.style.backgroundColor === 'blue'){
            fourthOption.style.backgroundColor = 'aliceblue'
            fourthAns = !fourthAns;
        }else{
            fourthOption.style.backgroundColor = 'blue';
            fourthAns = !fourthAns;
        }
    })
    
    
    
    
    
}

const data = async ()=>{
    

    try{
        let response = await(fetch(URL));
        let res = await response.json();
        let question = res[0].question;
        let answers = res[0].answers;
        let multipleCorrectAns = res[0].multiple_correct_answers;
        let correctAns = res[0].correct_answer;
        
        assignValues(question,answers,correctAns);
        

    }catch(e){
        console.log("Unable to fetch the data due to some unfotunate circumstances" , e);
    }
    

}
document.addEventListener('DOMContentLoaded', () => {
    click();
});


data();

