let startButton = document.querySelector('.startButton')



//function will begin the game when the start button is clicked on and begin to roll out questions from our questionUp function
startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    questionsUp()
}

function questionsUp() {

}

function answerCheck() {

}





// our questions will be stored in an object nested within an array 
// used https://simplestepscode.com/javascript-quiz-tutorial/ as an example as to how to set up nested objects within an array so I could
//easily grab my answers
const questions = [
    {question: 'What year was the matrix released?',
    answers: {
        a: '1998', type: true,
        b: '1997', type: false,
        c: '1999', type: false,
        d: '2000', type: false
    }}
]
