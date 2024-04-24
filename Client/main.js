//frontend varaibles
const questionContainer = document.querySelector('.question');
const ansContainer = document.querySelector('.answer');



//Api's shits
const apiKey = 'FVqReQUHGBzu36QQdfmzINPK9WwXCmgN9ISRpJM3';
const URL = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=1`;
let catagory = '';
let difficulty = '';


const assignValues = (question,correctAns)=>{
    questionContainer.innerText = question;
}


const data = async ()=>{
    

    try{
        let response = await(fetch(URL));
        let res = await response.json();
        question = res[0].question;
        let answers = res[0].answers;
        let multipleCorrectAns = res[0].multiple_correct_answers;
        let correctAns = res[0].correct_answer;
        
        assignValues(question,correctAns);

    }catch(e){
        console.log("something happened" , e);
    }
    

}


data();


