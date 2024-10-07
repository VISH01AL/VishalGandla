import { createContext,useState} from "react"


type themeProviderChildrenType={
    children: React.ReactNode,
}  

type themeType="theme1"|"theme2"|"theme3"

type themeContextType={
  theme:themeType,
  setTheme:React.Dispatch<React.SetStateAction<themeType>>
}

export const ThemeContext=createContext<themeContextType|null>(null)



const ThemeProvider = ({children}:themeProviderChildrenType) => {
  const [theme,setTheme]=useState<themeType>("theme2")
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider