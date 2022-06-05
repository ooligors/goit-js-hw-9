import { Notify } from 'notiflix/build/notiflix-notify-aio';

const firstDelayEl = document.querySelector('[name="delay"]');
const amountEl = document.querySelector('[name="amount"]');
const delayStepEl = document.querySelector('[name="step"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const formEl = document.querySelector('form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  const firdtDelay = parseInt(firstDelayEl.value, 10);
  const amount = parseInt(amountEl.value, 10);

  const delayStep = parseInt(delayStepEl.value, 10);
  e.preventDefault();
  for (let i = 1; i <= amount; i++) {
    const position = i;
    const delay = firdtDelay + (i * delayStep - delayStep);

    createPromise(position, delay).then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
