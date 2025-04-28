// https://stackoverflow.com/questions/63029643/styledcomponents-with-typescript-and-themeprovider-what-are-the-right-types
//https://styled-components.com/docs/api#create-a-declarations-file
import 'styled-components'
declare module 'styled-components' {
    export interface DefaultTheme {
        bodyBackground: string // background for body 
        text: string // for main text
        cardBackground: string // for the job card background
        cardText: string // for job card text
        buttonBackground: string // for button switching dark and light mode background
        buttonText: string //text
        border: string
        insideBackground: string
    }
}