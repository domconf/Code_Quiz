const questions = [
    {
        question: "What is the term used to describe the NCAAB tournament?",
        choices: ["April Angerness", "March Madness", "May Madness", "June Joyous"],
        correctAnswer: "March Madness",
    },
    {
        question: "Which school has the most national championships in college basketball?",
        choices: ["Duke", "Kentucky", "UCLA", "North Carolina"],
        correctAnswer: "UCLA",
    },
    {
        question: "Including play-in games, how many teams make the NCAAB tournament?",
        choices: ["68", "64", "60", "72"],
        correctAnswer: "68",
    },
    {
        question: "Which school did Michael Jordan play college basketball at?",
        choices: ["Michigan", "Duke", "Kentucky", "North Carolina"],
        correctAnswer: "North Carolina",
    },
    {
        question: "What was the nickame for Michigan's team during the 1991 NCAAB season?",
        choices: ["Fantastic Four", "Flawless Five", "Fab Five", "Fit Five"],
        correctAnswer: "Fab Five",
    },
    {
        question: "Which coach has the most wins in NCAAB history?",
        choices: ["Jim Boeheim", "Mike Krzyzewski", "Roy Williams", "Bob Knight"],
        correctAnswer: "Mike Krzyzewski",
    },
    {
        question: "Which coach had the iconic speech at the ESPY's stating 'don't give up, don't ever give up?'",
        choices: ["Jim Valvano", "Jim Boeheim", "Lou Carnasecca", "Mike Krzyzewski"],
        correctAnswer: "Jim Valvano",
    },
    {
        question: "Which former Duke player has the most points in school history?",
        choices: ["Christian Laettner", "Kyle Singler", "Jon Scheyer", "JJ Redick"],
        correctAnswer: "JJ Redick",
    },
    {
        question: "Who was the first 16 seed to beat a number 1 seed in the NCAAB tournament?",
        choices: ["Fairleigh Dickinson University", "University of Maryland, Baltimore County", "Florida Gulf Coast University", "Howard University"],
        correctAnswer: "University of Maryland, Baltimore County",
    },
    {
        question: "What was the lowest seed to ever win the NCAAB championship?",
        choices: ["8 seed", "6 seed", "10 seed", "12 seed"],
        correctAnswer: "8 seed",
    }
];

// Start Section
let start = document.querySelector("#start");

// Info Section
let info = document.querySelector("#info");
let exit = document.querySelector("#exit");
let continueBtn = document.querySelector("#continue");

// Quiz Section
// let quiz = document.querySelector("#quiz");
// let time = document.querySelector("#time");

//Question Section
let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");
// let allQuestions = document.querySelector("#question");

// Question Options
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let optionList = document.querySelector("#optionList");

// Buttons
let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");

// Result Section
let result = document.querySelector("#result");
let points = document.querySelector("#points");
let quit = document.querySelector("quit");
let startAgain = document.querySelector("#startAgain");

// Get all H4 from quiz section
let choice_que = document.querySelector(".choice_que");

let index = 0;
// let timer = 0;
let interval = 0;

// Total Points
let correct = 0;

//Store Answer
let UserAns = undefined;

// Timer
const timer = document.querySelector("#time");

// Leaderboard
let leaderboard = document.querySelector("#leaderboard");
let scores = document.querySelector("#scores");


for (let i = 0; i < questions.length; i++) {
    // console.log(questions[i].question)
    let singleQuestion = questions[i].question
    // console.log(singleQuestion)
    // questionText.innerHTML = questions[i].question;
}

// for (let i = 0; i < questions.length; i++) {
// console.log(questions[i].question)
//     for (let i = 0; i <= questions[i].choices.length; i++) {
//         choice_que.innerHTML = questions[i].choices;
//     }
// }
// function displayQuestions () {

// }

start.addEventListener("click", () => {
    start.style.display = "none";
    info.style.display = "block";
});

exit.addEventListener("click", () => {
    start.style.display = "block";
    info.style.display = "none";
});

continueBtn.addEventListener("click", startTimer);

function startTimer() {
    let timeLeft = 60;

    const countdown = setInterval(function () {
        // console.log(timeLeft);
        // timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            timer.innerHTML = "0";
            alert("Time is up!");
        } else {
            timer.innerHTML = timeLeft;
        }
        timeLeft -= 1

    }, 1000);
}

let allQuestions = document.querySelector("#question");
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");
let answersSection = document.querySelector("#answersSection");


let currentQuestion = 0;
let score = 0;

function loadQuestions() {
    const question = questions[currentQuestion]
    console.log(question)
    allQuestions.textContent = (currentQuestion + 1) + ". " + question.question
    answersSection.innerHTML = ""

    for (i = 0; i < question.choices.length; i++) {
        const currentChoice = question.choices[i];
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="choice" value="${currentChoice}">` + currentChoice;
        answersSection.appendChild(label);
    }
}

function checkAnswer() {
    const userChoice = document.querySelector('input[name="choice"]:checked').value;

    if (userChoice === questions[currentQuestion].correctAnswer) {
        score += 10
    }
    currentQuestion++
    if (currentQuestion === questions.length) {
        showResult()
    } else {
        loadQuestions()
    }

}


loadQuestions()