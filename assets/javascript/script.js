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
        answers: {
            a: "National Aliance and Space Aeronautics",
            b: "Nacional Administration and Space Aliance",
            c: "National Aeronautics and Space Administration"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the deadliest planet in the Solar System?",
        answers: {
            a: "Venus",
            b: "Saturn",
            c: "Mars"
        },
        correctAnswer: "a"
    },
    {
        question: "The Earth's average distance to the Sun is:",
        answers: {
            a: "109 million km",
            b: "149 million km",
            c: "199 million km"
        },
        correctAnswer: "b"
    },
    {
        question: "The most common type of black holes, they can be up to 20 times more massive than the Sun:",
        answers: {
            a: "Primordial Black Holes",
            b: "Stellar Black Holes",
            c: "Supermassive Black Holes"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the Sun mainly made of?",
        answers: {
            a: "Rock",
            b: "Lava",
            c: "Gas"
        },
        correctAnswer: "c"
    },
    {
        question: "How many moons does Mars have?",
        answers: {
            a: "6",
            b: "4",
            c: "2"
        },
        correctAnswer: "c"
    },
    {
        question: "Icy bodies of frozen gases, rocks and dust left over from the formation of the solar system are:",
        answers: {
            a: "Comets",
            b: "Stars",
            c: "Asteroids"
        },
        correctAnswer: "a"
    },
    {
        question: "When did Apollo-11 successfully land on the Moon?",
        answers: {
            a: "1968",
            b: "1969",
            c: "1970"
        },
        correctAnswer: "b"
    },
    {
        question: "Where is located the Asteroid Belt?",
        answers: {
            a: "Between Mars and Jupiter",
            b: "Between Mars and Earth",
            c: "Between Earth and Jupiter"
        },
        correctAnswer: "c"
    },
]


let startBtn = document.getElementById("start-btn");
let questionContainer = document.getElementById("questions");



let shuffleQuestions, currentQuestion

startBtn.addEventListener("click", startQuiz)

function startQuiz() {
    console.log("hello")
    startBtn.classList.add("hide")
    shuffleQuestions = quizQuestions.sort(() => Math.random() -.5)
    currentQuestion = 0
    questionContainer.classList.remove("hide")
    nextQuestion()
}

function nextQuestion() {
    showQuestion(shuffleQuestions[currentQuestion])
}

function showQuestion(question) {
    questionContainer.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement("label")
        button.innerText = answer.text
    }
}

function selectAnswer() {

}