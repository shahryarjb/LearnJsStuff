import { useEffect, useState, Dispatch, SetStateAction } from 'react';

type UserSelectedMode = 'dark' | 'light';

function changeRootElementClass(add: UserSelectedMode) {
  const root = window.document.documentElement;
    root.className = ""
    root.classList.add(add);

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', add);
    }
}

export const useDarkMode = (): [
  UserSelectedMode,
  Dispatch<SetStateAction<UserSelectedMode>>,
  JSX.Element
] => {
  const [theme, setTheme] = useState<UserSelectedMode>('dark');

  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const defaultColor =
      typeof window !== 'undefined' ? localStorage.theme : 'dark';

    setTheme(defaultColor);
    changeRootElementClass(defaultColor)
  }, []);

  const changeThemHandler = () => {
    changeRootElementClass(colorTheme)
    setTheme(colorTheme)
  }

  const DarkMode = () => {
    return (
      <div>
        {colorTheme === 'light' ? (
          <svg
            onClick={() => changeThemHandler()}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fixed top-5 left-5 text-white cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        ) : (
          <svg
            onClick={() => changeThemHandler()}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fixed top-5 left-5 text-black cursor-pointer text-w"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </div>
    );
  };

  return [colorTheme, setTheme, DarkMode()];
};
