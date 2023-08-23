let showImageButton = document.getElementById('show-image');
let imageWrapper = document.getElementById('image-wrapper');

function randomImage() {
  const existingImage = imageWrapper.querySelector('img');
  if (existingImage) {
    imageWrapper.removeChild(existingImage);
  }

  let image = document.createElement('img'); 

  let randomNum = Math.floor(Math.random() * 9) + 1;
  let imagePath = `images/${randomNum}.jpg`;
  image.src = imagePath;
  image.alt = `${randomNum}.jpg`;
  image.style.width = '100%';

  imageWrapper.appendChild(image);
}

showImageButton.addEventListener('click', () => randomImage());
