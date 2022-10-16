let startButton = document.querySelector('.startButton')

let questionContainer = document.querySelector('.containerHead')
let answers = document.querySelector('answerButtons')

//equal to undefined to begin with will use these two to randomize questions and keep track of what questions we have
let randomQuestion
let currentQuestion

//function will begin the game when the start button is clicked on and begin to roll out questions from our questionUp function
startButton.addEventListener('click', startGame)

function startGame() {
    console.log('working')
    randomQuestion = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionsUp()
}

function questionsUp() {
    beginQuestions(randomQuestion[currentQuestion])

}

function beginQuestions(question) {
    questionContainer.innerText = question.questions
}

function answerCheck() {

}





// our questions will be stored in an object nested within an array 
// used https://simplestepscode.com/javascript-quiz-tutorial/ as an example as to how to set up nested objects within an array so I could
//easily grab my answers
const questions = [
    {question: 'What year was the matrix released?',
    answers: {
        a: '1998', typeq: true,
        b: '1997', typeq: false,
        c: '1999', typeq: false,
        d: '2000', typeq: false
    }}
    {question: 'Who said the following: Unfortunately no one can be told what the Matrix is, you have to see it for yourself.',
    answer: {
        a: 'Trinity', typeq: false,
        b: 'Cypher', typeq: false,
        c: 'Morpheus', typeq: true,
        d: 'Agent Smith', typeq: false
    }}
]
