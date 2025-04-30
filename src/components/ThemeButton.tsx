/*
Component implemented by Aaron Huang (ahuan@bu.edu)

button that would switch the website between dark and light mode 
connects to : styled.d.ts, Themes.ts, ThemeProps.ts, GlobalStyles.ts
resources used:
https://stackoverflow.com/questions/63029643/styledcomponents-with-typescript-and-themeprovider-what-are-the-right-types
https://styled-components.com/docs/api#create-a-declarations-file
https://stackoverflow.com/questions/68895112/how-to-pass-function-as-a-prop-in-react-typescript

assistance in implementation/walkthrough : //https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/
adjusted for typescript and for what css used
 */

import styled from "styled-components";
import { ThemeToggleProps } from "../interfaces/themeProps";

const StyledButton = styled.button`
    background: ${({theme}) => theme.buttonBackground};
    color: ${({theme}) => theme.buttonText};
    border-radius: 10px;
    font-size: calc(2vh + 10%); 
    margin-left: 2vw;
    padding: 10px 20px;
    border: 2px solid ${({theme}) => theme.border};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        opacity: 0.8;
    }
`;

export default function ThemeButton({themetoggle, darkMode}: ThemeToggleProps) {
    return (
        <StyledButton onClick={themetoggle}> 
        {/* use the passed prop as onClick */}
            {darkMode ? 'Light Mode' : 'Dark Mode'}
            {/* use the passed prop state */}
        </StyledButton>
    );
}