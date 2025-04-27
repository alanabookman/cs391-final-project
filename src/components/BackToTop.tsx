import styled from "styled-components";

// I need the button to stay on the bottom right corner and it stays there as the user scrolls down
//https://stackoverflow.com/questions/27296078/make-a-button-always-visible-on-scroll
//https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
const StyledButton= styled.button`
    color: white;
    background-color:black;
    z-index: 1000; // make sure its on top of all other elements not behind anything
    border-radius:10px;
    position:fixed;
    bottom: 5%;
    right:3%;
    font-size: calc(2vh + 10%);
`;

function scrollToTop (){
    window.scrollTo({ top: 0, behavior: 'smooth' });
//https://stackoverflow.com/questions/1144805/scroll-to-the-top-of-the-page-using-javascript
//smooth scrolling to top
}
export default function BackToTop(){
    return(
    <StyledButton onClick={scrollToTop}>↑ Top</StyledButton>
    );
}
