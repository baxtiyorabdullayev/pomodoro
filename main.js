"use strict";
let boyd = document.querySelector("body");

// ***************Buttons
let homeButtton = document.querySelector(".fa-home");
let settingButton = document.querySelector(".fa-gear");
let pomodoroButton = document.querySelector(".pomodoro-button");
let shortButton = document.querySelector(".short-button");
let longButton = document.querySelector(".long-button");

let timer = document.querySelector(".timer");
let timer00 = document.querySelector(".timer00");
let startButton = document.querySelector(".start-button");

let inputTimePomodoro = document.querySelector(".input-time__pomodoro");
let inputTimeShort = document.querySelector(".input-time__short");
let inputTimeLong = document.querySelector(".input-time__long");

let changeTimeButton = document.querySelector(".change-time__button");
let changeTimePomodoro = document.querySelector(".change-time__pomodoro");
let changeTimeShort = document.querySelector(".change-time__short");
let changeTimeLong = document.querySelector(".change-time__long");

// *************Showing time on home page
let timeOut;
function time() {
  let now = new Date();
  timer.textContent = now.getHours();
  timer00.textContent = now.getMinutes();
}
boyd.style.backgroundColor = "blueviolet";
timeOut = setInterval(time, 1000);

// **************** home button
function homePage() {
  function time() {
    let now = new Date();
    timer.textContent = now.getHours();
    timer00.textContent = now.getMinutes();
  }
  boyd.style.backgroundColor = "blueviolet";
  startButton.style.color = "blueviolet";
  timeOut = setInterval(time, 100);
}
homeButtton.addEventListener("click", homePage);

// ************** setting button

let setting = document.querySelector(".settings");
function openSetting() {
  setting.style.display = "block";
}
settingButton.addEventListener("click", openSetting);

// *****************change time section

let allTime = {
  pomodoro: 25,
  short: 5,
  long: 15,
};

function changeTime() {
  allTime.pomodoro = inputTimePomodoro.value;
  allTime.short = inputTimeShort.value;
  allTime.long = inputTimeLong.value;
  setting.style.display = "none";
}
changeTimeButton.addEventListener("click", changeTime);

// *****************pomodoro section
function pomodoroShow() {
  timer.textContent = allTime.pomodoro;
  timer00.textContent = "00";
  clearInterval(timeOut);
  boyd.style.backgroundColor = "#D95550";
  startButton.style.color = "#D95550";
  changeTimeButton.style.color = "#D95550";
}
pomodoroButton.addEventListener("click", pomodoroShow);

//short break section
function shortShow() {
  timer.textContent = allTime.short;
  timer00.textContent = "00";
  clearInterval(timeOut);
  boyd.style.backgroundColor = "#359F2D";
  startButton.style.color = "#359F2D";
  changeTimeButton.style.color = "#359F2D";
}
shortButton.addEventListener("click", shortShow);

//long break section
function longShow() {
  timer.textContent = allTime.long;
  timer00.textContent = "00";
  clearInterval(timeOut);
  boyd.style.backgroundColor = "#457CA3";
  startButton.style.color = "#457CA3";
  changeTimeButton.style.color = "#457CA3";
}
longButton.addEventListener("click", longShow);

// ***************** start button
let timeInterval;
function countDown() {
  let minute = timer.textContent;
  let second = timer00.textContent;
  if (startButton.textContent === "stop") {
    startButton.textContent = "start";
    clearInterval(timeInterval);
    return;
  }
  if ((startButton.textContent = "strat")) {
    startButton.textContent = "stop";
  }
  timeInterval = setInterval(() => {
    if (second === 0 || second === "00" || second === "0") {
      second = 59;
      minute--;
      timer00.textContent = second;
      timer.textContent = minute;
    } else {
      second--;
      timer00.textContent = second;
    }
    if (minute === 0 || (minute === "00" && second === 0) || second === "00") {
      alert("vaqt tugadi!!!");
    }
    timer00.textContent = second;
    timer.textContent = minute;

    if (minute <= 9 && minute > 0) {
      timer.textContent = `0${minute}`;
    }

    if (second <= 9 && minute > 0) {
      timer00.textContent = `0${second}`;
    }
  }, 1000);
}
startButton.addEventListener("click", countDown);
