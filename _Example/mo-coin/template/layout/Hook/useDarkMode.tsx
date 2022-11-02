import { useEffect, useState, Dispatch, SetStateAction } from 'react';

const useDarkMode = () => {
  const defaultColor: 'dark' | 'light' =
    'localStorage' in window && localStorage.theme
      ? localStorage.theme
      : 'dark';

  const [theme, setTheme] = useState<'dark' | 'light'>(defaultColor);

  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return [colorTheme, setTheme];
};

export default useDarkMode;
