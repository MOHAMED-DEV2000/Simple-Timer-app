let hours = document.querySelector(".timer .hour");
let mins = document.querySelector(".timer .min");
let secs = document.querySelector(".timer .sec");

let startBtn = document.querySelector(".start-btn");
let pauseBtn = document.querySelector(".pause-btn");
let resetBtn = document.querySelector(".reset-btn");

let timerIsPaused = false;
let currHour = currMin = currSec = 0;
let startID;

const updateHour = () => {
    if (timerIsPaused === false) {
        currHour++;
        currHour < 10 ? (hours.innerHTML = "0" + currHour) : (hours.innerHTML = currHour);
        updateSec();
    }
};

const updateMin = () => {
    if (timerIsPaused === false && currMin < 59) {
        currMin++;
        currMin < 10 ? (mins.innerHTML = "0" + currMin) : (mins.innerHTML = currMin);
    } else if (timerIsPaused === false && currMin === 59) {
        currMin = 0;
        updateHour();
    }
};

const updateSec = () => {
    if (timerIsPaused === false && currSec < 59) {
        currSec < 10 ? (secs.innerHTML = "0" + currSec) : (secs.innerHTML = currSec);
        currSec++;
    } else if (timerIsPaused === false && currSec === 59) {
        currSec = 0;
        updateMin();
    }
};

const updateTimer = () => updateSec();

function startTimer() {
    timerIsPaused = false;
    startID = setInterval(updateTimer, 10);
}

function pauseTimer() {
    clearInterval(startID);
    timerIsPaused = true;
}

function resetTimer() {
    clearInterval(startID);
    currHour = currMin = currSec = 0;
    secs.innerHTML = mins.innerHTML = hours.innerHTML = "00";
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);