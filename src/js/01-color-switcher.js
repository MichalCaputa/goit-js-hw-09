function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

const bodyColorChanger = () => {
  body.style.backgroundColor = getRandomHexColor();
};
let timerId = null;
const bodyColorfunction = () => {
  btnStart.disabled = true;
  btnStop.disabled = false;
  timerId = setInterval(bodyColorChanger, 1000);
};
const clearColorFunction = () => {
  clearInterval(timerId);

  btnStart.disabled = false;
  btnStop.disabled = true;
  console.log(`Interval with id ${timerId} has stopped!`);
};

btnStart.addEventListener('click', bodyColorfunction);
btnStop.addEventListener('click', clearColorFunction);
btnStop.disabled = true;
