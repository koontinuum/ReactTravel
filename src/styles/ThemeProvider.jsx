import { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext({ isDark: false });

export const ThemeProider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  console.log(isDark)
 const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

 
 
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
