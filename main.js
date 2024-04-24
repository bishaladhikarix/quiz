const apiKey = 'FVqReQUHGBzu36QQdfmzINPK9WwXCmgN9ISRpJM3';
const URL = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=1`;
let catagory = '';
let difficulty = '';


const data = async ()=>{
    

    try{
        let response = await(fetch(URL));
        let res = await response.json();
        let question = res[1];
        console.log(question);
    }catch(e){
        console.log("something happened" , e);
    }
    

}


data();


