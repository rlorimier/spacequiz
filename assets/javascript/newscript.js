let quizQuestions = [
    {
        question: "What is an Equinox:",
        answers: [
            {text: "The time when the plane of Earth's equator passes through the geometric center of the Sun's disk", correct: true},
            {text: "The point where the Sun appears to reach either its highest or lowest point in the sky for the year", correct: false},
            {text: "The effect caused by the interaction of charged particles from the Sun with atoms in the upper atmosphere", correct: false}
        ],
    },
    {
        question: "What NASA stands for:",
        answers: [
            {text: "National Aliance and Space Aeronautics", correct: false},
            {text: "Nacional Administration and Space Aliance", correct: false},
            {text: "National Aeronautics and Space Administration", correct: true}
        ],
    },
]

//add variables and eventListeners
document.addEventListener("DOMContentLoaded", function(){});

let startBtn = document.getElementById("start-btn")
let nextBtn = document.getElementById("next-btn")
let questionContainer = document.getElementById("spacequiz")
let questionElement = document.getElementById("questions")
let answerElement = document.getElementById("answer-box")
let shuffleQuestions, currentQuestion

startBtn.addEventListener("click", startQuiz)

// to start the game
function startQuiz() {
    console.log("hello")
    startBtn.classList.add("hide") //start button to hide when clicked
    shuffleQuestions = quizQuestions.sort(() => Math.random() -.5) //to shuffle the questions each time the quiz is started
    currentQuestion = 0
    questionElement.classList.remove("hide") //to show the first question
    answerElement.classList.remove("hide") //to show its answers
    
}

// to show the questions
function showQuestions() {
    
}

// to check the users answer
function checkAnswer() {

}

// to show the correct answer
function correctAnswer() {

}

// to increment ths score
function incrementScore() {

}


