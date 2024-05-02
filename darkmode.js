/*document.addEventListener('DOMContentLoaded', function() {
  const rootElement = document.documentElement;
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (isDarkMode) {
    rootElement.classList.add('dark-mode');
  }

  const toggleButton = document.getElementById('toggle-mode');

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      rootElement.classList.toggle('dark-mode');
    });
  }
});*/

document.addEventListener('DOMContentLoaded', function() {
  const rootElement = document.documentElement;
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (isDarkMode) {
    rootElement.classList.add('dark-mode');
  }

  const toggleButton = document.getElementById('toggle-mode');
  addToggleButtonEventListener(toggleButton);

  function addToggleButtonEventListener(button) {
    if (button) {
      button.addEventListener('click', () => {
        rootElement.classList.toggle('dark-mode');
        updateButtonText();
      });

      updateButtonText();
    }
  }

  function updateButtonText() {
    const isDarkModeActive = rootElement.classList.contains('dark-mode');
    if (toggleButton) {
      toggleButton.textContent = isDarkModeActive ? 'Switch mode' : 'Switch mode';
    }
  }
});

