/*
import React, { ReactNode } from "react";
import { createContext, useState } from "react";

const LogContext = createContext("example");

interface ProviderProps {
    value: 
    children: ReactNode;
}

export const LogContextProvider: React.FC<ProviderProps> = ({ children }) => 
{
  const [text, setText] = useState('');
  return (
    <LogContext.Provider value={{text, setText}}>
      {children}
    </LogContext.Provider>
  )
}

export default LogContext;
*/