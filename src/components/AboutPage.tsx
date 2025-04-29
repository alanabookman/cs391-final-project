/*
  Component implemented by William Parker (wqparker@bu.edu)
  This is a simple 'About' page that users can navigate to, displaying 
  simple information about what our project is and some of the 
  modules used in its making with brief explanations of thme, as well 
  as credit to the team.
*/
import { styled } from "styled-components";

// collection of styled components for the page
// div wrapper
const AboutContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: whitesmoke;
`
// styled title
const StyledH3 = styled.h3`
    margin: 2vw 0;
    text-align: center;
    font-size: calc(2px + 2vw);
    color: black;
    font-weight: bold;
`;

// styled UL tag
const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: calc(2px + 1.5vw);
    list-style: none;
    padding: 
`;

// styled LI tags
const StyledLi = styled.li`
    width: 95%;
    padding: 2vh 0;
    border-left: 1vw solid rgb(206, 0, 21);
    padding: 0;
    padding-left: 1%;
    margin: 2% 0;
`;

// final component
export default function AboutPage() {
    return (
        <AboutContentDiv>
            <StyledH3>About Our Final Project</StyledH3>
            <StyledUl>
                <StyledLi>
                    This is our CS 391 Final Group Project. We chose to make a simple webapp that works with the Jobicy API to display job posts.
                    There is an added filter so that the user may display anywhere between one and fifty job posts at once on the page, as well as 
                    a button in the bottom-right of the screen to take the user to the top of the page immediately.
                </StyledLi>
                <StyledLi>
                    Job posts displayed have an assortment of infoamtion at the ready including: title, company name and logo, the job type, the job location,
                    a short exerpt about the listed job, and a clickable link that redirects users to the job post directly on Jobicy.com.
                </StyledLi>
                <StyledLi>
                    We utilized a few dependencies for our project, namely react as the backbone our project, styled-components for implementing
                    CSS styling on our tags, react-router to handle static page navigation, and react-bootstrap/carousel for cycling throuh different
                    tips realted to job searching in an efficient and easy manner.
                </StyledLi>
                <StyledLi>
                    This project was worked on and completed by: Aaron, Alana, Ana, James, and William.
                </StyledLi>
            </StyledUl>
        </AboutContentDiv>
    );
}