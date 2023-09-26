let offset = 0;
let timer = 3000;
const sliderLine = document.querySelector('.slider-line');

function next() {
  offset = offset + 256;
  if (offset > 1536) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
}

function previuos() {
  offset = offset - 256;
  if (offset < 0) {
    offset = 1536;
  }
  sliderLine.style.left = -offset + 'px';
}

setInterval(() => {
  next();
}, timer);

document.querySelector('.slider-next').addEventListener('click', function () {
  next();
})

document.querySelector('.slider-previous').addEventListener('click', function () {
  previuos();
})