var readlineSync = require('readline-sync')

var score = 0

var questions = [{ question: '1. What is my stage name? ', answer: 'acoustic om' },
{ question: '2. Which is my native state? ', answer: 'karnataka' },
{ question: "3. From which school i completed my schooling? ", answer: 'KV' },
{ question: '4. Where do i currently living? ', answer: 'Delhi' },
{ question: '5. Which is my favrouite color? ', answer: 'Blue' }]


function welcome() {
  let userName = readlineSync.question("Please enter your name : ")
  console.log(`**** Welcome to the game ${userName}.****`)
  console.log('Lets see how much you know Omkar')
  console.log("")
}
welcome();

function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right")
    score = score + 1
    console.log(`Score: ${score}`)
  }
  else {
    console.log("Sorry you are wrong")
    console.log(`Score: ${score}`)
  }
}

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}

function userScore() {
  console.log("")
  console.log(`Thank you for playing !!!!`)
  console.log(`Your total score is : ${score}`)
}

userScore();
