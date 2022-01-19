import React,{useContext,useState} from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}



 export function ThemeProvider( { children }) {

    const [darkTheme,setDarkTheme] = useState(false)
    const [lightkntr,setLightKntr] = useState(false)

 function toggleTheme() {
   setDarkTheme(prevDarkTheme => !prevDarkTheme)
   setLightKntr(prevLightkntr => !prevLightkntr)

 }
 return (
     <ThemeContext.Provider value = {darkTheme,lightkntr}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
             {children}
       </ThemeUpdateContext.Provider>
     </ThemeContext.Provider>
 )

 }