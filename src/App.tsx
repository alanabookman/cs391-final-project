import JobFacts from "./components/JobFacts.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Job } from "./interfaces/Job.ts";
import Header from "./components/Header.tsx";
import BackToTop from "./components/BackToTop.tsx";

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px black solid;
`;

export default function App() {
    const [data, setData] = useState<Job[]>([]);
    const [numJobs, setNumJobs] = useState<number>(3);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            // https://jobicy.com/api/v2/remote-jobs?count=${numJobs}&geo=usa&industry=marketing&tag=seo this one only returns 3 jobs total
            // I removed the extra filters so the search option can display up to 50 jobs now (Let me know if a change is needed)
            // -James (https://rapidapi.com/jobicy-jobicy-default/api/jobicy for documentation)
            const rawData = await fetch(`https://jobicy.com/api/v2/remote-jobs?count=${numJobs}`);
            const { jobs }: { jobs: Job[] } = await rawData.json();
            setData(jobs);
        }

        fetchData()
            .then(() => console.log("Job data fetched successfully"))
            .catch((e: Error) => console.log("There was an error: " + e));
    }, [numJobs]);

    return (
        <ParentDiv>
            <BackToTop/>
            <Header numJobs={numJobs} setNumJobs={setNumJobs} />
            <JobFacts data={data} />
            <BackToTop/>
        </ParentDiv>
    );
}


