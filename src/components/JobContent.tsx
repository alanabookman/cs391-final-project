import JobFacts from "./JobFacts.tsx";
import { useEffect, useState } from "react";
import { Job } from "../interfaces/Job.ts";
import BackToTop from "./BackToTop.tsx";
import Filter from "./Filter.tsx";
import { styled } from "styled-components";

const StyledDiv = styled.div`
    background-color: whitesmoke;
`;

export default function App() {
    const [data, setData] = useState<Job[]>([]);
    const [numJobs, setNumJobs] = useState<number>(3);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch(`https://jobicy.com/api/v2/remote-jobs?count=${numJobs}`);
            const { jobs }: { jobs: Job[] } = await rawData.json();
            setData(jobs);
        }

        fetchData()
            .then(() => console.log("Job data fetched successfully"))
            .catch((e: Error) => console.log("There was an error: " + e));
    }, [numJobs]);

    return (
        <StyledDiv>
            <BackToTop/>
            <Filter numJobs={numJobs} setNumJobs={setNumJobs} />
            <JobFacts data={data} />
            <BackToTop/>
        </StyledDiv>
    );
}


