import React, { createContext, ReactNode, useState } from 'react';
import { BOOLEAN_VALUE_STRING, DARK_THEME } from '../constants/common';

interface Props {
  children: ReactNode,
}

export interface ThemeContextState {
  darkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<Partial<ThemeContextState>>({});

const ThemeContextProvider = ({ children }: Props) => {
  const [darkTheme, setDarkTheme] = useState(localStorage.getItem(DARK_THEME) === BOOLEAN_VALUE_STRING.true);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    localStorage.setItem(DARK_THEME, !darkTheme ? BOOLEAN_VALUE_STRING.true : BOOLEAN_VALUE_STRING.false);
  };
  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
