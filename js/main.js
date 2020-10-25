'use strict';

const year = document.querySelector('#year');
const days = document.querySelector('#days');
let days2 = document.querySelector('#days2');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

// calculations
const currentYear = new Date().getFullYear();
const nextYear = new Date(`November 16 ${currentYear} 00:00:00`);

year.innerText = currentYear;

// update countdown
function updateCounter() {
  const currentTime = new Date();

  const diff = nextYear - currentTime;

  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(diff / 1000 / 60 / 60) % 60;
  const secondsLeft = Math.floor(diff / 1000) % 60;
  if (daysLeft === 21) {
    days2.innerText = 'день';
  }

  days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
  minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
  hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
  seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

}

updateCounter();

setInterval(updateCounter, 1000);
