const quizContainer = document.getElementById('quiz');
const startButton = document.getElementById('submit');
const timer = document.getElementById('timer');
let secondsLeft = 60;

startButton.addEventListener('click', showResults);