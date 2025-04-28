import styled from "styled-components";
import { Job } from "../interfaces/Job.ts";

const AllFactsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: ${({ theme }) => theme.insideBackground};
`;

const SingleFactDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${({ theme }) => theme.cardBackground};
    color: ${({ theme }) => theme.cardText};
    border: ${({ theme }) => theme.cardText};
    font: italic small-caps bold calc(2px + 1.3vw) Garamond, serif;
    text-align: center;
`;

export default function JobFacts(props: { data: Job[] }) {
    return (
        <AllFactsDiv>
            {props.data.map((job) => (
                <SingleFactDiv key={job.id}>
                    <h3>{job.jobTitle}</h3>
                    <img src={job.companyLogo} alt={job.companyName} width="100%" />
                    <p>Company: {job.companyName}</p>
                    <p>Type: {job.jobType.join(", ")}</p>
                    <p>Location: {job.jobGeo}</p>
                    <p>{job.jobExcerpt}</p>
                    <a href={job.url} target="_blank" rel="stylesheet">
                        View Job
                    </a>
                </SingleFactDiv>
            ))}
        </AllFactsDiv>
    );
}
