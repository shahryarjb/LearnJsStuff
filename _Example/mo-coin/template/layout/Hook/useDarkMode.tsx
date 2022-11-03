import { useEffect, useState, Dispatch, SetStateAction } from 'react';

export const useDarkMode = (): ['dark' | 'light', Dispatch<SetStateAction<"dark" | "light">>] => {
  const defaultColor: 'dark' | 'light' =
    'localStorage' in window && localStorage.theme
      ? localStorage.theme
      : 'dark';

  const [theme, setTheme] = useState(defaultColor);

  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if ('localStorage' in window) {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return [colorTheme, setTheme];
};
