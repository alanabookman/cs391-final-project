import JobFacts from "./components/JobFacts.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Job } from "./interfaces/Job.ts";

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px black solid;
`;

export default function App() {
    const [data, setData] = useState<Job[]>([]);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://jobicy.com/api/v2/remote-jobs?count=20&geo=usa&industry=marketing&tag=seo");
            const { jobs }: { jobs: Job[] } = await rawData.json();
            setData(jobs);
        }

        fetchData()
            .then(() => console.log("Job data fetched successfully"))
            .catch((e: Error) => console.log("There was an error: " + e));
    }, []);

    return (
        <ParentDiv>
            <JobFacts data={data} />
        </ParentDiv>
    );
}


