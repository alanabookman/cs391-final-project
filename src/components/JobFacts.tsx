/*
  File implemented by Alana Bookman (bookmana@bu.edu)
  This file creates a styled grid of job cards.
*/

import styled from "styled-components";
import { Job } from "../interfaces/Job.ts";

// styled component for the wrapper around all job cards
const AllFactsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: ${({ theme }) => theme.insideBackground};
`;

// styled component for the individual job cards
const SingleFactDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${({ theme }) => theme.cardBackground};
    color: ${({ theme }) => theme.cardText};
    border: 5px solid ${({ theme }) => theme.border};
    font: italic small-caps bold calc(2px + 1.3vw) Garamond, serif;
    text-align: center;
    min-height: 200px;
    flex-shrink: 0; 
    flex-grow: 1;
`;

// main JobFacts function that maps job data into the styled cards
export default function JobFacts(props: { data: Job[] }) {
    return (
        <AllFactsDiv>
            {props.data.map((job) => (
                <SingleFactDiv key={job.id}>
                    <h3><strong>{job.jobTitle}</strong></h3>
                    <img src={job.companyLogo} alt={job.companyName} width="100%" />
                    <br />
                    <p>Company: {job.companyName}</p>
                    <p>Type: {job.jobType.join(", ")}</p>
                    <p>Location: {job.jobGeo}</p>
                    <a href={job.url} target="_blank" rel="noopener noreferrer">
                        View Job
                    </a>
                </SingleFactDiv>
            ))}
        </AllFactsDiv>
    );
}
