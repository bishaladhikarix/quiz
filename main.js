const apiKey = 'FVqReQUHGBzu36QQdfmzINPK9WwXCmgN9ISRpJM3';
const URL = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=1&tags=BASH,DevOps,Docker,HTML,JavaScript,Kubernetes,Laravel,Linux,MySQL,PHP,Python,WordPress`;
const anotherurl = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=1`;
const catagoryURL = `https://quizapi.io/api/v1/questions?apiKey=YOUR_API_KEY&category=linux&limit=1`;
const catagoryanddiffcultyurl = `https://quizapi.io/api/v1/questions?apiKey=YOUR_API_KEY&category=linux&difficulty=Easy&limit=1`;


async function fetchData(){
	const res = await fetch(anotherurl);
	const result = res.json();

	console.log(result);

}

//This is btn
const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', ()=>{fetchData()});
