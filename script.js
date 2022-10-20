let startButton = document.querySelector('.startButton')
let questionContainer = document.querySelector('.containerHead')
let answers = document.querySelector('.answerButtons')
let answerBox = document.querySelectorAll('.aButtons')
let nextButton = document.querySelector('.nextButton')
let scoreCounter = document.querySelector('.scoreCounter')
let gameContainer = document.querySelector('.gameContainer')
let body = document.querySelector('body')
let h1 = document.querySelector('h1')
let matrixHas = document.querySelector('#matrixhh')
let whiteRabbit = document.querySelector('#whiteRabbit')
let knock = document.querySelector('#knockKnock')
let restart = document.querySelector('.restart')
let lightMode = document.querySelector('.lightMode')
let questionCounter = document.querySelector('.questionCounter')
let score = []
let points = 1

//equal to null to begin with will use these two to randomize questions and keep track of what questions we have
let randomQuestion = null
let currentQuestion = null
let correctAnswer = false

//function created to display all properties of the game once start is clicked
function displayAll () {
    questionContainer.style.display = 'block'
    answers.style.display = 'grid'
    nextButton.style.display = 'block'
    scoreCounter.style.display = 'block'
    gameContainer.style.display = 'block'
    body.style.backgroundImage = 'url(https://wallpapercave.com/wp/wp1925260.jpg)'
    body.style.border = 'none'
    h1.style.display = 'none'
    matrixHas.style.display = 'none'
    whiteRabbit.style.display = 'none'
    knock.style.display = 'none'
    lightMode.style.display = 'block'
    questionCounter.style.display = 'block'
}

//light mode / dark mode on click
lightMode.addEventListener('click', () => {
    gameContainer.classList.toggle('white') 
    questionContainer.classList.toggle('black')
    scoreCounter.classList.toggle('black')
    nextButton.classList.toggle('grey')
    questionCounter.classList.toggle('black')
    answerBox[0].classList.toggle('grey')
    answerBox[1].classList.toggle('grey')
    answerBox[2].classList.toggle('grey')
    answerBox[3].classList.toggle('grey')
})

//disables the buttons after one click so answer cant be changed
function clickOne () {
    answerBox.forEach((element) => {
        element.disabled = true
    })
}

//reenables the use of buttons everytime next button is clicked
function clearClick () {
    answerBox.forEach((element) => {
        element.disabled = false
    })
}

//function to push our score into an empty array using points preset to 1
function keepScore (points) {
    if (correctAnswer == true) {
        score.push(parseInt(points))
               let sum = score.reduce((accumulator, points) => {
                return accumulator + points 
               },0)
               scoreCounter.innerText = 'Score: ' + sum 
            } else return
}

//function will begin the game when the start button is clicked on
startButton.addEventListener('click', () => {
    startGame()
    startButton.style.display = 'none'
    displayAll()
})

// used part of stack overflow to see how i can use .sort and random and how -.5 will give it a 50 50 chance
//https://stackoverflow.com/questions/53591691/sorting-an-array-in-random-order
function startGame() {
    randomQuestion = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionsUp() 
    showQ()
}

//simple forEach created to clear the red or blue color when the next button is clicked
function clearColor() {
    answerBox.forEach((element) =>{
     element.style.backgroundColor='black'
    })
}

nextButton.addEventListener('click', () => {
    endAlert()
    currentQuestion++
    questionsUp()
    clearColor()
    keepScore(points)
    correctAnswer = false
    clearClick()
    showQ()
})

//Had help from TA getting this to work
//getting our questions to show from our nested object within an array 
function beginQuestions(question) {
    questionContainer.innerText = question.question
    question.answers.forEach((answer, i) => {
        answerBox[i].innerText = answer.a1
        answerBox[i].value = answer.typeq
        answerBox[i].addEventListener('click', () => {
    if (answerBox[i].value == 'true'){
       answerBox[i].style.backgroundColor = 'green'
       correctAnswer = true
       clickOne()
    } else if (answerBox[i].value == 'false'){
        answerBox[i].style.backgroundColor = 'red'
        clickOne()
    }
    
}) 

})

}

