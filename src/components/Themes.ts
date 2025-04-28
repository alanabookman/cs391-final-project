import { DefaultTheme } from "styled-components"

export const lightTheme: DefaultTheme = {
    bodyBackground: 'white',
    text: 'black',
    cardBackground: 'white',
    cardText: 'black',
    buttonBackground: 'black', 
    buttonText: 'white',
    border: '3px black solid',
    insideBackground: 'white'
}

export const darkTheme: DefaultTheme = {
    bodyBackground: 'black',
    text: 'whitesmoke',
    cardBackground: 'black',
    cardText: 'whitesmoke',
    buttonBackground: 'white', 
    buttonText: 'black',
    border: '3px whitesmoke solid',
    insideBackground: 'darkslategray'
}
