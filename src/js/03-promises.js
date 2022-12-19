import { Notify } from 'notiflix/build/notiflix-notify-aio';
const btnPromises = document.querySelector('button');
const form = document.querySelector('form');
const delayTime = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
let delayFromEachOther;
const createPromise = (position, delay) => {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delayFromEachOther);
  });
};

const createPromises = event => {
  event.preventDefault();
  btnPromises.disabled = true;
  let delay = parseInt(delayTime.value);
  const delayStep = parseInt(step.value);
  const promisesAmount = amount.value;
  delayFromEachOther = delay;
  let position = 1;
  const promisesHandler = delay =>
    createPromise(position++, delay)
      .then(value => {
        Notify.success(
          `✅ Fulfilled promise ${value.position} in ${value.delay}ms`
        );
      })
      .catch(error => {
        Notify.failure(
          `❌ Rejected promise ${error.position} in ${error.delay}ms`
        );
      })
      .finally(() => {
        delay = delay + delayStep;
        delayFromEachOther = delayStep;
        return position <= promisesAmount
          ? promisesHandler(delay)
          : (btnPromises.disabled = false);
      });
  promisesHandler(delay);
};

form.addEventListener('submit', createPromises);
