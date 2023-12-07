/* ThemeContext.tsx
import React, { ReactNode, createContext, useContext } from 'react';

interface Theme {
  backgroundColor: string;
  textColor: string;
  // 다른 테마 속성들을 필요에 따라 추가
}

interface ThemeContextProps {
  theme: Theme;
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeContextProps> = ({ children }) => {
  const theme: Theme = {
    backgroundColor: '#fff',
    textColor: '#333',
    // 다른 테마 속성들을 초기값으로 설정
  };

  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context.theme;
};
*/