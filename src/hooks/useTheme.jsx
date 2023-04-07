import  { useContext } from 'react'
import { ThemeContext } from '../styles/ThemeProvider'

const useTheme = () => {
	const value = useContext(ThemeContext)
  return value
}

export default useTheme;
