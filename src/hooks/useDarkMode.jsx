import { useState, useEffect } from 'react';

export default function useDarkMode() {
  // Check local storage for saved preference, default to light
  const [theme, setTheme] = useState(localStorage.theme || 'light');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    // Remove the old theme class and add the new one to the <html> tag
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    
    // Save to local storage so it remembers on refresh
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}