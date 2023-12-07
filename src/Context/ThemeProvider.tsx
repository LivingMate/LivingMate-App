/*ThemeProvider.tsx
import React, { ReactNode, useState } from 'react';
import ThemeContext from './ThemeContext';

interface ThemeContextProps {
  children: ReactNode, 
}

const ThemeProvider: React.FC<ThemeContextProps> = ({ children }) => {
  const [theme, setTheme] = useState({
    backgroundColor: 'red',
    textColor: '#333',
    buttonColor: '#007BFF',
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      backgroundColor: prevTheme.backgroundColor === '#fff' ? '#333' : '#fff',
      textColor: prevTheme.textColor === '#333' ? '#fff' : '#333',
      buttonColor: prevTheme.buttonColor === '#007BFF' ? '#FF4500' : '#007BFF',
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
*/