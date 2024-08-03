// Selecting the digit spans - hours, minutes and seconds
let hours = document.querySelector(".timer .hour");
let mins = document.querySelector(".timer .min");
let secs = document.querySelector(".timer .sec");

// Selectng the btns - start, reset and pause
let startBtn = document.querySelector(".start-btn");
let pauseBtn = document.querySelector(".pause-btn");
let resetBtn = document.querySelector(".reset-btn");

// Set a timer default Status
let counterState = false;

function checkTimerBtns(){
    // Setting event listeners
    startBtn.addEventListener("click", startTimer);
    pauseBtn.addEventListener("click", pauseTimer);
    resetBtn.addEventListener("click", resetTimer);
}

// For each 1 second check the 3 buttons
let idInterval = setInterval(checkTimerBtns, 1000);