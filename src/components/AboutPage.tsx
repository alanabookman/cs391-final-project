import { styled } from "styled-components";

const AboutContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
`

export default function AboutPage() {
    return (
        <AboutContentDiv>
            <h1>TODO</h1>
            <p>General info on our project (how it works, how to use, etc), our names, anything else relevant</p>
        </AboutContentDiv>
    );
}