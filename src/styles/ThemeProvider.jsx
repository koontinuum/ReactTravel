import { createContext, useEffect, useMemo, useState } from "react";

export const ThemeContext = createContext({ isDark: false });

export const ThemeProider = ({ children }) => {
	//const theme = () =>{
	//	return JSON.parse(localStorage.getItem(isDark)) || false
	//}
  const [isDark, setIsDark] = useState(true);
  console.log(isDark)
 const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);
//  useEffect(() => {
//    localStorage.setItem("isDark", JSON.stringify(isDark));
//  }, [isDark]);
 
 
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
