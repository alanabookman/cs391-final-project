import styled from "styled-components";
import { ThemeToggleProps } from "../interfaces/themeProps";
//https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/
// ideas ^
const StyledButton= styled.button`
    background: ${({theme})=> theme.buttonBackground};
    color: ${({theme})=> theme.buttonText};
    border-radius: 10px;
    font-size:calc(2vh + 10%); 
`;


export default function ThemeButton ({themetoggle, darkMode}: ThemeToggleProps){
    return (
        <StyledButton onClick={themetoggle}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </StyledButton>
    )
}