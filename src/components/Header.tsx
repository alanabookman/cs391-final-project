/*
Component by James Liu (jamesliu@bu.edu)
It is a header component for displaying the nav buttons, with position: sticky and top: 0 to make sure that it stays visible throughout user's scroll journey

The logo is from vectorlogo, and leads back to the homepage.

Built with styled-components, react-router used for redirection
 */

import styled from "styled-components";
import { Link } from "react-router";

// The physical black rectangle holding the other buttons and logo (stays at top of screen during scroll)
const HeaderDiv = styled.div`
    width: 100%;
    padding: 2%;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    text-align: left;
`;

// Used for formatting logo and logo name in the top left of screen
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px; 
`;

// The logo (image adjustable by pixels)
const Logo = styled.img`
    height: 100px;
`;

// The name for the logo, bold and leave a gap from logo
const LogoText = styled.span`
    font-size: calc(10% + 4vh);
    color: white;
    font-weight: bold;
    left: 10%;
`;

// Oval-shaped buttons that turn white when hovered to indicate clickable item
const StyledLink = styled(Link)`
    padding: 20px 40px;
    margin: 5px;
    background-color: #003BAE; // Hex code from the logo
    color: white;
    font-size: calc(2vh + 10%);
    border: none;
    border-radius: 24px;
    text-decoration: none;
    transition: all 0.3s ease;
    font-weight: bold;

    &:hover {
        background-color: white;
        color: black;
    }
`;

// Header structure. Logo click should redirect to homepage, like many other corporations.
export default function Header() {
    return (
        <HeaderDiv>
            <LogoContainer>
                <Link to="/"><Logo src="https://www.vectorlogo.zone/logos/jobicy/jobicy-icon.svg" alt="Jobicy Logo" /></Link>
                <LogoText>Jobicy</LogoText>
            </LogoContainer>
            <nav>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
            </nav>
        </HeaderDiv>
    );
}
