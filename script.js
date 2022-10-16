let startButton = document.querySelector('.startButton')
let questionContainer = document.querySelector('.containerHead')
let answers = document.querySelector('answerButtons')
let answerBox = document.querySelectorAll('.aButtons')
let nextButton = document.querySelector('.nextButton')
let score = 0
//equal to undefined to begin with will use these two to randomize questions and keep track of what questions we have
let randomQuestion
let currentQuestion

//function will begin the game when the start button is clicked on and begin to roll out questions from our questionUp function
// used part of stack overflow to see how i can use .sort and random and how -.5 will give it a 50 50 chance
//https://stackoverflow.com/questions/53591691/sorting-an-array-in-random-order
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
nextButton.addEventListener('click', () => {
    currentQuestion++
    questionsUp()
})
//created a function that shows our questions in our question object down below in our question container
//Had help from TA getting this to work
function beginQuestions(question) {
    questionContainer.innerText = question.question
    question.answers.forEach((answer, i) => {
        answerBox[i].innerText = answer.a1
        answerBox[i].addEventListener('click',answerCheck)
    })


}

// probably gonna need to use on click and if statments to check if typeq is == to true or false
// answerBox[i].addEventListener('click',answerCheck) added in the above function
function answerCheck(question) {
   
    question.answers.forEach((typec, i) => {
        if (typec == 'true') {
            console.log(typec.typeq)
            answerBox[i].classList.toggle = 'green'

        } else 
        answerBox[i].classList.toggle = 'red'
    })
}





// our questions will be stored in an object nested within an array 
const questions = [
    {question: 'What year was the matrix released?',
    answers: [
        {a1: '1998', typeq: false},
        {a1: '1997', typeq: false},
        {a1: '1999', typeq: true},
        {a1: '2000', typeq: false}
    ]},
    {question: 'Who said the following: Unfortunately no one can be told what the Matrix is, you have to see it for yourself.',
    answers: [
        {a1: 'Trinity', typeq: false},
        {a1: 'Cypher', typeq: false},
        {a1: 'Morpheus', typeq: true},
        {a1: 'Agent Smith', typeq: false}
    ]},
    {question: 'what type of animal does a sentinel look like?',
    answers: [
        {a1: 'Dolphin', typeq: false},
        {a1: 'Squid', typeq: true},
        {a1:  'Bird', typeq: false},
        {a1:  'Snake', typeq: false}
    ]},
    {question: 'what is Neos real name in the movie?',
    answers: [
        {a1: 'Thomas Anderson', typeq: true},
        {a1:  'Laurence Fishburne', typeq: false},
        {a1: 'Adam Smith', typeq: false},
        {a1: 'Hugo Weaving', typeq: false}
    ]}
]
