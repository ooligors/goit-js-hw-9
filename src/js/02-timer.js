import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Report } from 'notiflix/build/notiflix-report-aio';
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if (selectedDates[0] < new Date()) {
            startBtn.disabled = true;
            // window.alert('Please choose a date in the future');
            Report.failure('Please choose a date in the future');
            clearTimeout(timer);

            daysEl.textContent = "00";
            hoursEl.textContent = "00";
            minutesEl.textContent = "00";
            secondsEl.textContent = "00";

        } else {
            startBtn.disabled = false;

        }
    }
}
const inputEl = document.querySelector("#datetime-picker");
flatpickr(inputEl, options);


const startBtn = document.querySelector("[data-start]");
startBtn.disabled = true;
startBtn.addEventListener('click', startTimer);

const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");

let timer;

function startTimer() {
    const startDate = new Date(inputEl.value);
    const diff = startDate - new Date();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);



    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
    timer = setTimeout(startTimer, 1000);
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}

