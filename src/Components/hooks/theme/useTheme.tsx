
import {ThemeContext} from '../../../StateManager/ThemeProvider'
import { useContext } from 'react'
const useTheme = () => {
  const themecontext=useContext(ThemeContext);
  if(!themecontext)
  {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return themecontext;
}

export default useTheme