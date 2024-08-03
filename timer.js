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
let i = 0;


function increaseSeconds(){

    if (i < 60){
        if (i < 9){
            console.log(i);
            secs.innerHTML = "0" + i;
        }else {
            secs.innerHTML = i;
        }
    
        i++;
    }else {
        secs.innerHTML = "0" + 0;
    }
}

function startTimer(){
    console.log("Start");

    setInterval(increaseSeconds, 1000);
}

function checkTimerBtns(){
    startBtn.addEventListener("click", startTimer);
}

let id = setInterval(checkTimerBtns, 1000);