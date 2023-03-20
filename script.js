// Start Section
let start = document.querySelector("#start");

// Info Section
let info = document.querySelector("#info");
let exit = document.querySelector("#exit");
let continueBtn = document.querySelector("#continue");

// Quiz Section
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

//Question Section
let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");

// Question Options
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

// Buttons
let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");

// Result Section
let result = document.querySelector("#result")
let points = document.querySelector("#points");
let quit = document.querySelector("quit");
let startAgain = document.querySelector("#startAgain");

// Get all H4 from quiz section
let choice_que = document.querySelector(".choice_que");

let index = 0;
let timer = 0;
let interval = 0;

// Total Points
let correct = 0;

//Store Answer
let UserAns = undefined;


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
    let seconds = 60;

    const countdown = setInterval(function () {
        console.log(seconds);
        seconds--;

        if (seconds < 0) {
            clearInterval(countdown);
            console.log("Time has ended!");
        }
    }, 1000);
}

let loadData = () => {
    questionNo.innerHTML = index + 1 + ". ";
    questionText.innerHTML = questions[index]

}

// const questions = [
//     {
//         question: "What is the term used to describe the NCAAB tournament?",
//         choices: ["April Angerness", "March Madness", "May Madness", "June Joyous"],
//         correctAnswer: "March Madness",
//     },
//     {
//         question: "Which school has the most national championships in college basketball?",
//         choices: ["Duke", "Kentucky", "UCLA", "North Carolina"],
//         correctAnswer: "UCLA",
//     },
//     {
//         question: "Including play-in games, how many teams make the NCAAB tournament?",
//         choices: ["68", "64", "60", "72"],
//         correctAnswer: "68",
//     },
//     {
//         question: "Which school did Michael Jordan play college basketball at?",
//         choices: ["Michigan", "Duke", "Kentucky", "North Carolina"],
//         correctAnswer: "North Carolina",
//     },
//     {
//         question: "What was the nickame for Michigan's team during the 1991 NCAAB season?",
//         choices: ["Fantastic Four", "Flawless Five", "Fab Five", "Fit Five"],
//         correctAnswer: "Fab Five",
//     },
//     {
//         question: "Which coach has the most wins in NCAAB history?",
//         choices: ["Jim Boeheim", "Mike Krzyzewski", "Roy Williams", "Bob Knight"],
//         correctAnswer: "Mike Krzyzewski",
//     },
//     {
//         question: "Which coach had the iconic speech at the ESPY's stating 'don't give up, don't ever give up?'",
//         choices: ["Jim Valvano", "Jim Boeheim", "Lou Carnasecca", "Mike Krzyzewski"],
//         correctAnswer: "Jim Valvano",
//     },
//     {
//         question: "Which former Duke player has the most points in school history?",
//         choices: ["Christian Laettner", "Kyle Singler", "Jon Scheyer", "JJ Redick"],
//         correctAnswer: "JJ Redick",
//     },
//     {
//         question: "Who was the first 16 seed to beat a number 1 seed in the NCAAB tournament?",
//         choices: ["Fairleigh Dickinson University", "University of Maryland, Baltimore County", "Florida Gulf Coast University", "Howard University"],
//         correctAnswer: "University of Maryland, Baltimore County",
//     },
//     {
//         question: "What was the lowest seed to ever win the NCAAB championship?",
//         choices: ["8 seed", "6 seed", "10 seed", "12 seed"],
//         correctAnswer: "8 seed",
//     }
// ];
