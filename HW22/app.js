let offset = 0;
let timer = 3000;
let imageSize = 256;
let interval;

const slider = document.querySelector('.slider');
const sliderLine = document.querySelector('.slider-line');
const imgContainers = document.querySelectorAll('.img-container');
const imageElements = document.querySelectorAll('.slider-line img');

slider.style.cssText = `width: ${imageSize}px; height: ${imageSize}px;`;
sliderLine.style.cssText = `width: ${imageSize * imageElements.length}px; height: ${imageSize}px;`;

imgContainers.forEach(container => {
    container.style.cssText = `width: ${imageSize}px; height: ${imageSize}px;`;
});

function next() {
  offset = offset + imageSize;
  if (offset > (imageElements.length - 1) * imageSize) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
}

function previuos() {
  offset = offset - imageSize;
  if (offset < 0) {
    offset = (imageElements.length - 1) * imageSize;
  }
  sliderLine.style.left = -offset + 'px';
}

function startTimer() {
  interval = setInterval(() => {
    next();
  }, timer);
}

document.querySelector('.slider-next').addEventListener('click', function () {
  next();
  clearInterval(interval);
  startTimer();
})

document.querySelector('.slider-previous').addEventListener('click', function () {
  previuos();
  clearInterval(interval);
  startTimer();
})

startTimer();