const quizData=[
    {
        question:'Favorite team in IPL?',
        a:'Sunrisers Hyderbad',
        b:'Punjab Kings',
        c:'Delhi Capitals',
        d:'Rajasthan Royals'
    },
    {
        question:'Favorite Bowler?',
        a:'Jofra Archer',
        b:'Kagiso Rabada',
        c:'Dwayne Bravo',
        d:'Sheldon Cotrell'
    },
    {
        question:'Favorite Batsmen?',
        a:'Ishan Kishan',
        b:'Sarfaraz Khan',
        c:'Shubman Gill',
        d:'Devdutt Padikal'
    },
    {
        question:'Entertainer?',
        a:'Dwayne Bravo',
        b:'Chris Gayle',
        c:'Virat Kohli',
        d:'David Warner'
    },
    {
        question:'A Captain in your Playing X1?',
        a:'Kane Williamson',
        b:'Sachin Tendulkar',
        c:'MS Dhoni',
        d:'Virat Kohli'
    },
    {
        question:'Pick a Batsmen in your Playing X1',
        a:'Sachin Tendulkar',
        b:'Virender Sehwag',
        c:'David Warner',
        d:'Kevin Peterson'
    },
    {
        question:'Pick a bowler in your playing X1',
        a:'Lasith Malinga',
        b:'Dale Steyn',
        c:'Jofra Archer',
        d:'Jasprit Bumrah'
    }
]

const quiz = document.querySelector('.quiz-container');
const question =document.querySelector('#question');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitBtn = document.querySelector('#submit');
const answerEls = document.querySelectorAll('.answer');



let currentQuestion =0;
let score=0;
const selVal=[]
loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuestion];
    question.innerText= currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;   
}

function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked=false;

    })
}


submitBtn.addEventListener('click',(e)=>{
    const answer= getSelected();
    console.log(answer);
    console.log(quizData[currentQuestion][answer]);

    if(answer ){
        selVal.push(quizData[currentQuestion][answer]);
        if(answer==quizData[currentQuestion]){
            score++;
        }
    currentQuestion++;
    if(currentQuestion<quizData.length){
        loadQuiz();
    }else{
        quiz.innerHTML=`
        <h1 style="color:#e84118;font-family: 'Alegreya', serif;;font-size:5rem">And Your Picks</h1>
        <h2>${selVal}</h2>  
        <button onClick="location.reload()">Reload</button>`;
        
    }
}  
})