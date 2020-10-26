'use strict';

const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
// words
const daysWord = document.querySelector('#daysWord'); //
const hoursWord = document.querySelector('#hoursWord');
const minutesWord = document.querySelector('#minutesWord');
const secondsWord = document.querySelector('#secondsWord');

// calculations
const currentYear = new Date().getFullYear();
const nextYear = new Date(`November 16 ${currentYear} 00:00:00`);

// year.innerText = currentYear;
year.innerText = 'NOVEMBER 16';

// update countdown
function updateCounter() {
  const currentTime = new Date();

  const diff = nextYear - currentTime;

  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(diff / 1000 / 60 / 60) % 60;
  const secondsLeft = Math.floor(diff / 1000) % 60;

  if (daysLeft % 10 === 1 && daysLeft !== 11) {
    daysWord.innerText = 'день';
  } else if (
    (daysLeft % 10 === 4 || daysLeft % 10 === 3 || daysLeft % 10 === 2) &&
    (daysLeft < 12 || daysLeft > 14)
  ) {
    daysWord.innerText = 'дні';
  } else {
    daysWord.innerText = 'днів';
  }

  if (hoursLeft % 10 === 1 && hoursLeft !== 11) {
    hoursWord.innerText = 'година';
  } else if (
    (hoursLeft % 10 === 4 || hoursLeft % 10 === 3 || hoursLeft % 10 === 2) &&
    (hoursLeft < 12 || hoursLeft > 14)
  ) {
    hoursWord.innerText = 'години';
  } else {
    hoursWord.innerText = 'годин';
  }

  if (minutesLeft % 10 === 1 && minutesLeft !== 11) {
    minutesWord.innerText = 'хвилина';
  } else if (
    (minutesLeft % 10 === 4 ||
      minutesLeft % 10 === 3 ||
      minutesLeft % 10 === 2) &&
    (minutesLeft < 12 || minutesLeft > 14)
  ) {
    minutesWord.innerText = 'хвилин';
  } else {
    minutesWord.innerText = 'хвилин';
  }

  if (secondsLeft % 10 === 1 && secondsLeft !== 11) {
    secondsWord.innerText = 'секунда';
  } else if (
    (secondsLeft % 10 === 4 ||
      secondsLeft % 10 === 3 ||
      secondsLeft % 10 === 2) &&
    (secondsLeft < 12 || secondsLeft > 14)
  ) {
    secondsWord.innerText = 'секунди';
  } else {
    secondsWord.innerText = 'секунд';
  }

  days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
  minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
  hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
  seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

updateCounter();

setInterval(updateCounter, 1000);
