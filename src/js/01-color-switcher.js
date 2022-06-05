const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

start.addEventListener('click', onStartClick);
stop.addEventListener('click', onStopClick);


function colorBodyChange() {
    body.style.backgroundColor = getRandomHexColor();


}

let interval;

function onStartClick() {
    start.disabled = true;
    interval = setInterval(colorBodyChange, 1000);


};



function onStopClick() {
    start.disabled = false;
    clearInterval(interval);

}

