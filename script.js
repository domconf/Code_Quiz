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

let start = document.querySelector("#start");
let info = document.querySelector("#info");
let exit = document.querySelector("#exit");
let continueBtn = document.querySelector("#continue");
let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let optionList = document.querySelector("#optionList");
let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");
let result = document.querySelector("#result");
let points = document.querySelector("#points");
let quit = document.querySelector("quit");
let startAgain = document.querySelector("#startAgain");
let choice_que = document.querySelector(".choice_que");
let index = 0;
let interval = 0;
let correct = 0;
let UserAns = undefined;
let tableName = document.querySelector(".tableName");
let tableScore = document.querySelector(".tableScore")
let tableRank = document.querySelector(".tableRank")
const form = document.getElementById("myForm");
const timer = document.querySelector("#time");
let leaderboard = document.querySelector("#leaderboard");
let scores = document.querySelector("#scores");
let logInitials = document.querySelector("#logInitials")
let btnContainer = document.querySelector("button-container");
let scoreContainer = document.querySelector(".score")
let allQuestions = document.querySelector("#question");
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");
let answersSection = document.querySelector("#answersSection");
let submitBtn = document.querySelector("#submit-btn");
let currentQuestion = 0;
let score = 0;
let myForm = document.querySelector("#myForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");

    const name = nameInput.value;

    const output = document.getElementById("output");
    tableName.textContent = name;

    console.log("score--->", score)
    tableScore.innerHTML = score;


});


for (let i = 0; i < questions.length; i++) {
    let singleQuestion = questions[i].question
}



start.addEventListener("click", () => {
    start.style.display = "none";
    info.style.display = "block";

});

exit.addEventListener("click", () => {
    start.style.display = "block";
    info.style.display = "none";
});

continueBtn.addEventListener("click", () => {
    startTimer()
    info.style.display = "none";
    quiz.style.display = "block";
});

let timeLeft = 60;
function startTimer() {

    const countdown = setInterval(function () {


        if (timeLeft <= 0) {
            clearInterval(countdown);
            timer.innerHTML = "0";

            showResult()

        } else {
            timer.innerHTML = timeLeft;
        }
        timeLeft -= 1

    }, 1000);
}


function loadQuestions() {
    const question = questions[currentQuestion]
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
    } else {
        timeLeft -= 10
    }
    currentQuestion++
    if (currentQuestion === questions.length) {
        showResult()
    } else {
        loadQuestions()
    }

}


function showResult() {
    quiz.innerHTML = `<h2> User Score: ${score} out of 100 </h2>`
    resetBtn.style.display = "block";
    leaderboard.style.display = "block";
    myForm.style.display = "block";

}

loadQuestions()
resetBtn = document.querySelector("#resetBtn")

console.log("resetBtn-->", resetBtn)


submitBtn.addEventListener("click", checkAnswer)
function restartQuiz() {
    window.location.reload()
}
resetBtn.addEventListener("click", restartQuiz)