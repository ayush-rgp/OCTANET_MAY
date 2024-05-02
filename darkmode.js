document.addEventListener('DOMContentLoaded', function() {
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
});

