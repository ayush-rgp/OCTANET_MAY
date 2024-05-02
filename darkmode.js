const body = document.querySelector('body');

const modeToggle = document.querySelector('#mode-toggle');

function toggleMode() {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
}

modeToggle.addEventListener('click', toggleMode);