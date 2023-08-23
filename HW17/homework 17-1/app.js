let input = document.getElementById('input');
let description = document.getElementById('required-name');

input.addEventListener('focus', () => {
  description.style.display = 'block';
});

input.addEventListener('blur', () => {
  description.style.display = 'none';
});



