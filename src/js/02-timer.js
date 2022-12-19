// Opisany w dokumentacji
import flatpickr from 'flatpickr';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
const addLeadingZero = value => {
  const formattedValue = value.toString().padStart(2, '0');
  return formattedValue;
};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const actualDateChose = new Date();
    if (selectedDates[0].getTime() <= actualDateChose.getTime())
      return Notify.failure('Please choose a date in the future');
    btnStart.disabled = false;
  },
};
let timerId = null;
const calendars = flatpickr('#datetime-picker', options);
const btnStart = document.querySelector('button[data-start]');
const days = document.querySelector('.value[data-days]');
const hours = document.querySelector('.value[data-hours]');
const minutes = document.querySelector('.value[data-minutes]');
const seconds = document.querySelector('.value[data-seconds]');
const countdownTimer = finishDate => {
  const actualDate = new Date();
  let finishTime = finishDate.getTime();
  let timeDifference = finishTime - actualDate;
  if (timeDifference <= 0) return clearInterval(timerId);
  const timeLeft = convertMs(timeDifference);
  days.textContent = addLeadingZero(timeLeft.days);
  hours.textContent = addLeadingZero(timeLeft.hours);
  minutes.textContent = addLeadingZero(timeLeft.minutes);
  seconds.textContent = addLeadingZero(timeLeft.seconds);
};
const catchTheTime = () => {
  btnStart.disabled = true;
  clearInterval(timerId);
  const finishDate = calendars.selectedDates[0];
  timerId = setInterval(countdownTimer, 1000, finishDate);
};
btnStart.addEventListener('click', catchTheTime);
btnStart.disabled = true;
