import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext()

const themes = {
    light: {
      primary: '#d2cccc',
      secondary: '#f5f5f5',
      text: '#000000',
      accent: '#66b3ff',
    },
    dark: {
      primary: '#333333',
      secondary: '#444444',
      text: '#e0e0e0',
      accent: '#8ab4f8',
    },
    darker: {
      primary: '#1e1e1e',
      secondary: '#282828',
      text: '#cccccc',
      accent: '#5c8bc3',
    },
  };





  export const ThemeContextProvider =({children})=> {
    const [themeName,setThemeName] =useState('light')

    useEffect(() => {
        const getSavedTheme = async() => {
            try {
                const savedTheme = await AsyncStorage.getItem('appTheme');
                if(savedTheme){
                    setThemeName(savedTheme)
                }
                
            } catch (error) {
                console.log({error:'error loading themes'})
                
            }
        }
        getSavedTheme()

    },[])


    const saveTheme = async (selectedTheme) => {
        try {
            await AsyncStorage.setItem('appTheme', selectedTheme)
            setThemeName(selectedTheme)
        } catch (error) {
            console.error('error saving theme',error)
        }
    }



    const theme =themes[themeName]
    return(
        <ThemeContext.Provider value={{theme,setTheme:saveTheme, currentThemeName:themeName}}>
            {children}

        </ThemeContext.Provider>

    )
  }
  export const useThemes = () => useContext(ThemeContext)