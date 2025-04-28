/*
Component implemented by Aaron Huang (ahuan@bu.edu)

idea was to implement a button that stays with user while they scroll through jobs.
if needed they can click on the button and it would bring them to the top of the website instead of manualing scrolling.

resources used:
to make the button stay on the screen: 
https://stackoverflow.com/questions/27296078/make-a-button-always-visible-on-scroll
https://stackoverflow.com/questions/1144805/scroll-to-the-top-of-the-page-using-javascript
assistance in implementation: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
 */

import styled from "styled-components";

const StyledButton= styled.button`
    color: ${({ theme }) => theme.buttonText};
    background-color:${({ theme }) => theme.buttonBackground};
    z-index: 1000; // make sure its on top of all other elements not behind anything
    border-radius:10px;
    position:fixed;
    bottom: 5%;
    right:3%;
    font-size: calc(2vh + 10%);
`;

function scrollToTop (){
    window.scrollTo({ top: 0, behavior: 'smooth' });// to top, make it smooth transition
}
export default function BackToTop(){
    return(
    <StyledButton onClick={scrollToTop}>↑ Top</StyledButton>
    );
}
