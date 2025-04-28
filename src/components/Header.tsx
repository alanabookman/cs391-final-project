import styled from "styled-components";
import { Link } from "react-router";

const HeaderDiv = styled.div`
    width: 100%;
    padding: 5%;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    text-align: center;
    height: 0;
`;

const StyledLink = styled(Link)`
    padding: 0.25rem;
    margin: 0.25rem;
    color: ${({ theme }) => theme.headertext};
    font-size: 2rem;
`

export default function Header() {
    return (
        <HeaderDiv>
            <h1>Jobicy Jobs</h1>
            <nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            </nav>
        </HeaderDiv>
    );
}
