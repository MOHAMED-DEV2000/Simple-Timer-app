// Dear reader i'm suck at coding so no complains :)


// Selecting the digit spans - hours, minutes and seconds
let hours = document.querySelector(".timer .hour");
let mins = document.querySelector(".timer .min");
let secs = document.querySelector(".timer .sec");

// Selectng the btns - start, reset and pause
let startBtn = document.querySelector(".start-btn");
let pauseBtn = document.querySelector(".pause-btn");
let resetBtn = document.querySelector(".reset-btn");

// Set a timer default Status
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

const updateTimer = () => {
    updateSec();
}

function startTimer() {
    console.log("Start");

    timerIsPaused = false;
    startID = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    console.log("Pause");

    timerIsPaused = true;
    clearInterval(startID);
}

function resetTimer() {
    console.log("Reset");

    currHour = currMin = currSec = 0;
    clearInterval(startID);
    secs.innerHTML = "00";
    mins.innerHTML = "00";
    hours.innerHTML = "00";
}

function checkTimerBtns() {
    startBtn.addEventListener("click", startTimer);

    pauseBtn.addEventListener("click", pauseTimer);

    resetBtn.addEventListener("click", resetTimer);
}

let id = setInterval(checkTimerBtns, 1000);