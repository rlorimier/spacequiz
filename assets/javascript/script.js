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
    {
        question: "What is the deadliest planet in the Solar System?",
        answers: [
            {text: "Venus", correct: true},
            {text: "Saturn", correct: false},
            {text: "Mars", correct: false}
        ],
    },
    {
        question: "The Earth's average distance to the Sun is:",
        answers: [
            {text: "109 million km", correct: false},
            {text: "149 million km", correct: true},
            {text: "199 million km", correct: false}
        ],
    },
    {
        question: "The most common type of black holes, they can be up to 20 times more massive than the Sun:",
        answers: [
            {text: "Primordial Black Holes", correct: false},
            {text: "Stellar Black Holes", correct: true},
            {text: "Supermassive Black Holes", correct: false}
        ],
    },
    {
        question: "What is the Sun mainly made of?",
        answers: [
            {text: "Rock", correct: false},
            {text: "Lava", correct: false},
            {text: "Gas", correct: true}
        ],
    },
    {
        question: "How many moons does Mars have?",
        answers: [
            {text: "6", correct: false},
            {text: "4", correct: false},
            {text: "2", correct: true}
        ],
    },
    {
        question: "Icy bodies of frozen gases, rocks and dust left over from the formation of the solar system are:",
        answers: [
            {text: "Comets", correct: true},
            {text: "Stars", correct: false},
            {text: "Asteroids", correct: false}
        ],
    },
    {
        question: "When did Apollo-11 successfully land on the Moon?",
        answers: [
            {text: "1968", correct: false},
            {text: "1969", correct: true},
            {text: "1970", correct: false},
        ],
    },
    {
        question: "Where is located the Asteroid Belt?",
        answers: [
            {text: "Between Mars and Jupiter", correct: false},
            {text: "Between Mars and Earth", correct: false},
            {text: "Between Earth and Jupiter", correct: true}
        ],
    },
]


let startBtn = document.getElementById("start-btn");
let questionContainer = document.getElementById("spacequiz");
let questionElement = document.getElementById("questions")
let answerElement = document.getElementById("answer-box")

let shuffleQuestions, currentQuestion

startBtn.addEventListener("click", startQuiz)

function startQuiz() {
    console.log("hello")
    startBtn.classList.add("hide")
    shuffleQuestions = quizQuestions.sort(() => Math.random() -.5)
    currentQuestion = 0
    questionElement.classList.remove("hide")
    nextQuestion()
}

function nextQuestion() {
    showQuestion(shuffleQuestions[currentQuestion])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement("label")
        button.innerText = answer.text
        button.classList.add("answerbox")
        answerElement.classList.remove("hide")
        answerElement.appendChild(button)
        button.addEventListener("click", selectAnswer)
    })
}

function selectAnswer() {

}