//takes a random question from current question index to get our next question lined up
//https://www.codeproject.com/Questions/5309542/How-can-I-make-random-question-appear
// link helped me properly set up randomQuestion and the current question index
function questionsUp() {
    beginQuestions(randomQuestion[currentQuestion])  
}

//used to have our alert pop up at the end of a game
function endAlert () {
    if (currentQuestion == 14) {
        alert('Great Game reset below')
        restart.style.display = 'block'
    }
}

//used to show which question were on
function showQ () {
    questionCounter.innerText = 'Question: ' + currentQuestion + '/14'
}

//restarts the game by calling on the start game function to run
restart.addEventListener('click', () => {
    document.location.reload(true)
})

// our questions will be stored in an object nested within an array 
//Had TA help changing a few things around to work
//https://www.ultimatequizquestions.com/matrix-quiz/
//https://www.usefultrivia.com/movie_trivia/matrix_trivia.html
//question ideas from the above links
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
    ]},
    {question: 'what color pill does Neo take?',
    answers: [
        {a1: 'Blue', typeq: false},
        {a1:  'None', typeq: false},
        {a1: 'Red', typeq: true},
        {a1: 'Purple', typeq: false}
    ]},
    {question: 'what is the name of Morpheus ship',
    answers: [
        {a1: 'Odyssey', typeq: false},
        {a1:  'Daedalus', typeq: false},
        {a1: 'Pleiades', typeq: false},
        {a1: 'Nebuchadnezzar', typeq: true}
    ]},
    {question: 'what is the name the city where free humans live',
    answers: [
        {a1: 'Ashencourte', typeq: false},
        {a1:  'Zion', typeq: true},
        {a1: 'Widows Moor', typeq: false},
        {a1: 'Richland', typeq: false}
    ]},
    {question: 'what do machines use humans for in the matrix',
    answers: [
        {a1: 'Power source', typeq: true},
        {a1:  'Labor', typeq: false},
        {a1: 'entertainment', typeq: false},
        {a1: 'Reproduction', typeq: false}
    ]},
    {question: 'what does agent smith comapre humans to?',
    answers: [
        {a1: 'Dogs', typeq: false},
        {a1:  'Ants', typeq: false},
        {a1: 'Monkeys', typeq: false},
        {a1: 'Virus', typeq: true}
    ]},
    {question: 'How does a freed mind leave the Matrix and return to the real world?',
    answers: [
        {a1: 'through cell phone', typeq: false},
        {a1:  'through a special subway', typeq: false},
        {a1: 'by phone booth', typeq: true},
        {a1: 'by ship', typeq: false}
    ]},
    {question: 'what was Neos occupation before he left the Matrix?',
    answers: [
        {a1: 'Computer Engineer', typeq: false},
        {a1:  'Software Developer', typeq: true},
        {a1: 'IT help desk', typeq: false},
        {a1: 'Back-end Developer', typeq: false}
    ]},
    {question: 'to get to the source of the Matrix Neo must find what?',
    answers: [
        {a1: 'The Keymaker', typeq: true},
        {a1:  'Himself', typeq: false},
        {a1: 'Trinity', typeq: false},
        {a1: 'Mouse', typeq: false}
    ]},
    {question: 'Where was the first Matrix filmed?',
    answers: [
        {a1: 'London, England', typeq: false},
        {a1:  'Seattle, Washington', typeq: false},
        {a1: 'Los Angeles, California', typeq: false},
        {a1: 'Sydney, Australia', typeq: true}
    ]},
    {question: 'What was the budget for the first Matrix film?',
    answers: [
        {a1: 'about $50 million', typeq: false},
        {a1:  'about $60 million', typeq: true},
        {a1: 'about $75 million', typeq: false},
        {a1: 'about $102 million', typeq: false}
    ]},
    {question: 'Who turned down the part of Neo?',
    answers: [
        {a1: 'Brad Pitt', typeq: false},
        {a1:  'Christian Bale', typeq: false},
        {a1: 'Tom Hanks', typeq: false},
        {a1: 'Will Smith', typeq: true}
    ]},
]

