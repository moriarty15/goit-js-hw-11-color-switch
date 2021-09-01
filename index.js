const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const buttonStart = document.querySelector('[data-action="start"]');
const buttonClose = document.querySelector('[data-action="stop"]');
let isActive = false;
let intervalId = null;

buttonStart.addEventListener('click', isStartChangeBackGroundColor);
buttonClose.addEventListener('click', isStopChangeBackGroundColor)

function isStartChangeBackGroundColor() {
  if (isActive) {
    return;
  }
  isActive = true;
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    }, 1000)
}

function isStopChangeBackGroundColor() {
    clearInterval(intervalId);
  isActive = false;
}




