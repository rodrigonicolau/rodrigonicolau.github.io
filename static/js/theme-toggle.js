// Theme toggle functionality - Font Awesome sun/moon icons
(function() {
  // Get theme from localStorage or default to dark
  const getTheme = () => localStorage.getItem('theme') || 'dark';

  // Set theme
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateToggleButton(theme);
  };

  // Update toggle button icon - Font Awesome sun/moon
  const updateToggleButton = (theme) => {
    const button = document.querySelector('.theme-toggle');
    if (button) {
      const icon = button.querySelector('i');
      if (icon) {
        // Dark mode shows sun icon (to switch to light)
        // Light mode shows moon icon (to switch to dark)
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
      }
      button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
  };

  // Toggle theme
  const toggleTheme = () => {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  // Initialize theme on page load
  const initTheme = () => {
    const theme = getTheme();
    setTheme(theme);

    // Add click handler to toggle button
    const button = document.querySelector('.theme-toggle');
    if (button) {
      button.addEventListener('click', toggleTheme);
    }
  };

  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();
